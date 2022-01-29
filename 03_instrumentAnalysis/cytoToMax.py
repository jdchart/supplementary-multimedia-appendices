# Convert a cytoscape exported .xgmml file to be used for visualisation in Max.

def convert_file(filename):
    f = open(filename, "r")
    contents = f.read()
    stringArray = contents.split("\n")

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
            if('<graphics fill="' in stringArray[i] and 'x="' in stringArray[i] and 'y="' in stringArray[i]):
                xValue = stringArray[i].split('x="')[1].split('"')[0]
                yValue = stringArray[i].split('y="')[1].split('"')[0]
                nodeDict["x"] = xValue
                nodeDict["y"] = yValue

    for i in range(len(nodeList)):
        print(nodeList[i]["x"] + ', ' + nodeList[i]["y"])

    return nodeList

theList = convert_file("/Users/macbook/Desktop/CLOUD_EDGE_LIST.csv.txt")