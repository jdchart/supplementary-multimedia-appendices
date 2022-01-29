// Visualise slices.

mgraphics.init();

//outlets = 2;

var mainList = [];
var xOffset = -400;
var yOffset = -270;
var zoom = 0.195;
var dragging = false;
var mouseState = [0,0,0,0,0,0,0,0];
var clickState = [false, ""];
var dragState = [false, ""];
var selIdx = -1;
var clickedCoords = [0,0];
var clickedOffset = [0,0];

theLayoutFile = "/Users/macbook/Desktop/pleanry_presentation/gesture_sound/sliceExportTest/LAYOUT.csv";

function set_file(filename)
{
    theLayoutFile = filename;
    bang();
}

function bang()
{
    mainList = csv_to_list();
    mgraphics.redraw();
}

function paint()
{
    with(mgraphics)
    {
        set_source_rgba([1,1,1,1]);
        rectangle(0, 0, this.box.rect[2] - this.box.rect[0], this.box.rect[3] - this.box.rect[1]);
        fill();

        if(clickState[0])
        {
            if(mouseState[7] == 1 && mouseState[4] == 1)
            {
                dragState[0] = true;
            }
            else if(mouseState[6] == 0 && mouseState[7] == 0)
            {
                selIdx = 0;
                mouseX = mouseState[0];
                mouseY = mouseState[1];

                firstQueryX = (mainList[0][1] * zoom) - xOffset;
                firstQueryY = (mainList[0][2] * zoom) - yOffset;

                currentSmallest = Math.sqrt(((mouseX - firstQueryX) * (mouseX - firstQueryX)) + ((mouseY - firstQueryY) * (mouseY - firstQueryY)));
                for(i = 1; i < mainList.length; i++)
                {
                    queryX = (mainList[i][1] * zoom) - xOffset;
                    queryY = (mainList[i][2] * zoom) - yOffset;
                    distance = Math.sqrt(((mouseX - queryX) * (mouseX - queryX)) + ((mouseY - queryY) * (mouseY - queryY)));

                    if(distance < currentSmallest)
                    {
                        currentSmallest = distance;
                        selIdx = i;
                    } 
                }

                outString = ""
                for(i = 0; i < mainList[selIdx][0].length; i++)
                {
                    outString = outString + mainList[selIdx][0][i] + " ";
                }

                outlet(0, mainList[selIdx][0]);
                //outlet(1, "start");

                clickState[0] = false
            }
        }

        if(dragState[0])
        {
            xOffset = clickedOffset[0] + (clickedCoords[0] - mouseState[0]);
            yOffset = clickedOffset[1] + (clickedCoords[1] - mouseState[1]);

            if(mouseState[6] == 0 || mouseState[7] == 0)
            {
                dragState[0] = false;
            }
        }

        for(i = 0; i < mainList.length; i++)
        {
            if(i == selIdx)
            {
                set_source_rgba([1,0,0,1])
            }
            else
            {
                set_source_rgba([0,0,0,1])
            }
            
            ellipse((mainList[i][1] * zoom) - xOffset, (mainList[i][2] * zoom) - yOffset, mainList[i][3] * zoom, mainList[i][3] * zoom);
            fill();
        }
    }
}

function set_xOffset(x)
{
    xOffset = x;
    mgraphics.redraw();
}

function set_yOffset(x)
{
    yOffset = x;
    mgraphics.redraw();
}

function set_zoom(x)
{
    zoom = x;
    mgraphics.redraw();
}

function csv_to_list()
{
    theList = [];

    f = new File(theLayoutFile, "read");
    f.open();
    line = f.readline();
    while(f.eof > f.position)
    {
        finalArray = [];
        theString = f.readline();
        theArray = theString.split(",")
        for(i = 0; i < theArray.length; i++)
        {
            if(theArray[i].indexOf("#-") !== -1)
            {
                stateArray = theArray[i].split("#-");
                newArray = []
                for(j = 1; j < stateArray.length; j++)
                {
                    newArray.push(stateArray[j]);
                }
                finalArray.push(newArray);
            }
            else
            {
                finalArray.push(parseInt(theArray[i]));
            }
        }
        
        theList.push(finalArray)
    }
    f.close();

    return theList;
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
    clickedCoords = [x, y];
    clickedOffset = [xOffset, yOffset];
    mouseState[0] = x;
    mouseState[1] = y;
    mouseState[2] = 1;
    mouseState[3] = 0;
    mouseState[6] = button;
    mouseState[7] = shift;

    clickState[0] = true;

    mgraphics.redraw();
}

function ondrag (x, y, button, shift)
{
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
    mouseState[5] = button;
    mouseState[7] = shift;
    mgraphics.redraw();
}

bang();