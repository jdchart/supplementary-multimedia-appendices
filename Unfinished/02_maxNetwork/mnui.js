// ---------------------------------------------------------------------------------
//
// mnui for Max Network.
//
// ---------------------------------------------------------------------------------

// #################################################################################
// Global variables ################################################################
// #################################################################################

// ----------> General:
var btnCol = [0.647, 0.647, 0.647, 1.000];
var btnColSel = [1.000, 0.710, 0.196, 1.000];
var txtCol = [0.000, 0.000, 0.000, 1.000];
var selectBoxCol = [0.996, 0.431, 0.431, 0.390];
var selCol = [0.996, 0.431, 0.431, 1.000];
var hoverCol = [0.498, 0.498, 0.498, 1.000];
var btnBorder = 1;
var fontFace = "Ableton Sans Medium";
var btnFontSize = 9;

// ----------> For slider:
var slideWid = 10;

// ----------> For net graph:
var canvasBackCol = [0.969, 0.969, 0.969, 1.000];
var nodeCol = [0.255, 0.467, 0.698, 1.000];
var nodeSize = 10;
var canvasOffsetX = 0;
var canvasOffsetY = 0;
var initialX = 0;
var initialY = 0;
var oldOffsetX = 0;
var oldOffsetY = 0;
var selNodeCoo = [];

// ----------> For toggle:
var togDarkCol = [0.459, 0.459, 0.459, 1.000]

// ----------> For pop-up:
var crossSize = 15;

// #################################################################################
// Export functions ################################################################
// #################################################################################

exports.colBox = function(x, y, w, h, desc, camLevel, mouse, col)
{
    with (mgraphics)
    {
        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
                currentInfoText = desc;
        }

        set_source_rgba(col);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();
    }
}

exports.blankCanvas = function(x, y, w, h, desc, camLevel, mouse)
{
    with (mgraphics)
    {
        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
                currentInfoText = desc;
        }

        set_source_rgba(btnCol);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();
    }
}

exports.txtBtn = function (x, y, w, h, txt, mouse, func, desc, btnName, camLevel)
{
    // ##############################
    // Create a button with a text label that is tied to a function.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = btnCol;

        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = hoverCol;
            }
        }

        var trimLen = true;
        while(trimLen)
        {
            txtMes = text_measure(txt);
            if(txtMes[0] > w)
            {
                if (txt.slice(-5) == "(...)")
                {
                    txt = txt.slice(0, -5)
                }
                txt = txt.slice(0, -1);
                txt = txt + "(...)";
            }
            else
            {
                trimLen = false;
            }
        }


        var selected = false;

        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                selected = true;
                clickEnable[0] = true;
                clickEnable[1] = btnName;
            }
        }

        if(cameraFocus == camLevel)
        {
            if(clickEnable[0])
                if(clickEnable[1] == btnName)
                    if(mouse[2] == 0)
                    {
                        eval(func);
                        clickEnable[0] = false;
                        clickEnable[1] = "none";
                    }
        }


        if(selected)
            {
                set_source_rgba(btnColSel);
            }

        else
            set_source_rgba(unselectedCol);

        rectangle(x, y, w, h);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure(txt);
        move_to((x + (w / 2)) - (txtMes[0] / 2), (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        text_path(txt);
        fill();
    }
}

exports.hSlider = function (x, y, w, h, mouse, variable, min, max, btnName, func, desc, camLevel)
{
    // ##############################
    // Creates a horizontal slider tied to a variable and a function.
    // For x, take into account + sliderWid offset.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = btnCol;

        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = hoverCol
            }
        }

        if (max > min)
            var inverted = false;
        else
            var inverted = true;

        if(inverted)
        {
            var range = min - max;
            var offset = max;
        }
        else
        {
            var range = max - min;
            var offset = min;
        }
        var theVar = eval(variable)

        if (inverted)
            var scaledVar = ((theVar * -1)  - offset) / range;
        else
            var scaledVar = (theVar - offset) / range;

        var slideCol = unselectedCol;
        var currentPos = (((scaledVar * w) / 1) + (x + btnBorder));

        set_source_rgba(btnCol);
        rectangle(x - (slideWid / 2), y, w + slideWid + btnBorder, h);
        fill();
        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x - (slideWid / 2), y);
        line_to((x - (slideWid / 2)) + w + slideWid + btnBorder, y);
        line_to((x - (slideWid / 2)) + w + slideWid + btnBorder, y + h);
        line_to(x - (slideWid / 2), y + h);

        line_to(x - (slideWid / 2), y - (btnBorder / 2));
        stroke();
        move_to(x + btnBorder, y + ((h / 2) - (btnBorder / 2)));
        line_to(x + w, y + ((h / 2) - (btnBorder / 2)));
        stroke();

        if(cameraFocus == camLevel)
        {
            if (mouse[0] > currentPos - (slideWid / 2) && mouse[0] <= currentPos + (slideWid / 2) && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                dragEnable[0] = true;
                dragEnable[1] = btnName;
            }
            else if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                var newVal = (mouse[0] - x) / w;
                if(newVal > 1)
                    newVal = 1;
                if (newVal < 0)
                    newVal = 0;

                if (inverted)
                    var newValScaled = ((newVal * range) + offset) * -1;
                else
                    var newValScaled = (newVal * range) + offset;
                eval(variable + "=" + newValScaled);

                eval(func);

                var slideCol = btnColSel;
            }
        }

        if(cameraFocus == camLevel)
        {
            if (dragEnable[0])
            {
                if(dragEnable[1] == btnName)
                {
                    var newVal = (mouse[0] - x) / w;
                    if(newVal > 1)
                        newVal = 1;
                    if (newVal < 0)
                        newVal = 0;

                    if (inverted)
                        var newValScaled = ((newVal * range) + offset) * -1;
                    else
                        var newValScaled = (newVal * range) + offset;
                    eval(variable + "=" + newValScaled);

                    eval(func);

                    var slideCol = btnColSel;

                    if(mouse[6] == 0)
                    {
                        var slideCol = btnCol;
                        dragEnable[0] = false;
                        dragEnable[1] = "none";
                    }
                }
            }
        }

        set_source_rgba(slideCol);
        slideX = currentPos - (slideWid / 2);
        rectangle(slideX, y + btnBorder, slideWid, h - (btnBorder * 2));
        fill();
        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(slideX, y + btnBorder);
        line_to(slideX + slideWid, y + btnBorder);
        line_to(slideX + slideWid, (y - btnBorder) + h);
        line_to(slideX, (y - btnBorder) + h);
        line_to(slideX, y + btnBorder);
        stroke();
    }
}

exports.netGraph = function (x, y, w, h, nodeList, edgeList, zoom, mouse, camLevel)
{
    // ##############################
    // Creates a canvas with a notwork from two lists
    // (one of nodes, of of edges).
    // ##############################

    with (mgraphics)
    {
        set_source_rgba(canvasBackCol);
        rectangle(x, y, w, h);
        fill();

        if(cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
                currentInfoText = "Network canvas (Cmd + drag to move viewpoint, click on a node to view information).";
        }

        if(cameraFocus == camLevel)
        {
            if(mouse[2] == 1)
            {
                for(i = 0; i < currentNodeList.length; i++)
                {
                    if(mouse[0] > ((nodeList[i]["x"] - nodeSize) * zoom) - canvasOffsetX && mouse[0] < ((nodeList[i]["x"] + nodeSize) * zoom) - canvasOffsetX && mouse[1] > ((nodeList[i]["y"] - nodeSize) * zoom) - canvasOffsetY && mouse[1] < ((nodeList[i]["y"] + nodeSize) * zoom) - canvasOffsetY)
                    {
                        newtTickFocus = 1;
                        nodeInfoPopState[1] = i;
                        nodeInfoPopState[0] = true;
                        nodeInfoPopState[2] = mouse[0];
                        nodeInfoPopState[3] = mouse[1];
                        selectedNodes.push(nodeList[i]["uniqueID"]);
                    }
                    else if (mouse[7] != 1)
                    {
                        selectedNodes = [];
                    }
                }
            }
        }

        if(cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1 && mouseState[7] == 1)
            {
                if(selectedNodes.length == 0)
                {
                    dragEnable[0] = true;
                    dragEnable[1] = "nodeCanvas";
                    initialX = mouse[0] + oldOffsetX;
                    initialY = mouse[1] + oldOffsetY;
                }
                else
                {
                    dragEnable[0] = true;
                    dragEnable[1] = "nodeCanvasMoveDrag";
                    selNodeCoo = [];
                    for(nd = 0; nd < selectedNodes.length; nd++)
                    {
                        coord = []
                        coord.push(nodeList[findNode(selectedNodes[nd])]["x"]);
                        coord.push(nodeList[findNode(selectedNodes[nd])]["y"]);
                        selNodeCoo.push(coord);
                    }
                    initialX = mouse[0];
                    initialY = mouse[1];
                }
            }
            else if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1 && mouseState[2] == 1)
            {
                dragEnable[0] = true;
                dragEnable[1] = "nodeCanvasSelectDrag";
                canSelDragCanv = true;
                initialX = mouse[0] + oldOffsetX;
                initialY = mouse[1] + oldOffsetY;
            }
        }

        if(cameraFocus == camLevel)
        {
            if (dragEnable[0])
            {
                if(dragEnable[1] == "nodeCanvas")
                {
                    canvasOffsetX = initialX - mouse[0];
                    canvasOffsetY = initialY - mouse[1];

                    if(mouse[6] == 0)
                    {
                        dragEnable[0] = false;
                        dragEnable[1] = "none";
                        oldOffsetX = canvasOffsetX;
                        oldOffsetY = canvasOffsetY;
                    }
                }
                if(dragEnable[1] == "nodeCanvasSelectDrag")
                {
                    if(canSelDragCanv)
                    {
                        set_source_rgba(selectBoxCol);
                        rectangle(initialX - canvasOffsetX, initialY - canvasOffsetY, (mouse[0] - initialX) +canvasOffsetX, (mouse[1] - initialY) + canvasOffsetY);
                        fill();


                        if(mouse[6] == 0)
                        {
                            dragEnable[0] = false;
                            dragEnable[1] = "none";

                            for(i = 0; i < nodeList.length; i++)
                            {
                                nodeXcoord = ((nodeList[i]["x"] - (nodeSize / 2)) * zoom) - canvasOffsetX;
                                nodeYcoord = ((nodeList[i]["y"] - (nodeSize / 2)) * zoom) - canvasOffsetY;

                                theWid = mouse[0];
                                theHei = mouse[1];

                                newX = initialX - canvasOffsetX;
                                newY = initialY - canvasOffsetY;
                                newW = theWid;
                                newH =theHei;

                                if(initialX < theWid)
                                {
                                    newX = initialX - canvasOffsetX;
                                    newW = theWid
                                }
                                if(initialX > theWid)
                                {
                                    newX = theWid
                                    newW = initialX - canvasOffsetX;
                                }
                                if(initialY < theHei)
                                {
                                    newY = initialY - canvasOffsetY;
                                    newH = theHei
                                }
                                if(initialY > theHei)
                                {
                                    newY = theHei
                                    newH = initialY - canvasOffsetY;
                                }

                                if(nodeXcoord > newX && nodeXcoord < newW && nodeYcoord > newY && nodeYcoord < newH)
                                {
                                    if(selectedNodes.length == 0)
                                    {
                                        selectedNodes.push(nodeList[i]["uniqueID"]);
                                    }
                                    else
                                    {
                                        for(j = 0; j < selectedNodes.length; j++)
                                        {
                                            if (nodeList[i]["uniqueID"] != selectedNodes[j])
                                            {
                                                selectedNodes.push(nodeList[i]["uniqueID"]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if(dragEnable[1] == "nodeCanvasMoveDrag")
                {
                    for(i = 0; i < selectedNodes.length; i++)
                    {
                        addX = selNodeCoo[i][0] - (initialX - mouse[0]);
                        addY = selNodeCoo[i][1] - (initialY - mouse[1]);

                        nodeList[findNode(selectedNodes[i])]["x"] = addX;
                        nodeList[findNode(selectedNodes[i])]["y"] = addY;

                        selNodeCoo[i][0] = nodeList[findNode(selectedNodes[i])]["x"];
                        selNodeCoo[i][1] = nodeList[findNode(selectedNodes[i])]["y"];
                    }
                    initialX = mouse[0];
                    initialY = mouse[1];

                    if(mouse[6] == 0)
                    {
                        dragEnable[0] = false;
                        dragEnable[1] = "none";
                        selNodeCoo = [];
                    }
                }
            }
        }

        for(i = 0; i < edgeList.length; i++)
        {
            sourceX = (((currentNodeList[findNode(edgeList[i]["source"])]["x"] - (nodeSize / 2)) * zoom) - canvasOffsetX) + (nodeSize / 2);
            sourceY = (((currentNodeList[findNode(edgeList[i]["source"])]["y"] - (nodeSize / 2)) * zoom) - canvasOffsetY) + (nodeSize / 2);
            destX = (((currentNodeList[findNode(edgeList[i]["destination"])]["x"] - (nodeSize / 2)) * zoom) - canvasOffsetX) + (nodeSize / 2);
            destY = (((currentNodeList[findNode(edgeList[i]["destination"])]["y"] - (nodeSize / 2)) * zoom) - canvasOffsetY) + (nodeSize / 2);

            set_source_rgba(edgeList[i]["col"]);
            set_line_width(edgeList[i]["thickness"]);
            move_to(sourceX, sourceY);
            line_to(destX, destY);
            stroke();
        }

        for(i = 0; i < nodeList.length; i++)
        {
            theCol = nodeList[i]["col"];

            for (j = 0; j < selectedNodes.length; j++)
            {
                if(nodeList[i]["uniqueID"] == selectedNodes[j])
                {
                    theCol = selCol;
                    break;
                }
            }

            set_source_rgba(theCol);
            ellipse(((nodeList[i]["x"] - (nodeList[i]["size"] / 2)) * zoom) - canvasOffsetX, ((nodeList[i]["y"] - (nodeList[i]["size"] / 2)) * zoom) - canvasOffsetY, nodeList[i]["size"], nodeList[i]["size"]);
            fill();

            if(showText)
            {
                set_source_rgba(txtCol);
                select_font_face(fontFace);
                set_font_size(btnFontSize);
                txtMes = text_measure(nodeList[i]["name"]);
                move_to(((nodeList[i]["x"] - (nodeList[i]["size"] / 2)) * zoom) - canvasOffsetX - (txtMes[0] / 2), ((nodeList[i]["y"] - (nodeList[i]["size"] / 2)) * zoom) - canvasOffsetY + ((txtMes[1] / 2) / 2));
                text_path(nodeList[i]["name"]);
                fill();
            }
        }

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y);
        stroke();
    }
}

exports.resetGraphCam = function ()
{
    // ##############################
    // Reset the network graph to the original zoom and position.
    // ##############################

    canvasOffsetX = 0;
    canvasOffsetY = 0;
    initialX = 0;
    initialY = 0;
    oldOffsetX = 0;
    oldOffsetY = 0;
}

exports.infoBar = function (x, y, w, h, mouse, camLevel)
{
    // ##############################
    // Creates a small info bar that displays hover messages.
    // ##############################

    with (mgraphics)
    {
        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
                currentInfoText = "Info bar.";
        }

        txt = currentInfoText;

        var trimLen = true;
        while(trimLen)
        {
            txtMes = text_measure(txt);
            if(txtMes[0] > w + 5)
            {
                if (txt.slice(-5) == "(...)")
                {
                    txt = txt.slice(0, -5)
                }
                txt = txt.slice(0, -1);
                txt = txt + "(...)";
            }
            else
            {
                trimLen = false;
            }
        }

        set_source_rgba(btnCol);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure(txt);
        move_to(x + 5, ((y + (h / 2)) + ((txtMes[1] / 2) / 2)));
        text_path(txt);
        fill();
    }
}

exports.boxToggle = function (x, y, w, h, mouse, variable, func, desc, toggleName, camLevel)
{
    // ##############################
    // Creates a toggle box that is tied to a variable.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = btnCol;

        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = hoverCol;
            }
        }

        var selected = false;

        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                selected = true;
                clickEnable[0] = true;
                clickEnable[1] = toggleName;
            }

        }

        if(cameraFocus == camLevel)
        {
            if(clickEnable[0])
            {
                if(clickEnable[1] == toggleName)
                {
                    if(mouse[2] == 0)
                    {
                        if(eval(variable))
                        {
                            eval(variable + "= false");
                        }
                        else
                        {
                            eval(variable + "= true");
                        }

                        eval(func);
                        clickEnable[0] = false;
                        clickEnable[1] = "none";
                    }
                }
            }
        }

        set_source_rgba(unselectedCol);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();

        if(eval(variable))
        {
            set_source_rgba(btnColSel);
        }
        else
            set_source_rgba(togDarkCol);

        rectangle(x + (w * 0.25), y + (h * 0.25), w - (2 * (w * 0.25)), h - (2 * (h * 0.25)));
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x + (w * 0.25), y + (h * 0.25));
        line_to((x + (w * 0.25)) + (w - (2 * (w * 0.25))), y + (h * 0.25));
        line_to((x + (w * 0.25)) + (w - (2 * (w * 0.25))), (y + (h * 0.25)) + h - (2 * (h * 0.25)));
        line_to(x + (w * 0.25), (y + (h * 0.25)) + h - (2 * (h * 0.25)));
        line_to(x + (w * 0.25), (y + (h * 0.25)) - (btnBorder / 2));
        stroke();
    }
}

exports.dropMenu = function (x, y, w, h, mouse, func, list, desc, menuName, menuState, camLevel, topDyn, topName, excluseIdxList, descList)
{
    // ##############################
    // Creates a drop-down menu.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = btnCol;

        if(cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = hoverCol;
            }
        }

        if(menuState[1] == true)
        {
            forSelY = 0;
            drawHover = false;
            unselectedCol = hoverCol;
            for(i = 0; i < list.length; i++)
            {
                if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + (h * (i + 2)))
                {
                    drawHover = true;
                    currentInfoText = descList[i];
                    forSelY = i;
                    break;
                }
            }



            set_source_rgba(btnCol);
            rectangle(x, y, w, h * (list.length + 1));
            fill();

            if(drawHover)
            {
                set_source_rgba(unselectedCol);
                rectangle(x, y + h + (h * forSelY), w, h);
                fill();
            }


            set_source_rgba(txtCol);
            set_line_width(btnBorder);
            move_to(x, y);
            line_to(x + w, y);
            line_to(x + w, y + (h * (list.length + 1)));
            line_to(x, y + (h * (list.length + 1)));
            line_to(x, y - (btnBorder / 2));
            stroke();

            set_source_rgba(txtCol);
            select_font_face(fontFace);
            set_font_size(btnFontSize);

            for(i = 0; i < list.length; i++)
            {
                textDraw = list[i];
                var trimLen = true;
                while(trimLen)
                {
                    txtMes = text_measure(textDraw);
                    if(txtMes[0] > w - 5)
                    {
                        if (textDraw.slice(-5) == "(...)")
                        {
                            textDraw = textDraw.slice(0, -5)
                        }
                        textDraw = textDraw.slice(0, -1);
                        textDraw = textDraw + "(...)";
                    }
                    else
                    {
                        trimLen = false;
                    }
                }

                txtMes = text_measure(textDraw);
                move_to(x + 5, ((y + (h / 2)) + ((txtMes[1] / 2) / 2) + (h * (i + 1))));
                text_path(textDraw);
                fill();
            }
        }

        set_source_rgba(unselectedCol);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();

        if(topDyn)
            topTextDraw = list[menuState[0]];
        else
            topTextDraw = topName;

        var trimLen = true;
        while(trimLen)
        {
            txtMes = text_measure(topTextDraw);
            if(txtMes[0] > w - text_measure("▾")[0] - 5)
            {
                if (topTextDraw.slice(-5) == "(...)")
                {
                    topTextDraw = topTextDraw.slice(0, -5)
                }
                topTextDraw = topTextDraw.slice(0, -1);
                topTextDraw = topTextDraw + "(...)";
            }
            else
            {
                trimLen = false;
            }
        }

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure(topTextDraw);
        move_to(x + 5, (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        text_path(topTextDraw);
        fill();

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure("▾");
        move_to((x + w) - 10, (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        text_path('↓');
        fill();


        if(cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                selected = true;
                clickEnable[0] = true;
                clickEnable[1] = menuName;
            }
        }

        if(cameraFocus == camLevel || cameraFocus == camLevel + 1)
        {
            if(clickEnable[0])
            {
                if(clickEnable[1] == menuName)
                {
                    if(mouse[2] == 0)
                    {
                        if(menuState[1])
                        {
                            menuState[1] = false;
                            newtTickFocus = camLevel;
                        }
                        else
                        {
                            menuState[1] = true;
                            newtTickFocus = camLevel + 1;
                        }

                        clickEnable[0] = false;
                        clickEnable[1] = "none";
                    }
                }
            }
        }

        if(cameraFocus == camLevel || cameraFocus == camLevel + 1)
        {
            if(menuState[1])
            {
                if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y + h && mouse[1] < y + (h * (list.length + 1)) && mouse[2] == 1)
                {
                    selected = true;
                    clickEnable[0] = true;
                    clickEnable[1] = menuName + "clicked";
                    newtTickFocus = camLevel + 1;
                }
                else if(mouse[2] == 1)
                {
                    clickEnable[0] = false;
                    clickEnable[1] = "none";
                    menuState[1] = false;
                    newtTickFocus = camLevel;
                }

                if(clickEnable[0])
                {
                    if(clickEnable[1] == menuName + "clicked")
                    {
                        if(mouse[2] == 0)
                        {
                            clickEnable[0] = false;
                            clickEnable[1] = "none";
                            newtTickFocus = camLevel;
                            menuState[1] = false;

                            selNonElement = false;
                            for(i = 0; i < list.length; i++)
                            {
                                if(selNonElement != true)
                                {
                                    if(mouse[1] < y + (h * (i + 2)))
                                    {
                                        var isElement = true;
                                        for(exIdx = 0; exIdx < excluseIdxList.length; exIdx++)
                                        {
                                            if (i == excluseIdxList[exIdx])
                                            {
                                                isElement = false;
                                                selNonElement = true;
                                                break;
                                            }
                                        }

                                        if(isElement)
                                        {
                                            menuState[0] = i;
                                            eval(func);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

exports.popUpCanvas = function(x, y, w, h, mouse, title, camLevel, closeFunc, desc, clickOut)
{
    // ##############################
    // A blank window for a pop-up with a quit button.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = btnCol;

        crossX = (x + w) - crossSize;

        var inBox = true;

        if(cameraFocus == camLevel)
        {
            if(mouse[0] > crossX && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + crossSize)
            {
                currentInfoText = "Close.";
                inBox = true;
                unselectedCol = hoverCol;
            }
            else if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                inBox = true;
            }
            else
            {
                inBox = false;
            }
        }

        if(cameraFocus == camLevel)
        {
            if(mouse[0] > crossX && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + crossSize && mouse[2] == 1)
            {
                eval(closeFunc);
                canSelDragCanv = false;
            }
            else if(clickOut && mouse[2] && inBox == false)
            {
                eval(closeFunc);
                canSelDragCanv = false;
            }
        }

        set_source_rgba(btnCol);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(unselectedCol);
        rectangle(crossX, y, crossSize, crossSize);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(crossX, y);
        line_to(crossX, y + crossSize);
        line_to(crossX + crossSize, y + crossSize);
        stroke();

        var trimLen = true;
        while(trimLen)
        {
            txtMes = text_measure(title);
            if(txtMes[0] > w - 5 - crossSize)
            {
                if (title.slice(-5) == "(...)")
                {
                    title = title.slice(0, -5)
                }
                title = title.slice(0, -1);
                title = title + "(...)";
            }
            else
            {
                trimLen = false;
            }
        }

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure(title);
        move_to(x + 5, y + txtMes[1]);
        text_path(title);
        fill();

        txtMes = text_measure("X");
        move_to(crossX + (crossSize / 2.5), y + (crossSize / 1.5));
        text_path("x");
        fill();
    }
}

exports.txtBox = function(x, y, w, h, mouse, txt, desc, camLevel, align)
{
    // ##############################
    // Draw some text with chosen alignment (cen, left, right).
    // ##############################

    with (mgraphics)
    {
        if(cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
            }
        }

        var trimLen = true;
        while(trimLen)
        {
            txtMes = text_measure(txt);
            if(txtMes[0] > w - 5)
            {
                if (txt.slice(-5) == "(...)")
                {
                    txt = txt.slice(0, -5)
                }
                txt = txt.slice(0, -1);
                txt = txt + "(...)";
            }
            else
            {
                trimLen = false;
            }
        }

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure(txt);

        if(align == "cen")
        {
            move_to((x + (w / 2)) - (txtMes[0] / 2), (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        }
        if(align == "left")
        {
            move_to(x + 5, (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        }
        if(align == "right")
        {
            move_to(((x + w) - txtMes[0]) - 5, (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        }

        text_path(txt);
        fill();
    }
}

exports.txtBoxFill = function(x, y, w, h, mouse, txt, desc, camLevel, align)
{
    // ##############################
    // Draw some text with chosen alignment (cen, left, right).
    // ##############################

    with (mgraphics)
    {
        set_source_rgba(btnCol);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();

        if(cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
            }
        }

        var trimLen = true;
        while(trimLen)
        {
            txtMes = text_measure(txt);
            if(txtMes[0] > w - 5)
            {
                if (txt.slice(-5) == "(...)")
                {
                    txt = txt.slice(0, -5)
                }
                txt = txt.slice(0, -1);
                txt = txt + "(...)";
            }
            else
            {
                trimLen = false;
            }
        }

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure(txt);

        if(align == "cen")
        {
            move_to((x + (w / 2)) - (txtMes[0] / 2), (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        }
        if(align == "left")
        {
            move_to(x + 5, (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        }
        if(align == "right")
        {
            move_to(((x + w) - txtMes[0]) - 5, (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        }

        text_path(txt);
        fill();
    }
}

exports.numBox = function(x, y, w, h, mouse, desc, camLevel, variable, func, max, min)
{
    // ##############################
    // Draw some text with chosen alignment (cen, left, right).
    // ##############################

    with (mgraphics)
    {
        if(cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
            }
        }

        set_source_rgba(btnCol);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to(x, y);
        line_to(x + w, y);
        line_to(x + w, y + h);
        line_to(x, y + h);
        line_to(x, y - (btnBorder / 2));
        stroke();

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure(String(variable));
        move_to(x + 5, (y + (h / 2)) + ((txtMes[1] / 2) / 2));
        text_path(String(variable));
        fill();

        set_source_rgba(txtCol);
        set_line_width(btnBorder);
        move_to((x + w) - 20, y);
        line_to((x + w) - 20, y + h);
        stroke();
        move_to((x + w) - 20, y + (h / 2));
        line_to(x + w, y + (h / 2));
        stroke();

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure("▴");
        move_to((x + w) - 13, (y + ((h / 2) / 2)) + ((txtMes[1] / 2) / 2));
        text_path("▴");
        fill();

        set_source_rgba(txtCol);
        select_font_face(fontFace);
        set_font_size(btnFontSize);
        txtMes = text_measure("▾");
        move_to((x + w) - 13, (y + (h / 2)) + ((txtMes[1] / 2) / 2) + (h / 3));
        text_path("▾");
        fill();
    }
}

// #################################################################################
// Internal functions ##############################################################
// #################################################################################

function findNode(uniqueID)
{
    // ##############################
    // Find the index of a node in the node list from it's unique ID.
    // ##############################

    for(j = 0; j < currentNodeList.length; j++)
    {
        if(currentNodeList[j]["uniqueID"] == uniqueID)
        {
            break;
        }
    }
    return j;
}
