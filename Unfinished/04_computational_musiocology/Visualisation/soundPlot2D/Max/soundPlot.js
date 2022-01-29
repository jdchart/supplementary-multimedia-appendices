// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// soundPlot.js
// 2D sound visualiser for the JSUI object in Max MSP.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Current issues: 
// In the load_csv function, retrieving non-essential parameters in a csv file with no header causes a memory leak.
// This is thus bypassed for the time being.

// Object initialisation:
mgraphics.init();
setinletassist(0, "Control In");
setoutletassist(0, "Selected Node Out");

// Global variables:
var verbose = false;
var internalNodeDict = {};
var internalEdgeDict = {};
var selectedNode = -1;
var clickPadding = 2;
var clickedOffset = [0, 0];
var clickedDragNode = [0, 0];
var dragNode = -1;
// mode, 0 = "internal_dict".
var mode = 0;
// clickMode, 0 = "on_element"
var clickMode = 0
// style = [backgroundCol, borderCol, borderWidth, selectedNodeCol]
var style = [[0.200, 0.200, 0.200, 1.000], [0.502, 0.502, 0.502, 1.000], 5, [0.902, 0.831, 0.373, 1.000]];
// cameraState = [zoom, xOffset, yOffset]
var cameraState = [1, 0, 0];
// mouseState = [x, y, button, shift, clicked, dragging, xOnClick, yOnClick]
var mouseState = [];

function paint()
{
    // Painting the graphics.
    // This is refreshed every time mgraphics.redraw(); is called.

    boxInfo = get_box_info(this);

    draw_background(0, 0, boxInfo[2], boxInfo[3], style[0]);

    draw_network(mode, style, cameraState, mouseState);

    draw_border(0, 0, boxInfo[2], boxInfo[3], style[1], style[2]);
}

function load_csv(file, dictType, addMode, header)
{
    // Update an internal dict with information from a .csv file.

    // dictType (int) refers to 0 = internalNodeDict, 1 = internalEdgeDict;
    // addMode (int) refers to 0 = overwrite, 1 = append.
    // header (int) indicates in the csv file has a header or not.

    // All csv files should contain at least the following information for all nodes:
    //              - "uniqueid"
    //              - "x"
    //              - "y"
    //              - "size"
    //              - "red"
    //              - "green"
    //              - "blue"
    //              - "alpha"
    // And the following information for all edges:
    //              - "source"
    //              - "target"
    //              - "width"
    //              - "red"
    //              - "green"
    //              - "blue"
    //              - "alpha"
    // If there is no header indicating the position of these, then you must use this order.

    if(addMode == 0)
    {
        if(dictType == 0)
        {
            internalNodeDict = {};
            if(verbose)
                post("soundPlot.js: Cleared internal node dict.\n");
        }
        if(dictType == 1)
        {
            internalEdgeDict = {};
            if(verbose)
                post("soundPlot.js: Cleared internal edge dict.\n");
        }
    }

    f = new File(file, "r");
    f.open();

    if(dictType == 0)
    {
        infoIdx = [0, 1, 2, 3, 4, 5, 6, 7];
    }
    else if(dictType == 1)
    {
        infoIdx = [0, 1, 2, 3, 4, 5, 6];
    }
    
    otherParams = [];
    if(header == 1)
    {
        headerArray = f.readline().split(",");

        if(dictType == 0)
        {
            for(i = 0; i < headerArray.length; i++)
            {
                if(headerArray[i] == "uniqueid")
                {
                    infoIdx[0] = i;
                }
                else if(headerArray[i] == "x")
                {
                    infoIdx[1] = i;
                }
                else if(headerArray[i] == "y")
                {
                    infoIdx[2] = i;
                }
                else if(headerArray[i] == "size")
                {
                    infoIdx[3] = i;
                }
                else if(headerArray[i] == "red")
                {
                    infoIdx[4] = i;
                }
                else if(headerArray[i] == "green")
                {
                    infoIdx[5] = i;
                }
                else if(headerArray[i] == "blue")
                {
                    infoIdx[6] = i;
                }
                else if(headerArray[i] == "alpha")
                {
                    infoIdx[7] = i;
                }
                else
                {
                    otherParams.push([i, headerArray[i]]);
                }
            }
        }
        else if(dictType == 1)
        {
            for(i = 0; i < headerArray.length; i++)
            {
                if(headerArray[i] == "source")
                {
                    infoIdx[0] = i;
                }
                else if(headerArray[i] == "target")
                {
                    infoIdx[1] = i;
                }
                else if(headerArray[i] == "width")
                {
                    infoIdx[2] = i;
                }
                else if(headerArray[i] == "red")
                {
                    infoIdx[3] = i;
                }
                else if(headerArray[i] == "green")
                {
                    infoIdx[4] = i;
                }
                else if(headerArray[i] == "blue")
                {
                    infoIdx[5] = i;
                }
                else if(headerArray[i] == "alpha")
                {
                    infoIdx[6] = i;
                }
                else
                {
                    otherParams.push([i, headerArray[i]]);
                }
            }
        }
    }

    while(f.eof > f.position)
    {
        lineArray = f.readline().split(",");
        tempDict = {};

        if(dictType == 0)
        {
            tempDict["uniqueid"] = lineArray[infoIdx[0]];
            tempDict["x"] = lineArray[infoIdx[1]];
            tempDict["y"] = lineArray[infoIdx[2]];
            tempDict["size"] = lineArray[infoIdx[3]];
            tempDict["red"] = lineArray[infoIdx[4]];
            tempDict["green"] = lineArray[infoIdx[5]];
            tempDict["blue"] = lineArray[infoIdx[6]];
            tempDict["alpha"] = lineArray[infoIdx[7]];
        }
        else if(dictType == 1)
        {
            tempDict["source"] = lineArray[infoIdx[0]];
            tempDict["target"] = lineArray[infoIdx[1]];
            tempDict["width"] = lineArray[infoIdx[2]];
            tempDict["red"] = lineArray[infoIdx[3]];
            tempDict["green"] = lineArray[infoIdx[4]];
            tempDict["blue"] = lineArray[infoIdx[5]];
            tempDict["alpha"] = lineArray[infoIdx[6]];
        }

        if(header == 1)
        {
            for(i = 0; i < otherParams.length; i++)
            {
                tempDict[otherParams[i][1]] = lineArray[otherParams[i][0]];
            }
        }
        else
        {
            // THIS IS CAUSING A MEMORY LEAK FOR SOME REASON !!!
            // CONSEQUENCE: NO ADDITIONAL PARAMETERS IF NO HEADER PROVIDED.
            /*
            j = 0;
            for(i = 8; lineArray.length; i++)
            {
                paramName = "param_" + String(j);
                tempDict[paramName] = lineArray[i];
                j = j + 1;
            }
            */
        }

        if(dictType == 0)
        {
            internalNodeDict[tempDict["uniqueid"]] = tempDict;
            if(verbose)
                post("soundPlot.js: Added " + tempDict["uniqueid"] + " to internal node dict.\n");
        }
        if(dictType == 1)
        {
            edgeName = tempDict["source"] + "_" + tempDict["target"];
            internalEdgeDict[edgeName] = tempDict;
            if(verbose)
                post("soundPlot.js: Added " + edgeName + " to internal edge dict.\n");
        }
    }

    f.close();

    mgraphics.redraw();
}

function post_dict(dict)
{
    // Post the contents of one of the internal dicts.

    for(key in dict)
    {
        post("---" + key + ":\n")
        for(key2 in dict[key])
        {
            post(" -" + key2 + ": " + dict[key][key2] + "\n");
        }
        post("\n");
    }
}

function get_box_info(obj)
{
    // Return the follwing list about the max object box:
    // [x, y, w, h]

    x = obj.box.rect[0];
    y = obj.box.rect[1];
    w = obj.box.rect[2] - obj.box.rect[0];
    h = obj.box.rect[3] - obj.box.rect[1];

    return [x, y, w, h];
}

function click_check(mouseX, mouseY, camera)
{
    // Check to see if a node has been clicked on and handle info output.

    if(clickMode == 0)
    {
        clickedNode = -1
        for(key in internalNodeDict)
        {
            nodeX = internalNodeDict[key]["x"]; 
            nodeX = (nodeX * camera[0]) - camera[1];
            if(mouseX > nodeX - (internalNodeDict[key]["size"] * 0.5) - clickPadding && mouseX < nodeX + (internalNodeDict[key]["size"] * 0.5) + clickPadding)
            {
                nodeY = internalNodeDict[key]["y"];
                nodeY = (nodeY * camera[0]) - camera[2];
                if(mouseY > nodeY - (internalNodeDict[key]["size"] * 0.5) - clickPadding && mouseY < nodeY + (internalNodeDict[key]["size"] * 0.5) + clickPadding)
                {
                    clickedNode = key;
                    outString = "key " + key
                    for(key2 in internalNodeDict[key])
                    {
                        outString = outString + " " + key2 + " " + internalNodeDict[key][key2]
                    }
                    outlet(0, outString);
                }
            }
        }

        return clickedNode
    }
}

function draw_network(mode, style, camera, mouse)
{
    // Draw the actual network.

    with(mgraphics)
    {
        if(mode == 0)
        {
            // Clicking:
            if(mouse[4])
            {
                if(mouse[2] == 0)
                {
                    selectedNode = click_check(mouse[0], mouse[1], camera);
                    mouse[4] = false;
                }
            }

            // Dragging:
            if(mouse[5] && mouseState[3] == 0)
            {
                camera[1] = clickedOffset[0] + (mouse[6] - mouse[0]);
                camera[2] = clickedOffset[1] + (mouse[7] - mouse[1]);

                if(mouse[2] == 0)
                {
                    mouse[5] = false;
                }
            }
            if(mouse[5] && mouseState[3] == 1)
            {
                if(dragNode != -1)
                {
                    internalNodeDict[dragNode]["x"] = clickedDragNode[0] - (mouse[6] - mouse[0]);
                    internalNodeDict[dragNode]["y"] = clickedDragNode[1] - (mouse[7] - mouse[1]);
                }

                if(mouse[2] == 0)
                {
                    dragNode = -1;
                    mouse[5] = false;
                }
            }

            // Drawing edges:
            for(key in internalEdgeDict)
            {
                set_source_rgba([internalEdgeDict[key]["red"], internalEdgeDict[key]["green"], internalEdgeDict[key]["blue"], internalEdgeDict[key]["alpha"]]);
                set_line_width(internalEdgeDict[key]["width"]);
                sourceX = internalNodeDict[internalEdgeDict[key]["source"]]["x"];
                sourceY = internalNodeDict[internalEdgeDict[key]["source"]]["y"];
                targetX = internalNodeDict[internalEdgeDict[key]["target"]]["x"];
                targetY = internalNodeDict[internalEdgeDict[key]["target"]]["y"];
                move_to((sourceX * camera[0]) - camera[1], (sourceY * camera[0]) - camera[2]);
                line_to((targetX * camera[0]) - camera[1], (targetY * camera[0]) - camera[2]);
                stroke();
            }

            // Drawing nodes:
            for(key in internalNodeDict)
            {
                if(selectedNode != key)
                    set_source_rgba([internalNodeDict[key]["red"], internalNodeDict[key]["green"], internalNodeDict[key]["blue"], internalNodeDict[key]["alpha"]]);
                else
                    set_source_rgba(style[3]);
                nodeX = internalNodeDict[key]["x"];
                nodeY = internalNodeDict[key]["y"];
                ellipse(((nodeX * camera[0]) - camera[1]) - (internalNodeDict[key]["size"] * 0.5), ((nodeY * camera[0]) - camera[2]) - (internalNodeDict[key]["size"] * 0.5), internalNodeDict[key]["size"], internalNodeDict[key]["size"]);
                fill();
            }
        }
    }
}

function draw_background(x, y, w, h, col)
{
    // Draws the canvas background.

    with(mgraphics)
    {
        set_source_rgba(col);
        rectangle(x, y, w, h);
        fill();   
    }
}

function draw_border(x, y, w, h, col, width)
{
    // Draws the canvas border.
    // For no border, make the border width 0.

    with(mgraphics)
    {
        if(width > 0)
        {
            set_source_rgba(col);
            set_line_width(width);
            indent = width * 0.5;
            move_to(0 + indent, 0 + indent);
            line_to(w - indent, 0 + indent);
            line_to(w - indent, h - indent);
            line_to(0 + indent, h - indent);
            line_to(0 + indent, 0);
            stroke();
        }
    }
}

function set_background_col(r, g, b, a)
{
    // Change the background colour.

    if(r >= 0 && r <= 1 && g >= 0 && g <= 1 && b >= 0 && b <= 1 && a >= 0 && a <= 1)
    {
        style[0][0] = r;
        style[0][1] = g;
        style[0][2] = b;
        style[0][3] = a;
    
        if(verbose)
            post("soundPlot.js: Background colour set to " + String(style[0]) + ".\n");
    
        mgraphics.redraw();
    
        return [r, g, b, a];
    }
    else
    {
        error("soundPlot.js: Colour values must be within 0 and 1.\n");
    }
}

function set_border_col(r, g, b, a)
{
    // Change the border colour.

    if(r >= 0 && r <= 1 && g >= 0 && g <= 1 && b >= 0 && b <= 1 && a >= 0 && a <= 1)
    {
        style[1][0] = r;
        style[1][1] = g;
        style[1][2] = b;
        style[1][3] = a;
    
        if(verbose)
            post("soundPlot.js: Border colour set to " + String(style[1]) + ".\n");
    
        mgraphics.redraw();
    
        return [r, g, b, a];
    }
    else
    {
        error("soundPlot.js: Colour values must be within 0 and 1.\n");
    }
}

function set_border_width(w)
{
    // Change the border width.

    if(w >= 0)
    {
        style[2] = Math.floor(w);

        if(verbose)
            post("soundPlot.js: Border width set to " + String(style[2]) + ".\n");

        mgraphics.redraw();

        return w;
    }
    else
    {
        error("soundPlot.js: Border width must be 0 or higher.\n");
    } 
}

function set_zoom(x)
{
    // Change the zoom.

    if(x >= 0.01)
    {
        cameraState[0] = x;

        if(verbose)
            post("soundPlot.js: Zoom set to " + String(cameraState[0]) + ".\n");

        mgraphics.redraw();

        return w;
    }
    else
    {
        error("soundPlot.js: Border width must be 0.01 or higher.\n");
    } 
}

function set_xoffset(x)
{
    // Change the x offset.

    cameraState[1] = x;

    if(verbose)
        post("soundPlot.js: X offset set to " + String(cameraState[1]) + ".\n");

    mgraphics.redraw();

    return w;
}

function set_yoffset(x)
{
    // Change the y offset.

    cameraState[2] = x;

    if(verbose)
        post("soundPlot.js: Y offset set to " + String(cameraState[2]) + ".\n");

    mgraphics.redraw();

    return w;
}

function set_mode(x)
{
    // Change the way the plot object retrieves it's data.
    // By default this is from it's own internal dict.

    if(x == 0 || x == "internal_dict")
    {
        mode = 0;
        if(verbose)
            post("soundPlot.js: Mode set to internal dict mode.\n");
    }
    else
    {
        error("soundPlot.js: Unknown mode.\n");
    }

    return mode;
}

function set_click_mode(x)
{
    // The way the object recognises clicks.
    // By default the user has to click on the element.

    if(x == 0 || x == "on_element")
    {
        mode = 0;
        if(verbose)
            post("soundPlot.js: Click mode set to click on element mode.\n");
    }
    else
    {
        error("soundPlot.js: Unknown mode.\n");
    }

    return mode;
}

function onclick(x, y, button, shift)
{
    mouseState[0] = x;
    mouseState[1] = y;
    mouseState[2] = button;
    mouseState[3] = shift;
    mouseState[4] = true;
    mouseState[6] = x;
    mouseState[7] = y;
    clickedOffset[0] = cameraState[1];
    clickedOffset[1] = cameraState[2];

    if(mouseState[3] == 1)
    {
        dragNode = click_check(x, y, cameraState);
        clickedDragNode[0] = internalNodeDict[dragNode]["x"];
        clickedDragNode[1] = internalNodeDict[dragNode]["y"];
    }

    mgraphics.redraw();
}

function ondrag(x, y, button, shift)
{
    mouseState[0] = x;
    mouseState[1] = y;
    mouseState[2] = button;
    mouseState[3] = shift;
    mouseState[5] = true;

    mgraphics.redraw();
}

function onidle(x, y, button, shift)
{
    mouseState[0] = x;
    mouseState[1] = y;
    mouseState[2] = button;
    mouseState[3] = shift;

    mgraphics.redraw();
}