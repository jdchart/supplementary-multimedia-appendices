mgraphics.init();
outlets = 2;
setinletassist(0, 'Ctrl In');
setoutletassist(0, 'Selected Node');
setoutletassist(1, 'Ctrl Out');

outfile          = ['/Users/macbook/Desktop/', 'output.csv'];
backCol          = [0.886, 0.714, 0.714, 1.000],
nodeSelectCol    = [1, 0, 0, 1],
mouseState       = [0, 0, 0, 0, false],
selectBox        = [false, 0, 0, 0, 0, [1,0,0,0.5]],
selecedNodes     = [],
headerArray      = [];
data             = [],
dataX            = [],
dataY            = [],
dataSize         = [],
displayX         = [],
displayY         = [],
displaySize      = [],
displayColour    = [],
colourMode       = 0,
colourCategories = [],
currentDisplay   = [0, 1, -1, -1],
zoom             = 1,
offset           = [0, 0],
sizeMinMax       = [5, 15],
fixedSize        = [true, 5],
fixedColour      = [true, 0, 0, 0, 1];
labels           = [false, 0, "Arial", 10, [0,0,0,1]],
canDraw          = [false, false, true, true];

function paint(){
    draw_background(boxInfo, backCol);

    if(canDraw[0] && canDraw[1] && canDraw[2] && canDraw[3]){

        if(mouseState[4]){
            mouseState[4] = false;
            
            virtualClickPos  = [(mouseState[0] - offset[0]) / zoom, (mouseState[1] - offset[1]) / zoom];
            realClickPos     = [mouseState[0], mouseState[1]];
            selectBox[1]     = mouseState[0];
            selectBox[2]     = mouseState[1];
            offsetClicked    = [offset[0], offset[1]];

            node_click(realClickPos[0], realClickPos[1], displayX, displayY, 10); 
        }
    
        if(mouseState[5] && mouseState[3] == 0){
            offset[0] = offsetClicked[0] - (realClickPos[0] - mouseState[0]);
            offset[1] = offsetClicked[1] - (realClickPos[1] - mouseState[1]);
    
            if(mouseState[2] == 0){
                mouseState[5] = false;
                selectBox[0]  = false;
            }
        }

        if(mouseState[5] && mouseState[3] == 1){
            selectBox[0] = true;
            selectBox[3] = mouseState[0];
            selectBox[4] = mouseState[1];
    
            if(mouseState[2] == 0){
                mouseState[5] = false;
                selectBox[0]  = false;

                for(i = 0; i < selecedNodes.length; i++){
                    for(j = 0; j < headerArray.length; j++){
                        outlet(0, String(headerArray[j]) + ' ' + String(data[selecedNodes[i]][j]));
                    }
                } 
            }

            if(mouseState[0] > realClickPos[0]){
                selX = realClickPos[0],
                selW = mouseState[0] - realClickPos[0];
            }
            else{
                selX = mouseState[0],
                selW = realClickPos[0] - mouseState[0];
            }
            if(mouseState[1] > realClickPos[1]){
                selY = realClickPos[1],
                selH = mouseState[1] - realClickPos[1];
            }
            else{
                selY = mouseState[1],
                selH = realClickPos[1] - mouseState[1];
            }

            selecedNodes = [];
            for(i = 0; i < displayX.length; i++){
                xCoord = (displayX[i] * zoom) + offset[0],
                yCoord = (displayY[i] * zoom) + offset[1];
                if(xCoord > selX && xCoord < selX + selW && yCoord > selY && yCoord < selY + selH && selecedNodes.indexOf(i) <= 0){
                    outlet(0, 'INDEX ' + String(i));
                    selecedNodes.push(i);
                }
            }
        }

        draw_nodes(displayX, displayY, displaySize, [0,0,0,1]);

        if(selectBox[0]){
            draw_select_box();
        }
    }
}

function draw_background(box, col){
    with(mgraphics){
        set_source_rgba(col);
        rectangle(0, 0, box[2], box[3]);
        fill();
    }
}

function draw_nodes(xList, yList, sizeList, col){
    with(mgraphics){
        
        for(i = 0; i < xList.length; i++){
            if(selecedNodes.indexOf(i) > -1){
                set_source_rgba(nodeSelectCol);
            }
            else{
                if(colourMode == 0){
                    set_source_rgba([fixedColour[1], fixedColour[2], fixedColour[3], fixedColour[4]]);
                }
                else if(colourMode == 1){
                    set_source_rgba(displayColour[i]);
                }
                else if(colourMode == 2){
                    theCat = data[i][currentDisplay[3]];
                    colCat = colourCategories.indexOf(theCat);
                    set_source_rgba(displayColour[colCat]);
                }
            }
            
            if(fixedSize[0]){
                nodeSize = fixedSize[1];
            }
            else{
                nodeSize = sizeList[i];
            }
            
            nodeX = (xList[i] - (nodeSize * 0.5)) * zoom;
            nodeY = (yList[i] - (nodeSize * 0.5)) * zoom;

            nodeX = nodeX + offset[0];
            nodeY = nodeY + offset[1];

            ellipse(nodeX, nodeY, nodeSize, nodeSize);   
            
            fill();

            if(labels[0]){
                labelString = String(data[i][labels[1]]);
                set_source_rgba(labels[4]);
                select_font_face(labels[2]);
                set_font_size(labels[3]);
                txtMes = text_measure(labelString);

                bottomX = ((xList[i] * zoom) + offset[0]) - txtMes[0],
                bottomY = ((yList[i] * zoom) + offset[1]) - nodeSize - txtMes[1];
                move_to(bottomX, bottomY);

                text_path(labelString);
                fill();
            }
        } 
    }
}

function draw_select_box(){
    with(mgraphics){
        set_source_rgba(selectBox[5])
        rectangle(selectBox[1], selectBox[2], selectBox[3] - selectBox[1], selectBox[4] - selectBox[2]);
        fill();
    }
}

function set_background_col(r, g, b, a){
    backCol = [r, g, b, a];
    mgraphics.redraw();
}

function select_nodes(nodes){
    a            = arrayfromargs(messagename,arguments);
    selecedNodes = [];

    for(i = 1; i < a.length; i++){
        selecedNodes.push(a[i]);

        outlet(0, 'INDEX ' + String(a[i]));
        for(j = 0; j < headerArray.length; j++){
            outlet(0, String(headerArray[j]) + ' ' + String(data[a[i]][j]));
        }
    }

    mgraphics.redraw();
}

function node_click(x, y, xList, yList, clickSpace){
    selecedNodes   = [];
    halfClickSpace = clickSpace * 0.5;

    for(i = 0; i < xList.length; i++){
        xCoord = (xList[i] * zoom) + offset[0],
        yCoord = (yList[i] * zoom) + offset[1];

        if(x > xCoord - halfClickSpace && x < xCoord + halfClickSpace && y > yCoord - halfClickSpace && y < yCoord + halfClickSpace){
            selecedNodes.push(i);

            outlet(0, 'INDEX ' + String(i));
            for(j = 0; j < headerArray.length; j++){  
                outlet(0, String(headerArray[j]) + ' ' + String(data[i][j]));
            }

            break;
        }
    }
}

function set_zoom(x){
    zoom = x;
    mgraphics.redraw();
}

function set_offset(x){
    if(x == 0){
        offset[1] = offset[1] - zoom;
    }
    else if(x == 1){
        offset[1] = offset[1] + zoom;
    }
    else if(x == 2){
        offset[0] = offset[0] - zoom;
    }
    else if(x == 3){
        offset[0] = offset[0] + zoom;
    }

    mgraphics.redraw();
}

function reset_camera(){
    zoom   = 1;
    offset = [0, 0];

    mgraphics.redraw();
}

function load_data(file){
    data = [];

    f = new File(file, "r");
    f.open();

    headerArray = [];
    headerArray = f.readline().split(",");
    
    outlet(1, 'umenu clear')
    for(i = 0; i < headerArray.length; i++){
        outlet(1, 'umenu append ' + headerArray[i])
    }
    outlet(1, 'umenusize insert 0 FIXED');
    outlet(1, 'umenusize set 0');
    outlet(1, 'umenux set 0');
    outlet(1, 'umenuy set 1');

    outlet(1, 'umenucolour insert 0 CATEGORY');
    outlet(1, 'umenucolour insert 0 GRADIENT');
    outlet(1, 'umenucolour insert 0 FIXED');
    outlet(1, 'umenucolour set 0');

    while(f.eof > f.position){
        nodeData = f.readline().split(",");
        data.push(nodeData);
    }

    f.close();

    currentDisplay[0] = 0,
    currentDisplay[1] = 1;
    currentDisplay[2] = -1;
    currentDisplay[3] = -1;

    set_axis('xy', 0, 1);
    set_size(0, fixedSize[1]);
    set_colour(0, fixedColour[1], fixedColour[2], fixedColour[3], fixedColour[4]);
}

function get_axis(idx){
    returnAxis = [];
    for(i = 0; i < data.length; i++){
        returnAxis.push(data[i][idx])
    }

    return returnAxis
}

function set_axis(axis, valx, valy){
    if(axis == 'x' || axis == 'y'){
        if(axis == 'x'){
            dataX = [];
            theAxis = get_axis(valx)
            check = check_axis_validity(theAxis);
            if(check){
                dataX = theAxis;
                canDraw[0] = true;
                displayX = process_axis(dataX, xMinMax[0], xMinMax[1]);
                currentDisplay[0] = valx;
                mgraphics.redraw();
            }
            else{
                error('Axis not comprised of floats.\n');
                dataX = theAxis;
                canDraw[0] = false;
                currentDisplay[0] = valx;
                mgraphics.redraw();
            }
        }
        else if(axis == 'y'){
            dataY = [];
            theAxis = get_axis(valx)
            check = check_axis_validity(theAxis);
            if(check){
                dataY = theAxis;
                canDraw[1] = true;
                displayY = process_axis(dataY, yMinMax[0], yMinMax[1]);
                currentDisplay[1] = valx;
                mgraphics.redraw();
            }
            else{
                error('Axis not comprised of floats.\n');
                dataY = theAxis;
                canDraw[1] = false;
                currentDisplay[1] = valx;
                mgraphics.redraw();
            }
        }
    }
    else if(axis == 'xy'){
        dataX = [],
        dataY = [];
        theAxisX = get_axis(valx)
        theAxisY = get_axis(valy)
        checkX = check_axis_validity(theAxisX);
        checkY = check_axis_validity(theAxisY);

        if(checkX && checkY){
            dataX = theAxisX;
            dataY = theAxisY;
            canDraw[0] = true;
            canDraw[1] = true;
            displayX = process_axis(dataX, xMinMax[0], xMinMax[1]);
            displayY = process_axis(dataY, yMinMax[0], yMinMax[1]);
            currentDisplay[0] = valx;
            currentDisplay[1] = valy;
            mgraphics.redraw();
        }
        else if(checkX == false && checkY == true){
            error('Axis not comprised of floats.\n');
            dataX = theAxisX;
            dataY = theAxisY;
            canDraw[0] = false;
            canDraw[1] = true;
            displayY = process_axis(dataY, yMinMax[0], yMinMax[1]);
            currentDisplay[0] = valx;
            currentDisplay[1] = valy;
            mgraphics.redraw();
        }
        else if(checkX == true && checkY == false){
            error('Axis not comprised of floats.\n');
            dataX = theAxisX;
            dataY = theAxisY;
            canDraw[0] = true;
            canDraw[1] = false;
            displayX = process_axis(dataX, xMinMax[0], xMinMax[1]);
            currentDisplay[0] = valx;
            currentDisplay[1] = valy;
            mgraphics.redraw();
        }
        else if(checkX == false && checkY == false){
            error('Axis not comprised of floats.\n');
            dataX = theAxisX;
            dataY = theAxisY;
            canDraw[0] = false;
            canDraw[1] = false;
            currentDisplay[0] = valx;
            currentDisplay[1] = valy;
            mgraphics.redraw();
        }
    }
}

function set_axis_min_max(axis, min, max){
    if(axis == 0){
        displayX   = process_axis(dataX,min,max);
        xMinMax[0] = min;
        xMinMax[1] = max;
    }
    else if(axis == 1){
        displayY   = process_axis(dataY,min,max);
        yMinMax[0] = min;
        yMinMax[1] = max;
    }

    mgraphics.redraw();
}

function set_size(axis, fixedVal){
    if(axis == 0){
        fixedSize  = [true, fixedVal];
        canDraw[2] = true;
        currentDisplay[2] = -1;
    }
    else{
        fixedSize[0] = false;
        sizeAxis     = get_axis(axis - 1);
        check        = check_axis_validity(sizeAxis);
        if(check){
            dataSize = sizeAxis;
            canDraw[2] = true;
            currentDisplay[2] = axis -1;

            displaySize = process_axis(dataSize, sizeMinMax[0], sizeMinMax[1]);
        }
        else{
            error('Axis not comprised of floats.\n');
            dataSize = sizeAxis;
            currentDisplay[2] = axis -1;
            canDraw[2] = false;
        }
    }

    mgraphics.redraw();
}

function set_colour(){
    a = arrayfromargs(messagename,arguments);

    if(a[1] == 0){
        fixedColour       = [true, a[2], a[3], a[4], a[5]];
        canDraw[3]        = true;
        currentDisplay[3] = -1;
        colourMode        = 0;
    }
    else if(a[1] == 1){
        fixedColour[0] = false;
        colourMode     = 1;

        colourAxis = get_axis(a[2]);
        check      = check_axis_validity(sizeAxis);

        reds   = process_axis(colourAxis, a[3], a[7]);
        greens = process_axis(colourAxis, a[4], a[8]);
        blues  = process_axis(colourAxis, a[5], a[9]);
        alphas = process_axis(colourAxis, a[6], a[10]);

        if(check){
            canDraw[3] = true;
            currentDisplay[3] = a[2];
            displayColour = [];
            for(i = 0; i < data.length; i++){
                displayColour.push([reds[i], greens[i], blues[i], alphas[i]]);
            } 
        }
        else{
            error('Axis not comprised of floats.\n');
            canDraw[3] = false;
            currentDisplay[3] = a[2];
        }
        
    }
    else if(a[1] == 2){
        fixedColour[0]    = false;
        colourMode        = 2;
        colourCategories  = [];
        colourCategories  = get_categories(a[2]);
        canDraw[3]        = true;
        currentDisplay[3] = a[2];

        displayColour     = [];
        for(i = 0; i < colourCategories.length; i++){
            displayColour.push([Math.random(), Math.random(), Math.random(), 1.000]);
        }
    }

    mgraphics.redraw();
}

function get_categories(axis){
    categoryList = [];

    for(i = 0; i < data.length; i++){
        if(categoryList.indexOf(String(data[i][axis])) == -1){
            categoryList.push(String(data[i][axis]));
        }
    }

    outlet(1, 'umenucolcat clear')
    for(i = 0; i < categoryList.length; i++){
        outlet(1, 'umenucolcat append ' + categoryList[i])
    }
    outlet(1, 'umenucolcat set 0');

    return categoryList;
}

function get_cat_col(cat){
    outlet(1, 'catcolout ' + String(displayColour[cat][0]) + ' ' + String(displayColour[cat][1]) + ' ' + String(displayColour[cat][2]) + ' ' + String(displayColour[cat][3]))
}

function set_cat_col(cat, r, g, b, a){
    displayColour[cat][0] = r;
    displayColour[cat][1] = g;
    displayColour[cat][2] = b;
    displayColour[cat][3] = a;

    mgraphics.redraw();
}

function set_size_min_max(min, max){
    displaySize   = process_axis(dataSize,min,max);
    sizeMinMax[0] = min;
    sizeMinMax[1] = max;
    mgraphics.redraw();
}

function set_labels(tog, axis){
    if(tog == 0){
        labels[0] = false;
    }
    else{
        labels[0] = true;
    }
    labels[1] = axis;

    mgraphics.redraw();
}

function process_axis(axis, min, max){
    realMin     = Math.min.apply(null, axis),
    realMax     = Math.max.apply(null, axis),
    realRange   = realMax - realMin;

    returnArray = [];

    for(i = 0; i < axis.length; i++){
        scaled = min + (((axis[i] - realMin) * (max - min)) / (realMax - realMin));
        returnArray.push(scaled);
    }

    return returnArray;
}

function check_axis_validity(axis){
    check = true;
    for(i = 0; i < axis.length; i++){
        val = parseFloat(axis[i])
        if(isNaN(val)){
            check = false
        }
    }

    return check;
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

boxInfo = get_box_info(this);
xMinMax = [0, boxInfo[2]];
yMinMax = [0, boxInfo[3]];

function onresize(){
    boxInfo = get_box_info(this);
    mgraphics.redraw();
}

function onclick(x, y, button, shift){
    mouseState[0] = x,
    mouseState[1] = y,
    mouseState[2] = button,
    mouseState[3] = shift,
    mouseState[4] = true;

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

function csv_export(columns, nodes){
    // Leave arguments blank to export everything.
    // Otherwise you can specify which columns and nodes to export by giving the argument columns followed by columns, and nodes followed by nodes.

    a            = arrayfromargs(messagename,arguments),
    columnList   = [],
    lineList     = [];

    addState = 0;

    if(a.length > 1){
        for(i = 1; i < a.length; i++){
            if(a[i] == 'columns'){
                addState = 0;
            }
            else if(a[i] == 'nodes'){
                addState = 1;
            }
            else{
                if(addState == 0){
                    columnList.push(a[i]);
                }
                if(addState == 1){
                    lineList.push(data[a[i]]);
                }
            }
        }
        if(columnList.length == 0){
            for(i = 0; i < headerArray.length; i++){
                columnList.push(headerArray[i]);
            }
        }
        if(lineList.length == 0){
            for(i = 0; i < data.length; i++){
                lineList.push(data[i]);
            }
        }
    }
    else{
        for(i = 0; i < headerArray.length; i++){
            columnList.push(headerArray[i]);
        }
        for(i = 0; i < data.length; i++){
            lineList.push(data[i]);
        }
    }

    idxList = [];

    for(i = 0; i < columnList.length; i++){
        for(j = 0; j < headerArray.length; j++){
            if(columnList[i] == headerArray[j]){
                idxList.push(j);
            }
        }
    }

    // Now there is the full data list for all wanted nodes, and the wanted columns.
    // There's also a list of the idx if each member of the columnList.

    f = new File(outfile[0] + outfile[1], "w");
    f.open();

    headerString = ''

    for(i = 0; i < columnList.length; i++){
        headerString = headerString + columnList[i]
        if(i != columnList.lenth - 1){
            headerString = headerString + ','
        }
    }

    f.writeline(headerString);

    for(i = 0; i < lineList.length; i++){
        lineString = '';
        for(j = 0; j < idxList.length; j++){
            lineString = lineString + String(lineList[i][idxList[j]]);
            if(j != idxList.length - 1){
                lineString = lineString + ',';
            }
        }

        f.writeline(lineString);
    }

    f.close();
}

function export_folder(folder){
    outfile[0] = folder;
}

function export_file(file){
    outfile[1] = file + '.csv';
}

function print_column(idx){
    post(String(headerArray[idx]) + '\n');

    for(i = 0; i < data.length; i++){
        post(String(data[i][idx]) + '\n');
    }
}

function print_node(idx, val){
    if(val == -1){
        post(String(data[idx]) + '\n');
    }
    else{
        post(String(data[idx][val]) + '\n');
    }       
}

function copy_column(colIdx){
    headerArray.push(headerArray[colIdx]);

    for(i = 0; i < data.length; i++){
        data[i].push(data[i][colIdx]);
    }

    outlet(1, 'umenu clear')
    for(i = 0; i < headerArray.length; i++){
        outlet(1, 'umenu append ' + headerArray[i])
    }
    outlet(1, 'umenusize insert 0 FIXED');

    if(fixedSize[0]){
        outlet(1, 'umenusize set 0');
    }
    else{
        outlet(1, 'umenusize set ' + String(currentDisplay[2] + 1));
    }
    
    outlet(1, 'umenux set ' + String(currentDisplay[0]));
    outlet(1, 'umenuy set ' + String(currentDisplay[1]));

    set_axis('xy', currentDisplay[0], currentDisplay[1]);

    if(fixedSize[0]){
        set_size(0, fixedSize[1]);
    }
    else{
        set_size(currentDisplay[2] + 1, fixedSize[1]);
    }
    
}

function modify_value(col, node, val){
    data[node][col] = val;
    if(col == currentDisplay[0] || col == currentDisplay[1] || col == currentDisplay[2]){
        set_axis('xy', currentDisplay[0], currentDisplay[1]);

        if(fixedSize[0]){
            set_size(0, fixedSize[1]);
        }
        else{
            set_size(currentDisplay[2] + 1, fixedSize[1]);
        }

        // need to add resetting colour here
    }
}