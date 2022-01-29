// ---------------------------------------------------------------------------------
//
// netUtils for Max Network.
//
// ---------------------------------------------------------------------------------

// #################################################################################
// Export functions ################################################################
// #################################################################################

exports.count_neighbours = function (nodeList, edgeList)
{
    // ##############################
    // Count give a list of neighbours for each node.
    // ##############################

    for(i = 0; i < nodeList.length; i++)
    {
        neighbourList = [];
        for(j = 0; j < edgeList.length; j++)
        {
            if(nodeList[i]["uniqueID"] == edgeList[j]["destination"])
            {
                neighbourList.push(edgeList[j]["source"]);
            }

        nodeList[i]["neighbours"] = neighbourList;
        }
    }
}

exports.find_node_idx = function (nodeList, id)
{
    // ##############################
    // Find the index of a node in the node list from it's unique ID.
    // ##############################

    for(i = 0; i < nodeList.length; i++)
    {
        if(nodeList[i]["uniqueID"] == id)
        {
            break;
        }
    }
    return i;
}

exports.create_object_ext = function (pat, varname, x, y, object, args)
{
    // ##############################
    // Create an object in the patcher, and return the object as a javascript object.
    // ##############################

    var args_array = [];

    if (arguments.length > 4)
    {
        for (i = 4; i < arguments.length; i++)
        {
            args_array.push(arguments[i]);
        }
    }

    a = pat.newdefault(x, y, object, args_array);
    a.varname = varname;

    return a;
}

exports.dialog_file = function (pat, x, y, jsObj)
{
    // ##############################
    // Open a dialog box in order to get a user defined file name.
    // ##############################

    objList = [];

    dialogObj = create_object(pat, "dialog_obj", x, y, "opendialog");
    objList.push(dialogObj);
    deferObj = create_object(pat, "dialog_obj", x, y, "deferlow");
    objList.push(deferObj);
    prependObj = create_object(pat, "dialog_obj", x, y, "prepend", "give_filename");
    objList.push(prependObj);

    cancelObj = create_object(pat, "dialog_obj", x, y, "prepend", "cancel_dialog");
    objList.push(cancelObj);

    pat.hiddenconnect(jsObj, 0, deferObj, 0);
    pat.hiddenconnect(deferObj, 0, dialogObj, 0);
    pat.hiddenconnect(dialogObj, 0, prependObj, 0);
    pat.hiddenconnect(prependObj, 0, jsObj, 0);

    pat.hiddenconnect(dialogObj, 1, cancelObj, 0);
    pat.hiddenconnect(cancelObj, 0, jsObj, 0);

    outlet(0, "bang");

    return objList;
}

exports.dialog_file_load = function (pat, x, y, jsObj)
{
    // ##############################
    // Open a dialog box in order to get a user defined file name.
    // ##############################

    objList = [];

    dialogObj = create_object(pat, "dialog_obj", x, y, "opendialog");
    objList.push(dialogObj);
    deferObj = create_object(pat, "dialog_obj", x, y, "deferlow");
    objList.push(deferObj);
    prependObj = create_object(pat, "dialog_obj", x, y, "prepend", "load_filename");
    objList.push(prependObj);

    cancelObj = create_object(pat, "dialog_obj", x, y, "prepend", "cancel_dialog");
    objList.push(cancelObj);

    pat.hiddenconnect(jsObj, 0, deferObj, 0);
    pat.hiddenconnect(deferObj, 0, dialogObj, 0);
    pat.hiddenconnect(dialogObj, 0, prependObj, 0);
    pat.hiddenconnect(prependObj, 0, jsObj, 0);

    pat.hiddenconnect(dialogObj, 1, cancelObj, 0);
    pat.hiddenconnect(cancelObj, 0, jsObj, 0);

    outlet(0, "bang");

    return objList;
}

exports.bang_out = function()
{
    // ##############################
    // Send a bang out of the first inlet.
    // ##############################

    outlet(0, "bang");
}

exports.post_lists = function(nodeList, edgeList)
{
    // ##############################
    // Post a formatted version of the current node and edge lists.
    // ##############################

    post("-------------------------------------------\n");
    post("---------- CURRENT NETWORK INFO: ----------\n");
    post("   - " + nodeList.length + " nodes.\n");
    post("   - " + edgeList.length + " edges.\n");
    post("-------------------------------------------\n");
    post("\n");

    post("-------------------------------------------\n");
    post("------------------ NODES: -----------------\n");
    for(i = 0; i < nodeList.length; i++)
    {
        post(i + ": " + nodeList[i]["uniqueID"] + " (" + nodeList[i]["name"] + ")\n");
        post("varname: " + nodeList[i]["varname"] + ", maxclass: " + nodeList[i]["maxclass"] + ".\n");
        post("parent: " + nodeList[i]["parent"] + ", subpatch: " + nodeList[i]["subpatch"] + ".\n");
        post("inlets: " + nodeList[i]["inlets"] + ", outlets: " + nodeList[i]["outlet"] + ".\n");
        post("x: " + nodeList[i]["patchX"] + ", y: " + nodeList[i]["patchY"] + ", w: " + nodeList[i]["patchW"] + ", h" + nodeList[i]["patchH"] + ".\n");
        post("text: " + nodeList[i]["text"] + ".\n");
        post("type: " + nodeList[i]["type"] + ", subtype: " + nodeList[i]["subtype"] + ".\n");
        post("description: " + nodeList[i]["description"] + ".\n");
        post("graph coordinates: " + nodeList[i]["x"] + ", " + nodeList[i]["y"] + ".\n");
        post("neighbours: " + nodeList[i]["neighbours"].length + " -");

        for(j = 0; j < nodeList[i]["neighbours"].length; j++)
        {
            neighbour = nodeList[i]["neighbours"][j];
            neighbourIdx = find_node_idx_intern(nodeList, neighbour);
            post(" " + neighbour + " (" + nodeList[neighbourIdx]["name"] + "),");
        }

        post(".\n")
        post("\n");
    }
    post("-------------------------------------------\n");
    post("\n");

    post("-------------------------------------------\n");
    post("------------------ EDGES: -----------------\n");
    for(i = 0; i < edgeList.length; i++)
    {
        sourceName = nodeList[find_node_idx_intern(nodeList, edgeList[i]["source"])]["name"];
        destName = nodeList[find_node_idx_intern(nodeList, edgeList[i]["destination"])]["name"];

        post(i + ": " + edgeList[i]["source"] + " (" + sourceName + ") -> " + edgeList[i]["destination"] + " (" + destName + ").\n");
        post("source: " + edgeList[i]["source"] + " (" + sourceName + ").\n");
        post("destination: " + edgeList[i]["destination"] + " (" + destName + ").\n");
        post("inlet: " + edgeList[i]["inlet"] + ", outlet: " + edgeList[i]["outlet"] + ".\n");
        post("parent: " + edgeList[i]["parent"] + ", index: " + edgeList[i]["index"] + ".\n");
        post("type: " + edgeList[i]["type"] + ", subtype: " + edgeList[i]["subtype"] + ".\n");
        post("description: " + edgeList[i]["description"] + ".\n");
        post("\n");
    }
    post("-------------------------------------------\n");
    post("\n");
}

exports.get_text = function (x, y, variable, camFo)
{


    currentTextInit = currentNodeList[currentTextChangeVar[1]][variable];

    newtTickFocus = camFo;
    txtPopCamFo = camFo;

    textObj = create_object(p, "subp", x - 50, y - 25, "textedit");
    removeObjList.push(textObj);
    deferObj = create_object(p, "dialog_obj", x, y, "deferlow");
    removeObjList.push(deferObj);
    prepdSetObj = create_object(p, "prepen", x, y, "prepend", "set");
    removeObjList.push(prepdSetObj);
    prepdObj = create_object(p, "prepen2", x, y, "prepend", "give_text");
    removeObjList.push(prepdObj);
    routObj = create_object(p, "router", x, y, "route", "text");
    removeObjList.push(routObj);

    routObj2 = create_object(p, "router2", x, y, "route", "conf");
    removeObjList.push(routObj2);
    bangObj = create_object(p, "bangObj", x, y, "button");
    removeObjList.push(bangObj);

    p.hiddenconnect(jsuiObject, 0, deferObj, 0);
    p.hiddenconnect(deferObj, 0, prepdSetObj, 0);
    p.hiddenconnect(prepdSetObj, 0, textObj, 0);
    p.hiddenconnect(textObj, 0, routObj, 0);
    p.hiddenconnect(routObj, 0, prepdObj, 0);
    p.hiddenconnect(prepdObj, 0, jsuiObject, 0);

    p.hiddenconnect(jsuiObject, 0, routObj2, 0);
    p.hiddenconnect(routObj2, 0, bangObj, 0);
    p.hiddenconnect(bangObj, 0, textObj, 0);

    p.bringtofront(textObj);

    currentTextChangeVar[0] = variable;

    outlet(0, String(currentTextInit));
}

// #################################################################################
// Internal functions ##############################################################
// #################################################################################

function create_object(pat, varname, x, y, object, args)
{
    // ##############################
    // Create an object in the patcher, and return the object as a javascript object.
    // ##############################

    var args_array = [];

    if (arguments.length > 5)
    {
        for (i = 5; i < arguments.length; i++)
        {
            args_array.push(arguments[i]);
        }
    }

    a = pat.newdefault(x, y, object, args_array);
    a.varname = varname;

    return a;
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
