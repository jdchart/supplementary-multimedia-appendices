// ---> FluCoMa Slice View <---
// JSUI object for viewing FluCoMa-made slices.

// Initiate on JSUI graphics.
mgraphics.init();

// Set JSUI object settings.
outlets = 2;
setinletassist(0, "(String) Control In");
setoutletassist(0, "(String) Play commands out");
setoutletassist(1, "(String, Int) Selected buffer and slice out");

// Global variables.
boxInfo = [this.patcher, this.box.rect[0], this.box.rect[1], 
            this.box.rect[2] - this.box.rect[0], 
            this.box.rect[3] - this.box.rect[1]];

drawingStyle = [[0.996, 0.235, 0.235, 1.000], [0.314, 0.314, 0.314, 1.000], 1,
                [0,0,0,1], "Ableton Sans Medium", 12, true,
                [1.000, 0.710, 0.196, 0.250], [1,1,1,1],
                [0.251, 0.643, 0.192, 1.000]];
var displayInfo = [1, 0, 0, 0];

var mouseState = [0, 0, 0, 0, 0, 0, 0, 0];
var clickState = [false, ""];
var hoverInfo = [0, 0, 0, 0, 0];
var currentSelectedSlice = [0, 0, 0];

var waveformInfoList = [];
var waveformDrawList = [];
var waveformResolution = 250;
var bufsToDraw = ["src"];

var sliceInfoList = [];
var sliceDrawList = [];
var sliceIndexBufferName = "indices";
var sliceIndexBuffer = new Buffer(sliceIndexBufferName);
var sliceSourceBufferName = "src";
var sliceSourceBuffer = new Buffer(sliceSourceBufferName);

var playback_channels = true;

function paint()
{
    // Draws all the JSUI graphics. Is triggered with mgraphics.redraw();
    // Avoid doing calculations here.

    hoverInfo = get_hover_info(waveformDrawList, bufsToDraw, sliceInfoList, sliceSourceBuffer, mouseState, displayInfo[0], displayInfo[1]);

    draw_background(drawingStyle);

    draw_all_waveform(drawingStyle, waveformDrawList);

    draw_hover_slice(drawingStyle, hoverInfo, sliceInfoList, sliceSourceBuffer);

    draw_selected_slice(drawingStyle, currentSelectedSlice, sliceInfoList, sliceSourceBuffer);

    draw_slices(drawingStyle, sliceDrawList);

    if(mouseState[7] == 1)
        draw_add_slice(drawingStyle);

    if(drawingStyle[6])
        draw_label(drawingStyle, hoverInfo, bufsToDraw); 

    if(clickState[0] && clickState[1] == "addSlice" && mouseState[6] == 0)
    {
        clickState[0] = false;
        clickState[1] = "";
        add_slice();
    }
}

function bang()
{
    mgraphics.redraw();
}

function select_slice()
{
    sampleRate = (sliceSourceBuffer.framecount() / sliceSourceBuffer.length()) * 1000;

    messageOut1 = "buffer " + "src";
    if(playback_channels)
        messageOut2 = "chan " + String(hoverInfo[1]);
    else
        messageOut2 = "chan -1";

    messageOut3 = "playCommand " + String(sliceInfoList[hoverInfo[2]][0]) + " " + String(sliceInfoList[hoverInfo[2]][1] - sliceInfoList[hoverInfo[2]][0]);

    currentSelectedSlice = [hoverInfo[2], hoverInfo[3], hoverInfo[4]];

    outlet(0, messageOut1);
    outlet(0, messageOut2);
    outlet(0, messageOut3);
}

function add_slice()
{
    addFrame = Math.floor((((mouseState[0] + displayInfo[1]) / displayInfo[0]) * sliceSourceBuffer.framecount()) / boxInfo[3]);

    tempIdxArray = [];
    if(sliceIndexBuffer.framecount() == 0)
    {
        tempIdxArray.push(addFrame);
    }
    else
    {
        if(addFrame < sliceIndexBuffer.peek(1, 0, 1))
            tempIdxArray.push(addFrame);
        for(i = 0; i < sliceIndexBuffer.framecount(); i++)
        {
            tempIdxArray.push(sliceIndexBuffer.peek(1, i, 1));
            if(addFrame > sliceIndexBuffer.peek(1, i, 1) && addFrame < sliceIndexBuffer.peek(1, i + 1, 1))
                tempIdxArray.push(addFrame);
        }
        if(addFrame > sliceIndexBuffer.peek(1, sliceIndexBuffer.framecount() - 1, 1))
            tempIdxArray.push(addFrame);
    }
    
    sliceIndexBuffer.send("clear");
    sliceIndexBuffer.send("sizeinsamps", tempIdxArray.length);

    for(i = 0; i < tempIdxArray.length; i++)
    {
        sliceIndexBuffer.poke(1, i, tempIdxArray[i]);
    }

    update_slices();
}

function initialise()
{
    // Trigger processes at compile.
    waveformInfoList = get_all_waveform(bufsToDraw, waveformResolution);
    waveformDrawList = get_all_waveform_draw(waveformInfoList, displayInfo[0], displayInfo[1]);

    sliceInfoList = get_slices(sliceIndexBuffer, sliceSourceBuffer);
    sliceDrawList = get_draw_slices(sliceInfoList, sliceSourceBuffer, displayInfo[0], displayInfo[1]);

    mgraphics.redraw();
}

function update_slices()
{
    sliceInfoList = [];
    sliceInfoList = get_slices(sliceIndexBuffer, sliceSourceBuffer);
    sliceDrawList = [];
    sliceDrawList = get_draw_slices(sliceInfoList, sliceSourceBuffer, displayInfo[0], displayInfo[1]);
    mgraphics.redraw();
}

function update_waveforms()
{
    waveformInfoList = get_all_waveform(bufsToDraw, waveformResolution);
    waveformDrawList = get_all_waveform_draw(waveformInfoList, displayInfo[0], displayInfo[1]);
    mgraphics.redraw();
}

function update_all()
{
    sliceInfoList = get_slices(sliceIndexBuffer, sliceSourceBuffer);
    sliceDrawList = get_draw_slices(sliceInfoList, sliceSourceBuffer, displayInfo[0], displayInfo[1]);
    waveformInfoList = get_all_waveform(bufsToDraw, waveformResolution);
    waveformDrawList = get_all_waveform_draw(waveformInfoList, displayInfo[0], displayInfo[1]);
    mgraphics.redraw();
}

function set_source(txt)
{
    sliceSourceBufferName = txt;
    sliceSourceBuffer = new Buffer(sliceSourceBufferName)
    update_all();
}

function set_indices(txt)
{
    sliceIndexBufferName = txt;
    sliceIndexBuffer = new Buffer(sliceIndexBufferName);
    update_all();
}

function clear_bufs_to_draw()
{
    bufsToDraw = [];
    update_all();
}

function add_buf_to_draw(txt)
{
    bufsToDraw.push(txt);
    update_all();
}

function set_slice_alpha(x)
{
    drawingStyle[1][3] = x;
    waveformDrawList = get_all_waveform_draw(waveformInfoList, displayInfo[0], displayInfo[1]);
    sliceDrawList = get_draw_slices(sliceInfoList, sliceSourceBuffer, displayInfo[0], displayInfo[1]);
    mgraphics.redraw();
}

function set_playback_channels(x)
{
    playback_channels = false;
    if(x == 1)
        playback_channels = true;
}

function set_label(x)
{
    drawingStyle[6] = false;
    if(x == 1)
        drawingStyle[6] = true;
}

function set_zoom(x)
{
    displayInfo[0] = x;
    framesOnScreen = sliceSourceBuffer.framecount() / x;
    displayInfo[2] = sliceSourceBuffer.framecount() - framesOnScreen;
    set_offset(displayInfo[3]);
}

function set_offset(x)
{
    theWidth = sliceSourceBuffer.framecount() / displayInfo[0]
    offVal = displayInfo[2] * x;
    displayInfo[1] = (offVal * boxInfo[3]) / theWidth;
    waveformDrawList = get_all_waveform_draw(waveformInfoList, displayInfo[0], displayInfo[1]);
    sliceDrawList = get_draw_slices(sliceInfoList, sliceSourceBuffer, displayInfo[0], displayInfo[1]);
    displayInfo[3] = x
    mgraphics.redraw();
}

function draw_background(style)
{
    with(mgraphics)
    {
        set_source_rgba(style[8]);
        rectangle(0, 0, boxInfo[3], boxInfo[4]);
        fill();
    }
}

function draw_selected_slice(style, selectedSlice, sliceList, sliceSourceBuffer)
{
    with (mgraphics)
    {
        scaledX = (sliceList[selectedSlice[0]][0] * boxInfo[3]) / sliceSourceBuffer.framecount();
        scaledW = ((sliceList[selectedSlice[0]][1] * boxInfo[3]) / sliceSourceBuffer.framecount()) - scaledX;
        scaledH = boxInfo[4] / selectedSlice[2]; 
        scaledY = scaledH * selectedSlice[1];

        scaledX = (scaledX * displayInfo[0]) - displayInfo[1];
        scaledW = scaledW * displayInfo[0];

        set_source_rgba(style[7]);
        rectangle(scaledX, scaledY, scaledW, scaledH);
        fill();
    }
}

function draw_hover_slice(style, hoverInfo, sliceList, sliceSourceBuffer)
{
    with (mgraphics)
    {
        scaledX = (sliceList[hoverInfo[2]][0] * boxInfo[3]) / sliceSourceBuffer.framecount();
        scaledW = ((sliceList[hoverInfo[2]][1] * boxInfo[3]) / sliceSourceBuffer.framecount()) - scaledX;
        scaledH = boxInfo[4] / hoverInfo[4]; 
        scaledY = scaledH * hoverInfo[3];

        scaledX = (scaledX * displayInfo[0]) - displayInfo[1];
        scaledW = scaledW * displayInfo[0];

        set_source_rgba(style[7]);
        rectangle(scaledX, scaledY, scaledW, scaledH);
        fill();
    }
}

function get_hover_info(waveformDrawList, bufsToDraw, sliceInfoList, sliceSourceBuffer, mouse, zoom, offset)
{
    // Returns an array with the following hover information:
    // [buffer index, buffer channel, slice index, real buf hover, numBufs].
    hoverBuf = 0;
    hoverChan = 0;
    hoverSlice = 0;
    hoverBufDrawn = 0;

    for(i = waveformDrawList.length -1; i >= 0 ; i = i - 1)
    {
        theH = (boxInfo[4] / waveformDrawList.length) * i;
        if(mouseState[1] > theH)
        {
            hoverBuf = i;
            hoverBufDrawn = i;
            break;
        }
    }

    channelArray = [];
    for(i = 0; i < bufsToDraw.length; i++)
    {
        theBuf = new Buffer(bufsToDraw[i])
        for(j = 0; j < theBuf.channelcount(); j++)
        {
            channelArray.push(j);
        }
    }
    hoverChan = channelArray[hoverBuf];

    bufCount = 0;
    for (i = 1; i < hoverBuf; i++)
    {
        if(channelArray[i - 1] == 0)
            bufCount = bufCount + 1;
    }
    hoverBuf = bufCount;

    mouseScaledX = (((mouse[0] + offset) / zoom) * sliceSourceBuffer.framecount()) / boxInfo[3];
    for(i = 0; i < sliceInfoList.length; i++)
    {
        if(mouseScaledX > sliceInfoList[i][0] && mouseScaledX < sliceInfoList[i][1])
        {
            hoverSlice = i;
            break;
        }
    }
    return[hoverBuf, hoverChan, hoverSlice, hoverBufDrawn, channelArray.length];
}

function draw_add_slice(style)
{
    with(mgraphics)
    {
        set_source_rgba(style[9]);
        set_line_width(style[2]);
        move_to(mouseState[0], 0);
        line_to(mouseState[0], boxInfo[4]);
        stroke();
    }
}

function draw_label(style, hoverInfo, bufsToDraw)
{
    with (mgraphics)
    {
        if(mouseState[7] == 0)
            txt = "Slice: " + String(hoverInfo[2]) + ".";
        if(mouseState[7] == 1)
            txt = "Add slice at frame " + Math.floor((((mouseState[0] + displayInfo[1]) / displayInfo[0]) * sliceSourceBuffer.framecount()) / boxInfo[3]) + ".";

        set_source_rgba(style[3]);
        select_font_face(style[4]);
        set_font_size(style[5]);
        txtMes = text_measure(txt);

        if(mouseState[0] + txtMes[0] > boxInfo[3] && mouseState[1] - txtMes[1] < 0)
        {
            newX = boxInfo[3] - txtMes[0];
            newY = txtMes[1];
            move_to(newX, newY);
        }
        else if(mouseState[0] + txtMes[0] > boxInfo[3])
        {
            newX = boxInfo[3] - txtMes[0];
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

function get_slices(buffer, sourceBuffer)
{
    // Returns an array of slice info for the given index buffer.
    sliceArray = []

    for(i = 0; i < buffer.framecount() + 1; i++)
    {
        if(i == 0)
            sliceArray.push([0, buffer.peek(1, i, 1)]);
        else if(i == buffer.framecount())
            sliceArray.push([buffer.peek(1, i - 1, 1), sourceBuffer.framecount()]);
        else
            sliceArray.push([buffer.peek(1, i - 1, 1), buffer.peek(1, i, 1)]);
    }
    return sliceArray;
}

function get_draw_slices(sliceList, sourceBuffer, zoom, offset)
{
    // Returns an array of drawing information for all slices.
    sliceDrawArray = [];

    for(slice = 0; slice < sliceList.length; slice++)
    {
        sliceDrawArray.push((((sliceList[slice][0] * boxInfo[3]) / sourceBuffer.framecount()) * zoom) - offset)
    }
    return sliceDrawArray;
}

function draw_slices(style, sliceDrawList)
{
    // Draws all the slices from the given draw list.
    with(mgraphics)
    {
        set_source_rgba(style[1]);
        set_line_width(style[2]);
        for(slice = 0; slice < sliceDrawList.length; slice++)
        {
            move_to(sliceDrawList[slice], 0);
            line_to(sliceDrawList[slice], boxInfo[4]);
            stroke();
        }
    }
}

function get_all_waveform(bufferList, res)
{
    // Returns an array containing all scaled waveform info for all buffers.
    allWaveformsArray = [];

    for(buf = 0; buf < bufferList.length; buf++)
    {
        var theBuf = new Buffer(bufferList[buf]);
        for(chan = 1; chan < theBuf.channelcount() + 1; chan++)
        {
            thisWaveform = get_waveform(theBuf, chan, res);
            allWaveformsArray.push(thisWaveform);
        }
    }
    return allWaveformsArray;
}

function get_waveform(buffer, channel, res)
{
    // Returns an array containing scaled waveform info for a buffer channel.
    waveformArray = [];

    actualRes = Math.floor(buffer.framecount() / res);

    count = 0;
    average = 0;
    for(i = 1; i < buffer.framecount() + 1; i++)
    {
        average = average + buffer.peek(channel, i, 1);
        count = count + 1;
        if(i % actualRes == 0 || i == buffer.framecount())
        {
            average = average / count;
            waveformArray.push(average);
            count = 0;
            average = 0;
        }
    }
    return waveformArray;
}

function get_all_waveform_draw(waveformList, zoom, offset)
{
    // Returns an array of all the waveform drawing info.
    allDrawArray = [];

    for(wave = 0; wave < waveformList.length; wave++)
    {
        drawArray = get_waveform_draw(waveformList, wave, zoom, offset);
        allDrawArray.push(drawArray);
    }
    return allDrawArray;
}

function get_waveform_draw(waveformList, waveformIndex, zoom, offset)
{
    // Returns an array with all the drawing information for a waveform.
    drawingArray = [];

    channelH = boxInfo[4] / waveformList.length;
    waveformMax = Math.max.apply(null, waveformList[waveformIndex]);

    for(j = 0; j < waveformList[waveformIndex].length; j++)
    {
        segmentH = (Math.abs(waveformList[waveformIndex][j]) * channelH) / waveformMax;
        segmentWidth = (boxInfo[3] / waveformList[waveformIndex].length);

        drawingArray.push([((j * segmentWidth) * zoom) - offset, ((channelH + (channelH * waveformIndex)) - (segmentH * 0.5)) - (channelH * 0.5), segmentWidth * zoom, segmentH]);
    }
    return drawingArray;
}

function draw_all_waveform(style, waveformList)
{
    // Draws all the waveforms in the global waveform list.
    for(wave = 0; wave < waveformList.length; wave++)
    {
        draw_waveform(style, waveformList[wave]);
    }
}

function draw_waveform(style, waveform)
{
    // Draws the given waveform with the given style.
    with(mgraphics)
    {
        set_source_rgba(style[0]);

        for(i = 0; i < waveform.length; i++)
        {
            rectangle(waveform[i][0], waveform[i][1], waveform[i][2], waveform[i][3]);
            fill();
        }
    }
}

function onresize(width, height)
{
    // Need to recalculate drawing info...
    boxInfo[3] = width;
    boxInfo[4] = height;
    waveformDrawList = get_all_waveform_draw(waveformInfoList, displayInfo[0], displayInfo[1]);
    sliceDrawList = get_draw_slices(sliceInfoList, sliceSourceBuffer, displayInfo[0], displayInfo[1]);
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

    if(mouseState[7] == 0)
        select_slice();

    if(mouseState[7] == 1)  
    {
        clickState[0] = true;
        clickState[1] = "addSlice";
    }      

    mgraphics.redraw();
}

initialise();
