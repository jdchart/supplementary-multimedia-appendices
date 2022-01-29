var infoArray   = [];
var ctrlBufName = jsarguments[1];

function clear()
{
    infoArray = [];
}

function append(a, b)
{
    infoArray.push([a, b]);
}

function set_buffer_name (name)
{
    ctrlBufName = name;
}

function process ()
{
    var ctrlBuf = new Buffer(ctrlBufName);
    finalArray  = [];
    maxframes   = ctrlBuf.framecount();
    maxms       = ctrlBuf.length();

    ctrlBuf.send("clear");
    
    for (i = 0; i < infoArray.length; i++)
    {
        startFrame  = (infoArray[i][0] * maxframes) / maxms;
        if (i == infoArray.length - 1)
            endFrame    = maxframes
        else
            endFrame    = (infoArray[i + 1][0] * maxframes) / maxms;
        stateLength = endFrame - startFrame;
        stateValue  = infoArray[i][1];
        
        for (j = 0; j < stateLength; j++)
        {
            finalArray.push(parseInt(stateValue));
        }  
    }

    ctrlBuf.poke(1, 0, finalArray);

    outlet(0, "bang")
}

/*
function process ()
{
    var ctrlBuf = new Buffer(ctrlBufName);
    finalArray  = [];
    maxframes   = ctrlBuf.framecount();
    maxms       = ctrlBuf.length();

    ctrlBuf.send("clear");
    
    for (i = 0; i < infoArray.length; i++)
    {
        startFrame  = (infoArray[i][0] * maxframes) / maxms;
        if (i == infoArray.length - 1)
            endFrame    = maxframes
        else
            endFrame    = (infoArray[i + 1][0] * maxframes) / maxms;
        stateLength = endFrame - startFrame;
        stateValue  = infoArray[i][1];
        newArray = Array(parseInt(stateLength))
        newArray.map(function(e) { 
            e = stateValue;
            return e;
        })
        
        for (j = 0; j < stateLength; j++)
        {
            finalArray.concat(finalArray, newArray);
        }  
    }

    ctrlBuf.poke(1, 0, finalArray);

    outlet(0, "bang")
}
*/