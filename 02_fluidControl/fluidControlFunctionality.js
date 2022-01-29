exports.currentParamList = [];
exports.currentLoadedObj = "";

var verbose = false;

exports.load_new_obj = function()
{
    loadObj = false;
    if(ui.objChooseMenAttr[2][0] == 2)
    {
        ff.currentLoadedObj = "fluid.bufonsetslice~";
        loadObj = true;
    }
    else if(ui.objChooseMenAttr[2][0] == 3)
    {
        ff.currentLoadedObj = "fluid.buftransientslice~";
        loadObj = true;
    }

    if(loadObj)
    {
        ff.currentParamList = [];
        ff.currentParamList = ff.get_params_list(ff.currentLoadedObj);
    }
}

exports.get_params_list = function (object)
{
    paramList = [];
    for (keys in fi.fluidDict[object]["attributes"])
    {
        if(displayMode == "advanced")
        {
            if(keys != "fftsettings")
            {
                paramList.push(fi.fluidDict[object]["attributes"][keys])
                if(verbose)
                    post("    " + object + ": " + keys + ".\n");
            }
        }
        else if(displayMode == "simple")
        {
            if(keys != "fftsettings" && fi.fluidDict[object]["attributes"][keys]["important"] == true)
            {
                paramList.push(fi.fluidDict[object]["attributes"][keys])
                if(verbose)
                    post("    " + object + ": " + keys + ".\n");
            }
        }
    }

    if(verbose)
        post(object + " has " + paramList.length + " parameters.\n");

    return paramList;
}

exports.get_number_params = function (object)
{
    i = 0;
    for (keys in fi.fluidDict[object]["attributes"])
    {
        if(displayMode == "advanced")
        {
            if(keys != "fftsettings")
            {
                i = i + 1;
                if(verbose)
                    post("    " + object + ": " + keys + ".\n");
            }
        }
        else if(displayMode == "simple")
        {
            if(keys != "fftsettings" && fi.fluidDict[object]["attributes"][keys]["important"] == true)
            {
                i = i + 1;
                if(verbose)
                    post("    " + object + ": " + keys + ".\n");
            }
        }
    }

    if(verbose)
        post(object + " has " + i + " parameters.\n");

    return i;
}

exports.change_display_mode = function ()
{
    if(displayMode == "simple")
    {
        displayMode = "advanced";
        if(verbose)
            post("Changed to advanced diaplay mode.\n")
    }
    else if(displayMode == "advanced")
    {
        displayMode = "simple";
        if(verbose)
            post("Changed to advanced simple mode.\n")
    }
}
