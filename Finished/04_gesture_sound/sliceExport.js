var srcBuf = "src";
var idxBuf = "indices";
var newBuf = "creationBuffer";
var fileName = "slice";
var sliceList = [];
var reportProgress = false;
var sampleRate = 44100;
var listFileList = [];
var exportSF = true;
var exportInfoFile = true;

function export_slices(folder)
{
    var src = new Buffer(srcBuf);
    sampleRate = (src.framecount() / src.length()) * 1000;

    sliceList = [];
    sliceList = get_slice_list();
    listFileList = [];

    for(i = 0; i < sliceList.length; i++, src)
    {
        create_slice(folder, sliceList[i]);
    }

    if(exportInfoFile)
    {
        header = '"idx","start_samps","end_samps","dur_samps","start_ms","end_ms","dur_ms","filename"';
        f = new File(folder + "_" + fileName + "_INFO.csv", "write");
        f.open();
        f.writeline(header);
        for(i = 0; i < listFileList.length; i++)
        {
            f.writeline(String(listFileList[i]));
        }
        f.close();

        header = '"source","target"';
        f = new File(folder + "_" + fileName + "_INFO_EDGEFILE.csv", "write");
        f.open();
        f.writeline(header);
        for(i = 0; i < listFileList.length - 1; i++)
        {
            f.writeline(String(i) + "," + String(i+1));
        }
        f.close();
    } 
}

function create_slice(folder, info, src)
{
    if(reportProgress)
        post("Creating slice " + info[0] + "\n");

    var newBuffer = new Buffer(newBuf);
    var src = new Buffer(srcBuf);

    newBuffer.send("clear");
    newBuffer.send("sizeinsamps", src.framecount());
    newBuffer.send("duplicate", srcBuf);
    newBuffer.send("crop", info[1] / (sampleRate / 1000), info[2] / (sampleRate / 1000));

    file = folder + fileName + String(info[0]) + ".wav";

    if(exportSF)
        newBuffer.send("writewave", file);

    listFileList.push([info[0], info[1], info[2], info[3], info[1] / (sampleRate / 1000), info[2] / (sampleRate / 1000),(info[2] / (sampleRate / 1000)) - (info[1] / (sampleRate / 1000)), file])
}

function set_file_name(name)
{
    fileName = name;
}

function get_slice_list()
{
    theList = [];
    var idx = new Buffer(idxBuf);
    var src = new Buffer(srcBuf);

    for(i = 0; i < idx.framecount(); i++)
    {
        entry = [];

        if(i == 0)
        {
            entry.push(i);
            entry.push(0);
            entry.push(idx.peek(1, i + 1, 1));
            entry.push(idx.peek(1, i + 1, 1));
        }
        else if(i == idx.framecount() - 1)
        {
            entry.push(i);
            entry.push(idx.peek(1, i, 1));
            entry.push(src.framecount());
            entry.push(src.framecount() - idx.peek(1, i, 1));
        }
        else
        {
            entry.push(i);
            entry.push(idx.peek(1, i, 1));
            entry.push(idx.peek(1, i + 1, 1));
            entry.push(idx.peek(1, i + 1, 1) - idx.peek(1, i, 1));
        }

        theList.push(entry);
    }

    return theList;
}

function set_report_progress(x)
{
    reportProgress = false;
    if(x == 1)
        reportProgress = true;
}