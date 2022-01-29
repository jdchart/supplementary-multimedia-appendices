var srcBuf = "src";
var idxBuf = "indices";
var theChan = 7;
var graphRes = 100;
var sampIncr = (this.box.rect[2] - this.box.rect[0]) / graphRes
var boxHeigt = this.box.rect[3] - this.box.rect[1];
var theGraphList = [];
var theMax = 0;
var sliceList = [];
var padding = 10;
var graph_keep_list = [];

mgraphics.init();

function bang()
{
    var src = new Buffer(srcBuf);

    sliceList = [];
    sliceList = get_slice_list();

    post(sliceList.length + " slices.\n");
}

function draw_slice(x)
{
    theGraphList = [];
    theGraph = get_graph(theChan, Math.floor(sliceList[x][1]), Math.floor(sliceList[x][3]), srcBuf);
    theGraphList.push(theGraph)
    for(i = 0; i < graph_keep_list.length; i++)
    {
        theGraphList.push(graph_keep_list[i]);
    }

    mgraphics.redraw();
}

function get_graph(channel, startFrame, numFrames, buffer)
{
    var src = new Buffer(buffer);
    sampRes = maxDuration / graphRes;

    pointList = [];

    for(i = 0; i < numFrames; i++)
    {
        pointList.push(src.peek(channel, Math.floor(i + startFrame), 1));
        i = i + sampRes;
    }

    return pointList
}

function paint()
{
    with(mgraphics)
    {
        set_line_width(2);
        for(graph = 0; graph < theGraphList.length; graph++)
        {
            set_source_rgba([0,graph / theGraphList.length,0,1]);
            for(i = 0; i < theGraphList[graph].length - 1; i++)
            {
                move_to(i * sampIncr, padding + (theGraphList[graph][i] * (boxHeigt - (padding * 2) )))
                line_to((i + 1) * sampIncr, padding + (theGraphList[graph][i + 1] * (boxHeigt - (padding * 2))))
                stroke();
            }
        }
    }
}

function get_slice_list()
{
    theList = [];
    durations = [];
    var idx = new Buffer(idxBuf);
    var src = new Buffer(srcBuf);

    for(i = 0; i < idx.framecount(); i++)
    {
        entry = [];

        if(i == 0)
        {
            entry.push(i);
            entry.push(0);
            entry.push(idx.peek(1, i + 1, 1));
            entry.push(idx.peek(1, i + 1, 1));
        }
        else if(i == idx.framecount() - 1)
        {
            entry.push(i);
            entry.push(idx.peek(1, i, 1));
            entry.push(src.framecount());
            entry.push(src.framecount() - idx.peek(1, i, 1));
        }
        else
        {
            entry.push(i);
            entry.push(idx.peek(1, i, 1));
            entry.push(idx.peek(1, i + 1, 1));
            entry.push(idx.peek(1, i + 1, 1) - idx.peek(1, i, 1));
        }

        durations.push(Math.floor(entry[3]))

        theList.push(entry);
    }

    durations.sort(function(a,b){return a - b});
    maxDuration = durations[(durations.length - 1) - 1];

    return theList;
}

function keep_graph(x)
{
    theGraph = get_graph(theChan, Math.floor(sliceList[x][1]), Math.floor(sliceList[x][3]), srcBuf);
    graph_keep_list.push(theGraph)
}

function clear_graphs()
{
    graph_keep_list = [];
    mgraphics.redraw();
}