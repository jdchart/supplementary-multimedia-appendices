// ---------------------------------------------------------------------------------
//
// fluidControl
// Keep your trousers clean and use the FluCoMa tools with ease.
//
// jacob.dchart@gmail.com
//
// ---------------------------------------------------------------------------------

var ui = require("fcui");
var ff = require("fcFunc");

outlets = 2;

mgraphics.init();

var displayMode = "advanced";
var currentObject = "fluid.bufonsetslice~";

function paint()
{
    windowSize = get_window_size();

    ui.infoBar(0, windowSize[1] - 20, windowSize[0], 20,
               ui.m4lStyle, ui.mouseState, 0);

    ff.display_menu(currentObject);

    ff.top_toolbar();

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

function get_window_size()
{
    // ##############################
    // Return an array with the width and height of the JSUI box.
    // ##############################

    xSize = this.box.rect[2] - this.box.rect[0];
    ySize = this.box.rect[3] - this.box.rect[1];
    sizeArray = [xSize, ySize];
    return sizeArray;
}

function change_display_mode()
{
    if(displayMode == "advanced")
        displayMode = "simple";
    else if(displayMode == "simple")
        displayMode = "advanced";
}

// #################################################################################
// Required for JSUIUI #############################################################
// #################################################################################

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
function change_sample_rate(x)
{
    ff.sampleRate = x;
}
function give_filename(filename)
{
    patcherDetails = get_patcher_details();
    post(filename + "\n");
    for(i = 0; i < ui.removeObjList.length; i++)
    {
        patcherDetails[0].remove(ui.removeObjList[i]);
    }
    post(ui.getFilenameIndex + "\n");
}
function cancel_filename()
{
    patcherDetails = get_patcher_details();
    for(i = 0; i < ui.removeObjList.length; i++)
    {
        patcherDetails[0].remove(ui.removeObjList[i]);
    }
}
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
function cancel_text()
{
    ui.newTickFocus = 0;
    ui.getTextPop = false;
    patcherDetails = get_patcher_details();
    for(i = 0; i < ui.removeObjList.length; i++)
    {
        patcherDetails[0].remove(ui.removeObjList[i]);
    }
}
function give_text(text)
{
    patcherDetails = get_patcher_details();

    if(ui.getTextIndex == 0)
    {
        ff.sourceBuf = text
        outlet(0, "source " + ff.sourceBuf);
    }
    else if(ui.getTextIndex == 1)
    {
        ff.indicesBuf = text
        outlet(0, "indices " + ff.indicesBuf);
    }
    else if(ui.getTextIndex == 2)
    {
        ff.startframe = parseInt(text);
        outlet(0, "startframe " + ff.startframe);
    }
    else if(ui.getTextIndex == 3)
    {
        ff.startchan = parseInt(text);
        outlet(0, "startchan " + ff.startchan);
    }
    else if(ui.getTextIndex == 4)
    {
        ff.numframes = parseInt(text);
        outlet(0, "numframes " + ff.numframes);
    }
    else if(ui.getTextIndex == 5)
    {
        ff.numchans = parseInt(text);
        outlet(0, "numchans " + ff.numchans);
    }
    else if(ui.getTextIndex == 6)
    {
        ff.minslicelength = parseInt(text);
        outlet(0, "minslicelength " + ff.minslicelength);
    }
    else if(ui.getTextIndex == 7)
    {
        ff.threshold = parseFloat(text);
        outlet(0, "threshold " + ff.threshold);
    }
    else if(ui.getTextIndex == 8)
    {
        ff.filtersize = parseInt(text);
        outlet(0, "filtersize " + ff.filtersize);
    }
    else if(ui.getTextIndex == 9)
    {
        ff.framedelta = parseInt(text);
        outlet(0, "framedelta " + ff.framedelta);
    }
    else if(ui.getTextIndex == 10)
    {
        ff.kernelsize = parseInt(text);
        outlet(0, "kernelsize " + ff.kernelsize);
    }
    cancel_text();
}
