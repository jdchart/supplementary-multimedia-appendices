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

    localMainBoxList = []; // mainBoxList
    localMainLineList = []; // mainLineList

    localRawArray = local_maxpat_to_dict(patcherFileName);

    local_parse_dict(localRawArray);

    local_edit_lists();

    local_pop_main_lists();

    if(trimAbstractions)
    {
        local_add_abstractions();
    }

    if(trimSubpatchers)
        local_subpat_cut();

    return [tempNodeList, tempEdgeList];
}

function local_add_abstractions()
{
    for(i = 0; i < tempNodeList.length; i++)
    {
        if(tempNodeList[i]["abstraction"])
        {
            abstractionPatcherFileName = patcherFolder + "/" + tempNodeList[i]["text"] + ".maxpat";

            newObjects = pop_lists_local(abstractionPatcherFileName)

            for(i = 0; i < newObjects[0].length; i++)
            {
                tempNodeList.push(newObjects[0][i]);
            }
            for(i = 0; i < newObjects[1].length; i++)
            {
                tempEdgeList.push(newObjects[1][i]);
            }
        }
    }
}

function local_subpat_cut()
{
    // Objects towards subpatchers:

    for(i = 0; i < tempEdgeList.length; i++)
    {

        sourceNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[i]["source"])];
        destNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[i]["destination"])]

        destID = destNode["uniqueID"];
        destName = destNode["name"];
        destVar = destNode["varname"];
        inletIdx = tempEdgeList[i]["inlet"];

        if(destName == "subpatcher" && sourceNode["name"] != "inlet")
        {
            toConnect = [];
            for(j = 0; j < tempNodeList.length; j++)
            {
                if(tempNodeList[j]["name"] == "inlet" && tempNodeList[j]["parent"] == destVar && tempNodeList[j]["inletIdx"] == inletIdx)
                {
                    theInlet = tempNodeList[j];
                    break;
                }
            }

            for(j = 0; j < tempEdgeList.length; j++)
            {
                if(tempEdgeList[j]["source"] == theInlet["uniqueID"])
                {
                    newDestName = currentNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[j]["destination"])]["name"];
                    if(newDestName != "subpatcher")
                    {
                        toPush = [tempEdgeList[j]["destination"], tempEdgeList[i]["outlet"], tempEdgeList[j]["inlet"]];
                        toConnect.push(toPush);
                    }
                    else
                    {
                        searchingParent = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[j]["destination"])]["varname"];
                        searchingInlet = tempEdgeList[j]["inlet"];

                        local_next_node(searchingParent, searchingInlet, tempEdgeList[i]["outlet"]);
                    }
                }
            }

            for(j = 0; j < toConnect.length; j++)
            {
                actualDest = tempNodeList[local_find_node_idx_intern(tempNodeList, toConnect[j][0])];

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

                tempEdgeList.push(edgeDict);
            }
        }
    }

    // Objects out of subpatchers:
    for(i = 0; i < tempEdgeList.length; i++)
    {
        destNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[i]["destination"])];
        sourceNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[i]["source"])]

        sourceID = sourceNode["uniqueID"];
        sourceName = sourceNode["name"];
        destPar = destNode["parent"];
        outletIdx = tempEdgeList[i]["outlet"];
        subpatExitOutlet = destNode["outletIdx"];

        if(destNode["name"] == "outlet" && sourceNode["name"] != "subpatcher")
        {
            toConnect = [];
            for(j = 0; j < tempNodeList.length; j++)
            {
                if(tempNodeList[j]["name"] == "subpatcher" && tempNodeList[j]["varname"] == destPar)
                {
                    theSubpat = tempNodeList[j];
                    break;
                }
            }

            for(j = 0; j < tempEdgeList.length; j++)
            {
                if(tempEdgeList[j]["source"] == theSubpat["uniqueID"] && tempEdgeList[j]["outlet"] == subpatExitOutlet)
                {
                    newDest = tempNodeList[local_find_node_idx_intern(tempNodeList,tempEdgeList[j]["destination"])];

                    if(newDest["name"] != "outlet")
                    {
                        toPush = [newDest["uniqueID"], outletIdx, tempEdgeList[j]["inlet"]];
                        toConnect.push(toPush);
                    }
                    else
                    {
                        searchingVar = newDest['parent'];
                        searchingOutlet = newDest['outletIdx'];

                        local_next_node_outlet(searchingVar, searchingOutlet, outletIdx);
                    }
                }
            }

            for(j = 0; j < toConnect.length; j++)
            {
                actualDest = tempNodeList[local_find_node_idx_intern(tempNodeList, toConnect[j][0])];

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

                tempEdgeList.push(edgeDict);
            }
        }
    }

    // Deleting unwanted shit:
    temporaryEdgeList = [];
    for (i = 0; i < tempEdgeList.length; i++)
    {
        sourceNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[i]["source"])];
        destinNode = tempNodeList[local_find_node_idx_intern(tempNodeList, tempEdgeList[i]["destination"])];

        if(sourceNode["name"] != "inlet" && sourceNode["name"] != "outlet" && sourceNode["name"] != "subpatcher" && destinNode["name"] != "inlet" && destinNode["name"] != "outlet" && destinNode["name"] != "subpatcher")
        {
            temporaryEdgeList.push(tempEdgeList[i]);
        }
    }

    tempEdgeList = [];
    for(i = 0; i < temporaryEdgeList.length; i++)
    {
        tempEdgeList.push(temporaryEdgeList[i]);
    }



    temporaryNodeList = [];
    for (i = 0; i < tempNodeList.length; i++)
    {
        if(tempNodeList[i]["name"] != "inlet" && tempNodeList[i]["name"] != "outlet" && tempNodeList[i]["name"] != "subpatcher")
        {
            temporaryNodeList.push(tempNodeList[i])
        }
    }
    tempNodeList = [];
    for(i = 0; i < temporaryNodeList.length; i++)
    {
        tempNodeList.push(temporaryNodeList[i]);
    }
}

function local_pop_main_lists()
{
    // ##############################
    // Populate the current working node and edge lists with the main box and line lists.
    // ##############################

    if(overWriteExistingNodes)
    {
        tempNodeList = [];
        tempLineList = [];
    }

    for(i = 0; i < localMainBoxList.length; i++)
    {
        nodeInfo = {};
        nodeInfo["uniqueID"] = localMainBoxList[i]["id"];
        nodeInfo["x"] = 0;
        nodeInfo["y"] = 0;
        nodeInfo["name"] = localMainBoxList[i]["name"];
        nodeInfo["type"] = localMainBoxList[i]["type"];
        nodeInfo["subtype"] = localMainBoxList[i]["subtype"];
        nodeInfo["varname"] = localMainBoxList[i]["varname"];
        nodeInfo["description"] = localMainBoxList[i]["varname"];
        nodeInfo["neighbours"] = [];
        nodeInfo["maxclass"] = localMainBoxList[i]["maxclass"];
        nodeInfo["text"] = localMainBoxList[i]["text"];
        nodeInfo["parent"] = localMainBoxList[i]["parent"];
        if(localMainBoxList[i]["subpatch"])
        {
            nodeInfo["subpatch"] = 1;
        }
        else
        {
            nodeInfo["subpatch"] = 0;
        }
        if(localMainBoxList[i]["abstraction"])
        {
            nodeInfo["abstraction"] = 1;
        }
        else
        {
            nodeInfo["abstraction"] = 0;
        }
        nodeInfo["patchX"] = localMainBoxList[i]["x"];
        nodeInfo["patchY"] = localMainBoxList[i]["y"];
        nodeInfo["patchW"] = localMainBoxList[i]["w"];
        nodeInfo["patchH"] = localMainBoxList[i]["h"];
        nodeInfo["inlets"] = localMainBoxList[i]["numinlets"];
        nodeInfo["outlets"] = localMainBoxList[i]["numoutlets"];
        nodeInfo["size"] = 10;
        nodeInfo["col"] = [0.255, 0.467, 0.698, 1.000];

        if(localMainBoxList[i]["name"] == "inlet")
        {
            inletList = [];
            for(j = 0; j < localMainBoxList.length; j++)
            {
                if(localMainBoxList[j]["parent"] == localMainBoxList[i]["parent"] && localMainBoxList[j]["name"] == "inlet")
                {
                    inletPos = [];
                    inletPos.push(localMainBoxList[j]["x"])
                    inletPos.push(localMainBoxList[j]["id"])
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
                    if(orderedList[k][1] == localMainBoxList[i]["id"])
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

        if(localMainBoxList[i]["name"] == "outlet")
        {
            inletList = [];
            for(j = 0; j < localMainBoxList.length; j++)
            {
                if(localMainBoxList[j]["parent"] == localMainBoxList[i]["parent"] && localMainBoxList[j]["name"] == "outlet")
                {
                    inletPos = [];
                    inletPos.push(localMainBoxList[j]["x"])
                    inletPos.push(localMainBoxList[j]["id"])
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
                    if(orderedList[k][1] == localMainBoxList[i]["id"])
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

    for(i = 0; i < localMainLineList.length; i++)
    {
        edgeInfo = {};
        edgeInfo["source"] = localMainLineList[i]["source"];
        edgeInfo["destination"] = localMainLineList[i]["destination"];
        edgeInfo["inlet"] = localMainLineList[i]["inlet"];
        edgeInfo["outlet"] = localMainLineList[i]["outlet"];
        edgeInfo["index"] = localMainLineList[i]["lineidx"];
        edgeInfo["parent"] = localMainLineList[i]["parent"];
        edgeInfo["type"] = localMainLineList[i]["type"];
        edgeInfo["subtype"] = localMainLineList[i]["subtype"];
        edgeInfo["description"] = localMainLineList[i]["description"];
        edgeInfo["thickness"] = 1;
        if(localMainLineList[i]["subtype"] == "sporadic")
        {
            edgeInfo["col"] = [0.000, 0.000, 0.000, 1.000];
        }
        if(localMainLineList[i]["subtype"] == "constant")
        {
            edgeInfo["col"] = [0.306, 0.569, 0.239, 1.000];
        }

        tempEdgeList.push(edgeInfo);
    }

    if(verbose)
        post("  --->  Current edge list populated.\n");
}

function local_edit_lists()
{
    // ##############################
    // Formatting the contents of the box and line lists, notably:
    // - Creating a properly formatted name.
    // - Creating unique IDs.
    // - Creating types and subtypes.
    // - Creating descriptions.
    // ##############################

    // Names:

    for(i =0; i < loacalMainBoxList.length; i++)
    {
        if (loacalMainBoxList[i]["subpatcher"] == true)
        {
            loacalMainBoxList[i]["name"] = "subpatcher";
        }
        else if(loacalMainBoxList[i]["maxclass"] != "newobj")
        {
            loacalMainBoxList[i]["name"] = loacalMainBoxList[i]["maxclass"];
        }
        else if(mainBoxList[i]["text"] != "")
        {
            loacalMainBoxList[i]["name"] = mainBoxList[i]["text"];
        }
        else
        {
            loacalMainBoxList[i]["name"] = "unknown max object";
        }
    }

    if(verbose)
        post("  --->  Created formatted node names.\n");

    // Unique IDs:

    for(i = 0; i < loacalMainBoxList.length; i++)
    {
        oldID = loacalMainBoxList[i]["id"];
        newID = oldID + "_" + unique_name(usedNames2, 10000);
        loacalMainBoxList[i]["id"] = newID;
        for(j = 0; j < loacalMainBoxList.length; j++)
        {
            if(loacalMainBoxList[j]["source"] == oldID)
                loacalMainBoxList[j]["source"] = newID;
            if(loacalMainBoxList[j]["destination"] == oldID)
                loacalMainBoxList[j]["destination"] = newID;
        }
    }

    if(verbose)
        post("  --->  Updated node IDs to unique IDs.\n");

    // Types and subtypes:

    for(i = 0; i < loacalMainBoxList.length; i++)
    {
        loacalMainBoxList[i]["type"] = "physical";
        loacalMainBoxList[i]["subtype"] = "digital";
    }

    for(i = 0; i < localMainLineList.length; i++)
    {
        searchingForSource = true;
        j = 0;
        while(searchingForSource)
        {
            if(loacalMainBoxList[j]["id"] == localMainLineList[i]["source"])
            {
                searchingForSource = false;
                break;
            }
            j += 1;
        }
        if(localMainBoxList[j]["name"].indexOf("~") > -1)
            localMainLineList[i]["subtype"] = "constant";
        else
            localMainLineList[i]["subtype"] = "sporadic";

        localMainLineList[i]["type"] = "digital";
    }

    if(verbose)
        post("  --->  Created types and subtypes for nodes and edges.\n");

    // Descriptions:

    for(i = 0; i < localMainBoxList.length; i++)
    {
        localMainBoxList[i]["description"] = "A max object.";
    }

    for(i = 0; i < localMainLineList.length; i++)
    {
        localMainLineList[i]["description"] = "A max patch chord.";
    }

    if(verbose)
        post("  --->  Created descriptions for nodes and edges.\n");
}

function local_parse_dict(array)
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

        localMainBoxList.push(objDict)
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

        localMainLineList.push(objDict);
    }

    if(verbose)
        post('  --->  Dict parse at "' + parent + '" level to box and line lists completed.\n');

    for(i = 0; i < maxDict.patcher.boxes.length; i++)
    {
        varname = maxDict.patcher.boxes[i].box.varname;

        if("patcher" in maxDict.patcher.boxes[i].box)
        {
            newArray = [maxDict.patcher.boxes[i].box, varname];
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
    for(i = 0; i < patcherFolderArray.length -1; i++)
    {
        localPatcherFolder = localPatcherFolder + patcherFolderArray[i] + "/";
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

function local_next_node_outlet(nnOutletVar, nnOutletIdx, mainOutletCon)
{
    for(k = 0; k < tempNodeList.length; k++)
    {
        foundSubPat = false;

        if(tempNodeList[k]["name"] == "subpatcher" && tempNodeList[k]["varname"] == nnOutletVar)
        {
            oursubPat = tempNodeList[k];
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
                    local_next_node_outlet(lookFurtherList[n][0], lookFurtherList[n][1], mainOutletCon)
                }
            }
        }
    }
}

function local_next_node(nnInletPar, nnInletIdx, mainOutletCon)
{
    for(k = 0; k < tempNodeList.length; k++)
    {
        foundInlet = false;

        if(tempNodeList[k]["name"] == "inlet" && tempNodeList[k]["parent"] == nnInletPar && tempNodeList[k]["inletIdx"] == nnInletIdx)
        {
            ourInlet = tempNodeList[k];
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
                    local_next_node(lookFurtherList[n][0], lookFurtherList[n][1], mainOutletCon)
                }
            }
        }
    }
}
