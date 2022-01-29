var stateList = [];
var descriptionList = [];
var combinedList = [];
var shortList = [];
var verbose = true;
var deviation = 0.1;
var minMaxList = [];
var infinity = 1.7976931348623157e+308; // What do i do with this?

function export_as_network()
{
    combine_lists();

    get_min_max()

    fullName = this.patcher.name + ".maxpat";
    fileNameNode = this.patcher.filepath.replace(fullName,'') + "NODE_LIST.csv";
    fileNameEdge = this.patcher.filepath.replace(fullName,'') + "EDGE_LIST.csv";

    nodeFile = new File(fileNameNode,"write");

    nodeFile.open();

    header = "uniqueID";

    for(i = 0; i < combinedList[0][0].length; i++)
    {
        header = header + ",param_" + String(i);
    }

    header = header + ",rolloff,spectral_crest,loudness,lin_centroid,log_centroid,lin_spread,log_spread,";
    header = header + "lin_skewness,log_skewness,lin_kurtosis,log_kurtosis,line_brightness,log_brightness,";
    header = header + "sfm,noise_ratio,harmonic_ration,roughness,inharmonicity";

    nodeFile.writeline(header);

    for(i = 0; i < combinedList.length; i++)
    {
        line = String(i) + ",";
        for(j = 0; j < combinedList[i][0].length; j++)
        {
            line = line + String(combinedList[i][0][j]) + ",";
        }
        for(j = 0; j < combinedList[i][1].length; j++)
        {
            if(combinedList[i][1][j] == infinity)
            {
                combinedList[i][1][j] = minMaxList[j][1];
            }
            line = line + String(combinedList[i][1][j]) + ",";
        }
        line = line.substring(0, line.length - 1);

        nodeFile.writeline(line);
    }

    nodeFile.close();

    edgeFile = new File(fileNameEdge,"write");

    edgeFile.open();

    header = "source,destination";

    edgeFile.writeline(header)

    for(i = 0; i < combinedList.length - 1; i++)
    {
        line = String(i) + "," + String(i + 1);
        edgeFile.writeline(line)
    }

    edgeFile.close();
}

function format_lists()
{
    combine_lists();

    get_min_max();

    short_list();
}

function format()
{
    combine_lists();

    min_max_list();

    get_short_list();
}

function get_short_list()
{
    shortList = [];
    shortList.push(combinedList[1]);

    for(i = 1; i < combinedList.length; i++)
    {
        for(j = 0; j < combinedList[i][1].length; j++)
        {
            if(combinedList[i][1][j] == infinity)
            {

            }
            else
            {
                if(minMaxList[j][0] < 0)
                    addVal = combinedList[i][1][j] + Math.abs(minMaxList[j][0]);
                else
                    addVal = combinedList[i][1][j];

                scaledVal = Math.abs(addVal / minMaxList[j][2]);
                //post(scaledVal + "\n");

                for(k = 0; k < shortList.length; k++)
                {
                    comparVal = shortList[k][1][j]
                    if(minMaxList[j][0] < 0)
                        addVal2 = comparVal + Math.abs(minMaxList[j][0]);
                    else
                        addVal2 = comparVal;

                    scaledComparVal = Math.abs(addVal2 / minMaxList[j][2]);

                    if(scaledVal > scaledComparVal + deviation || scaledVal < scaledComparVal - deviation)
                    {
                        //post("scaledVal: " + scaledVal + ", scaledComparVal: " + scaledComparVal + "\n")
                        //post("adding: " + combinedList[i] + "\n")
                        shortList.push(combinedList[i]);
                        k = shortList.length;
                        j = combinedList[i][1].length;
                        break;
                    }
                }
            }
        }
    }

    post("Short list: " + shortList.length + "\n");
}

function min_max_list()
{
    minMaxList = []

    for(i = 0; i < combinedList[1][1].length; i++)
    {
        if(combinedList[1][1][i] == infinity)
        {
            theVal = 0;
            theRange = 0;
        }
        else
        {
            theVal = combinedList[1][1][i];
            theRange = 0;
        }

        addList = [theVal, theVal, theRange];

        minMaxList.push(addList);
    }

    for(i = 1; i < combinedList.length; i++)
    {
        for(j = 0; j < combinedList[i][1].length; j++)
        {
            if(combinedList[i][1][j] == infinity)
            {

            }
            else
            {
                theVal = combinedList[i][1][j];

                if(theVal < minMaxList[j][0])
                {
                    minMaxList[j][0] = theVal;

                    minMaxList[j][2] = minMaxList[j][1] - minMaxList[j][0];
                }
                if(theVal > minMaxList[j][1] || theVal == "infinity")
                {
                    minMaxList[j][1] = theVal;

                    minMaxList[j][2] = minMaxList[j][1] - minMaxList[j][0];
                }
            }
        }
    }
}

function short_list()
{
    shortList.push(0);

    for(i = 1; i < combinedList.length; i++)
    {
        for(j = 0; j < 18; j++)
        {
            for(k = 0; k < shortList.length; k++)
            {
                currentAttrib = combinedList[i][1][j];
                compareIdx = shortList[k]
                compareAttrib = combinedList[compareIdx][1][j];

                if(currentAttrib == infinity)
                {
                    currentAttrib = minMaxList[j][1];
                }

                currentAttribScaled = Math.abs((currentAttrib / minMaxList[j][2])) * 100;
                compareAttribScaled = Math.abs((compareAttrib / minMaxList[j][2])) * 100;

                if(compareAttribScaled == currentAttribScaled)
                {
                    break;
                }
                else if(compareAttribScaled > currentAttribScaled + deviation && compareAttribScaled > currentAttribScaled - deviation)
                {
                    //post(currentAttribScaled + "    ///    " + compareAttribScaled + "\n")
                    shortList.push(i);
                    break;
                }
            }
        }
    }

    // post("Short list has " + shortList.length + " states.\n");
    //
    // post(shortList + "\n");
    //
    // tempList = [];
    //
    // tempList.push(shortList[0]);
    // for(i = 0; i < shortList.length; i++)
    // {
    //     for(j = 0; j < tempList.length; j++)
    //     {
    //         if(shortList[i][0] != tempList[j][0])
    //         {
    //             tempList.push(shortList[i]);
    //             break;
    //         }
    //     }
    // }
    //
    // post(shortList + "\n");
    //
    // post("Short list has " + tempList.length + " states.\n");
    //
    // shortList = [];
    //
    // for(i = 0; i < tempList.length; i++)
    // {
    //     shortList.push(tempList[i]);
    // }

    post(shortList + "\n");

    post("Short list has " + shortList.length + " states.\n");

    tempList = [];
    tempList.push(shortList[0])

    for(i = 0; i < shortList.length; i++)
    {
        if(tempList.indexOf(shortList[i]) > -1)
        {
            //post("donothing\n")
        }
        else
        {
            tempList.push(shortList[i])
        }
    }

    shortList = [];

    for(i = 0; i < tempList.length; i++)
    {
        shortList.push(tempList[i])
    }

    post(shortList + "\n");

    post("Short list has " + shortList.length + " states.\n");

    //post(shortList + "\n")
}

function print_combioned_list()
{
    for(i = 0; i < combinedList.length; i++)
    {
        post(String(i) + ": " + combinedList[i][0] + "\n");
        for(j = 0; j < 18; j++)
        {
            post(get_attribute_name(j) + ": " + combinedList[i][1][j] + "\n");
        }
        post("\n");
    }
}

function get_min_max()
{
    minMaxList = [];

    for(i = 0; i < 18; i++)
    {
        var minVal = combinedList[0][1][i];
        var maxVal = combinedList[0][1][i];

        for(j = 0; j < combinedList.length; j++)
        {
            theVal = combinedList[j][1][i];

            if(theVal < minVal)
            {
                minVal = theVal;
            }
            if(theVal > maxVal && theVal != infinity)
            {
                maxVal = theVal;
            }
        }

        theRange = Math.abs(maxVal - minVal);

        if(verbose)
        {
            post(get_attribute_name(i) + " min: " + minVal + "\n");
            post(get_attribute_name(i) + " max: " + maxVal + "\n");
            post(get_attribute_name(i) + " range: " + theRange + "\n");
        }

        minMaxList.push([minVal, maxVal, theRange]);
    }
}

function get_attribute_name(attribute)
{
    name = "";

    if(attribute == 0)
        name = "rolloff";
    else if(attribute == 1)
        name = "spectral crest";
    else if(attribute == 2)
        name = "loudness";
    else if(attribute == 3)
        name = "linear centroid";
    else if(attribute == 4)
        name = "logarithmic centroid";
    else if(attribute == 5)
        name = "linear spread";
    else if(attribute == 6)
        name = "logarithmic spread";
    else if(attribute == 7)
        name = "linear skewness";
    else if(attribute == 8)
        name = "logarithmic skewness";
    else if(attribute == 9)
        name = "linear kurtosis";
    else if(attribute == 10)
        name = "logarithmic kurtosis";
    else if(attribute == 11)
        name = "linear brightness";
    else if(attribute == 12)
        name = "logarithmic brightness";
    else if(attribute == 13)
        name = "sfm";
    else if(attribute == 14)
        name = "noise ratio";
    else if(attribute == 15)
        name = "harmonic ratio";
    else if(attribute == 16)
        name = "roughtness";
    else if(attribute == 17)
        name = "inharmonicity";

    return name;
}

function combine_lists()
{
    combinedList = [];
    for(i = 0; i < stateList.length; i++)
    {
        addList = [];
        addList.push(stateList[i]);
        addList.push(descriptionList[i]);
        combinedList.push(addList);
    }

    if(verbose)
    {
        post('Combined list created with ' + combinedList.length + " entries.\n");
    }
}

function load_state_list(x)
{
    stateList = [];

    stateFile = new File(x, "read");
    stateFile.open();

    while(stateFile.eof > stateFile.position)
    {
        theList = [];
        line = stateFile.readline();
        stringSplit = line.split(",")
        for(i = 0; i < stringSplit.length; i++)
        {
            if(stringSplit[i].indexOf(".") > -1)
            {
                theList.push(parseFloat(stringSplit[i]));
            }
            else
            {
                theList.push(parseInt(stringSplit[i]));
            }
        }
        stateList.push(theList);
    }

    if(verbose)
    {
        post("State list loaded with " + stateList.length + " states.\n");
    }

    stateFile.close();
}

function load_description_list(x)
{
    descriptionList = [];

    descFile = new File(x, "read");
    descFile.open();

    while(descFile.eof > descFile.position)
    {
        theList = [];
        line = descFile.readline();
        stringSplit = line.split(",")
        for(i = 0; i < stringSplit.length; i++)
        {
            if(stringSplit[i].indexOf(".") > -1)
            {
                theList.push(parseFloat(stringSplit[i]));
            }
            else
            {
                theList.push(parseInt(stringSplit[i]));
            }
        }
        descriptionList.push(theList);
    }

    if(verbose)
    {
        post("Description list loaded with " + descriptionList.length + " descriptions.\n");
    }

    descFile.close();
}
