// ---------------------------------------------------------------------------------
//
// jsuiui for Max.
// Use this to make sturdy JSUI UIs in Max.
//
// jacob.dchart@gmail.com
//
// ---------------------------------------------------------------------------------

// Consult the jsuiuiExample.js file to see the small number of things which are
// require within your paretn file for JSUIUI to work.

// #################################################################################
// MODIFY & ADD TO THESE... ########################################################
// #################################################################################

// ----------> Starting info bar message:
var currentInfoText = "Fluid Control - a useful thing to have if wanting to re-use trousers.";

// ----------> Drop down menus:
// Every drop-down menu needs attributes:
//                          [buttonList,
//                           buttonDescList,
//                           menuState, menuTitleDynamic, topName,
//                           ignoreList];
exports.objChooseMenAttr = [["Amplitude Slicer (offline)", "Novelty Slicer (offline)", "Onset Slicer (offline)", "Transient Slicer (offline)",
                         "", "Amplitude Slicer (real-time)", "Novelty Slicer (real-time)", "Onset Slicer (real-time)", "Transient Slicer (real-time)",
                         "", "Harmonic/Percussive (offline)", "NMF (offline)", "Sines (offline)", "Transients (offline)",
                         "", "Harmonic/Percussive (real-time)", "Sines (real-time)", "Transients (real-time)"],
                        ["Slice a buffer in time according to amplitude detection.", "Slice a buffer in time according to novelty.",
                         "Slice a buffer in time according to onset detection.", "Slice a buffer in time according to transient detection.",
                         "", "Detect amplitude in an incoming signal in real-time.", "Detect novelty in an incoming signal in real-time.",
                         "Detect onsets in an incoming signal in real-time.", "Detect transients in an incoming signal in real-time.",
                         "", "Seperate harmonic and percussive content in a buffer.", "Use NMF (a type of machine learning) to detect different elements in the spectrum of a buffer.",
                         "Seperate the sinusoïdal content of a buffer from the rest.", "Seperate the transient content of a buffer from the rest.",
                         "", "Seperate harmonic content and percussive content in an incoming signal in real-time.", "Seperate sinusoïdal content from the rest in an incoming signal in real-time.",
                         "Seperate the transient content from the rest in an incoming signal in real-time."],
                        [0, false], true, "",
                        [4, 9, 14]];
exports.preChooseMenAttr = [["Preset 1", "Preset 2", "Preset 3"],
                        ["Choose preset 1.", "Choose preset 2.", "Choose preset 3."],
                        [0, false], false, "Preset",
                        [4, 9, 14]];

// ----------> Network graph:
// A network graph can display networks, or just graphs.
// If you do not want any edge info, just keep the edge list blank.
// Each node must have at least the following keys:
//              {uniqueID, name, x, y, size, col}
var testNodeList = [{"uniqueID" : "node1", "name" : "A", "x" : 10, "y" : 10, "size" : 10, "col" : [0.169, 0.663, 0.118, 1.000]},
                    {"uniqueID" : "node2", "name" : "B", "x" : 30, "y" : 10, "size" : 10, "col" : [0.169, 0.663, 0.118, 1.000]},
                    {"uniqueID" : "node3", "name" : "C", "x" : 40, "y" : 15, "size" : 10, "col" : [0.169, 0.663, 0.118, 1.000]},
                    {"uniqueID" : "node4", "name" : "D", "x" : 50, "y" : 30, "size" : 10, "col" : [0.169, 0.663, 0.118, 1.000]},
                    {"uniqueID" : "node5", "name" : "E", "x" : 50, "y" : 40, "size" : 10, "col" : [0.169, 0.663, 0.118, 1.000]}];
// Each edge must have at least the following keys:
//              {source, destination, thickness, col}
var testEdgeList = [{"source" : "node2", "destination" : "node3", "thickness" : 5, "col" : [0.000, 0.000, 0.000, 1.000]},
                    {"source" : "node2", "destination" : "node5", "thickness" : 5, "col" : [0.000, 0.000, 0.000, 1.000]},
                    {"source" : "node1", "destination" : "node2", "thickness" : 3, "col" : [0.000, 0.000, 0.000, 1.000]}];
// Every net-graph needs attributes:,
//              [nodeList, edgeList,
//               canvasOffsetX, canvasOffsetY, oldOffsetX, oldOffsetY,
//               selNodeCoords, selectedNodes, zoom,
//               initialX, initialY, showLabel, label];
exports.graphAttr = [testNodeList, testEdgeList,
                     0, 0, 0, 0,
                     [], [], 1,
                     0, 0, true, "name"];
var nodeInfoPopState = [false, 0, 0, 0];
// ----------> Drawing styles:
// A style defines: [backgroundColour, hoverColour, selectColour,
//                   borderColour, textColour, borderSize, font, fontSize,
//                   textButtonAlign, dropMenuAlign, textCushion, sliderWidth, popupCrossSize,
//                   graphBackColour, dragSelectColour, nodeSelectColour]
// This style uses the Max4Live colours and font:
exports.m4lStyle = [[0.647, 0.647, 0.647, 1.000], [0.498, 0.498, 0.498, 1.000], [1.000, 0.710, 0.196, 1.000],
                    [0.000, 0.000, 0.000, 1.000], [0.000, 0.000, 0.000, 1.000], 1, "Ableton Sans Medium", 9,
                    "centre", "left", 5, 10, 15,
                    [0.996, 0.996, 0.859, 1.000], [0.643, 0.145, 0.196, 0.500], [0.643, 0.145, 0.196, 1.000]];

// #################################################################################
// BEST NOT MODIFY THESE... ########################################################
// #################################################################################
// ----------> Colour Picker:
exports.pickedCol = [0.925, 0.451, 0.349, 1.000];
exports.redLvlVar = 0.925;
exports.blueLvlVar = 0.451;
exports.greenLvlVar = 0.349;
exports.transLvlVar = 1.000;
exports.colPickerOpen = false;
exports.colPickerCam = 0;
exports.colPickerReturn = 0;
// ----------> General Utility:
exports.cameraFocus = 0;
exports.newTickFocus = 0;
var clickEnable = [false, "none"];
var dragEnable = [false, "none"];
exports.removeObjList = [];
exports.getFilenameIndex = 0;
exports.getTextPop = false;
exports.getTextPopX = 0;
exports.getTextPopY = 0;
exports.getTextPopW = 0;
exports.getTextPopH = 0;
exports.getTextPopStyle = [];
exports.getTextPopMouse = [];
exports.getTextPopCamLevel = 0;
exports.getTextIndex = 0;
exports.getTextPopBtn = 20;
exports.defaultText = "hello friend!"
// ----------> Mouse State:
// [x, y, click, dblclick, dragOn, dragOff, button, shift]
exports.mouseState = [0,0,0,0,0,0,0,0];

// ---------------------------------------------------------------------------------
//
// UI objects.
//
// ---------------------------------------------------------------------------------

exports.txtBtn = function (x, y, w, h, style, mouse, camLevel, desc, btnName, txt, func)
{
    // ##############################
    // Create a button with a text label that is tied to a function.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = style[0];

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = style[1];
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

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                selected = true;
                clickEnable[0] = true;
                clickEnable[1] = btnName;
            }
        }

        if(ui.cameraFocus == camLevel)
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
            set_source_rgba(style[2]);
        else
            set_source_rgba(unselectedCol);
        rectangle(x, y, w, h);
        fill();

        draw_square_border(x, y, w, h, style);

        draw_text(x, y, w, h, txt, style, style[8]);
    }
}

exports.infoBar = function (x, y, w, h, style, mouse, camLevel)
{
    // ##############################
    // Creates a small info bar that displays hover messages.
    // ##############################

    with (mgraphics)
    {
        if(ui.cameraFocus == camLevel)
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

        set_source_rgba(style[0]);
        rectangle(x, y, w, h);
        fill();

        draw_square_border(x, y, w, h, style);

        draw_text(x, y, w, h, txt, style, "left");
    }
}

exports.blankCanvas = function (x, y, w, h, style, mouse, camLevel, desc, col, border)
{
    // ##############################
    // Creates a blank canvas with the given colour.
    // ##############################

    with (mgraphics)
    {
        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
                currentInfoText = desc;
        }

        set_source_rgba(col);
        rectangle(x, y, w, h);
        fill();

        if(border)
        {
            draw_square_border(x, y, w, h, style);
        }
    }
}

exports.hSlider = function (x, y, w, h, style, mouse, camLevel, desc, slidName, func, variable, min, max, intOrFloat)
{
    // ##############################
    // Creates a horizontal slider tied to a variable and a function.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = style[0];

        calculateX = x + style[11];
        calculateW = w - style[11];

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = style[1];
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
        //var theVar = variable;

        if (inverted)
            var scaledVar = ((theVar * -1)  - offset) / range;
        else
            var scaledVar = (theVar - offset) / range;

        var slideCol = unselectedCol;
        var currentPos = ((((scaledVar * calculateW) / 1) + (calculateX + style[5]))) - (style[11] * 0.5);

        set_source_rgba(style[0]);
        rectangle(x, y, w, h);
        fill();

        draw_square_border(x, y, w, h, style)

        move_to(x + style[11], y + ((h * 0.5) - (style[5] * 0.5)));
        line_to(x + w - style[11], y + ((h * 0.5) - (style[5] * 0.5)));
        stroke();

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > currentPos - (style[11] * 0.5) && mouse[0] <= currentPos + (style[11] * 0.5) && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                dragEnable[0] = true;
                dragEnable[1] = slidName;
            }
            else if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                var newVal = (mouse[0] - calculateX) / calculateW;
                if(newVal > 1)
                    newVal = 1;
                if (newVal < 0)
                    newVal = 0;

                // newValScaled = 0;
                // //#######
                if (inverted)
                    var newValScaled = ((newVal * range) + offset) * -1;
                else
                    var newValScaled = (newVal * range) + offset;

                if(intOrFloat == "int")
                    newValScaled = Math.floor(newValScaled);

                //ui.tempParam = newValScaled;
                eval(variable + "=" + newValScaled);
                //post(newValScaled + "\n")
                // variable = newValScaled;

                eval(func);

                var slideCol = style[2];
            }
        }

        if(ui.cameraFocus == camLevel)
        {
            if (dragEnable[0])
            {
                if(dragEnable[1] == slidName)
                {
                    var newVal = (mouse[0] - calculateX) / calculateW;
                    if(newVal > 1)
                        newVal = 1;
                    if (newVal < 0)
                        newVal = 0;

                    // newValScaled = 0;
                    // //#######
                    if (inverted)
                        var newValScaled = ((newVal * range) + offset) * -1;
                    else
                        var newValScaled = (newVal * range) + offset;

                    if(intOrFloat == "int")
                        newValScaled = Math.floor(newValScaled);

                    //ui.tempParam = newValScaled;
                    eval(variable + "=" + newValScaled);
                    // post(newValScaled + "\n")
                    // variable = newValScaled;

                    eval(func);

                    var slideCol = style[2];

                    if(mouse[6] == 0)
                    {
                        var slideCol = style[0];
                        dragEnable[0] = false;
                        dragEnable[1] = "none";
                    }
                }
            }
        }

        set_source_rgba(slideCol);
        slideX = (currentPos - (style[11] * 0.5) - style[5]);
        rectangle(slideX, y, style[11], h);
        fill();

        draw_square_border(slideX, y, style[11], h, style);
    }
}

exports.vSlider = function (x, y, w, h, style, mouse, camLevel, desc, slidName, func, variable, min, max, intOrFloat)
{
    // ##############################
    // Creates a vertical slider tied to a variable and a function.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = style[0];

        calculateY = y + style[11];
        calculateH = h - style[11];

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = style[1];
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
        var currentPos = ((((scaledVar * calculateH) / 1) + (calculateY + style[5]))) - (style[11] * 0.5);

        set_source_rgba(style[0]);
        rectangle(x, y, w, h);
        fill();

        draw_square_border(x, y, w, h, style)

        move_to(x + ((w * 0.5) + (style[5] * 0.5)), y + style[11]);
        line_to(x + ((w * 0.5) + (style[5] * 0.5)), y + h - style[11]);
        stroke();

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[1] > currentPos - (style[11] * 0.5) && mouse[1] <= currentPos + (style[11] * 0.5) && mouse[0] > x && mouse[0] < x + w && mouse[2] == 1)
            {
                dragEnable[0] = true;
                dragEnable[1] = slidName;
            }
            else if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                var newVal = (mouse[1] - calculateY) / calculateH;
                if(newVal > 1)
                    newVal = 1;
                if (newVal < 0)
                    newVal = 0;

                if (inverted)
                    var newValScaled = ((newVal * range) + offset) * -1;
                else
                    var newValScaled = (newVal * range) + offset;

                if(intOrFloat == "int")
                    newValScaled = Math.floor(newValScaled);

                eval(variable + "=" + newValScaled);

                eval(func);

                var slideCol = style[2];
            }
        }

        if(ui.cameraFocus == camLevel)
        {
            if (dragEnable[0])
            {
                if(dragEnable[1] == slidName)
                {
                    var newVal = (mouse[1] - calculateY) / calculateH;
                    if(newVal > 1)
                        newVal = 1;
                    if (newVal < 0)
                        newVal = 0;

                    if (inverted)
                        var newValScaled = ((newVal * range) + offset) * -1;
                    else
                        var newValScaled = (newVal * range) + offset;

                    if(intOrFloat == "int")
                        newValScaled = Math.floor(newValScaled);

                    eval(variable + "=" + newValScaled);

                    eval(func);

                    var slideCol = style[2];

                    if(mouse[6] == 0)
                    {
                        var slideCol = style[0];
                        dragEnable[0] = false;
                        dragEnable[1] = "none";
                    }
                }
            }
        }

        set_source_rgba(slideCol);
        slideY = (currentPos - (style[11] * 0.5) - style[5]);
        rectangle(x, slideY, w, style[11]);
        fill();

        draw_square_border(x, slideY, w, style[11], style);
    }
}

exports.boxToggle = function (x, y, w, h, style, mouse, camLevel, desc, toggleName, func, variable)
{
    // ##############################
    // Creates a toggle box that is tied to a variable and a function.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = style[0];

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = style[1];
            }
        }

        var selected = false;

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                selected = true;
                clickEnable[0] = true;
                clickEnable[1] = toggleName;
            }

        }

        if(ui.cameraFocus == camLevel)
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

        draw_square_border(x, y, w, h, style);

        if(eval(variable))
            set_source_rgba(style[2]);
        else
            set_source_rgba(style[0]);

        rectangle(x + (w * 0.25), y + (h * 0.25), w - (2 * (w * 0.25)), h - (2 * (h * 0.25)));
        fill();

        draw_square_border(x + (w * 0.25), y + (h * 0.25), w - (2 * (w * 0.25)), h - (2 * (h * 0.25)), style)
    }
}

exports.dropMenu = function (x, y, w, h, style, mouse, camLevel, desc, menuName, func, attributes)
{
    // ##############################
    // Creates a drop-down menu.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = style[0];

        if(ui.cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                unselectedCol = style[1];
            }
        }

        if(attributes[2][1] == true)
        {
            forSelY = 0;
            drawHover = false;
            unselectedCol = style[1];
            for(i = 0; i < attributes[0].length; i++)
            {
                if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + (h * (i + 2)))
                {
                    drawHover = true;
                    currentInfoText = attributes[1][i];
                    forSelY = i;
                    break;
                }
            }



            set_source_rgba(style[0]);
            rectangle(x, y, w, h * (attributes[0].length + 1));
            fill();

            if(drawHover)
            {
                set_source_rgba(unselectedCol);
                rectangle(x, y + h + (h * forSelY), w, h);
                fill();
            }

            draw_square_border(x, y, w, h * (attributes[0].length + 1), style);

            set_source_rgba(style[4]);
            select_font_face(style[6]);
            set_font_size(style[7]);

            for(i = 0; i < attributes[0].length; i++)
            {
                textDraw = attributes[0][i];
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
                move_to(x + 5, ((y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5) + (h * (i + 1))));
                text_path(textDraw);
                fill();
            }
        }

        set_source_rgba(unselectedCol);
        rectangle(x, y, w, h);
        fill();

        draw_square_border(x, y, w, h , style);

        if(attributes[3])
            topTextDraw = attributes[0][attributes[2][0]];
        else
            topTextDraw = attributes[4];

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

        set_source_rgba(style[4]);
        select_font_face(style[6]);
        set_font_size(style[7]);
        txtMes = text_measure(topTextDraw);
        move_to(x + 5, (y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5));
        text_path(topTextDraw);
        fill();

        set_source_rgba(style[4]);
        select_font_face(style[6]);
        set_font_size(style[7]);
        txtMes = text_measure("▾");
        move_to((x + w) - 10, (y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5));
        text_path('↓');
        fill();


        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1)
            {
                selected = true;
                clickEnable[0] = true;
                clickEnable[1] = menuName;
            }
        }

        if(ui.cameraFocus == camLevel || ui.cameraFocus == camLevel + 1)
        {
            if(clickEnable[0])
            {
                if(clickEnable[1] == menuName)
                {
                    if(mouse[2] == 0)
                    {
                        if(attributes[2][1])
                        {
                            attributes[2][1] = false;
                            newTickFocus = camLevel;
                        }
                        else
                        {
                            attributes[2][1] = true;
                            newTickFocus = camLevel + 1;
                        }

                        clickEnable[0] = false;
                        clickEnable[1] = "none";
                    }
                }
            }
        }

        if(ui.cameraFocus == camLevel || ui.cameraFocus == camLevel + 1)
        {
            if(attributes[2][1])
            {
                if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y + h && mouse[1] < y + (h * (attributes[0].length + 1)) && mouse[2] == 1)
                {
                    selected = true;
                    clickEnable[0] = true;
                    clickEnable[1] = menuName + "clicked";
                    newTickFocus = camLevel + 1;
                }
                else if(mouse[2] == 1)
                {
                    clickEnable[0] = false;
                    clickEnable[1] = "none";
                    attributes[2][1] = false;
                    newTickFocus = camLevel;
                }

                if(clickEnable[0])
                {
                    if(clickEnable[1] == menuName + "clicked")
                    {
                        if(mouse[2] == 0)
                        {
                            clickEnable[0] = false;
                            clickEnable[1] = "none";
                            newTickFocus = camLevel;
                            attributes[2][1] = false;

                            selNonElement = false;
                            for(i = 0; i < attributes[0].length; i++)
                            {
                                if(selNonElement != true)
                                {
                                    if(mouse[1] < y + (h * (i + 2)))
                                    {
                                        var isElement = true;
                                        for(exIdx = 0; exIdx < attributes[5].length; exIdx++)
                                        {
                                            if (i == attributes[5][exIdx])
                                            {
                                                isElement = false;
                                                selNonElement = true;
                                                break;
                                            }
                                        }

                                        if(isElement)
                                        {
                                            attributes[2][0] = i;
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

exports.txtBox = function (x, y, w, h, style, mouse, camLevel, desc, txt, align, drawBox)
{
    // ##############################
    // Draw some text with chosen alignment (cen, left, right).
    // ##############################

    with (mgraphics)
    {
        if(ui.cameraFocus == camLevel)
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

        if(drawBox)
        {
            set_source_rgba(style[0]);
            rectangle(x, y, w, h);
            fill();

            draw_square_border(x, y, w, h, style);
        }

        set_source_rgba(style[4]);
        select_font_face(style[6]);
        set_font_size(style[7]);
        txtMes = text_measure(txt);

        if(align == "centre")
        {
            move_to((x + (w * 0.5)) - (txtMes[0] * 0.5), (y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5));
        }
        if(align == "left")
        {
            move_to(x + style[10], (y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5));
        }
        if(align == "right")
        {
            move_to(((x + w) - txtMes[0]) - style[10], (y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5));
        }

        text_path(txt);
        fill();
    }
}

exports.popUpCanvas = function (x, y, w, h, style, mouse, camLevel, desc, closeFunc, title, clickOut)
{
    // ##############################
    // A blank window for a pop-up with a quit button.
    // ##############################

    with (mgraphics)
    {
        unselectedCol = style[0];

        crossX = (x + w) - style[12];

        var inBox = true;

        if(ui.cameraFocus == camLevel)
        {
            if(mouse[0] > crossX && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + style[12])
            {
                currentInfoText = "Close.";
                inBox = true;
                unselectedCol = style[1];
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

        if(ui.cameraFocus == camLevel)
        {
            if(mouse[0] > crossX && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + style[12] && mouse[2] == 1)
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

        set_source_rgba(style[0]);
        rectangle(x, y, w, h);
        fill();

        set_source_rgba(unselectedCol);
        rectangle(crossX, y, style[12], style[12]);
        fill();

        draw_square_border(x, y, w, h, style);

        draw_square_border(crossX, y, style[12], style[12], style);

        var trimLen = true;
        while(trimLen)
        {
            txtMes = text_measure(title);
            if(txtMes[0] > w - 5 - style[12])
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

        set_source_rgba(style[4]);
        select_font_face(style[6]);
        set_font_size(style[7]);
        txtMes = text_measure(title);
        move_to(x + style[10], y + txtMes[1]);
        text_path(title);
        fill();

        txtMes = text_measure("X");
        move_to(crossX + (style[12] * 0.25) + (txtMes[1] * 0.25), (y + (style[12] * 0.5) + (txtMes[1] * 0.25)));
        text_path("x");
        fill();
    }
}

exports.colourPicker = function (x, y, w, h, style, mouse, camLevel, desc, closeFunc, clickOut)
{
    ui.popUpCanvas(x, y, w, h, style, mouse, camLevel, desc, closeFunc, "Colour Picker", clickOut);

    actualY = y + style[12];
    actualH = h - style[12];

    ui.blankCanvas(x + (w * 0.1), actualY + ((actualH * 0.1) * 0.5), w - (w * 0.2), (actualH * 0.1) * 3, style, mouse, camLevel, "Colour preview.", ui.pickedCol, true);
    ui.hSlider(x + (w * 0.1), actualY + ((actualH * 0.1) * 4.5), w - (w * 0.2), actualH * 0.1, style, mouse, camLevel, "Red level: " + String(ui.redLvlVar) + ".", "rdLvlSld", "update_colour_picker();", "ui.redLvlVar", 0, 1, "float");
    ui.hSlider(x + (w * 0.1), actualY + ((actualH * 0.1) * 5.5), w - (w * 0.2), actualH * 0.1, style, mouse, camLevel, "Green level: " + String(ui.greenLvlVar) + ".", "grLvlSld", "update_colour_picker();", "ui.greenLvlVar", 0, 1, "float");
    ui.hSlider(x + (w * 0.1), actualY + ((actualH * 0.1) * 6.5), w - (w * 0.2), actualH * 0.1, style, mouse, camLevel, "Blue level: " + String(ui.blueLvlVar) + ".", "blLvlSld", "update_colour_picker();", "ui.blueLvlVar", 0, 1, "float");
    ui.hSlider(x + (w * 0.1), actualY + ((actualH * 0.1) * 7.5), w - (w * 0.2), actualH * 0.1, style, mouse, camLevel, "Transparent level: " + String(ui.transLvlVar) + ".", "trLvlSld", "update_colour_picker();", "ui.transLvlVar", 0, 1, "float");
    ui.txtBtn(x + (w * 0.1), actualY + ((actualH * 0.1) * 8.5), w - (w * 0.2), actualH * 0.1, style, mouse, camLevel, "Confirm colour change.", "cfrColPick", "Confirm", "ui.confirm_col_pick();");
}

exports.netGraph = function (x, y, w, h, style, mouse, camLevel, desc, attributes)
{
    // ##############################
    // Creates a canvas with a network from two lists
    // (one of nodes, of of edges).
    // ##############################

    with (mgraphics)
    {
        set_source_rgba(style[13]);
        rectangle(x, y, w, h);
        fill();

        if(ui.cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
                currentInfoText = desc;
        }

        if(ui.cameraFocus == camLevel)
        {
            if(mouse[2] == 1)
            {
                for(i = 0; i < attributes[0].length; i++)
                {
                    if(mouse[0] > ((attributes[0][i]["x"] - attributes[0][i]["size"]) * attributes[8]) - attributes[2] && mouse[0] < ((attributes[0][i]["x"] + attributes[0][i]["size"]) * attributes[8]) - attributes[2] && mouse[1] > ((attributes[0][i]["y"] - attributes[0][i]["size"]) * attributes[8]) - attributes[3] && mouse[1] < ((attributes[0][i]["y"] + attributes[0][i]["size"]) * attributes[8]) - attributes[3])
                    {
                        ui.newTickFocus = 1;
                        nodeInfoPopState[1] = i;
                        nodeInfoPopState[0] = true;
                        nodeInfoPopState[2] = mouse[0];
                        nodeInfoPopState[3] = mouse[1];
                        attributes[7].push(attributes[0][i]["uniqueID"]);
                    }
                    else if (mouse[7] != 1)
                    {
                        attributes[7] = [];
                    }
                }
            }
        }

        if(ui.cameraFocus == camLevel)
        {
            if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1 && mouse[7] == 1)
            {
                if(attributes[7].length == 0)
                {
                    dragEnable[0] = true;
                    dragEnable[1] = "nodeCanvas";
                    attributes[9] = mouse[0] + attributes[4];
                    attributes[10] = mouse[1] + attributes[5];
                }
                else
                {
                    dragEnable[0] = true;
                    dragEnable[1] = "nodeCanvasMoveDrag";
                    attributes[6] = [];
                    for(nd = 0; nd < attributes[7].length; nd++)
                    {
                        coord = []
                        coord.push(attributes[0][find_node(attributes[0], attributes[7][nd])]["x"]);
                        coord.push(attributes[0][find_node(attributes[0], attributes[7][nd])]["y"]);
                        attributes[6].push(coord);
                    }
                    attributes[9] = mouse[0];
                    attributes[10] = mouse[1];
                }
            }
            else if(mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h && mouse[2] == 1 && mouse[2] == 1)
            {
                dragEnable[0] = true;
                dragEnable[1] = "nodeCanvasSelectDrag";
                canSelDragCanv = true;
                attributes[9] = mouse[0] + attributes[4];
                attributes[10] = mouse[1] + attributes[5];
            }
        }

        if(ui.cameraFocus == camLevel)
        {
            if (dragEnable[0])
            {
                if(dragEnable[1] == "nodeCanvas")
                {
                    attributes[2] = attributes[9] - mouse[0];
                    attributes[3] = attributes[10] - mouse[1];

                    if(mouse[6] == 0)
                    {
                        dragEnable[0] = false;
                        dragEnable[1] = "none";
                        attributes[4] = attributes[2];
                        attributes[5] = attributes[3];
                    }
                }
                if(dragEnable[1] == "nodeCanvasSelectDrag")
                {
                    if(canSelDragCanv)
                    {
                        set_source_rgba(style[14]);
                        rectangle(attributes[9] - attributes[2], attributes[10] - attributes[3], (mouse[0] - attributes[9]) +attributes[2], (mouse[1] - attributes[10]) + attributes[3]);
                        fill();


                        if(mouse[6] == 0)
                        {
                            dragEnable[0] = false;
                            dragEnable[1] = "none";

                            for(i = 0; i < attributes[0].length; i++)
                            {
                                nodeXcoord = ((attributes[0][i]["x"] - (attributes[0][i]["size"] * 0.5)) * attributes[8]) - attributes[2];
                                nodeYcoord = ((attributes[0][i]["y"] - (attributes[0][i]["size"] * 0.5)) * attributes[8]) - attributes[3];

                                theWid = mouse[0];
                                theHei = mouse[1];

                                newX = attributes[9] - attributes[2];
                                newY = attributes[10] - attributes[3];
                                newW = theWid;
                                newH =theHei;

                                if(attributes[9] < theWid)
                                {
                                    newX = attributes[9] - attributes[2];
                                    newW = theWid
                                }
                                if(attributes[9] > theWid)
                                {
                                    newX = theWid
                                    newW = attributes[9] - attributes[2];
                                }
                                if(attributes[10] < theHei)
                                {
                                    newY = attributes[10] - attributes[3];
                                    newH = theHei
                                }
                                if(attributes[10] > theHei)
                                {
                                    newY = theHei
                                    newH = attributes[10] - attributes[3];
                                }

                                if(nodeXcoord > newX && nodeXcoord < newW && nodeYcoord > newY && nodeYcoord < newH)
                                {
                                    if(attributes[7].length == 0)
                                    {
                                        attributes[7].push(attributes[0][i]["uniqueID"]);
                                    }
                                    else
                                    {
                                        for(j = 0; j < attributes[7].length; j++)
                                        {
                                            if (attributes[0][i]["uniqueID"] != attributes[7][j])
                                            {
                                                attributes[7].push(attributes[0][i]["uniqueID"]);
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
                    for(i = 0; i < attributes[7].length; i++)
                    {
                        addX = attributes[6][i][0] - (attributes[9] - mouse[0]);
                        addY = attributes[6][i][1] - (attributes[10] - mouse[1]);

                        attributes[0][find_node(attributes[0], attributes[7][i])]["x"] = addX;
                        attributes[0][find_node(attributes[0], attributes[7][i])]["y"] = addY;

                        attributes[6][i][0] = attributes[0][find_node(attributes[0], attributes[7][i])]["x"];
                        attributes[6][i][1] = attributes[0][find_node(attributes[0], attributes[7][i])]["y"];
                    }
                    attributes[9] = mouse[0];
                    attributes[10] = mouse[1];

                    if(mouse[6] == 0)
                    {
                        dragEnable[0] = false;
                        dragEnable[1] = "none";
                        attributes[6] = [];
                    }
                }
            }
        }

        for(i = 0; i < attributes[1].length; i++)
        {
            sourceX = (((attributes[0][find_node(attributes[0], attributes[1][i]["source"])]["x"] - (attributes[0][find_node(attributes[0], attributes[1][i]["source"])]["size"] * 0.5)) * attributes[8]) - attributes[2]) + (attributes[0][find_node(attributes[0], attributes[1][i]["source"])]["size"] * 0.5);
            sourceY = (((attributes[0][find_node(attributes[0], attributes[1][i]["source"])]["y"] - (attributes[0][find_node(attributes[0], attributes[1][i]["source"])]["size"] * 0.5)) * attributes[8]) - attributes[3]) + (attributes[0][find_node(attributes[0], attributes[1][i]["source"])]["size"] * 0.5);
            destX = (((attributes[0][find_node(attributes[0], attributes[1][i]["destination"])]["x"] - (attributes[0][find_node(attributes[0], attributes[1][i]["destination"])]["size"] * 0.5)) * attributes[8]) - attributes[2]) + (attributes[0][find_node(attributes[0], attributes[1][i]["destination"])]["size"] * 0.5);
            destY = (((attributes[0][find_node(attributes[0], attributes[1][i]["destination"])]["y"] - (attributes[0][find_node(attributes[0], attributes[1][i]["destination"])]["size"] * 0.5)) * attributes[8]) - attributes[3]) + (attributes[0][find_node(attributes[0], attributes[1][i]["destination"])]["size"] * 0.5);

            set_source_rgba(attributes[1][i]["col"]);
            set_line_width(attributes[1][i]["thickness"]);
            move_to(sourceX, sourceY);
            line_to(destX, destY);
            stroke();
        }

        for(i = 0; i < attributes[0].length; i++)
        {
            theCol = attributes[0][i]["col"];

            for (j = 0; j < attributes[7].length; j++)
            {
                if(attributes[0][i]["uniqueID"] == attributes[7][j])
                {
                    theCol = style[15];
                    break;
                }
            }

            set_source_rgba(theCol);
            ellipse(((attributes[0][i]["x"] - (attributes[0][i]["size"] * 0.5)) * attributes[8]) - attributes[2], ((attributes[0][i]["y"] - (attributes[0][i]["size"] * 0.5)) * attributes[8]) - attributes[3], attributes[0][i]["size"], attributes[0][i]["size"]);
            fill();

            if(attributes[11])
            {
                set_source_rgba(style[4]);
                select_font_face(style[6]);
                set_font_size(style[7]);
                txtMes = text_measure(attributes[0][i][attributes[12]]);
                move_to(((attributes[0][i]["x"] - (attributes[0][i]["size"] * 0.5)) * attributes[8]) - attributes[2] - (txtMes[0] * 0.5), ((attributes[0][i]["y"] - (attributes[0][i]["size"] * 0.5)) * attributes[8]) - attributes[3] + ((txtMes[1] * 0.5) * 0.5));
                text_path(attributes[0][i][attributes[12]]);
                fill();
            }
        }

        draw_square_border(x, y, w, h, style);
    }
}

exports.numBox = function (x, y, w, h, style, mouse, camLevel, desc, boxName, func, variable, intOrFloat, incr, min, max)
{
    // ##############################
    // Create a number box that's tied to a function anf variable.
    // ##############################

    with (mgraphics)
    {
        theVar = eval(variable)
        if(intOrFloat == "int")
            theVar = Math.floor(theVar);
        unselectedCol = style[0];
        upBackCol = style[0];
        downBackCol = style[0];

        btnWid = w * 0.25;

        if(ui.cameraFocus == camLevel)
        {
            if (mouse[0] > x && mouse[0] < x + w && mouse[1] > y && mouse[1] < y + h)
            {
                currentInfoText = desc;
                if(mouse[0] > x + btnWid * 3)
                {
                    currentInfoText = "Increase."
                    upBackCol = style[1];
                    downBackCol = style[0];
                    if(mouse[2] == 1 && mouse[1] < y + h * 0.5)
                    {
                        clickEnable[0] = true;
                        clickEnable[1] = boxName + "up";
                        upBackCol = style[2];
                        dragEnable[0] = true;
                        dragEnable[1] = boxName + "up";
                    }
                    if(mouse[1] > y + h * 0.5)
                    {
                        currentInfoText = "Decrease."
                        upBackCol = style[0];
                        downBackCol = style[1];
                        if(mouse[2] == 1)
                        {
                            clickEnable[0] = true;
                            clickEnable[1] = boxName + "down";
                            downBackCol = style[2];
                            dragEnable[1] = boxName + "down";
                        }
                    }
                }
            }
        }

        if(clickEnable[0])
        {
            if(clickEnable[1] == boxName + "up")
            {
                if(mouse[2] == 0)
                {
                    clickEnable[0] = false;
                    clickEnable[1] = "";
                    theVar = theVar + incr;
                    if(theVar > max)
                        theVar = max;
                    eval(variable + "= " + theVar);
                    eval(func);
                }
                if(mouse[4] == 1)
                {
                    dragEnable[0] = true;
                    dragEnable[1] = boxName + "up";
                }
            }
            else if(clickEnable[1] == boxName + "down")
            {
                if(mouse[2] == 0)
                {
                    clickEnable[0] = false;
                    clickEnable[1] = "";
                    theVar = theVar - incr;
                    if(theVar < min)
                        theVar = min;
                    eval(variable + "= " + theVar);
                    eval(func);
                }
                if(mouse[4] == 1)
                {
                    dragEnable[0] = true;
                    dragEnable[1] = boxName + "down";
                }
            }
        }

        if(dragEnable[0])
        {
            if(dragEnable[1] == boxName + "up")
            {
                theVar = theVar + incr;
                if(theVar > max)
                    theVar = max;
                eval(variable + "= " + theVar);
                eval(func);
                if(mouse[6] == 0)
                {
                    clickEnable[0] = false;
                    clickEnable[1] = "";
                    dragEnable[0] = false;
                    dragEnable[1] = "";
                }
            }
            else if(dragEnable[1] == boxName + "down")
            {
                theVar = theVar - incr;
                if(theVar < min)
                    theVar = min;
                eval(variable + "= " + theVar);
                eval(func);
                if(mouse[6] == 0)
                {
                    clickEnable[0] = false;
                    clickEnable[1] = "";
                    dragEnable[0] = false;
                    dragEnable[1] = "";

                }
            }
        }

        stringVar = String(theVar);
        var trimLen = true;
        while(trimLen)
        {
            txtMes = text_measure(stringVar);
            if(txtMes[0] > w - btnWid)
            {
                if (stringVar.slice(-5) == "(...)")
                {
                    stringVar = stringVar.slice(0, -5)
                }
                stringVar = stringVar.slice(0, -1);
                stringVar = stringVar + "(...)";
            }
            else
            {
                trimLen = false;
            }
        }

        set_source_rgba(style[0]);
        rectangle(x, y, w, h);
        fill();


        draw_square_border(x, y, w, h, style);
        draw_text(x, y, w, h, stringVar, style, "left");

        set_source_rgba(upBackCol);
        rectangle(x + btnWid * 3, y, btnWid, h * 0.5);
        fill();

        draw_square_border(x + btnWid * 3, y, btnWid, h * 0.5, style);
        draw_text(x + btnWid * 3, y, btnWid, h * 0.5, "▲", style, "centre");

        set_source_rgba(downBackCol);
        rectangle(x + btnWid * 3, y + (h * 0.5), btnWid, h * 0.5);
        fill();

        draw_square_border(x + btnWid * 3, y + (h * 0.5), btnWid, h * 0.5, style);
        draw_text(x + btnWid * 3, y + (h * 0.5), btnWid, h * 0.5, "▼", style, "centre");
    }
}

exports.paramDraw = function (x, y, w, h, style, mouse, camLevel, desc, currentLoadedObject, currentParamList)
{
    ui.blankCanvas(x, y, w, h, style, mouse, camLevel, desc, style[0], true);
    ui.txtBox(x, y, w, h * 0.1, style, mouse, camLevel, "The current loaded object.", String(currentLoadedObject), "left", false);

    numParams = currentParamList.length;

    if(currentParamList.length > 5)
    {
        numParams1 = 0;
        numParams2 = 0;
        if(currentParamList.length % 2 == 0)
        {
            numParams1 = currentParamList.length * 0.5;
            numParams2 = currentParamList.length * 0.5;
        }
        else
        {
            numParams1 = currentParamList.length - ((currentParamList.length - 1) * 0.5);
            numParams2 = (currentParamList.length - 1) * 0.5;
        }
        paramH = ((h * 0.1) * 5) / numParams1;

        i = 0;
        for(j = 0; j < numParams1; j++)
        {
            ui.paramController(x, (y + paramH * j) + (h * 0.1), w * 0.5, paramH,
                               style, mouse, camLevel,
                               currentParamList[i],
                               currentLoadedObject);
            i = i + 1;
        }
        for(j = 0; j < numParams2; j++)
        {
            ui.paramController(x + (w * 0.5), (y + paramH * j) + (h * 0.1), w * 0.5, paramH,
                               style, mouse, camLevel,
                               currentParamList[i],
                               currentLoadedObject);
            i = i + 1;
        }
    }
    else
    {
        paramH = ((h * 0.1) * 5) / 5;
        for(i = 0; i < currentParamList.length; i++)
        {
            ui.paramController(x, (y + paramH * i) + (h * 0.1), w, paramH,
                               style, mouse, camLevel,
                               currentParamList[i],
                               currentLoadedObject);
        }
    }

    //ui.blankCanvas(x, y + ((h * 0.1) * 6), w * 0.5, (h * 0.1) * 4, style, mouse, camLevel, "Test vis", [0,1,0,1], true);
    //ui.blankCanvas(w * 0.5, y + ((h * 0.1) * 6), w * 0.5, (h * 0.1) * 4, style, mouse, camLevel, "Test vis 2", [0,0,1,1], true);
}

exports.paramController = function (x, y, w, h, style, mouse, camLevel, param, object)
{
    if(param["type"] == "int")
    {
        description = param["desc"];
        theName = param["name"];
        theValue = String(param["value"])
        ui.txtBox(x, y, w * 0.5, h, style, mouse, camLevel, description, theName + ": " + theValue, "left", false);

        ui.hSlider(x + (w * 0.5), y, w * 0.5, h, style, mouse, camLevel,
                   String(param["desc"]), String(param["name"]) + String(i),
                   "", 'fi.fluidDict["' + String(object) + '"]["attributes"]["' + String(param["key"]) + '"]["value"]',
                   String(param["min"]), String(param["max"]), "int");
    }
    else if(param["type"] == "float")
    {
        description = param["desc"];
        theName = param["name"];
        theValue = String(param["value"])
        ui.txtBox(x, y, w * 0.5, h, style, mouse, camLevel, description, theName + ": " + theValue, "left", false);

        ui.hSlider(x + (w * 0.5), y, w * 0.5, h, style, mouse, camLevel,
                   String(param["desc"]), String(param["name"]) + String(i),
                   "", 'fi.fluidDict["' + String(object) + '"]["attributes"]["' + String(param["key"]) + '"]["value"]',
                   String(param["min"]), String(param["max"]), "float");
    }
    else if(param["type"] == "string")
    {
        description = param["desc"];
        theName = param["name"];
        theValue = String(param["value"])
        ui.txtBox(x, y, w * 0.5, h, style, mouse, camLevel, description, theName + ": " + theValue, "left", false);

        if(param["key"] == "source")
            txtReturnIdx = 0;
        else if(param["key"] == "indices")
            txtReturnIdx = 1;
        patcherDetails = get_patcher_details();
        styleString = "[" + String(style) + "]"; //Would have to list colours also so for now using ui.m4lStyle directly
        mouseString = "[" + String(mouse) + "]";
        txtW = patcherDetails[4] * 0.25;
        txtX = (patcherDetails[4] * 0.5) - (txtW * 0.5);
        txtH = patcherDetails[5] * 0.25;
        txtY = (patcherDetails[5] * 0.5) - (txtH * 0.5);
        textString = 'ui.get_text(' + String(txtX) + ',' + String(txtY) + ',' + String(txtW) + ',' + String(txtH) + ',' + "ui.m4lStyle" + ',' + mouseString + ',1,' + String(txtReturnIdx) + ',"' + String(param["value"]) + '",20);';

        ui.txtBtn(x + (w * 0.5), y, w * 0.5, h, style, mouse, camLevel,
                  String(param["desc"]), String(object) + String(param["key"]),
                  "Edit",
                  textString)
    }
    else if(param["type"] == "droplist")
    {
        if(param["states"] !== undefined)
        {
            description = param["desc"];
            theName = param["name"];
            theValue = String(param["states"][param["value"]])
            ui.txtBox(x, y, w * 0.5, h, style, mouse, camLevel, description, theName + ": " + theValue, "left", false);

            btnList = [];
            for(k = 0; k < param["states"].length; k++)
            {
                btnList.push(String(param["states"][i]));
            }
            btnDescList = [];
            for(k = 0; k < param["states"].length; k++)
            {
                btnList.push("Set the " + String(param["name"]) + " to " + String(param["states"][i]));
            }
            menStt = [param["value"], false];

            arrtList = [btnList, btnDescList, menStt, true, "", []];

            ui.dropMenu(x + (w * 0.5), y, w * 0.5, h, style, mouse, camLevel,
                        description, object + param["name"], "", arrtList);
        }
        if(param["statesNames"] !== undefined)
        {
            description = param["desc"];
            theName = param["name"];
            theValue = String(param["statesNames"][param["value"]])
            ui.txtBox(x, y, w * 0.5, h, style, mouse, camLevel, description, theName + ": " + theValue, "left", false);

            btnList = [];
            for(k = 0; k < param["statesNames"].length; k++)
            {
                btnList.push(String(param["statesNames"][i]));
            }
            btnDescList = [];
            for(k = 0; k < param["statesNames"].length; k++)
            {
                btnList.push("Set the " + String(param["name"]) + " to " + String(param["statesNames"][i]));
            }
            menStt = [param["value"], false];

            arrtList = [btnList, btnDescList, menStt, true, "", []];

            ui.dropMenu(x + (w * 0.5), y, w * 0.5, h, style, mouse, camLevel,
                        description, object + param["name"], "", arrtList);
        }
    }
    else
    {
        description = param["desc"];
        theName = param["name"];
        theValue = String(param["value"])
        ui.txtBox(x, y, w * 0.5, h, style, mouse, camLevel, description, theName + ": " + theValue, "left", false);
    }
}

exports.param_update = function (object, param)
{
    fi.fluidDict[object]["attributes"][param]["value"] = ui.tempParam;
}

// #################################################################################
// Other export functions ##########################################################
// #################################################################################

exports.apply_camera_focus = function ()
{
    // ##############################
    // For when the camera focus is only to be updated on the next tick.
    // ##############################

    if(ui.cameraFocus != ui.newTickFocus)
    {
        ui.cameraFocus = ui.newTickFocus;
    }
}

exports.resetGraphCam = function (attributesList)
{
    // ##############################
    // Reset the network graph to the original zoom and position.
    // ##############################

    attributesList[8] = 1
    attributesList[2] = 0;
    attributesList[3] = 0;
    attributesList[9] = 0;
    attributesList[10] = 0;
    attributesList[4] = 0;
    attributesList[5] = 0;
}

exports.close_col_pick = function ()
{
    ui.newTickFocus = 0;
    ui.colPickerOpen = false;
}

exports.confirm_col_pick = function()
{
    ui.newTickFocus = 0;
    ui.colPickerOpen = false;
    post(ui.pickedCol + "\n")
    post(ui.colPickerReturn + "\n")
}

exports.open_col_pick = function (camLevel, returnIndex)
{
    ui.newTickFocus = camLevel;
    ui.colPickerCam = camLevel;
    ui.colPickerReturn = returnIndex;
    ui.colPickerOpen = true;
}

exports.get_filename = function (returnIndex)
{
    removeObjList = [];
    patcherDetails = get_patcher_details();

    dialogObj = create_object("dialog_obj", patcherDetails[2], patcherDetails[3], "opendialog");
    ui.removeObjList.push(dialogObj);
    deferObj = create_object("defer_obj", patcherDetails[2], patcherDetails[3], "deferlow");
    ui.removeObjList.push(deferObj);
    prependObj = create_object("prepend_obj", patcherDetails[2], patcherDetails[3], "prepend", "give_filename");
    ui.removeObjList.push(prependObj);

    cancelObj = create_object("cancel_obj", patcherDetails[2], patcherDetails[3], "prepend", "cancel_filename");
    ui.removeObjList.push(cancelObj);

    patcherDetails[0].hiddenconnect(patcherDetails[1], 0, deferObj, 0);
    patcherDetails[0].hiddenconnect(deferObj, 0, dialogObj, 0);
    patcherDetails[0].hiddenconnect(dialogObj, 0, prependObj, 0);
    patcherDetails[0].hiddenconnect(prependObj, 0, patcherDetails[1], 0);

    patcherDetails[0].hiddenconnect(dialogObj, 1, cancelObj, 0);
    patcherDetails[0].hiddenconnect(cancelObj, 0, patcherDetails[1], 0);

    ui.getFilenameIndex = returnIndex;

    outlet(0, "bang");
}

exports.get_text = function (x, y, w, h, style, mouse, camLevel, returnIndex, startText, confButSize)
{
    ui.getTextPopX = x;
    ui.getTextPopY = y;
    ui.getTextPopW = w;
    ui.getTextPopH = h;
    ui.getTextPopStyle = style;
    ui.getTextPopMouse = mouse;
    ui.getTextPopCamLevel = camLevel;
    ui.getTextPopBtn = confButSize;
    actualY = y + style[12];
    actualH = h - style[12];

    ui.removeObjList = [];

    patcherDetails = get_patcher_details();

    ui.newTickFocus = camLevel;
    ui.getTextPop = true;

    textObj = create_object("textObj", x + patcherDetails[2], actualY + patcherDetails[3], "textedit", "@rounded", 0, "@border", 0, "@bgcolor", 0, 0, 0, 0, "@textcolor", style[4][0], style[4][1], style[4][2], style[4][3]);
    textObj.rect = [x + patcherDetails[2], actualY + patcherDetails[3], x + patcherDetails[2] + w, actualY + patcherDetails[3] + actualH - confButSize];
    ui.removeObjList.push(textObj);
    deferObj = create_object("dialog_obj", patcherDetails[2], patcherDetails[3], "deferlow");
    ui.removeObjList.push(deferObj);
    prepdSetObj = create_object("prepen", patcherDetails[2], patcherDetails[3], "prepend", "set");
    ui.removeObjList.push(prepdSetObj);
    prepdObj = create_object("prepen2", patcherDetails[2], patcherDetails[3], "prepend", "give_text");
    ui.removeObjList.push(prepdObj);
    routObj = create_object("router", patcherDetails[2], patcherDetails[3], "route", "text");
    ui.removeObjList.push(routObj);

    routObj2 = create_object("router2", patcherDetails[2], patcherDetails[3], "route", "conf");
    ui.removeObjList.push(routObj2);
    bangObj = create_object("bangObj", patcherDetails[2], patcherDetails[3], "button");
    ui.removeObjList.push(bangObj);
    formatObj = create_object("formatObj", patcherDetails[2], patcherDetails[3], "sprintf", "%s");
    ui.removeObjList.push(formatObj);

    patcherDetails[0].hiddenconnect(patcherDetails[1], 0, deferObj, 0);
    patcherDetails[0].hiddenconnect(deferObj, 0, formatObj, 0);

    patcherDetails[0].hiddenconnect(formatObj, 0, prepdSetObj, 0);
    patcherDetails[0].hiddenconnect(prepdSetObj, 0, textObj, 0);
    patcherDetails[0].hiddenconnect(textObj, 0, routObj, 0);
    patcherDetails[0].hiddenconnect(routObj, 0, prepdObj, 0);

    patcherDetails[0].hiddenconnect(prepdObj, 0, patcherDetails[1], 0);

    patcherDetails[0].hiddenconnect(patcherDetails[1], 0, routObj2, 0);
    patcherDetails[0].hiddenconnect(routObj2, 0, bangObj, 0);
    patcherDetails[0].hiddenconnect(bangObj, 0, textObj, 0);

    patcherDetails[0].bringtofront(textObj);

    ui.getTextIndex = returnIndex;

    outlet(0, String(startText));
}

exports.text_pop = function (x, y, w, h, style, mouse, camLevel, btnSize)
{
    ui.popUpCanvas(x, y, w, h, style, mouse, camLevel, "Edit your text.", "cancel_text();", "Text Edit", true);
    ui.txtBtn(x, y + h - btnSize, w, btnSize, style, mouse, camLevel, "Confirm your text.", "cfrTxtBtn", "Confirm", "ui.confirm_text();")
}

exports.confirm_text = function ()
{
    patcherDetails = get_patcher_details();
    messnamed("textObj", "bang");
}

// #################################################################################
// Internal functions ##############################################################
// #################################################################################

function draw_square_border(x, y, w, h, style)
{
    // ##############################
    // Draw a border around the given rectable in the given style.
    // ##############################

    with (mgraphics)
    {
        set_source_rgba(style[3]);
        set_line_width(style[5]);
        move_to(x + (style[5] * 0.5), y + (style[5] * 0.5));
        line_to(x + w + (style[5] * 0.5), y + (style[5] * 0.5));
        line_to(x + w + (style[5] * 0.5), y + h + (style[5] * 0.5));
        line_to(x + (style[5] * 0.5), y + h + (style[5] * 0.5));
        line_to(x + (style[5] * 0.5), y);
        stroke();
    }
}

function draw_text(x, y, w, h, txt, style, align)
{
    with (mgraphics)
    {
        set_source_rgba(style[4]);
        select_font_face(style[6]);
        set_font_size(style[7]);
        txtMes = text_measure(txt);

        if(align == "centre")
        {
            move_to((x + (w * 0.5)) - (txtMes[0] * 0.5), (y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5));
        }
        if(align == "left")
        {
            move_to(x + style[10], (y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5));
        }
        if(align == "right")
        {
            move_to(((x + w) - txtMes[0]) - style[10], (y + (h * 0.5)) + ((txtMes[1] * 0.5) * 0.5));
        }

        text_path(txt);
        fill();
    }
}

function update_colour_picker()
{
    ui.pickedCol[0] = ui.redLvlVar;
    ui.pickedCol[1] = ui.greenLvlVar;
    ui.pickedCol[2] = ui.blueLvlVar;
    ui.pickedCol[3] = ui.transLvlVar;
}

function find_node(nodeList, uniqueID)
{
    // ##############################
    // Find the index of a node in the node list from it's unique ID.
    // ##############################

    for(j = 0; j < nodeList.length; j++)
    {
        if(nodeList[j]["uniqueID"] == uniqueID)
        {
            break;
        }
    }
    return j;
}

function create_object(varname, x, y, object, args)
{
    // ##############################
    // Create an object in the patcher, and return the object as a javascript object.
    // ##############################

    patcherDetails = get_patcher_details();

    var args_array = [];

    if (arguments.length > 4)
    {
        for (i = 4; i < arguments.length; i++)
        {
            args_array.push(arguments[i]);
        }
    }

    a = patcherDetails[0].newdefault(x, y, object, args_array);
    a.varname = varname;

    return a;
}

//TO DO::::
// -repair sliders
// -drop menu text align
// -fix netgraph
// -text edit more than one word
// -make text box skip line.
// -ui newtick in dop menu...
