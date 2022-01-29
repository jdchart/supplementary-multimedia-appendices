// ---------------------------------------------------------------------------------
//
//   - - - - - - - - - M A X    N E T W O R K - - - - - - - - - - - - - - - - - - -
//
//            By Jacob Hart, University of Huddersfield.
//
//
// ---------------------------------------------------------------------------------

// #################################################################################
// Importing modules ###############################################################
// #################################################################################
var ui = require("mnui");
var mton = require("maxToNet");
var cton = require("csvToNet");
var fd = require("forceDirected");
var ut = require("netUtils");

// #################################################################################
// Global variables ################################################################
// #################################################################################

// ----------> General:
var p = this.patcher;
var jsuiObject = this.box;
var currentNodeList = [];
var currentEdgeList = [];
var algoSettingsPop = false;
var maxToNetPop = false;
var loadCsvPop = false;
var colourPickerPopOn = false;
var colourPickerLvl = 0;
var colourPickerVar = [];
var redVar = 0.0;
var greenVar = 0.0;
var blueVar = 0.0;
var opacVar = 1.0;
var currentSelectedAlgo = "random"
var currentTextChangeVar = ["", 0];
var loadType = "";
var currentLoadType = "";
var currentNodeFileLoad = "";
var currentEdgeFileLoad = "";
var currentNodeMAxToNetFile = "";
var trimSubpatchers = false;

// ----------> For UI:
var mouseState = [0,0,0,0,0,0,0,0]; // x, y, click, dblclick, dragOn, dragOff, button, shift
var dragEnable = [false, "none"];
var clickEnable = [false, "none"];
var canvasZoom = 1;
var maxCanvasZoom = 2;
var minCanvasZoom = 0.01;
var currentInfoText = "Max Network by Jacob Hart // Frieden, Liebe und Umarmungen.";
var showText = false;
var selectedNodes = [];
var canSelDragCanv = true;

var fileMenu = ["Save All", "Max to Network", "Load From Csv", "Print Lists", "Clear All"];
var fileMenDesc = ["Create two csv files: a node list and an edge list of the current network.",
                    "Convert a Max patch to a network.", "Load a network from a node and edge list from csv files.",
                    "Post the current node and edge lists to the max window.", "Clear the current node and edge lists."]
var fileMenuState = [0, false];
var viewMenu = ["Zoom In", "Zoom Out", "Reset Camera", "Show/Hide Labels"];
var viewMenDesc = ["Zoom the camera in by 10%.", "Zoom the camera out by 10%",
                    "Reset the camera to it's original position and zoom.",
                    "Display node labels on the canvas."];
var viewMenuState = [0, false];
var layoutMenu = ["Re-distribute", "Algorithm Settings"];
var layoutMenDesc = ["Re-trigger the layout algorithm.", "Choose which layout algorithm to use and modify it's settings."];
var layoutMenuState = [0, false];
var helpMenu = ["About", "Tutorial"];
var helpMenDesc = ["View information about Max Network.", "Learn how to use Max Network."]
var helpMenuState = [0, false];
var algoTypeMenu = ["Random", "Force-direced"];
var algoTypeMenDesc = ["Assign random coordinates to each node.", "A simple force-directed physics-based layout algorithm."];
var algoTypeMenuState = [0, false];
var overWriteExistingNodes = true;

var cameraFocus = 0;
var newtTickFocus = 0;
var darkBackCol = [0, 0, 0, 0.2];
var nodeInfoPopState = [false, 0, 0, 0];
var txtPopCamFo = 0;

// ----------> For Utilities:
var removeObjList = [];
var currentTextInit = "";

// ----------> For force directed:
var FDspringRest = 50;
var FDrepulsionForce = 6250;
var FDspringForce = 1;
var FDtimeStep = 0.04;
var FDiters = 1000;
var FDxRange = 500;
var FDyRange = 500;

var RANDxRange = 500;
var RANDyRange = 500;

// #################################################################################
// Graphics ########################################################################
// #################################################################################

// Initialising graphics:
mgraphics.init();

function paint()
{
    // ##############################
    // Creating all the graphics.
    // ##############################

    windowSize = get_window_size();

    ui.netGraph(0, 20, windowSize[0], windowSize[1] - 40, currentNodeList, currentEdgeList, canvasZoom, mouseState, 0);

    if(nodeInfoPopState[0])
    {
        nodeInfoPopUp(nodeInfoPopState[1]);
    }

    ui.dropMenu(0, 0, (windowSize[0] / 16) * 3, 20, mouseState, "file_menu_func();", fileMenu, "File menu - save and load networks.", "fileMenu", fileMenuState, 0, false, "File", [], fileMenDesc);
    ui.dropMenu((windowSize[0] / 16) * 3, 0, (windowSize[0] / 16) * 3, 20, mouseState, "view_menu_func();", viewMenu, "View menu - options for how to position the camera.", "viewMenu", viewMenuState, 0, false, "View", [], viewMenDesc);
    ui.dropMenu((windowSize[0] / 16) * 6, 0, (windowSize[0] / 16) * 3, 20, mouseState, "layout_menu_func();", layoutMenu, "Layout menu - options for the distribution of the network.", "layoutMenu", layoutMenuState, 0, false, "Layout", [], layoutMenDesc);
    ui.dropMenu((windowSize[0] / 16) * 9, 0, (windowSize[0] / 16) * 2, 20, mouseState, "help_menu_func();", helpMenu, "Help menu - you're spending your life looking at network graphs, get some help.", "helpMenu", helpMenuState, 0, false, "Help", [], helpMenDesc);
    ui.hSlider(((windowSize[0] / 16) * 11) + 5, 0, ((windowSize[0] / 16) * 5) - 10, 20, mouseState, "canvasZoom", minCanvasZoom, maxCanvasZoom, "testSlider", "canvas_zoom();", "Canvas zoom.", 0);

    ui.infoBar(0, windowSize[1] - 20, windowSize[0], 20, mouseState, 0);

    if(algoSettingsPop)
    {
        algoPopUp();
    }

    if(loadCsvPop)
    {
        loadCsvPopFunc()
    }

    if(maxToNetPop)
    {
        maxToNetPopFunc();
    }

    if(colourPickerPopOn)
    {
        colourPicker();
    }

    if(currentTextChangeVar[0] != "")
    {
        ui.blankCanvas((this.box.rect[2] / 2) - 51, (this.box.rect[3] / 2) - 46, 102, 92, "Enter text.", txtPopCamFo, mouseState);
        ui.txtBox((this.box.rect[2] / 2) - 51, (this.box.rect[3] / 2) - 46, 102, 20, mouseState, "Input Text...", "Enter text.", txtPopCamFo, "cen");
        ui.txtBtn((this.box.rect[2] / 2) - 51, (this.box.rect[3] / 2) + 26, 102, 20, "OK", mouseState, 'outlet(0, "conf");', "Confirm text input.", "txtInputBtnBut", txtPopCamFo);
    }

    apply_camera_focus();
}

// #################################################################################
// Other functions #################################################################
// #################################################################################

// ----------> General:
function bang()
{
    // ##############################
    // What happens when the JSUI object recieves a bang.
    // ##############################

    mgraphics.redraw();
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

function clear_lists()
{
    // ##############################
    // Erase all loaded nodes and edges.
    // ##############################

    currentNodeList = [];
    currentEdgeList = [];
    selectedNodes = [];

    mgraphics.redraw();
}

// ----------> For Utilities:
function maxToNetPopFunc()
{
    popWid = windowSize[0];
    popHei = windowSize[1] - 20;
    ui.popUpCanvas(0, 0, popWid, popHei, mouseState, "Max to Network", 1, "closeMaxToNetPop();", "Transform a max patch into a network.", false);

    ui.txtBoxFill(popWid / 16, 40, (popWid / 16) * 12, 20, mouseState, currentNodeMAxToNetFile, "The max file to be transformed.", 1, "left");
    ui.txtBtn((popWid / 16) * 13, 40, (popWid / 16) * 2, 20, "...", mouseState, "get_filename();", "Choose the node list csv file.", "getFileMTNBut", 1);

    ui.boxToggle(popWid / 16, 70, 20, 20, mouseState, "overWriteExistingNodes", "", "Overwrite the existing noad and edge lists, or join the new network to the existing ones.", "overwriteTog", 1)
    ui.txtBox((popWid / 16) + 20, 70, 100, 20, mouseState, "Overwrite", "Overwrite the existing noad and edge lists, or join the new network to the existing ones.", 1, "left");

    ui.boxToggle(popWid / 16, 100, 20, 20, mouseState, "trimSubpatchers", "", "Trim subpatcher nodes from the network and link nodes directly.", "subpatTrimTog", 1)
    ui.txtBox((popWid / 16) + 20, 100, 100, 20, mouseState, "Format subpatchers", "Trim subpatcher nodes from the network and link nodes directly.", 1, "left");

    if(currentNodeMAxToNetFile != "")
        ui.txtBtn((popWid / 16) * 4, windowSize[1] - 60, (popWid / 16) * 4, 20, "Load Network", mouseState, "perform_max_to_net(); closeMaxToNetPop();", "Transform the Max patch.", "MTNFinalBut", 1);
    else
        ui.txtBtn((popWid / 16) * 4, windowSize[1] - 60, (popWid / 16) * 4, 20, "Load Network", mouseState, "", "You must choose a file first.", "MTNFinalBut", 1);
    ui.txtBtn((popWid / 16) * 8, windowSize[1] - 60, (popWid / 16) * 4, 20, "Close", mouseState, "closeMaxToNetPop();", "Close.", "closeLoadCsvBut", 1);
}

function closeMaxToNetPop()
{
    maxToNetPop = false;
    newtTickFocus = 0;
}

function openMaxToNetPop()
{
    maxToNetPop = true;
    newtTickFocus = 1;
}

function loadCsvPopFunc()
{
    popWid = windowSize[0];
    popHei = windowSize[1] - 20;
    ui.popUpCanvas(0, 0, popWid, popHei, mouseState, "Load From Csv", 1, "close_load_csv_pop();", "Load a network from a node list and an edge list is csv format.", false);

    ui.txtBoxFill(popWid / 16, 40, (popWid / 16) * 12, 20, mouseState, currentNodeFileLoad, "The node list file to be loaded.", 1, "left");
    ui.txtBtn((popWid / 16) * 13, 40, (popWid / 16) * 2, 20, "...", mouseState, "get_filename_load('nodes');", "Choose the node list csv file.", "nodeListCsvBut", 1);

    ui.txtBoxFill(popWid / 16, 70, (popWid / 16) * 12, 20, mouseState, currentEdgeFileLoad, "The edge list file to be loaded.", 1, "left");
    ui.txtBtn((popWid / 16) * 13, 70, (popWid / 16) * 2, 20, "...", mouseState, "get_filename_load('edges');", "Choose the edge list csv file.", "edgeListCsvBut", 1);

    ui.boxToggle(popWid / 16, 100, 20, 20, mouseState, "overWriteExistingNodes", "", "Overwrite the existing noad and edge lists, or join the new network to the existing ones.", "overwriteTog", 1)
    ui.txtBox((popWid / 16) + 20, 100, 100, 20, mouseState, "Overwrite", "Overwrite the existing noad and edge lists, or join the new network to the existing ones.", 1, "left");

    if(currentNodeFileLoad != "" && currentEdgeFileLoad != "")
        ui.txtBtn((popWid / 16) * 4, windowSize[1] - 60, (popWid / 16) * 4, 20, "Load Network", mouseState, "cton.load_lists_from_csv(currentNodeFileLoad, currentEdgeFileLoad); close_load_csv_pop();", "Load the network from lists.", "loadcsvFinalBut", 1);
    else
        ui.txtBtn((popWid / 16) * 4, windowSize[1] - 60, (popWid / 16) * 4, 20, "Load Network", mouseState, "", "You must choose both a node and an edge list to load.", "loadcsvFinalBut", 1);
    ui.txtBtn((popWid / 16) * 8, windowSize[1] - 60, (popWid / 16) * 4, 20, "Close", mouseState, "close_load_csv_pop();", "Close.", "closeLoadCsvBut", 1);
}

function close_load_csv_pop()
{
    loadCsvPop = false;
    newtTickFocus = 0;
}

function openLoadCsvPop()
{
    loadCsvPop = true;
    newtTickFocus = 1;
}

function get_filename()
{
    // ##############################
    // Trigger the opening of a dialog box to get a filename.
    // ##############################

    removeObjList = [];
    removeObjList = ut.dialog_file(p, this.box.rect[0], this.box.rect[1], this.box);
}

function cancel_dialog()
{
    for(i = 0; i < removeObjList.length; i++)
    {
        p.remove(removeObjList[i]);
    }
}

function get_filename_load(type)
{
    // ##############################
    // Trigger the opening of a dialog box to get a filename.
    // ##############################
    currentLoadType = type
    removeObjList = [];
    removeObjList = ut.dialog_file_load(p, this.box.rect[0], this.box.rect[1], this.box);
}

function print_lists()
{
    // ##############################
    // Post a formatted version of the current node and edge lists.
    // ##############################

    ut.post_lists(currentNodeList, currentEdgeList);
}

function give_filename(filename)
{
    // ##############################
    // Second part of get_filename().
    // Feeds in the found filename.
    // ##############################

    for(i = 0; i < removeObjList.length; i++)
    {
        p.remove(removeObjList[i]);
    }

    currentNodeMAxToNetFile = filename;

}

function perform_max_to_net()
{
    mton.pop_lists(currentNodeMAxToNetFile);

    distRand();

    ut.count_neighbours(currentNodeList, currentEdgeList);
}

function load_filename(filename)
{
    // ##############################
    // Second part of get_filename().
    // Feeds in the found filename.
    // ##############################

    for(i = 0; i < removeObjList.length; i++)
    {
        p.remove(removeObjList[i]);
    }

    if(currentLoadType == "nodes")
    {
        currentNodeFileLoad = filename;
    }
    if(currentLoadType == "edges")
    {
        currentEdgeFileLoad = filename;
    }
}

// ----------> For force directed:
function distNodes()
{
    if (currentSelectedAlgo == "random")
    {
        distRand();
    }
    else if (currentSelectedAlgo == "force-directed")
    {
        distFD()
    }
}

function distFD()
{
    // ##############################
    // Triggers the force-directed distribution of loaded nodes.
    // ##############################

    fd.force_directed(currentNodeList, FDxRange, FDyRange, FDspringRest, FDrepulsionForce, FDspringForce, FDtimeStep, FDiters);
    mgraphics.redraw();
}

function distRand()
{
    // ##############################
    // Triggers a random distribution of nodes.
    // ##############################

    fd.random_coords_ext(currentNodeList, RANDxRange, RANDyRange);
    mgraphics.redraw();
}

function algoPopUp()
{
    // ##############################
    // A pop up that allows the user to define the settings for the force directed
    // algorithm distribution.
    // ##############################

    popWid = windowSize[0];
    popHei = windowSize[1] - 20;
    popX = 0;
    popY = 0;
    ui.popUpCanvas(popX, popY, popWid, popHei, mouseState, "Layout Algorithm Settings", 1, "close_algo_popup();", "Choose the settings for the network layout algorithm.", false);

    offsetY = popY + 40;

    if(currentSelectedAlgo == "random")
    {
        ui.txtBox(popX, offsetY + 5, popWid / 2, 10, mouseState, "X Range: " + String(RANDxRange), "Set the range of random numbers used for the x coordinates.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY, (popWid / 2) - 11, 20, mouseState, "RANDxRange", 100, 1000, "RANDxRangeSlider", "", "Set the range of random numbers used for the x coordinates.", 1);

        ui.txtBox(popX, offsetY + 25, popWid / 2, 10, mouseState, "Y Range: " + String(RANDyRange), "Set the range of random numbers used for the y coordinates.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY + 20, (popWid / 2) - 11, 20, mouseState, "RANDyRange", 100, 1000, "RANDyRangeSlider", "", "Set the range of random numbers used for the y coordinates.", 1);

        ui.txtBtn(popX, popY + popHei - 20, popWid / 2, 20, "Distribute", mouseState, "distRand(); close_algo_popup();", "Distribute the nodes using the random algorithm.", "distRandPop", 1);
    }

    if(currentSelectedAlgo == "force-directed")
    {
        ui.txtBox(popX, offsetY + 5, popWid / 2, 10, mouseState, "Spring rest length: " + String(FDspringRest), "Set the spring rest length.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY, (popWid / 2) - 11, 20, mouseState, "FDspringRest", 10, 100, "FDspringRestSlider", "", "Set the spring rest length.", 1);

        ui.txtBox(popX, offsetY + 25, popWid / 2, 10, mouseState, "Repulsion force: " + String(FDrepulsionForce), "Set the repulsion force.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY + 20, (popWid / 2) - 11, 20, mouseState, "FDrepulsionForce", 100, 10000, "FDrepulsionForceSlider", "", "Set the repulsion force.", 1);

        ui.txtBox(popX, offsetY + 45, popWid / 2, 10, mouseState, "Spring force: " + String(FDspringForce), "Set the spring force.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY + 40, (popWid / 2) - 11, 20, mouseState, "FDspringForce", 0.1, 3, "FDspringForceSlider", "", "Set the spring force.", 1);

        ui.txtBox(popX, offsetY + 65, popWid / 2, 10, mouseState, "Time step: " + String(FDtimeStep), "Set the time step.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY + 60, (popWid / 2) - 11, 20, mouseState, "FDtimeStep", 0.01, 0.2, "FDtimeStepSlider", "", "Set the time step.", 1);

        ui.txtBox(popX, offsetY + 85, popWid / 2, 10, mouseState, "Iterations: " + String(FDiters), "Set the number of iterations.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY + 80, (popWid / 2) - 11, 20, mouseState, "FDiters", 10, 10000, "FDitersSlider", "", "Set the number of iterations.", 1);

        ui.txtBox(popX, offsetY + 105, popWid / 2, 10, mouseState, "X Range: " + String(FDxRange), "Set the range of random numbers used for the x coordinates.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY + 100, (popWid / 2) - 11, 20, mouseState, "FDxRange", 100, 1000, "FDxRangeSlider", "", "Set the range of random numbers used for the x coordinates.", 1);

        ui.txtBox(popX, offsetY + 125, popWid / 2, 10, mouseState, "Y Range: " + String(FDyRange), "Set the range of random numbers used for the y coordinates.", 1, "left");
        ui.hSlider(((popWid / 2) + popX) + 5, offsetY + 120, (popWid / 2) - 11, 20, mouseState, "FDyRange", 100, 1000, "FDyRangeSlider", "", "Set the range of random numbers used for the y coordinates.", 1);

        ui.txtBtn(popX, popY + popHei - 20, popWid / 2, 20, "Distribute", mouseState, "distFD(); close_algo_popup();", "Distribute the nodes using the force-directed algorithm.", "distFDPop", 1);
    }

    ui.txtBtn(popX + (popWid / 2), popY + popHei - 20, popWid / 2, 20, "Close", mouseState, "close_algo_popup();", "Close layout algorithm settings.", "closeAlgoSetPop", 1)
    ui.dropMenu(((popWid / 8) * 1) + popX, popY + 20, (popWid / 8) * 6, 20, mouseState, "algo_type_sel_menu_func();", algoTypeMenu, "Select the algorith to be used.", "algoTypeMenu", algoTypeMenuState, 1, true, "Algorithm", [], algoTypeMenDesc);
}

// ----------> For UI:
function canvas_zoom()
{
    // ##############################
    // Event whenever the canvas zoom is changed.
    // ##############################

    mgraphics.redraw();
}

function reset_zoom()
{
    // ##############################
    // Reset the camera to it's original position and zoom.
    // ##############################

    canvasZoom = 1;
    ui.resetGraphCam();
    canvas_zoom();
}

function text_show_update()
{
    // ##############################
    // Update graphics.
    // ##############################

    mgraphics.redraw();
}

function file_menu_func()
{
    // ##############################
    // The functionality for all the file menu options.
    // ##############################

    if(fileMenuState[0] == 0)
    {
        cton.save_net_to_csv(p);
    }
    else if(fileMenuState[0] == 1)
    {
        openMaxToNetPop();
    }
    else if(fileMenuState[0] == 2)
    {
        openLoadCsvPop();
    }
    else if(fileMenuState[0] == 3)
    {
        print_lists();
    }
    else if(fileMenuState[0] == 4)
    {
        clear_lists();
    }
}

function view_menu_func()
{
    // ##############################
    // The functionality for all the view menu options.
    // ##############################

    if(viewMenuState[0] == 0)
    {
        if(canvasZoom * 1.1 > maxCanvasZoom)
        {
            canvasZoom = maxCanvasZoom;
        }
        else
        {
            canvasZoom = canvasZoom * 1.1;
            canvas_zoom();
        }
    }
    else if(viewMenuState[0] == 1)
    {
        if(canvasZoom * 0.9 < minCanvasZoom)
        {
            canvasZoom = minCanvasZoom;
        }
        else
        {
            canvasZoom = canvasZoom * 0.9;
            canvas_zoom();
        }
    }
    else if(viewMenuState[0] == 2)
    {
        reset_zoom();
    }
    else if(viewMenuState[0] == 3)
    {
        if(showText)
        {
            showText = false;
        }
        else
        {
            showText = true;
        }

        mgraphics.redraw();
    }
}

function layout_menu_func()
{
    // ##############################
    // The functionality for all the layout menu options.
    // ##############################

    if(layoutMenuState[0] == 0)
    {
        distNodes();
    }
    else if(layoutMenuState[0] == 1)
    {
        open_algo_settings();
        newtTickFocus = 1;
    }
}

function help_menu_func()
{
    // ##############################
    // The functionality for all the help menu options.
    // ##############################

    post(helpMenu[helpMenuState[0]] + "\n");
}

function algo_type_sel_menu_func()
{
    // ##############################
    // The functionality for all the algorithm type select menu options.
    // ##############################

    if(algoTypeMenuState[0] == 0)
    {
        currentSelectedAlgo = "random";
    }
    else if(algoTypeMenuState[0] == 1)
    {
        currentSelectedAlgo = "force-directed";
    }
}

function apply_camera_focus()
{
    // ##############################
    // For when the camera focus is only to be updated on the next tick.
    // ##############################

    if(cameraFocus != newtTickFocus)
    {
        cameraFocus = newtTickFocus;
    }
}

function open_algo_settings()
{
    // ##############################
    // Open the FD settings pop-up.
    // ##############################

    algoSettingsPop = true;
    newtTickFocus = 1;
}

function close_algo_popup()
{
    // ##############################
    // Close the FD settings pop-up.
    // ##############################

    algoSettingsPop = false;
    newtTickFocus = 0;
}

function nodeInfoPopUp(node)
{
    // ##############################
    // Creates a node info popup for the clicked node.
    // ##############################

    if(selectedNodes.length == 0)
    {
        selectedNodes.push(currentNodeList[node]['uniqueID'])
    }

    wind = get_window_size()

    currentTextChangeVar[1] = node;

    popWid = (wind[0] / 3) * 2;
    popHei = (wind[0] / 8) * 5;

    if(nodeInfoPopState[2] + 10 + popWid < wind[0] && nodeInfoPopState[3] + popHei < wind[1])
    {
        popX = nodeInfoPopState[2] + 10;
        popY = nodeInfoPopState[3];
    }
    else if(nodeInfoPopState[2] + 10 + popWid > wind[0] && nodeInfoPopState[3] + popHei < wind[1])
    {
        popX = (wind[0] / 2) - (popWid / 2);
        popY = nodeInfoPopState[3];
    }
    else if(nodeInfoPopState[2] + 10 + popWid < wind[0] && nodeInfoPopState[3] + popHei > wind[1])
    {
        popX = nodeInfoPopState[2] + 10;
        popY = (wind[1] / 2) - (popHei / 2);
    }
    else
    {
        popX = (wind[0] / 2) - (popWid / 2);
        popY = (wind[1] / 2) - (popHei / 2);
    }

    txtBoxX = (this.box.rect[2] / 2) + this.box.rect[0];
    txtBoxY = (this.box.rect[3] / 2) + this.box.rect[1];

    ui.popUpCanvas(popX, popY, popWid, popHei, mouseState, "---->  " + currentNodeList[node]["name"] + " Info", 1, "close_node_info_pop();", "View and modify info about the node '" + currentNodeList[node]["name"] + "'.", true);

    ui.txtBox(popX, (popY + 15) + 5, (popWid / 12) * 10, 10, mouseState, "Name: " + currentNodeList[node]["name"], "Node name (not necessarily unique).", 1, "left");
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 15, (popWid / 12) * 2, 20, "Edit", mouseState, 'ut.get_text(txtBoxX, txtBoxY, "name", 2);', "Edit the node name.", "editNameBut", 1);

    ui.txtBox(popX, (popY + 35) + 5, (popWid / 12) * 10, 10, mouseState, "Unique ID: " + currentNodeList[node]["uniqueID"], "A unique name for identifying the node.", 1, "left");
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 35, (popWid / 12) * 2, 20, "Edit", mouseState, 'ut.get_text(txtBoxX, txtBoxY, "uniqueID", 2);', "Edit the node unique ID.", "editUniqueIDBut", 1);

    ui.txtBox(popX, (popY + 55) + 5, (popWid / 12) * 10, 10, mouseState, "Type: " + currentNodeList[node]["type"], "The node type.", 1, "left");
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 55, (popWid / 12) * 2, 20, "Edit", mouseState, 'ut.get_text(txtBoxX, txtBoxY, "type", 2);', "Edit the node type.", "editTypeBut", 1);

    ui.txtBox(popX, (popY + 75) + 5, (popWid / 12) * 10, 10, mouseState, "Subtype: " + currentNodeList[node]["subtype"], "The node subtype.", 1, "left");
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 75, (popWid / 12) * 2, 20, "Edit", mouseState, 'ut.get_text(txtBoxX, txtBoxY, "subtype", 2);', "Edit the node subtype.", "editSubtypeBut", 1);

    ui.txtBox(popX, (popY + 95) + 5, (popWid / 12) * 10, 10, mouseState, "Description: " + currentNodeList[node]["description"], "A description of the node.", 1, "left");
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 95, (popWid / 12) * 2, 20, "Edit", mouseState, 'ut.get_text(txtBoxX, txtBoxY, "description", 2);', "Edit the node description.", "editDescBut", 1);

    ui.txtBox(popX, (popY + 115) + 5, (popWid / 12) * 10, 10, mouseState, "Variable: " + currentNodeList[node]["varname"], "The max scripting name attached to the node.", 1, "left");
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 115, (popWid / 12) * 2, 20, "Edit", mouseState, 'ut.get_text(txtBoxX, txtBoxY, "varname", 2);', "Edit the max scripting name linked to the node.", "editVarnameBut", 1);

    ui.txtBox(popX, (popY + 135) + 5, (popWid / 12) * 10, 10, mouseState, "Parent: " + currentNodeList[node]["parent"], "The node's parent.", 1, "left");
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 135, (popWid / 12) * 2, 20, "Edit", mouseState, 'ut.get_text(txtBoxX, txtBoxY, "parent", 2);', "Edit the node parent.", "editParentBut", 1);

    ui.txtBox(popX, (popY + 155) + 5, (popWid / 12) * 10, 10, mouseState, "Size: " + currentNodeList[node]["size"], "The node's size.", 1, "left");
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 155, (popWid / 12) * 2, 20, "Edit", mouseState, 'ut.get_text(txtBoxX, txtBoxY, "size", 2);', "Edit the node size.", "editSizeBut", 1);

    colourPickerVar = currentNodeList[node]['col'];

    ui.txtBox(popX, (popY + 175) + 5, (popWid / 12) * 10, 10, mouseState, "Colour: ", "The node's colour.", 1, "left");
    ui.colBox(popX + ((popWid / 12) * 8), popY + 175, (popWid / 12) * 2, 20, "The node's colour.", 1, mouseState, currentNodeList[node]["col"]);
    ui.txtBtn((popX + popWid) - ((popWid / 12) * 2), popY + 175, (popWid / 12) * 2, 20, "Edit", mouseState, "redVar = colourPickerVar[0]; greenVar = colourPickerVar[1]; blueVar = colourPickerVar[2]; opacVar = colourPickerVar[3]; colourPickerLvl = 2; open_colour_picker();", "Edit the node colour.", "editColBut", 1);

    ui.txtBox(popX, (popY + 195) + 5, (popWid / 12) * 10, 10, mouseState, "Neighbours: ", "The node's neighbours.", 1, "left");
    for(nei = 0; nei < currentNodeList[node]["neighbours"].length; nei++)
    {
        neiIdx = ut.find_node_idx(currentNodeList, currentNodeList[node]["neighbours"][nei])
        ui.txtBox(popX, ((popY + 195) + 5) + (nei + 1) * 20, (popWid / 12) * 10, 10, mouseState, "   - " + currentNodeList[neiIdx]["name"], "Node neighbour.", 1, "left");
    }
}

function close_node_info_pop()
{
    // ##############################
    // Close the node info pop-up.
    // ##############################

    nodeInfoPopState[0] = false;
    newtTickFocus = 0;
    selectedNodes = [];
}

function colourPicker()
{
    windX = (windowSize[0] / 8) * 2
    windY = (windowSize[1] / 8) * 2
    windW = (windowSize[0] / 8) * 4
    windH = (windowSize[1] / 8) * 4
    ui.popUpCanvas(windX, windY, windW, windH, mouseState, "Colour Picker", colourPickerLvl, "close_colour_picker();", "Choose a colour.", false);
    ui.colBox(windX + (windW / 8), windY + ((windH / 16) * 1), (windW / 8) * 6, (windH / 16) * 4, "Preview the colour.", colourPickerLvl, mouseState, colourPickerVar);

    ui.hSlider(windX + (windW / 8), windY + ((windH / 16) * 6), (windW / 8) * 6, (windH / 16) * 2, mouseState, "redVar", 0, 1, "redSlider", "update_colour();", "Red level.", colourPickerLvl);
    ui.hSlider(windX + (windW / 8), windY + ((windH / 16) * 8), (windW / 8) * 6, (windH / 16) * 2, mouseState, "greenVar", 0, 1, "greenSlider", "update_colour();", "Green level.", colourPickerLvl);
    ui.hSlider(windX + (windW / 8), windY + ((windH / 16) * 10), (windW / 8) * 6, (windH / 16) * 2, mouseState, "blueVar", 0, 1, "blueSlider", "update_colour();", "Blue level.", colourPickerLvl);
    ui.hSlider(windX + (windW / 8), windY + ((windH / 16) * 12), (windW / 8) * 6, (windH / 16) * 2, mouseState, "opacVar", 0, 1, "opacSlider", "update_colour();", "Opacity level.", colourPickerLvl);

    ui.txtBtn((windX + (windW / 8) - 5), windY + ((windH / 16) * 14), ((windW / 8) * 6) + 10, (windH / 16) * 1.5, "Confirm", mouseState, 'close_colour_picker();', "Confirm modification.", "confColorBut", colourPickerLvl);
}

function update_colour()
{
    colourPickerVar[0] = redVar;
    colourPickerVar[1] = greenVar;
    colourPickerVar[2] = blueVar;
    colourPickerVar[3] = opacVar;
}

function open_colour_picker()
{
    colourPickerPopOn = true;
    newtTickFocus = colourPickerLvl;
}

function close_colour_picker()
{
    colourPickerPopOn = false;
    newtTickFocus = colourPickerLvl - 1;
}

function give_text(txt)
{
    // ##############################
    // The answer to the ut.get_text() function.
    // ##############################

    for(i = 0; i < removeObjList.length; i++)
    {
        p.remove(removeObjList[i]);
    }

    if(currentTextChangeVar[0] == "name")
    {
        currentNodeList[currentTextChangeVar[1]]["name"] = String(txt);
        currentTextChangeVar[0] = "";
    }
    else if(currentTextChangeVar[0] == "uniqueID")
    {
        oldID = currentNodeList[currentTextChangeVar[1]]["uniqueID"];
        currentNodeList[currentTextChangeVar[1]]["uniqueID"] = String(txt);
        currentTextChangeVar[0] = "";
        for(j = 0; j < currentEdgeList.length; j++)
        {
            if(currentEdgeList[j]["source"] == oldID)
            {
                currentEdgeList[j]["source"] = String(txt);
            }
            if(currentEdgeList[j]["destination"] == oldID)
            {
                currentEdgeList[j]["destination"] = String(txt);
            }
        }
    }
    else if(currentTextChangeVar[0] == "type")
    {
        currentNodeList[currentTextChangeVar[1]]["type"] = String(txt);
        currentTextChangeVar[0] = "";
    }
    else if(currentTextChangeVar[0] == "subtype")
    {
        currentNodeList[currentTextChangeVar[1]]["subtype"] = String(txt);
        currentTextChangeVar[0] = "";
    }
    else if(currentTextChangeVar[0] == "description")
    {
        currentNodeList[currentTextChangeVar[1]]["description"] = String(txt);
        currentTextChangeVar[0] = "";
    }
    else if(currentTextChangeVar[0] == "varname")
    {
        currentNodeList[currentTextChangeVar[1]]["varname"] = String(txt);
        currentTextChangeVar[0] = "";
    }
    else if(currentTextChangeVar[0] == "parent")
    {
        currentNodeList[currentTextChangeVar[1]]["parent"] = String(txt);
        currentTextChangeVar[0] = "";
    }
    else if(currentTextChangeVar[0] == "size")
    {
        currentNodeList[currentTextChangeVar[1]]["size"] = parseInt(txt);
        currentTextChangeVar[0] = "";
    }

    newtTickFocus = txtPopCamFo - 1;
}

// ----------> For csv to net:
function load_test()
{
    // ##############################
    // Populates the current node and edge lists with the contents of the output
    // files in the home directory.
    // ##############################

    parentFile = p.name + ".maxpat";
    folderName = p.filepath.replace(parentFile, "");
    nodeFileName = folderName + "MAXTONET_OUTPUT_Nodes.csv";
    edgeFileName = folderName + "MAXTONET_OUTPUT_Edges.csv";

    cton.load_csv(nodeFileName, edgeFileName);
    distRand();
}

// ----------> For max to network:
function test_file(file)
{
    // ##############################
    // Triggers the max to network process.
    // ##############################

    mton.create_file(file);
}

// #################################################################################
// Mouse events ####################################################################
// #################################################################################

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
    mgraphics.redraw();
}
function ondblclick(x, y, button, shift)
{
    mouseState[0] = x;
    mouseState[1] = y;
    mouseState[2] = 0;
    mouseState[3] = 1;
    mouseState[6] = button;
    mouseState[7] = shift;
    mgraphics.redraw();
}
function ondrag(x, y, button, shift)
{
    mouseState[0] = x;
    mouseState[1] = y;
    mouseState[2] = 0;
    mouseState[3] = 0;
    if (button == 0)
    {
        mouseState[4] = 0;
        mouseState[5] = 1;
    }
    if (button == 1)
    {
        mouseState[4] = 1;
        mouseState[5] = 0;
    }
    mouseState[6] = button;
    mouseState[7] = shift;
    mgraphics.redraw();
}
