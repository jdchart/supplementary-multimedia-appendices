numderivs = 0;
numchans = 0;
offset = 0;

function set_derivs(x)
{
    numderivs = x;
}

function set_numchans(x)
{
    numchans = x;
}

function set_offset(x)
{
    offset = x;
}

function iter()
{
    var buf = new Buffer("stats");
    outList = [];
    for(i = 1; i < numchans + 1; i++)
    {
        for(j = 0; j < numderivs + 1; j++)
        {
            outList.push(buf.peek(i, j + (offset * j), 1))
        }
    }

    stringList = ""
    for(i = 0; i < outList.length; i++)
    {
        stringList = stringList + outList[i] + " ";
    }


    outlet(0, stringList);
}