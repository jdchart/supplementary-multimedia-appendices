mgraphics.init();

outlets = 2;

var srcBuffer = "src";
var idxBuffer = "idx";
var sliceList = [];
var waveList = [];
var verbose = false;
var srcFrames = 0;
var lineWidth = 1;
var sliceCol = [0.314, 0.314, 0.314, 1.000];
var selectedCol = [1.000, 0.710, 0.196, 0.500];
var hoverCol = [1.000, 0.710, 0.196, 0.250];
var waveformCol = [0.996, 0.235, 0.235, 1.000];
var addSliceCol = [0.251, 0.643, 0.192, 1.000];
var textCol = [0,0,0,1];
var font = "Ableton Sans Medium";
var labelSize = 12;
var drawSliceInfo = true;
var hoverSlice = -1;
var selectedSlice = -1;
var mouseState = [0, 0, 0, 0, 0, 0, 0, 0];
var zoom = 1;
var offset = 0;
var givenOffset = 0;
var zoomFactor = 4;
var waveformRes = 500;
var waveformMax = 0;
var framesOnScreen = 0;
var offsetRange = 0;
var clickState = [false, ""];

function paint()
{
    if(clickState[0])
        if(clickState[1] == "addSlice")
            if(mouseState[6] == 0)
            {
                add_slice();
                clickState[0] = false;
                clickState[1] = "";
            }


    if(waveList.length != 0)
        draw_waveform();

    if(sliceList.length != 0)
    {
        get_hover_node();

        if(selectedSlice != -1)
            draw_selected_slice();

        if(hoverSlice != -1)
            draw_hover_slice();

        draw_slices();

        if(mouseState[7] == 1)
            draw_add_slice();

        if(drawSliceInfo)
        {
            if(mouseState[7])
            {
                draw_slice_info_frame();
            }
            else if(hoverSlice != -1)
            {
                draw_slice_info();
            }
        }
    }
}

function add_slice()
{
    boxWidth = this.box.rect[2] - this.box.rect[0];
    var idxBuf = new Buffer(idxBuffer);
    var srcBuf = new Buffer(srcBuffer);
    srcFrames = srcBuf.framecount();

    startFrame = Math.floor((((mouseState[0] + offset) / zoom) * srcFrames) / boxWidth);

    idxFrame = hoverSlice + 1;

    newSliceArray = [];

    addedSlice = false;
    if(sliceList.length > 1)
    {
        for(i = 1; i < sliceList.length; i++)
        {
            if(i == idxFrame)
            {
                newSliceArray.push(startFrame);
                addedSlice = true;
            }
            newSliceArray.push(sliceList[i][0]);
        }
    }
    if(addedSlice = false)
    {
        newSliceArray.push(startFrame);
    }
    else
    {
        newSliceArray.push(startFrame);
    }

    idxBuf.send("clear");
    idxBuf.send("sizeinsamps", newSliceArray.length);

    for(i = 0; i < newSliceArray.length; i++)
    {
        idxBuf.poke(1, i, newSliceArray[i]);
    }

    selected_slice = -1;
    sliceList = [];
    srcFrames = 0;
    hoverSlice = 0;
    selectedSlice = -1;

    read_buf();
    mgraphics.redraw();
    outlet(0, "added_slice")
}

function draw_add_slice()
{
    with (mgraphics)
    {
        boxWidth = this.box.rect[2] - this.box.rect[0];
        boxHeight = this.box.rect[3] - this.box.rect[1];

        for(i = 0; i < sliceList.length; i++)
        {
            sliceX = mouseState[0];

            set_source_rgba(addSliceCol);
            set_line_width(lineWidth);
            move_to(sliceX, 0);
            line_to(sliceX, boxHeight);
            stroke();
        }
    }
}

function read_src_buf()
{
    var srcBuf = new Buffer(srcBuffer);
    waveList = [];
    screenWid = this.box.rect[2] - this.box.rect[0];
    actualRes = Math.floor(srcBuf.framecount() / waveformRes);

    count = 0;
    average = 0;
    waveformMax = 0;

    for (j = 0; j < srcBuf.channelcount(); j++)
    {
        chanWav = [];
        for(i = 1; i < srcBuf.framecount() + 1; i++)
        {
            average = average + srcBuf.peek(j + 1, i, 1);
            count = count + 1;
            if(i % actualRes == 0 || i == srcBuf.framecount())
            {
                average = average / count;
                chanWav.push(average);

                if(Math.abs(average) > waveformMax)
                {
                    waveformMax = Math.abs(average);
                }

                count = 0;
                average = 0;
            }
        }
        waveList.push(chanWav);
    }
}

function draw_waveform()
{
    with (mgraphics)
    {
        screenW = this.box.rect[2] - this.box.rect[0];
        screenH = this.box.rect[3] - this.box.rect[1];

        chanH = screenH / waveList.length;

        for(j = 0; j < waveList.length; j++)
        {
            for(i = 0; i < waveList[j].length; i++)
            {
                    segmentH = (Math.abs(waveList[j][i]) * chanH) / waveformMax;
                    segmentWidth = (screenW / waveformRes);
                    set_source_rgba(waveformCol);
                    rectangle(((i * segmentWidth) * zoom) - offset, ((chanH + (chanH * j)) - (segmentH * 0.5)) - (chanH * 0.5), segmentWidth * zoom, segmentH);
                    fill();
            }
        }

    }
}

function set_slice_alpha(x)
{
    sliceCol[3] = x;
    mgraphics.redraw();
}

function select_slice()
{
    if(sliceList.length != 0)
    {
        var srcBuf = new Buffer(srcBuffer);
        var sampleRate = (srcBuf.framecount() / srcBuf.length()) * 1000;

        selectedSlice = hoverSlice;
        startTime = (sliceList[selectedSlice][0] * 1000) / sampleRate;
        endTime = (sliceList[selectedSlice][1] * 1000) / sampleRate;
        messageOut = "start " + startTime + " " + endTime;
        outlet(0, messageOut);
        outlet(1, selectedSlice);
    }
}

function set_offset(x)
{
    var srcBuf = new Buffer(srcBuffer);

    boxWidth = this.box.rect[2] - this.box.rect[0];
    theWidth = srcBuf.framecount() / zoom

    offVal = offsetRange * x;
    offset = (offVal * boxWidth) / theWidth;
    //offset = ((offVal * boxWidth) / theWidth) - boxWidth;

    mgraphics.redraw();
}

function set_zoom(x)
{
    var srcBuf = new Buffer(srcBuffer);

    zoom = (((x * (zoomFactor - 1)) + 1) * -1) + (zoomFactor + 1);

    offsetRange = srcBuf.framecount() - framesOnScreen;

    mgraphics.redraw();
}

function set_selected_slice(x)
{
    if(sliceList.length != 0)
    {
        selectedSlice = x;
        mgraphics.redraw();
    }
}

function draw_hover_slice()
{
    with (mgraphics)
    {
        boxWidth = this.box.rect[2] - this.box.rect[0];
        boxHeight = this.box.rect[3] - this.box.rect[1];
        selScaledX = (sliceList[hoverSlice][0] * boxWidth) / srcFrames;
        selScaledW = ((sliceList[hoverSlice][1] * boxWidth) / srcFrames) - selScaledX;

        set_source_rgba(hoverCol);
        rectangle((selScaledX * zoom) - offset, 0, selScaledW * zoom, boxHeight);
        fill();
    }
}

function draw_selected_slice()
{
    with (mgraphics)
    {
        boxWidth = this.box.rect[2] - this.box.rect[0];
        boxHeight = this.box.rect[3] - this.box.rect[1];
        selScaledX = (sliceList[selectedSlice][0] * boxWidth) / srcFrames;
        selScaledW = ((sliceList[selectedSlice][1] * boxWidth) / srcFrames) - selScaledX;

        set_source_rgba(selectedCol);
        rectangle((selScaledX * zoom) - offset, 0, selScaledW * zoom, boxHeight);
        fill();
    }
}

function draw_slice_info_frame()
{
    with (mgraphics)
    {
        startFrame = Math.floor((((mouseState[0] + offset) / zoom) * srcFrames) / boxWidth);
        txt = "Frame: " + startFrame + ".";

        set_source_rgba(textCol);
        select_font_face(font);
        set_font_size(labelSize);
        txtMes = text_measure(txt);

        if(mouseState[0] + txtMes[0] > this.box.rect[2] - this.box.rect[0] && mouseState[1] - txtMes[1] < 0)
        {
            newX = this.box.rect[2] - this.box.rect[0] - txtMes[0];
            newY = txtMes[1];
            move_to(newX, newY);
        }
        else if(mouseState[0] + txtMes[0] > this.box.rect[2] - this.box.rect[0])
        {
            newX = this.box.rect[2] - this.box.rect[0] - txtMes[0];
            move_to(newX, mouseState[1]);
        }
        else if(mouseState[1] - txtMes[1] < 0)
        {
            newY = txtMes[1];
            move_to(mouseState[0], newY);
        }
        else
        {
            move_to(mouseState[0], mouseState[1]);
        }

        text_path(txt);
        fill();
    }
}

function draw_slice_info()
{
    with (mgraphics)
    {
        txt = "Slice: " + String(hoverSlice) + ". Start frame: " + String(sliceList[hoverSlice][0]) + ".";

        set_source_rgba(textCol);
        select_font_face(font);
        set_font_size(labelSize);
        txtMes = text_measure(txt);

        if(mouseState[0] + txtMes[0] > this.box.rect[2] - this.box.rect[0] && mouseState[1] - txtMes[1] < 0)
        {
            newX = this.box.rect[2] - this.box.rect[0] - txtMes[0];
            newY = txtMes[1];
            move_to(newX, newY);
        }
        else if(mouseState[0] + txtMes[0] > this.box.rect[2] - this.box.rect[0])
        {
            newX = this.box.rect[2] - this.box.rect[0] - txtMes[0];
            move_to(newX, mouseState[1]);
        }
        else if(mouseState[1] - txtMes[1] < 0)
        {
            newY = txtMes[1];
            move_to(mouseState[0], newY);
        }
        else
        {
            move_to(mouseState[0], mouseState[1]);
        }

        text_path(txt);
        fill();
    }
}

function get_hover_node()
{
    boxWidth = this.box.rect[2] - this.box.rect[0];
    mouseScaledX = (((mouseState[0] + offset) / zoom) * srcFrames) / boxWidth;
    hoverSlice = 0;

    for(i = 0; i < sliceList.length; i++)
    {
        if(mouseScaledX > sliceList[i][0] && mouseScaledX < sliceList[i][1])
        {
            hoverSlice = i;
            break;
        }
    }
}

function draw_slices()
{
    with (mgraphics)
    {
        boxWidth = this.box.rect[2] - this.box.rect[0];
        boxHeight = this.box.rect[3] - this.box.rect[1];

        for(i = 0; i < sliceList.length; i++)
        {
            sliceX = (((sliceList[i][0] * boxWidth) / srcFrames) * zoom) - offset;

            set_source_rgba(sliceCol);
            set_line_width(lineWidth);
            move_to(sliceX, 0);
            line_to(sliceX, boxHeight);
            stroke();
        }
    }
}

function read_buf()
{
    var idxBuf = new Buffer(idxBuffer);
    var srcBuf = new Buffer(srcBuffer);
    var sampleRate = (srcBuf.framecount() / srcBuf.length()) * 1000;

    sliceList = [];

    if(verbose)
    {
        post("Slices: " + idxBuf.framecount() + "\n");
        post("Source Length (ms): " + srcBuf.length() + "\n");
        post("Source Frames: " + srcBuf.framecount() + "\n");
        post("Source sample rate: " + sampleRate + "\n\n")
    }

    srcFrames = srcBuf.framecount();

    for(i = 0; i < idxBuf.framecount() + 1; i++)
    {
        if(i == 0)
            sliceList.push([0, idxBuf.peek(1, i, 1)]);
        else if(i == idxBuf.framecount())
            sliceList.push([idxBuf.peek(1, i - 1, 1), srcBuf.framecount()]);
        else
            sliceList.push([idxBuf.peek(1, i - 1, 1), idxBuf.peek(1, i, 1)]);
    }

    if(verbose)
    {
        for(i = 0; i < sliceList.length; i++)
        {
            post(i + ": " + sliceList[i][0] + " - " + sliceList[i][1] + "\n");
        }
    }
}

function set_idx_buffer(buffer)
{
    idxBuffer = buffer;
    if(verbose)
        post("Index buffer set to: " + idxBuffer + "\n");

    bang();
}

function set_src_buffer(buffer)
{
    srcBuffer = buffer;
    if(verbose)
        post("Source buffer set to: " + srcBuffer + "\n");

    bang();
}

function clear_slices()
{
    selected_slice = -1;
    sliceList = [];
    hoverSlice = 0;
    read_buf();
    mgraphics.redraw();
}

function clear_all()
{
    waveformMax = 0;
    waveList = [];
    selected_slice = -1;
    sliceList = [];
    srcFrames = 0;
    hoverSlice = 0;
    selectedSlice = -1;
    zoom = 1;
    offset = 0;
    mgraphics.redraw();
}

function bang()
{
    //clear_all();
    read_buf();
    read_src_buf();
    mgraphics.redraw();
}

function onidle (x, y, button, shift)
{
    mouseState[0] = x;
    mouseState[1] = y;
    mouseState[2] = 0;
    mouseState[3] = 0;
    mouseState[6] = button;
    mouseState[7] = shift;
    mgraphics.redraw();
}
function onclick(x, y, button, shift)
{
    mouseState[0] = x;
    mouseState[1] = y;
    mouseState[2] = 1;
    mouseState[3] = 0;
    mouseState[6] = button;
    mouseState[7] = shift;

    if(sliceList.length == 0)
        selectedSlice = -1;

    if(mouseState[7] == 0)
        if(sliceList.length != 0)
            select_slice();

    if(mouseState[7] == 1)
    {
        clickState[0] = true;
        clickState[1] = "addSlice";
    }

    mgraphics.redraw();
}
