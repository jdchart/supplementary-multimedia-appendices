// ---------------------------------------------------------------------------------
//
// fluidControl
// Keep your trousers clean and use the FluCoMa tools with ease.
//
// jacob.dchart@gmail.com
//
// ---------------------------------------------------------------------------------

var ui = require("jsuiui");
var fi = require("fluidObjInfo");
var ff = require("fluidControlFunctionality");

mgraphics.init();

var displayMode = "advanced";

function paint()
{
    windowSize = get_window_size();

    ui.infoBar(0, windowSize[1] - 20, windowSize[0], 20,
               ui.m4lStyle, ui.mouseState, 0);

    ui.paramDraw(0, 20, windowSize[0], windowSize[1] - 40,
                 ui.m4lStyle, ui.mouseState, 0,
                 "Fluid Control - a useful thing to have if wanting to re-use trousers.",
                 ff.currentLoadedObj, ff.currentParamList);

    ui.dropMenu(0, 0, (windowSize[0] * 0.1) * 3, 20,
                ui.m4lStyle, ui.mouseState, 0,
                "Choose a segmentation object.",
                "objChsMen", "ff.load_new_obj();", ui.objChooseMenAttr);

    ui.dropMenu((windowSize[0] * 0.1) * 3, 0, (windowSize[0] * 0.1) * 2, 20,
                ui.m4lStyle, ui.mouseState, 0,
                "Choose a settings preset.",
                "preChsMen", "", ui.preChooseMenAttr);

    ui.txtBtn((windowSize[0] * 0.1) * 5, 0, windowSize[0] * 0.1, 20,
              ui.m4lStyle, ui.mouseState, 0,
              "Load object settings from file.",
              "ldBut", "Load", "");

    ui.txtBtn((windowSize[0] * 0.1) * 6, 0, windowSize[0] * 0.1, 20,
            ui.m4lStyle, ui.mouseState, 0,
            "Save the current settings to file.",
            "svBut", "Save", "");

    ui.txtBtn((windowSize[0] * 0.1) * 7, 0, windowSize[0] * 0.1, 20,
              ui.m4lStyle, ui.mouseState, 0,
              "Choose a random segmentation object and settings.",
              "randBut", "[:]", "");

    ui.txtBtn((windowSize[0] * 0.1) * 8, 0, windowSize[0] * 0.1, 20,
          ui.m4lStyle, ui.mouseState, 0,
          "Switch between simple and advanced view. (currently " + displayMode + ").",
          "disModeBut", "[-]", "ff.change_display_mode();");

    ui.txtBtn((windowSize[0] * 0.1) * 9, 0, windowSize[0] * 0.1, 20,
            ui.m4lStyle, ui.mouseState, 0,
            "See a detailed explanation about the currently selected segmentation tool.",
            "hlpBut", "?", "");

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
        fi.fluidDict[ff.currentLoadedObj]["attributes"]["source"]["value"] = text;
    }
    if(ui.getTextIndex == 1)
    {
        fi.fluidDict[ff.currentLoadedObj]["attributes"]["indices"]["value"] = text;
    }

    cancel_text();
}
