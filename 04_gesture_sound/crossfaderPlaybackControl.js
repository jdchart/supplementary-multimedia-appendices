var sliceDict = {};

outlets = 2;

function play_slice(x)
{
    outString = "start " + sliceDict[x]['"start_ms"'] + " " + sliceDict[x]['"end_ms"'];
    outlet(0, outString);
    outlet(1, sliceDict[x]['"start_samps"'])
}

function load_slices(file)
{
    sliceDict = {};

    f = new File(file, "read");
    f.open();
    headerLine = f.readline();
    headerLineArray = headerLine.split(",");

    while(f.eof > f.position)
    {
        nodeDict = {};
        line = f.readline();
        lineArray = line.split(",");
        for(i = 0; i < headerLineArray.length; i++)
        {
            nodeDict[headerLineArray[i]] = lineArray[i];
        }
        
        sliceDict[lineArray[0]] = nodeDict;
    }
}

load_slices('/Users/macbook/Desktop/pleanry_presentation/gesture_sound/sliceExportTest/_slice_INFO.csv')
