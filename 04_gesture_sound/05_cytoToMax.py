# Convert a cytoscape exported .xgmml file to be used for visualisation in Max.

def convert_file(filename):
    f = open(filename, "r")
    contents = f.read()
    stringArray = contents.split("\n")
    f.close

    readingNode = False
    nodeList = []
    nodeDict = {}
    for i in range(len(stringArray)):
        if("<node id=" in stringArray[i]):
            readingNode = True
            nodeDict = {}
        if("</node>" in stringArray[i]):
            readingNode = False
            nodeList.append(nodeDict)
        
        if(readingNode):
            if("<att name" in stringArray[i] and 'value="' in stringArray[i]):
                attrName = stringArray[i].split('name="')[1].split('"')[0]
                value = stringArray[i].split('value="')[1].split('"')[0]
                nodeDict[attrName] = value
            if('<graphics outline="' in stringArray[i] and 'x="' in stringArray[i] and 'y="' in stringArray[i]):
                xValue = stringArray[i].split('x="')[1].split('"')[0]
                yValue = stringArray[i].split('y="')[1].split('"')[0]
                wValue = stringArray[i].split('w="')[1].split('"')[0]
                nodeDict["x"] = xValue
                nodeDict["y"] = yValue
                nodeDict["w"] = wValue

    return nodeList

def create_file(list, filePath):
    filename = filePath + "LAYOUT.csv"
    f = open(filename, "w")

    """
    header = ""
    for key in list[0]:
        header = header + str(key) + "," 
    header = header[:-1]
    """
    header = "idx,x,y,w"
    f.writelines(header)

    for i in range(len(list)):
        addLine = "\n"
        for key in list[i]:
            if(key == 'x' or key == 'y' or key == 'shared name' or key == 'w'):     
                addLine = addLine + list[i][key] + ","
        addLine = addLine[:-1]
        f.writelines(addLine)

    f.close()

theList = convert_file("/Users/macbook/Desktop/pleanry_presentation/gesture_sound/slices_from_sound/novelty_mfcc/_sound_novelty_mfcc_xgmml.xgmml")

create_file(theList, "/Users/macbook/Desktop/pleanry_presentation/gesture_sound/slices_from_sound/novelty_mfcc/")

print("done")