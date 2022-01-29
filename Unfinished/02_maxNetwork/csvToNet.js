// ---------------------------------------------------------------------------------
//
// csvToNet for Max Network.
//
// ---------------------------------------------------------------------------------

// #################################################################################
// Importing modules ###############################################################
// #################################################################################

var ut = require("netUtils");

// #################################################################################
// Global variables ################################################################
// #################################################################################

var verbose = true;

// #################################################################################
// Export functions ################################################################
// #################################################################################

exports.load_csv = function (nodeFile, edgeFile)
{
    // ##############################
    // Populate the current node and edge lists from csv file.
    // ##############################

    currentNodeList = [];
    currentEdgeList = [];

    f = new File(nodeFile, "read");
    f.open();
    line = f.readline();
    while(f.eof > f.position)
    {
        line = "[";
        line = line + f.readline();
        line = line + "]";
        lineList = eval(line);
        coordsList = eval(lineList[6]);
        //otherList = eval(lineList[7]);
        displayCoordList = eval(lineList[9])

        objDict = {};
        objDict["uniqueID"] = lineList[0];
        objDict["name"] = lineList[2];
        objDict["type"] = lineList[4];
        objDict["subtype"] = lineList[5];
        objDict["varname"] = lineList[1];
        objDict["description"] = lineList[8];
        objDict["x"] = displayCoordList[0];
        objDict["y"] = displayCoordList[1];
        objDict["maxclass"] = lineList[3];
        //objDict["text"] = otherList[0];
        //objDict["parent"] = otherList[1];
        //objDict["subpatch"] = eval(otherList[2]);
        objDict["patchX"] = eval(coordsList[0]);
        objDict["patchY"] = eval(coordsList[1]);
        objDict["patchW"] = eval(coordsList[2]);
        objDict["patchH"] = eval(coordsList[3]);
        objDict["inlets"] = eval(coordsList[4]);
        objDict["outlets"] = eval(coordsList[5]);

        currentNodeList.push(objDict);
    }
    f.close();

    f = new File(edgeFile, "read");
    f.open();
    line = f.readline();
    while(f.eof > f.position)
    {
        line = "[";
        line = line + f.readline();
        line = line + "]";
        lineList = eval(line);

        objDict = {};
        objDict["source"] = lineList[0];
        objDict["destination"] = lineList[1];
        objDict["inlet"] = lineList[2];
        objDict["outlet"] = lineList[3];
        objDict["index"] = lineList[4];
        objDict["parent"] = lineList[5];
        objDict["type"] = lineList[6];
        objDict["subtype"] = lineList[7];
        objDict["description"] = lineList[8];

        currentEdgeList.push(objDict);
    }
    f.close()

    if(verbose)
    {
        post("  --->  Current node and edge lists updated.\n");
        post("  --->  " + currentNodeList.length + " nodes and " + currentEdgeList.length + " edges.\n");
    }

    ut.count_neighbours(currentNodeList, currentEdgeList);
}

exports.save_net_to_csv = function (pat)
{
    // ##############################
    // Create two csv files, an edge list and a node list.
    // ##############################

    fullName = pat.name + ".maxpat";
    fileNameNode = pat.filepath.replace(fullName,'') + "NODE_LIST.csv";
    fileNameEdge = pat.filepath.replace(fullName,'') + "EDGE_LIST.csv";

    nodeFile = new File(fileNameNode,"write");
    nodeFile.open();

    header = "";
    for (keys in currentNodeList[0])
    {
        header = header + '"' + String(keys) + '",';
    }
    header = header.slice(0, -1);

    nodeFile.writeline(header);

    for(i = 0; i < currentNodeList.length; i++)
    {
        edgeInfo = "";
        for(key in currentNodeList[i])
        {
            if(typeof currentNodeList[i][key] == "string")
            {
                edgeInfo = edgeInfo + '"' + String(currentNodeList[i][key]).replace(",", "") + '",';
            }
            else if(typeof currentNodeList[i][key] == "number")
            {
                edgeInfo = edgeInfo + '"¬NUM' + String(currentNodeList[i][key]).replace(",", "") + '",';
            }
            else if(typeof currentNodeList[i][key] == "undefined")
            {
                edgeInfo = edgeInfo + '"¬BOO' + String(currentNodeList[i][key]).replace(",", "") + '",';
            }
            else if(typeof currentNodeList[i][key] == "object")
            {
                listStr = "";
                for(j = 0; j < currentNodeList[i][key].length; j++)
                {
                    typer = "";
                    if(typeof currentNodeList[i][key][j] == "string")
                    {
                        typer = "¬STR";
                    }
                    if(typeof currentNodeList[i][key][j] == "number")
                    {
                        typer = "¬NUM";
                    }
                    listStr = listStr + "¬IDX" + typer + String(currentNodeList[i][key][j]).replace(",", "");
                }


                edgeInfo = edgeInfo + '"' + listStr + '",';
            }
        }
        edgeInfo = edgeInfo.slice(0, -1);

        nodeFile.writeline(edgeInfo);
    }

    nodeFile.close();

    edgeFile = new File(fileNameEdge,"write");
    edgeFile.open();

    header = "";
    for (keys in currentEdgeList[0])
    {
        header = header + '"' + String(keys) + '",';
    }
    header = header.slice(0, -1);

    edgeFile.writeline(header);

    for(i = 0; i < currentEdgeList.length; i++)
    {
        edgeInfo = "";
        for(key in currentEdgeList[i])
        {
            if(typeof currentEdgeList[i][key] == "string")
            {
                edgeInfo = edgeInfo + '"' + String(currentEdgeList[i][key]).replace(",", "") + '",';
            }
            else if(typeof currentEdgeList[i][key] == "number")
            {
                edgeInfo = edgeInfo + '"¬NUM' + String(currentEdgeList[i][key]).replace(",", "") + '",';
            }
            else if(typeof currentEdgeList[i][key] == "undefined")
            {
                edgeInfo = edgeInfo + '"¬BOO' + String(currentEdgeList[i][key]).replace(",", "") + '",';
            }
            else if(typeof currentEdgeList[i][key] == "object")
            {
                listStr = "";
                for(j = 0; j < currentEdgeList[i][key].length; j++)
                {
                    typer = "";
                    if(typeof currentEdgeList[i][key][j] == "string")
                    {
                        typer = "¬STR";
                    }
                    if(typeof currentEdgeList[i][key][j] == "number")
                    {
                        typer = "¬NUM";
                    }
                    listStr = listStr + "¬IDX" + typer + String(currentEdgeList[i][key][j]).replace(",", "");
                }


                edgeInfo = edgeInfo + '"' + listStr + '",';
            }
        }
        edgeInfo = edgeInfo.slice(0, -1);

        edgeFile.writeline(edgeInfo);
    }

    edgeFile.close();
}

exports.load_lists_from_csv = function (nodeFilename, edgeFilename)
{
    if(overWriteExistingNodes)
    {
        currentNodeList = [];
        currentEdgeList = [];
    }

    f = new File(nodeFilename, "read");
    f.open();

    line = f.readline();
    keyArray = line.split(",");

    while(f.eof > f.position)
    {
        nodeInfo = {};

        line = f.readline();
        lineArray = line.split(",");

        for(i = 0; i < lineArray.length; i++)
        {
            if(lineArray[i].indexOf("¬IDX") != -1)
            {
                stringList = lineArray[i].split("¬IDX");
                addList = [];
                for(j = 0; j < stringList.length; j++)
                {
                    if(stringList[j].indexOf("¬STR") != -1)
                    {
                        addList.push(stringList[j].replace("¬STR", "").replace("¬IDX", "").replace('"', "").replace('"', ""));
                    }
                    else if(stringList[j].indexOf("¬NUM") != -1)
                    {
                        if(stringList[j].indexOf(".") != -1)
                        {
                            addList.push(parseFloat(stringList[j].replace("¬NUM", "").replace("¬IDX", "").replace('"',"")));
                        }
                        else
                        {
                            addList.push(parseInt(stringList[j].replace("¬NUM", "").replace("¬IDX", "").replace('"',"")));
                        }
                    }
                }
                nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = addList;
            }
            else if(lineArray[i].indexOf("¬NUM") != -1)
            {
                if(lineArray[i].indexOf(".") != -1)
                {
                    nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = parseFloat(lineArray[i].replace("¬NUM","").replace('"',""));
                }
                else
                {
                    nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = parseInt(lineArray[i].replace("¬NUM","").replace('"',""));
                }
            }
            else if(lineArray[i].indexOf("¬BOO") != -1)
            {
                nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = String(lineArray[i].replace("¬BOO",""));
            }
            else
            {
                nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = String(lineArray[i]).replace('"', "").replace('"', "");
            }
        }
        currentNodeList.push(nodeInfo);
    }
    f.close();

    f = new File(edgeFilename, "read");
    f.open();

    line = f.readline();
    keyArray = line.split(",");

    while(f.eof > f.position)
    {
        nodeInfo = {};
        line = f.readline();
        lineArray = line.split(",");

        for(i = 0; i < lineArray.length; i++)
        {
            if(lineArray[i].indexOf("¬IDX") != -1)
            {
                stringList = lineArray[i].split("¬IDX");
                addList = [];
                for(j = 0; j < stringList.length; j++)
                {
                    if(stringList[j].indexOf("¬STR") != -1)
                    {
                        addList.push(stringList[j].replace("¬STR", "").replace("¬IDX", "").replace('"', "").replace('"', ""));
                    }
                    else if(stringList[j].indexOf("¬NUM") != -1)
                    {
                        if(stringList[j].indexOf(".") != -1)
                        {
                            addList.push(parseFloat(stringList[j].replace("¬NUM", "").replace("¬IDX", "").replace('"',"")));
                        }
                        else
                        {
                            addList.push(parseInt(stringList[j].replace("¬NUM", "").replace("¬IDX", "").replace('"',"")));
                        }
                    }
                }
                nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = addList;
            }
            else if(lineArray[i].indexOf("¬NUM") != -1)
            {
                if(lineArray[i].indexOf(".") != -1)
                {
                    nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = parseFloat(lineArray[i].replace("¬NUM","").replace('"',""));
                }
                else
                {
                    nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = parseInt(lineArray[i].replace("¬NUM","").replace('"',""));
                }
            }
            else if(lineArray[i].indexOf("¬BOO") != -1)
            {
                nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = String(lineArray[i].replace("¬BOO",""));
            }
            else
            {
                nodeInfo[String(keyArray[i]).replace('"', "").replace('"', "")] = String(lineArray[i]).replace('"', "").replace('"', "");
            }
        }
        currentEdgeList.push(nodeInfo)
    }
    f.close();
}
