var numParams = 0;
var increment = 0.25;
var currentState = [];
var stateList = [];
var verbose = true;
var currentStateIndex = 0;
var descriptionList = [];
var toggles = [0, 1];

if (jsarguments.length >= 2)
    numParams = jsarguments[1];

outlets = numParams + 1;

setoutletassist(0, "Control Out");
for(i = 0; i < numParams; i++)
{
    setoutletassist(i + 1, "Parameter " + String(i + 1));
}

setinletassist(0, "Control In");

function next_state()
{
    if(currentStateIndex < stateList.length)
    {
        // output_to_file();
        output_state(currentStateIndex);

        if(verbose)
            post("Testing config " + currentStateIndex + "...\n");

        outlet(0, "test_config");
        currentStateIndex = currentStateIndex + 1;
    }
    else
    {
        currentStateIndex = 0;
        output_results();
    }
}

function output_results()
{
    if(verbose)
        post("Exporting results...\n");

    outlet(0, "state_list " + stateList);
    outlet(0, "description_list " + descriptionList);
    output_to_file();
}

function output_to_file()
{
    fullName = this.patcher.name + ".maxpat";
    fileNameState = this.patcher.filepath.replace(fullName,'') + "STATE_LIST.txt";
    fileNameDescription = this.patcher.filepath.replace(fullName,'') + "DESCRIPTION_LIST.txt";

    stateFile = new File(fileNameState,"write");
    stateFile.open();
    for(i = 0; i < stateList.length; i++)
    {
        line = String(stateList[i]);
        stateFile.writeline(line);
    }
    stateFile.close();

    descFile = new File(fileNameDescription,"write");
    descFile.open();
    for(i = 0; i < descriptionList.length; i++)
    {
        line = String(descriptionList[i]);
        descFile.writeline(line);
    }
    descFile.close();
}

function list(x)
{
    // rolloff, spectral_crest, loudness, lin_centroid, log_centroid, lin_spread, log_spread
    // lin_skewness, log_skewness, lin_kurtosis, log_kurtosis, lin_broghtness, log_brightness,
    // sfm, noise_ratio, harmonic_ratio, roughness, inharmonicity
    descList = [];
    for(i = 0; i < arguments.length; i++)
    {
        descList.push(arguments[i]);
    }
    descriptionList.push(descList);

    next_state();
}

function test_result(x)
{
    post(arguments.length + " elements.\n")
    descriptionList.push(x);

    next_state();
}

function get_states()
{
    stateList = [];
    theArrays = [];

    if(toggles.length == 0)
    {
        for(i = 0; i < numParams; i++)
        {
            paramArray = [];
            for(j = 0; j < (1 / increment) + 1; j++)
            {
                paramArray.push(increment * j);
            }
            theArrays.push(paramArray);
        }
    }
    else
    {
        for(i = 0; i < numParams; i++)
        {
            paramArray = [];
            if(toggles.indexOf(i) > -1)
            {
                paramArray = [0, 1];
            }
            else
            {
                for(j = 0; j < (1 / increment) + 1; j++)
                {
                    paramArray.push(increment * j);
                }
            }

            theArrays.push(paramArray);
        }
    }

    stateList = get_cartesian(theArrays);

    if(verbose)
    {
        if(toggles.length == 0)
        {
            post(stateList.length + " different possible states.\n");
            post("For " + numParams + " parameters with " + String((1 / increment) + 1) + " possible states each.\n");
        }
        else
        {
            post(stateList.length + " different possible states.\n");
            post("For " + String(numParams - toggles.length) + " parameters with " + String((1 / increment) + 1) + " possible states and " + toggles.length + " toggles.\n");
        }
    }
}

function get_cartesian(array)
{
    var results = [[]];
    for (i = 0; i < array.length; i++)
    {
        var currentSubArray = array[i];
        var temp = [];
        for (var j = 0; j < results.length; j++)
        {
            for (var k = 0; k < currentSubArray.length; k++)
            {
                temp.push(results[j].concat(currentSubArray[k]));
            }
        }
        results = temp;
    }
  return results;
}

function output_state(x)
{
    currentState = stateList[x];
    output_current_state();
}

function output_current_state()
{
    for(i = 1; i < numParams + 1; i++)
    {
        outlet(i, currentState[i - 1]);
    }
}

function reset_params()
{
    for(i = 0; i < numParams; i++)
    {
        currentState[i] = 0.0;
    }
    output_current_state();
    currentStateIndex = 0;
    statesToKeep = [];
    descriptionList = [];
}
