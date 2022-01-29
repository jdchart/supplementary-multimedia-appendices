var ui = require("sgui");

mgraphics.init();

// ----------> Network graph:
// A network graph can display networks, or just graphs.
// If you do not want any edge info, just keep the edge list blank.
// Each node must have at least the following keys:
//              {uniqueID, name, x, y, size, col}
var segNodeList = [];
// Each edge must have at least the following keys:
//              {source, destination, thickness, col}
var segEdgeList = [];
// Every net-graph needs attributes:,
//              [nodeList, edgeList,
//               canvasOffsetX, canvasOffsetY, oldOffsetX, oldOffsetY,
//               selNodeCoords, selectedNodes, zoom,
//               initialX, initialY, showLabel, label,
//               clickName, dragName, dragNameSel,
//               nodeInfoPopupState];
graphAttr = [segNodeList, segEdgeList,
                     0, 0, 0, 0,
                     [], [], 1,
                     0, 0, true, "name",
                     "segGraphClick", "segGraphDrag", "segGraphDragSel",
                     [false, 0, 0, 0]];

function paint()
{
    patcherDetails = get_patcher_details();
    ui.netGraph(0, 0, patcherDetails[4], patcherDetails[5], 
                ui.m4lStyle, ui.mouseState, 0, 
                "Segment Graph", 
                graphAttr)

    if(graphAttr[16][0])
        ui.nodeInfoPopup((patcherDetails[4] * 0.5) - 100, 10, 200, 20, ui.m4lStyle, ui.mouseState, 1,
                         "Slice Info", graphAttr);

    // JSUIUI ######################################################################
    if(ui.colPickerOpen)
    {
        ui.colourPicker((windowSize[0] * 0.5) - ((windowSize[0] * 0.25) * 0.5),
                        (windowSize[1] * 0.5) - ((windowSize[1] * 0.5) * 0.5),
                        windowSize[0] * 0.25, windowSize[1] * 0.5,
                        ui.m4lStyle, ui.mouseState, ui.colPickerCam,
                        "Choose a colour.",
                        "ui.close_col_pick();", false);
    }
    if(ui.getTextPop)
    {
        ui.text_pop(ui.getTextPopX, ui.getTextPopY, ui.getTextPopW, ui.getTextPopH,
                    ui.getTextPopStyle, ui.getTextPopMouse, ui.getTextPopCamLevel, ui.getTextPopBtn);
    }
    ui.apply_camera_focus();
}

// ----------> Mouse events:
function onidle (x, y, button, shift)
{
    ui.mouseState[0] = x;
    ui.mouseState[1] = y;
    ui.mouseState[2] = 0;
    ui.mouseState[3] = 0;
    ui.mouseState[6] = button;
    ui.mouseState[7] = shift;
    mgraphics.redraw();
}
function onclick(x, y, button, shift)
{
    ui.mouseState[0] = x;
    ui.mouseState[1] = y;
    ui.mouseState[2] = 1;
    ui.mouseState[3] = 0;
    ui.mouseState[6] = button;
    ui.mouseState[7] = shift;
    mgraphics.redraw();
}
function ondblclick(x, y, button, shift)
{
    ui.mouseState[0] = x;
    ui.mouseState[1] = y;
    ui.mouseState[2] = 0;
    ui.mouseState[3] = 1;
    ui.mouseState[6] = button;
    ui.mouseState[7] = shift;
    mgraphics.redraw();
}
function ondrag(x, y, button, shift)
{
    ui.mouseState[0] = x;
    ui.mouseState[1] = y;
    ui.mouseState[2] = 0;
    ui.mouseState[3] = 0;
    if (button == 0)
    {
        ui.mouseState[4] = 0;
        ui.mouseState[5] = 1;
    }
    if (button == 1)
    {
        ui.mouseState[4] = 1;
        ui.mouseState[5] = 0;
    }
    ui.mouseState[6] = button;
    ui.mouseState[7] = shift;
    mgraphics.redraw();
}
// ----------> Other utilities:
function get_patcher_details()
{
    patcherDetails = [];
    patcherDetails.push(this.patcher);
    patcherDetails.push(this.box);
    patcherDetails.push(this.box.rect[0]);
    patcherDetails.push(this.box.rect[1]);

    xSize = this.box.rect[2] - this.box.rect[0];
    ySize = this.box.rect[3] - this.box.rect[1];

    patcherDetails.push(xSize);
    patcherDetails.push(ySize);
    return patcherDetails;
}
function read_buf()
{
    var idxBuf = new Buffer(idxBuffer);
    var srcBuf = new Buffer(srcBuffer);
    var sampleRate = (srcBuf.framecount() / srcBuf.length()) * 1000;

    segNodeList = [];

    srcFrames = srcBuf.framecount();

    // {uniqueID, name, x, y, size, col}
    for(i = 0; i < idxBuf.framecount() + 1; i++)
    {
        sliceDict = {"uniqueID" : "slice_" + String(i), "name" : ""}
        if(i == 0)
            segNodeList.push([0, idxBuf.peek(1, i, 1)]);
        else if(i == idxBuf.framecount())
            segNodeList.push([idxBuf.peek(1, i - 1, 1), srcBuf.framecount()]);
        else
            segNodeList.push([idxBuf.peek(1, i - 1, 1), idxBuf.peek(1, i, 1)]);
    }

}