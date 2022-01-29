// ---------------------------------------------------------------------------------
//
// maxToNet for Max Network.
//
// ---------------------------------------------------------------------------------

// #################################################################################
// Global variables ################################################################
// #################################################################################

var usedNames = [];
var usedNames2 = [];
var mainBoxList = [];
var mainLineList = [];
var verbose = true;
var currentFile = "";

var currentNodeList = [];
var currentEdgeList = [];
var trimSubpatchers = true;

var overWriteExistingNodes = true;

var trimAbstractions = true;
var patcherFolder = "";
var abstractionList = [];
var trimComments = true;

// #################################################################################
// Export functions ################################################################
// #################################################################################

function post_all()
{
    post("------> Nodes:\n")
    for(i = 0; i < currentNodeList.length; i++)
    {
        post("\n");
        for(key in currentNodeList[i])
        {
            post(key + ": " + String(currentNodeList[i][key]) + "\n");
        }
    }

    post("\n------> Edges:\n")
    for(i = 0; i < currentEdgeList.length; i++)
    {
        post("\n");
        for(key in currentEdgeList[i])
        {
            post(key + ": " + String(currentEdgeList[i][key]) + "\n");
        }
    }
}

function make_network()
{
    pop_lists(currentFile);
}

function get_abstractions(patFile)
{
    abstractionList = [];
    patcherFolder = "";
    patcherFolderArray = patFile.split("/");
    for(i = 0; i < patcherFolderArray.length -1; i++)
    {
        patcherFolder = patcherFolder + patcherFolderArray[i] + "/";
    }

    theFolder = new Folder(patcherFolder)

    while (!theFolder.end)
    {
        if(theFolder.filename.indexOf(".maxpat") > -1)
        {
            abstractionList.push(theFolder.filename.substring(0, theFolder.filename.length -7));
        }
        theFolder.next();
    }
}

function pop_lists(patFile)
{
    // ##############################
    // Populate the current node and edge lists with main box and line lists.
    // ##############################

    if(trimAbstractions)
    {
        get_abstractions(patFile);
    }

    mainBoxList = [];
    mainLineList = [];

    rawArray = maxpat_to_dict(patFile);

    parse_dict(rawArray);

    edit_lists();

    pop_main_lists();

    // if(trimAbstractions)
    // {
    //     add_abstractions();
    // }

    if(trimSubpatchers)
        subpat_cut();

    if(trimComments)
        cut_comments();
}

// #################################################################################
// Internal functions ##############################################################
// #################################################################################

function cut_comments()
{
    temporaryEdgeList = [];
    for (i = 0; i < currentEdgeList.length; i++)
    {
        sourceNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[i]["source"])];
        destinNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[i]["destination"])];

        if(sourceNode["name"] != "comment" && destinNode["name"] != "comment")
        {
            temporaryEdgeList.push(currentEdgeList[i]);
        }
    }

    currentEdgeList = [];
    for(i = 0; i < temporaryEdgeList.length; i++)
    {
        currentEdgeList.push(temporaryEdgeList[i]);
    }



    temporaryNodeList = [];
    for (i = 0; i < currentNodeList.length; i++)
    {
        if(currentNodeList[i]["name"] != "comment")
        {
            temporaryNodeList.push(currentNodeList[i])
        }
    }
    currentNodeList = [];
    for(i = 0; i < temporaryNodeList.length; i++)
    {
        currentNodeList.push(temporaryNodeList[i]);
    }
}

function add_abstractions()
{
    for(i = 0; i < currentNodeList.length; i++)
    {
        if(currentNodeList[i]["abstraction"])
        {
            abstractionPatcherFileName = patcherFolder + "/" + currentNodeList[i]["text"] + ".maxpat";

            newObjects = pop_lists_local(abstractionPatcherFileName)

            //post("adding " + newObjects[0].length + " new nodes\n")

            for(j = 0; j < newObjects[0].length; j++)
            {
                currentNodeList.push(newObjects[0][j]);
                //post("adding " + newObjects[0][j] + "\n")
            }
            for(j = 0; j < newObjects[1].length; j++)
            {
                currentEdgeList.push(newObjects[1][j]);
            }
        }
    }
}

function subpat_cut()
{
    // Objects towards subpatchers:

    for(i = 0; i < currentEdgeList.length; i++)
    {

        sourceNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[i]["source"])];
        destNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[i]["destination"])]

        destID = destNode["uniqueID"];
        destName = destNode["name"];
        destVar = destNode["varname"];
        inletIdx = currentEdgeList[i]["inlet"];

        if(destName == "subpatcher" && sourceNode["name"] != "inlet")
        {
            toConnect = [];
            for(j = 0; j < currentNodeList.length; j++)
            {
                if(currentNodeList[j]["name"] == "inlet" && currentNodeList[j]["parent"] == destVar && currentNodeList[j]["inletIdx"] == inletIdx)
                {
                    theInlet = currentNodeList[j];
                    break;
                }
            }

            for(j = 0; j < currentEdgeList.length; j++)
            {
                if(currentEdgeList[j]["source"] == theInlet["uniqueID"])
                {
                    newDestName = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[j]["destination"])]["name"];
                    if(newDestName != "subpatcher")
                    {
                        toPush = [currentEdgeList[j]["destination"], currentEdgeList[i]["outlet"], currentEdgeList[j]["inlet"]];
                        toConnect.push(toPush);
                    }
                    else
                    {
                        searchingParent = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[j]["destination"])]["varname"];
                        searchingInlet = currentEdgeList[j]["inlet"];

                        next_node(searchingParent, searchingInlet, currentEdgeList[i]["outlet"]);
                    }
                }
            }

            for(j = 0; j < toConnect.length; j++)
            {
                actualDest = currentNodeList[find_node_idx_intern(currentNodeList, toConnect[j][0])];

                edgeDict = {};
                edgeDict["source"] = sourceNode["uniqueID"];
                edgeDict["destination"] = actualDest["uniqueID"];
                edgeDict["outlet"] = toConnect[j][1];
                edgeDict["inlet"] = toConnect[j][2];
                edgeDict["index"] = sourceNode["parent"] + "_created_" + j;
                edgeDict["parent"] = sourceNode["parent"];
                edgeDict["type"] = "digital";
                if(sourceNode["name"].indexOf('~') > -1)
                {
                    edgeDict["subtype"] = "constant";
                    edgeDict["description"] = "A max patch chord.";
                    edgeDict["thickness"] = 1;
                    edgeDict["col"] = [0.306, 0.569, 0.239, 1.000];
                }
                else
                {
                    edgeDict["subtype"] = "sporadic";
                    edgeDict["description"] = "A max patch chord.";
                    edgeDict["thickness"] = 1;
                    edgeDict["col"] = [0.000, 0.000, 0.000, 1.000];
                }

                currentEdgeList.push(edgeDict);
            }
        }
    }

    // Objects out of subpatchers:
    for(i = 0; i < currentEdgeList.length; i++)
    {
        destNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[i]["destination"])];
        sourceNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[i]["source"])]

        sourceID = sourceNode["uniqueID"];
        sourceName = sourceNode["name"];
        destPar = destNode["parent"];
        outletIdx = currentEdgeList[i]["outlet"];
        subpatExitOutlet = destNode["outletIdx"];

        if(destNode["name"] == "outlet" && sourceNode["name"] != "subpatcher")
        {
            toConnect = [];
            for(j = 0; j < currentNodeList.length; j++)
            {
                if(currentNodeList[j]["name"] == "subpatcher" && currentNodeList[j]["varname"] == destPar)
                {
                    theSubpat = currentNodeList[j];
                    break;
                }
            }

            for(j = 0; j < currentEdgeList.length; j++)
            {
                if(currentEdgeList[j]["source"] == theSubpat["uniqueID"] && currentEdgeList[j]["outlet"] == subpatExitOutlet)
                {
                    newDest = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[j]["destination"])];

                    if(newDest["name"] != "outlet")
                    {
                        toPush = [newDest["uniqueID"], outletIdx, currentEdgeList[j]["inlet"]];
                        toConnect.push(toPush);
                    }
                    else
                    {
                        searchingVar = newDest['parent'];
                        searchingOutlet = newDest['outletIdx'];

                        next_node_outlet(searchingVar, searchingOutlet, outletIdx);
                    }
                }
            }

            for(j = 0; j < toConnect.length; j++)
            {
                actualDest = currentNodeList[find_node_idx_intern(currentNodeList, toConnect[j][0])];

                edgeDict = {};
                edgeDict["source"] = sourceNode["uniqueID"];
                edgeDict["destination"] = actualDest["uniqueID"];
                edgeDict["outlet"] = toConnect[j][1];
                edgeDict["inlet"] = toConnect[j][2];
                edgeDict["index"] = sourceNode["parent"] + "_created_" + j;
                edgeDict["parent"] = sourceNode["parent"];
                edgeDict["type"] = "digital";
                if(sourceNode["name"].indexOf('~') > -1)
                {
                    edgeDict["subtype"] = "constant";
                    edgeDict["description"] = "A max patch chord.";
                    edgeDict["thickness"] = 1;
                    edgeDict["col"] = [0.306, 0.569, 0.239, 1.000];
                }
                else
                {
                    edgeDict["subtype"] = "sporadic";
                    edgeDict["description"] = "A max patch chord.";
                    edgeDict["thickness"] = 1;
                    edgeDict["col"] = [0.000, 0.000, 0.000, 1.000];
                }

                currentEdgeList.push(edgeDict);
            }
        }
    }

    // Deleting unwanted shit:
    temporaryEdgeList = [];
    for (i = 0; i < currentEdgeList.length; i++)
    {
        sourceNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[i]["source"])];
        destinNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[i]["destination"])];

        if(sourceNode["name"] != "inlet" && sourceNode["name"] != "outlet" && sourceNode["name"] != "subpatcher" && destinNode["name"] != "inlet" && destinNode["name"] != "outlet" && destinNode["name"] != "subpatcher")
        {
            temporaryEdgeList.push(currentEdgeList[i]);
        }
    }

    currentEdgeList = [];
    for(i = 0; i < temporaryEdgeList.length; i++)
    {
        currentEdgeList.push(temporaryEdgeList[i]);
    }



    temporaryNodeList = [];
    for (i = 0; i < currentNodeList.length; i++)
    {
        if(currentNodeList[i]["name"] != "inlet" && currentNodeList[i]["name"] != "outlet" && currentNodeList[i]["name"] != "subpatcher")
        {
            temporaryNodeList.push(currentNodeList[i])
        }
    }
    currentNodeList = [];
    for(i = 0; i < temporaryNodeList.length; i++)
    {
        currentNodeList.push(temporaryNodeList[i]);
    }
}

function next_node_outlet(nnOutletVar, nnOutletIdx, mainOutletCon)
{
    for(k = 0; k < currentNodeList.length; k++)
    {
        foundSubPat = false;

        if(currentNodeList[k]["name"] == "subpatcher" && currentNodeList[k]["varname"] == nnOutletVar)
        {
            oursubPat = currentNodeList[k];
            foundSubPat = true;
        }

        if(foundSubPat)
        {
            lookFurtherList = [];
            lookFurther = false;
            for(l = 0; l < currentEdgeList.length; l++)
            {
                if(currentEdgeList[l]["source"] == oursubPat["uniqueID"] && currentEdgeList[l]["outlet"] == nnOutletIdx)
                {
                    foundNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[l]["destination"])];

                    if(foundNode["name"] != "outlet")
                    {
                        newToPush = [foundNode["uniqueID"], mainOutletCon, currentEdgeList[l]["inlet"]]
                        toConnect.push(newToPush);
                    }
                    else
                    {
                        lookFurther = true;
                        lookFurtherList.push([foundNode["parent"], foundNode["outletIdx"]])
                    }
                }
            }
            if(lookFurther)
            {
                for(n = 0; n < lookFurtherList.length; n++)
                {
                    next_node_outlet(lookFurtherList[n][0], lookFurtherList[n][1], mainOutletCon)
                }
            }
        }
    }
}

function next_node(nnInletPar, nnInletIdx, mainOutletCon)
{
    for(k = 0; k < currentNodeList.length; k++)
    {
        foundInlet = false;

        if(currentNodeList[k]["name"] == "inlet" && currentNodeList[k]["parent"] == nnInletPar && currentNodeList[k]["inletIdx"] == nnInletIdx)
        {
            ourInlet = currentNodeList[k];
            foundInlet = true;
        }

        if(foundInlet)
        {
            lookFurtherList = []
            lookFurther = false;
            for(l = 0; l < currentEdgeList.length; l++)
            {
                if(currentEdgeList[l]["source"] == ourInlet["uniqueID"])
                {
                    foundNode = currentNodeList[find_node_idx_intern(currentNodeList, currentEdgeList[l]["destination"])];

                    if(foundNode["name"] != "subpatcher")
                    {
                        newToPush = [foundNode["uniqueID"], mainOutletCon, currentEdgeList[l]["inlet"]]
                        toConnect.push(newToPush);
                    }
                    else
                    {
                        lookFurther = true;
                        lookFurtherList.push([foundNode["varname"], currentEdgeList[l]["inlet"]])
                    }
                }
            }
            if(lookFurther)
            {
                for(n = 0; n < lookFurtherList.length; n++)
                {
                    next_node(lookFurtherList[n][0], lookFurtherList[n][1], mainOutletCon)
                }
            }
        }
    }
}

function pop_main_lists()
{
    // ##############################
    // Populate the current working node and edge lists with the main box and line lists.
    // ##############################

    if(overWriteExistingNodes)
    {
        currentNodeList = [];
        currentEdgeList = [];
    }

    for(i = 0; i < mainBoxList.length; i++)
    {
        nodeInfo = {};
        nodeInfo["uniqueID"] = mainBoxList[i]["id"];
        nodeInfo["x"] = 0;
        nodeInfo["y"] = 0;
        nodeInfo["name"] = mainBoxList[i]["name"];
        nodeInfo["type"] = mainBoxList[i]["type"];
        nodeInfo["subtype"] = mainBoxList[i]["subtype"];
        nodeInfo["varname"] = mainBoxList[i]["varname"];
        nodeInfo["description"] = mainBoxList[i]["varname"];
        nodeInfo["neighbours"] = [];
        nodeInfo["maxclass"] = mainBoxList[i]["maxclass"];
        nodeInfo["text"] = mainBoxList[i]["text"];
        nodeInfo["parent"] = mainBoxList[i]["parent"];
        if(mainBoxList[i]["subpatch"])
        {
            nodeInfo["subpatch"] = 1;
        }
        else
        {
            nodeInfo["subpatch"] = 0;
        }
        if(mainBoxList[i]["abstraction"])
        {
            nodeInfo["abstraction"] = 1;
        }
        else
        {
            nodeInfo["abstraction"] = 0;
        }
        nodeInfo["patchX"] = mainBoxList[i]["x"];
        nodeInfo["patchY"] = mainBoxList[i]["y"];
        nodeInfo["patchW"] = mainBoxList[i]["w"];
        nodeInfo["patchH"] = mainBoxList[i]["h"];
        nodeInfo["inlets"] = mainBoxList[i]["numinlets"];
        nodeInfo["outlets"] = mainBoxList[i]["numoutlets"];
        nodeInfo["size"] = 10;
        nodeInfo["col"] = [0.255, 0.467, 0.698, 1.000];

        if(mainBoxList[i]["name"] == "inlet")
        {
            inletList = [];
            for(j = 0; j < mainBoxList.length; j++)
            {
                if(mainBoxList[j]["parent"] == mainBoxList[i]["parent"] && mainBoxList[j]["name"] == "inlet")
                {
                    inletPos = [];
                    inletPos.push(mainBoxList[j]["x"])
                    inletPos.push(mainBoxList[j]["id"])
                    inletList.push(inletPos)
                }
            }
            if(inletList.length == 1)
            {
                nodeInfo["inletIdx"] = 0;
            }
            else
            {
                orderedList = inletList.sort(list_sorter);
                for(k = 0; k < orderedList.length; k++)
                {
                    if(orderedList[k][1] == mainBoxList[i]["id"])
                    {
                        nodeInfo["inletIdx"] = k;
                        break;
                    }
                }
            }
        }
        else
        {
            nodeInfo["inletIdx"] = 0;
        }

        if(mainBoxList[i]["name"] == "outlet")
        {
            inletList = [];
            for(j = 0; j < mainBoxList.length; j++)
            {
                if(mainBoxList[j]["parent"] == mainBoxList[i]["parent"] && mainBoxList[j]["name"] == "outlet")
                {
                    inletPos = [];
                    inletPos.push(mainBoxList[j]["x"])
                    inletPos.push(mainBoxList[j]["id"])
                    inletList.push(inletPos)
                }
            }
            if(inletList.length == 1)
            {
                nodeInfo["outletIdx"] = 0;
            }
            else
            {
                orderedList = inletList.sort(list_sorter);
                for(k = 0; k < orderedList.length; k++)
                {
                    if(orderedList[k][1] == mainBoxList[i]["id"])
                    {
                        nodeInfo["outletIdx"] = k;
                        break;
                    }
                }
            }
        }
        else
        {
            nodeInfo["outletIdx"] = 0;
        }

        currentNodeList.push(nodeInfo);
    }

    if(verbose)
        post("  --->  Current node list populated.\n");

    for(i = 0; i < mainLineList.length; i++)
    {
        edgeInfo = {};
        edgeInfo["source"] = mainLineList[i]["source"];
        edgeInfo["destination"] = mainLineList[i]["destination"];
        edgeInfo["inlet"] = mainLineList[i]["inlet"];
        edgeInfo["outlet"] = mainLineList[i]["outlet"];
        edgeInfo["index"] = mainLineList[i]["lineidx"];
        edgeInfo["parent"] = mainLineList[i]["parent"];
        edgeInfo["type"] = mainLineList[i]["type"];
        edgeInfo["subtype"] = mainLineList[i]["subtype"];
        edgeInfo["description"] = mainLineList[i]["description"];
        edgeInfo["thickness"] = 1;
        if(mainLineList[i]["subtype"] == "sporadic")
        {
            edgeInfo["col"] = [0.000, 0.000, 0.000, 1.000];
        }
        if(mainLineList[i]["subtype"] == "constant")
        {
            edgeInfo["col"] = [0.306, 0.569, 0.239, 1.000];
        }

        currentEdgeList.push(edgeInfo);
    }

    if(verbose)
        post("  --->  Current edge list populated.\n");
}

function list_sorter(a, b)
{
   if (a[0] < b[0]) return -1;
   if (a[0] > b[0]) return 1;
   return 0;
}

function write_csv(pat, homeDirec)
{
    // ##############################
    // Creates two csv files with headers of the main box and line lists.
    // ##############################

    f = new File(pat,"read");
    folder = f.foldername;
    nodeFileName = homeDirec + "/MAXTONET_OUTPUT_Nodes.csv";
    edgeFileName = homeDirec + "/MAXTONET_OUTPUT_Edges.csv";

    nodeFile = new File(nodeFileName,"write");
    nodeFile.open();

    headers = '"unique ID","varname","name","maxclass","type","subtype","abstraction","coords[x,y,w,h,ins,outs]","other[text,parent,subpatcher]","description","real coords[x,y]"';
    nodeFile.writeline(headers);

    for(i = 0; i < mainBoxList.length; i++)
    {
        nodeInfo = '"' + String(mainBoxList[i]["id"]) + '",';
        nodeInfo = nodeInfo + '"' + String(mainBoxList[i]["varname"]) + '",';
        nodeInfo = nodeInfo + '"' + String(mainBoxList[i]["name"]) + '",';
        nodeInfo = nodeInfo + '"' + String(mainBoxList[i]["maxclass"]) + '",';
        nodeInfo = nodeInfo + '"' + String(mainBoxList[i]["type"]) + '",';
        nodeInfo = nodeInfo + '"' + String(mainBoxList[i]["subtype"]) + '",';
        coords = '[' + String(mainBoxList[i]["x"]) + ', ' + String(mainBoxList[i]["y"]) + ', ' + String(mainBoxList[i]["w"]) + ', ' + String(mainBoxList[i]["h"]) + ', ' + String(mainBoxList[i]["numinlets"]) + ', ' + String(mainBoxList[i]["numoutlets"]) + ']';
        nodeInfo = nodeInfo + '"' + coords + '",';
        other = '[' + String(mainBoxList[i]["text"]) + ', ' + String(mainBoxList[i]["parent"]) + ', ' + String(mainBoxList[i]["subpatcher"]) + ']';
        nodeInfo = nodeInfo + '"' + other + '",';
        nodeInfo = nodeInfo + '"' + String(mainBoxList[i]["description"]) + '","[0,0]"';

        nodeFile.writeline(nodeInfo);
    }

    nodeFile.close();

    if(verbose)
        post("  --->  Created node list csv file.\n");

    edgeFile = new File(edgeFileName,"write");
    edgeFile.open();

    headers = '"source","destination","inlet","outlet","index","parent","type","subtype","description"';
    edgeFile.writeline(headers);

    for(i = 0; i < mainLineList.length; i++)
    {
        edgeInfo = '"' + String(mainLineList[i]["source"]) + '",';
        edgeInfo = edgeInfo + '"' + String(mainLineList[i]["destination"]) + '",';
        edgeInfo = edgeInfo + '"' + String(mainLineList[i]["inlet"]) + '",';
        edgeInfo = edgeInfo + '"' + String(mainLineList[i]["outlet"]) + '",';
        edgeInfo = edgeInfo + '"' + String(mainLineList[i]["lineidx"]) + '",';
        edgeInfo = edgeInfo + '"' + String(mainLineList[i]["parent"]) + '",';
        edgeInfo = edgeInfo + '"' + String(mainLineList[i]["type"]) + '",';
        edgeInfo = edgeInfo + '"' + String(mainLineList[i]["subtype"]) + '",';
        edgeInfo = edgeInfo + '"' + String(mainLineList[i]["description"]) + '"';

        edgeFile.writeline(edgeInfo);
    }

    edgeFile.close();

    if(verbose)
        post("  --->  Created edge list csv file.\n");
}

function maxpat_to_dict(filename)
{
    // ##############################
    // Read a .maxpat file and return an array of the JSON file and parent name.
    // ##############################

    var theArray = [];
    var theString = "";
    var parent = filename.split("/").pop();

    f = new File(filename, "read");

    while(f.eof > f.position)
    {
        line = f.readline();
        line = line.replace("\t", "");
        theString += line;
    }

    theDict = JSON.parse(theString);

    theArray.push(theDict);
    theArray.push(parent);

    if(verbose)
        post("  --->  " + filename + " converted to dict.\n");

    return theArray;
}

function parse_dict(array)
{
    // ##############################
    // Parse the raw max file JSON and parent array to populate the
    // main box and line lists with dicts of the following format:
    // boxes :
    //      {id, varname, maxclass, numinlets, numoutlets, x, y, w, h, text, parent, subpatcher}
    // lines :
    //      {source, outlet, destination, inlet, lineidx, parent}
    // ##############################

    maxDict = array[0];
    parent = array[1];
    theList = [];

    for(i = 0; i < maxDict.patcher.boxes.length; i++)
    {
        objDict = {};
        objDict.id = maxDict.patcher.boxes[i].box.id + parent;
        objDict.varname = maxDict.patcher.boxes[i].box.varname;
        objDict.maxclass = maxDict.patcher.boxes[i].box.maxclass;
        objDict.numinlets = maxDict.patcher.boxes[i].box.numinlets;
        objDict.numoutlets = maxDict.patcher.boxes[i].box.numoutlets;
        objDict.x = maxDict.patcher.boxes[i].box.patching_rect[0];
        objDict.y = maxDict.patcher.boxes[i].box.patching_rect[1];
        objDict.w = maxDict.patcher.boxes[i].box.patching_rect[2];
        objDict.h = maxDict.patcher.boxes[i].box.patching_rect[3];
        if("text" in maxDict.patcher.boxes[i].box)
            objDict.text = maxDict.patcher.boxes[i].box.text;
        else
            objDict.text = "";
        objDict.parent = parent;
        if("patcher" in maxDict.patcher.boxes[i].box)
        {
            objDict.subpatcher = true;
        }
        else
        {
            objDict.subpatcher = false;
        }

        if(trimAbstractions)
        {
            objDict.abstraction = false;
            for(j = 0; j < abstractionList.length; j++)
            {
                if(objDict["text"] == abstractionList[j])
                {
                    objDict.abstraction = true;
                }
            }

        }

        mainBoxList.push(objDict)
    }

    for(i = 0; i < maxDict.patcher.lines.length; i++)
    {
        objDict = {};
        objDict.source = maxDict.patcher.lines[i].patchline.source[0] + parent;
        objDict.outlet = maxDict.patcher.lines[i].patchline.source[1];
        objDict.destination = maxDict.patcher.lines[i].patchline.destination[0] + parent;
        objDict.inlet = maxDict.patcher.lines[i].patchline.destination[1];
        objDict.lineidx = parent + i;
        objDict.parent = parent;

        mainLineList.push(objDict);
    }

    if(verbose)
        post('  --->  Dict parse at "' + parent + '" level to box and line lists completed.\n');

    for(i = 0; i < maxDict.patcher.boxes.length; i++)
    {
        varname = maxDict.patcher.boxes[i].box.varname;

        if("patcher" in maxDict.patcher.boxes[i].box)
        {
            newArray = [maxDict.patcher.boxes[i].box, varname];
            parse_dict(newArray);
        }
    }
}

function edit_lists()
{
    // ##############################
    // Formatting the contents of the box and line lists, notably:
    // - Creating a properly formatted name.
    // - Creating unique IDs.
    // - Creating types and subtypes.
    // - Creating descriptions.
    // ##############################

    // Names:

    for(i =0; i < mainBoxList.length; i++)
    {
        if (mainBoxList[i]["subpatcher"] == true)
        {
            mainBoxList[i]["name"] = "subpatcher";
        }
        else if(mainBoxList[i]["maxclass"] != "newobj")
        {
            mainBoxList[i]["name"] = mainBoxList[i]["maxclass"];
        }
        else if(mainBoxList[i]["text"] != "")
        {
            mainBoxList[i]["name"] = mainBoxList[i]["text"];
        }
        else
        {
            mainBoxList[i]["name"] = "unknown max object";
        }
    }

    if(verbose)
        post("  --->  Created formatted node names.\n");

    // Unique IDs:

    for(i = 0; i < mainBoxList.length; i++)
    {
        oldID = mainBoxList[i]["id"];
        newID = oldID + "_" + unique_name(usedNames2, 10000);
        mainBoxList[i]["id"] = newID;
        for(j = 0; j < mainLineList.length; j++)
        {
            if(mainLineList[j]["source"] == oldID)
                mainLineList[j]["source"] = newID;
            if(mainLineList[j]["destination"] == oldID)
                mainLineList[j]["destination"] = newID;
        }
    }

    if(verbose)
        post("  --->  Updated node IDs to unique IDs.\n");

    // Types and subtypes:

    for(i = 0; i < mainBoxList.length; i++)
    {
        mainBoxList[i]["type"] = "physical";
        mainBoxList[i]["subtype"] = "digital";
    }

    for(i = 0; i < mainLineList.length; i++)
    {
        searchingForSource = true;
        j = 0;
        while(searchingForSource)
        {
            if(mainBoxList[j]["id"] == mainLineList[i]["source"])
            {
                searchingForSource = false;
                break;
            }
            j += 1;
        }
        if(mainBoxList[j]["name"].indexOf("~") > -1)
            mainLineList[i]["subtype"] = "constant";
        else
            mainLineList[i]["subtype"] = "sporadic";

        mainLineList[i]["type"] = "digital";
    }

    if(verbose)
        post("  --->  Created types and subtypes for nodes and edges.\n");

    // Descriptions:

    for(i = 0; i < mainBoxList.length; i++)
    {
        mainBoxList[i]["description"] = "A max object.";
    }

    for(i = 0; i < mainLineList.length; i++)
    {
        mainLineList[i]["description"] = "A max patch chord.";
    }

    if(verbose)
        post("  --->  Created descriptions for nodes and edges.\n");
}

function post_lists()
{
    // ##############################
    // Display current main box and line lists.
    // ##############################

    post("####> BOXES:\n");
    post("Number of boxes: " + mainBoxList.length + ".\n");
    for(i = 0; i < mainBoxList.length; i++)
    {
        post("\n");
        for(key in mainBoxList[i])
        {
            post(key + ": " + mainBoxList[i][key] + "\n");
        }
    }

    post("\n");

    post("####> LINES:\n");
    post("Number of lines: " + mainLineList.length + ".\n");
    for(i = 0; i < mainLineList.length; i++)
    {
        post("\n");
        for(key in mainLineList[i])
        {
            post(key + ": " + mainLineList[i][key] + "\n");
        }
    }
}

function varnamer(obj)
{
    // ##############################
    // Check if an object has a varname, if not, gives it a unique one.
    // ##############################

    if(obj.varname == "")
        obj.varname = obj.maxclass + unique_name(usedNames, 10000);

    return true;
}

function unique_name(nameList, range)
{
    // ##############################
    // Creates a random number and returns it as a string.
    // If the number is already in the given list, a new number will be found.
    // ##############################

    var loopOn = true;
    while(loopOn)
    {
        uniqueInt = Math.floor(Math.random() * range);

        if (nameList.indexOf(uniqueInt) == -1)
        {
            nameList.push(uniqueInt)
            loopOn = false;
        }
    }
    return parseInt(uniqueInt);
}

function find_node_idx_intern(nodeList, id)
{
    // ##############################
    // Find the index of a node in the node list from it's unique ID.
    // ##############################

    for(idx = 0; idx < nodeList.length; idx++)
    {
        if(nodeList[idx]["uniqueID"] == id)
        {
            break;
        }
    }
    return idx;
}

function update_subpat_format(x)
{
    if(x == 0)
    {
        trimSubpatchers = false;
    }
    if(x == 1)
    {
        trimSubpatchers = true;
    }
}

function update_abstraction_format(x)
{
    if(x == 0)
    {
        trimAbstractions = false;
    }
    if(x == 1)
    {
        trimAbstractions = true;
    }
}

function update_file(x)
{
    currentFile = x;
}

function update_cut_comments(x)
{
    if(x == 0)
    {
        trimComments = false;
    }
    if(x == 1)
    {
        trimComments = true;
    }
}

function post_file()
{
    post(currentFile + "\n")
}

function save_files()
{
    save_net_to_csv(this.patcher);
    post("Files created!");
}

function save_net_to_csv(pat)
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


























function pop_lists_local(patcherFileName)
{
    var localAbstractionList = []; //abstractionList
    var localPatcherFolder = ""; //patcherFolder
    var tempNodeList = [];
    var tempEdgeList = [];

    if(trimAbstractions)
    {
        get_abstractions_local(patcherFileName);
    }

    var localMainBoxList = []; // mainBoxList
    var localMainLineList = []; // mainLineList

    localRawArray = local_maxpat_to_dict(patcherFileName);

    local_parse_dict(localRawArray, localMainBoxList, localMainLineList);

    local_edit_lists(localMainBoxList, localMainLineList);

    local_pop_main_lists(localMainBoxList, localMainLineList, tempNodeList, tempEdgeList);

    post("posting....\n")
    for(local_i = 0; local_i < tempNodeList.length; local_i++)
    {
        post(tempNodeList[local_i]["uniqueID"] + "\n");
    }

    if(trimAbstractions)
    {
        local_add_abstractions(tempNodeList, tempEdgeList);
    }

    // post("posting....\n")
    // for(local_i = 0; local_i < tempNodeList.length; local_i++)
    // {
    //     post(tempNodeList[local_i]["name"] + "\n");
    // }

    if(trimSubpatchers)
        local_subpat_cut(tempNodeList, tempEdgeList);

    // post("posting....\n")
    // for(local_i = 0; local_i < tempNodeList.length; local_i++)
    // {
    //     post(tempNodeList[local_i]["name"] + "\n");
    // }

    return [tempNodeList, tempEdgeList];
}

function local_add_abstractions(tempNodeList, tempEdgeList)
{
    for(local_i = 0; local_i < tempNodeList.length; local_i++)
    {
        if(tempNodeList[local_i]["abstraction"])
        {
            abstractionPatcherFileName = patcherFolder + "/" + tempNodeList[local_i]["text"] + ".maxpat";

            newObjects = pop_lists_local(abstractionPatcherFileName)

            for(local_j = 0; local_j < newObjects[0].length; local_j++)
            {
                tempNodeList.push(newObjects[0][local_j]);
            }
            for(local_j = 0; local_j < newObjects[1].length; local_j++)
            {
                tempEdgeList.push(newObjects[1][local_j]);
            }
        }
    }
}

function local_subpat_cut(tempNodeList, tempEdgeList)
{
    // Objects towards subpatchers:

    for(local_i = 0; local_i < tempEdgeList.length; local_i++)
    {

        sourceNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[local_i]["source"])];
        destNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[local_i]["destination"])]

        destID = destNode["uniqueID"];
        destName = destNode["name"];
        destVar = destNode["varname"];
        inletIdx = tempEdgeList[local_i]["inlet"];

        if(destName == "subpatcher" && sourceNode["name"] != "inlet")
        {
            toConnect = [];
            for(local_j= 0; local_j< tempNodeList.length; local_j++)
            {
                if(tempNodeList[local_j]["name"] == "inlet" && tempNodeList[local_j]["parent"] == destVar && tempNodeList[local_j]["inletIdx"] == inletIdx)
                {
                    theInlet = tempNodeList[local_j];
                    break;
                }
            }

            for(local_j= 0; local_j< tempEdgeList.length; local_j++)
            {
                if(tempEdgeList[local_j]["source"] == theInlet["uniqueID"])
                {
                    newDestName = currentNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[local_j]["destination"])]["name"];
                    if(newDestName != "subpatcher")
                    {
                        toPush = [tempEdgeList[local_j]["destination"], tempEdgeList[local_i]["outlet"], tempEdgeList[local_j]["inlet"]];
                        toConnect.push(toPush);
                    }
                    else
                    {
                        searchingParent = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[local_j]["destination"])]["varname"];
                        searchingInlet = tempEdgeList[local_j]["inlet"];

                        local_next_node(searchingParent, searchingInlet, tempEdgeList[local_i]["outlet"], tempNodeList, tempEdgeList);
                    }
                }
            }

            for(local_j= 0; local_j< toConnect.length; local_j++)
            {
                actualDest = tempNodeList[local_find_node_idx_intern(tempNodeList, toConnect[local_j][0])];

                edgeDict = {};
                edgeDict["source"] = sourceNode["uniqueID"];
                edgeDict["destination"] = actualDest["uniqueID"];
                edgeDict["outlet"] = toConnect[local_j][1];
                edgeDict["inlet"] = toConnect[local_j][2];
                edgeDict["index"] = sourceNode["parent"] + "_created_" + j;
                edgeDict["parent"] = sourceNode["parent"];
                edgeDict["type"] = "digital";
                if(sourceNode["name"].indexOf('~') > -1)
                {
                    edgeDict["subtype"] = "constant";
                    edgeDict["description"] = "A max patch chord.";
                    edgeDict["thickness"] = 1;
                    edgeDict["col"] = [0.306, 0.569, 0.239, 1.000];
                }
                else
                {
                    edgeDict["subtype"] = "sporadic";
                    edgeDict["description"] = "A max patch chord.";
                    edgeDict["thickness"] = 1;
                    edgeDict["col"] = [0.000, 0.000, 0.000, 1.000];
                }

                tempEdgeList.push(edgeDict);
            }
        }
    }

    // Objects out of subpatchers:
    for(local_i = 0; local_i < tempEdgeList.length; local_i++)
    {
        destNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[local_i]["destination"])];
        sourceNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[local_i]["source"])]

        sourceID = sourceNode["uniqueID"];
        sourceName = sourceNode["name"];
        destPar = destNode["parent"];
        outletIdx = tempEdgeList[local_i]["outlet"];
        subpatExitOutlet = destNode["outletIdx"];

        if(destNode["name"] == "outlet" && sourceNode["name"] != "subpatcher")
        {
            toConnect = [];
            for(local_j= 0; local_j< tempNodeList.length; local_j++)
            {
                if(tempNodeList[local_j]["name"] == "subpatcher" && tempNodeList[local_j]["varname"] == destPar)
                {
                    theSubpat = tempNodeList[local_j];
                    break;
                }
            }

            for(local_j= 0; local_j< tempEdgeList.length; local_j++)
            {
                if(tempEdgeList[local_j]["source"] == theSubpat["uniqueID"] && tempEdgeList[local_j]["outlet"] == subpatExitOutlet)
                {
                    newDest = tempNodeList[local_find_node_idx_intern(tempNodeList,tempEdgeList[local_j]["destination"])];

                    if(newDest["name"] != "outlet")
                    {
                        toPush = [newDest["uniqueID"], outletIdx, tempEdgeList[local_j]["inlet"]];
                        toConnect.push(toPush);
                    }
                    else
                    {
                        searchingVar = newDest['parent'];
                        searchingOutlet = newDest['outletIdx'];

                        local_next_node_outlet(searchingVar, searchingOutlet, outletIdx, tempNodeList, tempEdgeList);
                    }
                }
            }

            for(local_j= 0; local_j< toConnect.length; local_j++)
            {
                actualDest = tempNodeList[local_find_node_idx_intern(tempNodeList, toConnect[local_j][0])];

                edgeDict = {};
                edgeDict["source"] = sourceNode["uniqueID"];
                edgeDict["destination"] = actualDest["uniqueID"];
                edgeDict["outlet"] = toConnect[local_j][1];
                edgeDict["inlet"] = toConnect[local_j][2];
                edgeDict["index"] = sourceNode["parent"] + "_created_" + j;
                edgeDict["parent"] = sourceNode["parent"];
                edgeDict["type"] = "digital";
                if(sourceNode["name"].indexOf('~') > -1)
                {
                    edgeDict["subtype"] = "constant";
                    edgeDict["description"] = "A max patch chord.";
                    edgeDict["thickness"] = 1;
                    edgeDict["col"] = [0.306, 0.569, 0.239, 1.000];
                }
                else
                {
                    edgeDict["subtype"] = "sporadic";
                    edgeDict["description"] = "A max patch chord.";
                    edgeDict["thickness"] = 1;
                    edgeDict["col"] = [0.000, 0.000, 0.000, 1.000];
                }

                tempEdgeList.push(edgeDict);
            }
        }
    }

    // Deleting unwanted shit:
    temporaryEdgeList = [];
    for (local_i = 0; local_i < tempEdgeList.length; local_i++)
    {
        sourceNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[local_i]["source"])];
        destinNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[local_i]["destination"])];

        if(sourceNode["name"] != "inlet" && sourceNode["name"] != "outlet" && sourceNode["name"] != "subpatcher" && destinNode["name"] != "inlet" && destinNode["name"] != "outlet" && destinNode["name"] != "subpatcher")
        {
            temporaryEdgeList.push(tempEdgeList[local_i]);
        }
    }

    tempEdgeList = [];
    for(local_i = 0; local_i < temporaryEdgeList.length; local_i++)
    {
        tempEdgeList.push(temporaryEdgeList[local_i]);
    }



    temporaryNodeList = [];
    for (local_i = 0; local_i < tempNodeList.length; local_i++)
    {
        if(tempNodeList[local_i]["name"] != "inlet" && tempNodeList[local_i]["name"] != "outlet" && tempNodeList[local_i]["name"] != "subpatcher")
        {
            temporaryNodeList.push(tempNodeList[local_i])
        }
    }
    tempNodeList = [];
    for(local_i = 0; local_i < temporaryNodeList.length; local_i++)
    {
        tempNodeList.push(temporaryNodeList[local_i]);
    }
}

function local_pop_main_lists(localMainBoxList, localMainLineList, tempNodeList, tempEdgeList)
{
    // ##############################
    // Populate the current working node and edge lists with the main box and line lists.
    // ##############################

    if(overWriteExistingNodes)
    {
        tempNodeList = [];
        tempLineList = [];
    }

    for(local_i = 0; local_i < localMainBoxList.length; local_i++)
    {
        nodeInfo = {};
        nodeInfo["uniqueID"] = localMainBoxList[local_i]["id"];
        nodeInfo["x"] = 0;
        nodeInfo["y"] = 0;
        nodeInfo["name"] = localMainBoxList[local_i]["name"];
        nodeInfo["type"] = localMainBoxList[local_i]["type"];
        nodeInfo["subtype"] = localMainBoxList[local_i]["subtype"];
        nodeInfo["varname"] = localMainBoxList[local_i]["varname"];
        nodeInfo["description"] = localMainBoxList[local_i]["varname"];
        nodeInfo["neighbours"] = [];
        nodeInfo["maxclass"] = localMainBoxList[local_i]["maxclass"];
        nodeInfo["text"] = localMainBoxList[local_i]["text"];
        nodeInfo["parent"] = localMainBoxList[local_i]["parent"];
        if(localMainBoxList[local_i]["subpatch"])
        {
            nodeInfo["subpatch"] = 1;
        }
        else
        {
            nodeInfo["subpatch"] = 0;
        }
        if(localMainBoxList[local_i]["abstraction"])
        {
            nodeInfo["abstraction"] = 1;
        }
        else
        {
            nodeInfo["abstraction"] = 0;
        }
        nodeInfo["patchX"] = localMainBoxList[local_i]["x"];
        nodeInfo["patchY"] = localMainBoxList[local_i]["y"];
        nodeInfo["patchW"] = localMainBoxList[local_i]["w"];
        nodeInfo["patchH"] = localMainBoxList[local_i]["h"];
        nodeInfo["inlets"] = localMainBoxList[local_i]["numinlets"];
        nodeInfo["outlets"] = localMainBoxList[local_i]["numoutlets"];
        nodeInfo["size"] = 10;
        nodeInfo["col"] = [0.255, 0.467, 0.698, 1.000];

        if(localMainBoxList[local_i]["name"] == "inlet")
        {
            inletList = [];
            for(local_j= 0; local_j< localMainBoxList.length; local_j++)
            {
                if(localMainBoxList[local_j]["parent"] == localMainBoxList[local_i]["parent"] && localMainBoxList[local_j]["name"] == "inlet")
                {
                    inletPos = [];
                    inletPos.push(localMainBoxList[local_j]["x"])
                    inletPos.push(localMainBoxList[local_j]["id"])
                    inletList.push(inletPos)
                }
            }
            if(inletList.length == 1)
            {
                nodeInfo["inletIdx"] = 0;
            }
            else
            {
                orderedList = inletList.sort(list_sorter);
                for(local_k = 0; local_k < orderedList.length; local_k++)
                {
                    if(orderedList[local_k][1] == localMainBoxList[local_i]["id"])
                    {
                        nodeInfo["inletIdx"] = k;
                        break;
                    }
                }
            }
        }
        else
        {
            nodeInfo["inletIdx"] = 0;
        }

        if(localMainBoxList[local_i]["name"] == "outlet")
        {
            inletList = [];
            for(local_j= 0; local_j< localMainBoxList.length; local_j++)
            {
                if(localMainBoxList[local_j]["parent"] == localMainBoxList[local_i]["parent"] && localMainBoxList[local_j]["name"] == "outlet")
                {
                    inletPos = [];
                    inletPos.push(localMainBoxList[local_j]["x"])
                    inletPos.push(localMainBoxList[local_j]["id"])
                    inletList.push(inletPos)
                }
            }
            if(inletList.length == 1)
            {
                nodeInfo["outletIdx"] = 0;
            }
            else
            {
                orderedList = inletList.sort(list_sorter);
                for(local_k = 0; local_k < orderedList.length; local_k++)
                {
                    if(orderedList[local_k][1] == localMainBoxList[local_i]["id"])
                    {
                        nodeInfo["outletIdx"] = k;
                        break;
                    }
                }
            }
        }
        else
        {
            nodeInfo["outletIdx"] = 0;
        }

        tempNodeList.push(nodeInfo);
    }

    if(verbose)
        post("  --->  Current node list populated.\n");

    for(local_i = 0; local_i < localMainLineList.length; local_i++)
    {
        edgeInfo = {};
        edgeInfo["source"] = localMainLineList[local_i]["source"];
        edgeInfo["destination"] = localMainLineList[local_i]["destination"];
        edgeInfo["inlet"] = localMainLineList[local_i]["inlet"];
        edgeInfo["outlet"] = localMainLineList[local_i]["outlet"];
        edgeInfo["index"] = localMainLineList[local_i]["lineidx"];
        edgeInfo["parent"] = localMainLineList[local_i]["parent"];
        edgeInfo["type"] = localMainLineList[local_i]["type"];
        edgeInfo["subtype"] = localMainLineList[local_i]["subtype"];
        edgeInfo["description"] = localMainLineList[local_i]["description"];
        edgeInfo["thickness"] = 1;
        if(localMainLineList[local_i]["subtype"] == "sporadic")
        {
            edgeInfo["col"] = [0.000, 0.000, 0.000, 1.000];
        }
        if(localMainLineList[local_i]["subtype"] == "constant")
        {
            edgeInfo["col"] = [0.306, 0.569, 0.239, 1.000];
        }

        tempEdgeList.push(edgeInfo);
    }

    if(verbose)
        post("  --->  Current edge list populated.\n");


}

function local_edit_lists(localMainBoxList, localMainLineList)
{
    // ##############################
    // Formatting the contents of the box and line lists, notably:
    // - Creating a properly formatted name.
    // - Creating unique IDs.
    // - Creating types and subtypes.
    // - Creating descriptions.
    // ##############################

    // Names:

    for(local_i =0; local_i < localMainBoxList.length; local_i++)
    {
        if (localMainBoxList[local_i]["subpatcher"] == true)
        {
            localMainBoxList[local_i]["name"] = "subpatcher";
        }
        else if(localMainBoxList[local_i]["maxclass"] != "newobj")
        {
            localMainBoxList[local_i]["name"] = localMainBoxList[local_i]["maxclass"];
        }
        else if(localMainBoxList[local_i]["text"] != "")
        {
            localMainBoxList[local_i]["name"] = localMainBoxList[local_i]["text"];
        }
        else
        {
            localMainBoxList[local_i]["name"] = "unknown max object";
        }
    }

    if(verbose)
        post("  --->  Created formatted node names.\n");

    // Unique IDs:

    for(local_i = 0; local_i < localMainBoxList.length; local_i++)
    {
        oldID = localMainBoxList[local_i]["id"];
        newID = oldID + "_" + unique_name(usedNames2, 10000);
        localMainBoxList[local_i]["id"] = newID;
        for(local_j= 0; local_j< localMainBoxList.length; local_j++)
        {
            if(localMainBoxList[local_j]["source"] == oldID)
                localMainBoxList[local_j]["source"] = newID;
            if(localMainBoxList[local_j]["destination"] == oldID)
                localMainBoxList[local_j]["destination"] = newID;
        }
    }

    if(verbose)
        post("  --->  Updated node IDs to unique IDs.\n");

    // Types and subtypes:

    for(local_i = 0; local_i < localMainBoxList.length; local_i++)
    {
        localMainBoxList[local_i]["type"] = "physical";
        localMainBoxList[local_i]["subtype"] = "digital";
    }

    for(local_i = 0; local_i < localMainLineList.length; local_i++)
    {
        searchingForSource = true;
        local_j= 0;
        while(searchingForSource)
        {
            if(localMainBoxList[local_j]["id"] == localMainLineList[local_i]["source"])
            {
                searchingForSource = false;
                break;
            }
            local_j+= 1;
        }
        if(localMainBoxList[local_j]["name"].indexOf("~") > -1)
            localMainLineList[local_i]["subtype"] = "constant";
        else
            localMainLineList[local_i]["subtype"] = "sporadic";

        localMainLineList[local_i]["type"] = "digital";
    }

    if(verbose)
        post("  --->  Created types and subtypes for nodes and edges.\n");

    // Descriptions:

    for(local_i = 0; local_i < localMainBoxList.length; local_i++)
    {
        localMainBoxList[local_i]["description"] = "A max object.";
    }

    for(local_i = 0; local_i < localMainLineList.length; local_i++)
    {
        localMainLineList[local_i]["description"] = "A max patch chord.";
    }

    if(verbose)
        post("  --->  Created descriptions for nodes and edges.\n");
}

function local_parse_dict(array, localMainBoxList, localMainLineList)
{
    // ##############################
    // Parse the raw max file JSON and parent array to populate the
    // main box and line lists with dicts of the following format:
    // boxes :
    //      {id, varname, maxclass, numinlets, numoutlets, x, y, w, h, text, parent, subpatcher}
    // lines :
    //      {source, outlet, destination, inlet, lineidx, parent}
    // ##############################

    maxDict = array[0];
    parent = array[1];
    theList = [];

    for(local_i = 0; local_i < maxDict.patcher.boxes.length; local_i++)
    {
        objDict = {};
        objDict.id = maxDict.patcher.boxes[local_i].box.id + parent;
        objDict.varname = maxDict.patcher.boxes[local_i].box.varname;
        objDict.maxclass = maxDict.patcher.boxes[local_i].box.maxclass;
        objDict.numinlets = maxDict.patcher.boxes[local_i].box.numinlets;
        objDict.numoutlets = maxDict.patcher.boxes[local_i].box.numoutlets;
        objDict.x = maxDict.patcher.boxes[local_i].box.patching_rect[0];
        objDict.y = maxDict.patcher.boxes[local_i].box.patching_rect[1];
        objDict.w = maxDict.patcher.boxes[local_i].box.patching_rect[2];
        objDict.h = maxDict.patcher.boxes[local_i].box.patching_rect[3];
        if("text" in maxDict.patcher.boxes[local_i].box)
            objDict.text = maxDict.patcher.boxes[local_i].box.text;
        else
            objDict.text = "";
        objDict.parent = parent;
        if("patcher" in maxDict.patcher.boxes[local_i].box)
        {
            objDict.subpatcher = true;
        }
        else
        {
            objDict.subpatcher = false;
        }

        if(trimAbstractions)
        {
            objDict.abstraction = false;
            for(local_j= 0; local_j< abstractionList.length; local_j++)
            {
                if(objDict["text"] == abstractionList[local_j])
                {
                    objDict.abstraction = true;
                }
            }

        }

        localMainBoxList.push(objDict)
    }

    for(local_i = 0; local_i < maxDict.patcher.lines.length; local_i++)
    {
        objDict = {};
        objDict.source = maxDict.patcher.lines[local_i].patchline.source[0] + parent;
        objDict.outlet = maxDict.patcher.lines[local_i].patchline.source[1];
        objDict.destination = maxDict.patcher.lines[local_i].patchline.destination[0] + parent;
        objDict.inlet = maxDict.patcher.lines[local_i].patchline.destination[1];
        objDict.lineidx = parent + i;
        objDict.parent = parent;

        localMainLineList.push(objDict);
    }

    if(verbose)
        post('  --->  Dict parse at "' + parent + '" level to box and line lists completed.\n');

    for(local_i = 0; local_i < maxDict.patcher.boxes.length; local_i++)
    {
        varname = maxDict.patcher.boxes[local_i].box.varname;

        if("patcher" in maxDict.patcher.boxes[local_i].box)
        {
            newArray = [maxDict.patcher.boxes[local_i].box, varname];
            local_parse_dict(newArray);
        }
    }
}

function local_maxpat_to_dict(filename)
{
    // ##############################
    // Read a .maxpat file and return an array of the JSON file and parent name.
    // ##############################

    var theArray = [];
    var theString = "";
    var parent = filename.split("/").pop();

    f = new File(filename, "read");

    while(f.eof > f.position)
    {
        line = f.readline();
        line = line.replace("\t", "");
        theString += line;
    }

    theDict = JSON.parse(theString);

    theArray.push(theDict);
    theArray.push(parent);

    if(verbose)
        post("  --->  " + filename + " converted to dict.\n");

    return theArray;
}

function get_abstractions_local(patcherFileName)
{
    localAbstractionList = [];
    localPatcherFolder = "";
    patcherFolderArray = patcherFileName.split("/");
    for(local_i = 0; local_i < patcherFolderArray.length -1; local_i++)
    {
        localPatcherFolder = localPatcherFolder + patcherFolderArray[local_i] + "/";
    }

    theFolder = new Folder(localPatcherFolder)

    while (!theFolder.end)
    {
        if(theFolder.filename.indexOf(".maxpat") > -1)
        {
            localAbstractionList.push(theFolder.filename.substring(0, theFolder.filename.length -7));
        }
        theFolder.next();
    }
}

function local_find_node_idx_intern(nodeList, id)
{
    // ##############################
    // Find the index of a node in the node list from it's unique ID.
    // ##############################

    for(idx = 0; idx < nodeList.length; idx++)
    {
        if(nodeList[idx]["uniqueID"] == id)
        {
            break;
        }
    }
    return idx;
}

function local_next_node_outlet(nnOutletVar, nnOutletIdx, mainOutletCon, tempNodeList, tempEdgeList)
{
    for(local_k = 0; local_k < tempNodeList.length; local_k++)
    {
        foundSubPat = false;

        if(tempNodeList[local_k]["name"] == "subpatcher" && tempNodeList[local_k]["varname"] == nnOutletVar)
        {
            oursubPat = tempNodeList[local_k];
            foundSubPat = true;
        }

        if(foundSubPat)
        {
            lookFurtherList = [];
            lookFurther = false;
            for(l = 0; l < tempEdgeList.length; l++)
            {
                if(tempEdgeList[l]["source"] == oursubPat["uniqueID"] && tempEdgeList[l]["outlet"] == nnOutletIdx)
                {
                    foundNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[l]["destination"])];

                    if(foundNode["name"] != "outlet")
                    {
                        newToPush = [foundNode["uniqueID"], mainOutletCon, tempEdgeList[l]["inlet"]]
                        toConnect.push(newToPush);
                    }
                    else
                    {
                        lookFurther = true;
                        lookFurtherList.push([foundNode["parent"], foundNode["outletIdx"]])
                    }
                }
            }
            if(lookFurther)
            {
                for(n = 0; n < lookFurtherList.length; n++)
                {
                    local_next_node_outlet(lookFurtherList[n][0], lookFurtherList[n][1], mainOutletCon, tempNodeList, tempEdgeList)
                }
            }
        }
    }
}

function local_next_node(nnInletPar, nnInletIdx, mainOutletCon, tempNodeList, tempEdgeList)
{
    for(local_k = 0; local_k < tempNodeList.length; local_k++)
    {
        foundInlet = false;

        if(tempNodeList[local_k]["name"] == "inlet" && tempNodeList[local_k]["parent"] == nnInletPar && tempNodeList[local_k]["inletIdx"] == nnInletIdx)
        {
            ourInlet = tempNodeList[local_k];
            foundInlet = true;
        }

        if(foundInlet)
        {
            lookFurtherList = []
            lookFurther = false;
            for(l = 0; l < tempEdgeList.length; l++)
            {
                if(tempEdgeList[l]["source"] == ourInlet["uniqueID"])
                {
                    foundNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[l]["destination"])];

                    if(foundNode["name"] != "subpatcher")
                    {
                        newToPush = [foundNode["uniqueID"], mainOutletCon, tempEdgeList[l]["inlet"]]
                        toConnect.push(newToPush);
                    }
                    else
                    {
                        lookFurther = true;
                        lookFurtherList.push([foundNode["varname"], tempEdgeList[l]["inlet"]])
                    }
                }
            }
            if(lookFurther)
            {
                for(n = 0; n < lookFurtherList.length; n++)
                {
                    local_next_node(lookFurtherList[n][0], lookFurtherList[n][1], mainOutletCon, tempNodeList, tempEdgeList)
                }
            }
        }
    }
}
