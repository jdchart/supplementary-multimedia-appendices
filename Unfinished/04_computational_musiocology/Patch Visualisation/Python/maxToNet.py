import json
import os

def open_json(filepath):
    with open(filepath) as json_file:
        data = json.load(json_file)

    return data

def json_trim(jsonData, parent, direc):
    returnDict = {}
    returnDict['nodes'] = []
    returnDict['links'] = []

    for i in range(len(jsonData['patcher']['boxes'])):
        absType = 'standard'
        if subpatcher_check(jsonData['patcher']['boxes'][i]):
            subDict = json_trim(jsonData['patcher']['boxes'][i]['box'], jsonData['patcher']['boxes'][i]['box']['id'] + '_' + parent, direc)
            for j in range(len(subDict['nodes'])):
                returnDict['nodes'].append(subDict['nodes'][j])
            for j in range(len(subDict['links'])):
                returnDict['links'].append(subDict['links'][j])
            if jsonData['patcher']['boxes'][i]['box']['text'][:3] == 'gen':
                absType = 'gen'
            else:
                absType = 'subpatcher'
        elif abstraction_check(jsonData['patcher']['boxes'][i], direc) != '':
            absDict = json_trim(open_json(abstraction_check(jsonData['patcher']['boxes'][i], direc)), jsonData['patcher']['boxes'][i]['box']['id'] + '_' + parent, direc)
            for j in range(len(absDict['nodes'])):
                returnDict['nodes'].append(absDict['nodes'][j])
            for j in range(len(absDict['links'])):
                returnDict['links'].append(absDict['links'][j])
            absType = 'abstraction'
        elif 'text' in jsonData['patcher']['boxes'][i]['box'].keys():
            if jsonData['patcher']['boxes'][i]['box']['text'][:5] == 'poly~':
                absName = jsonData['patcher']['boxes'][i]['box']['text'].split()[1]
                absDict = json_trim(open_json(get_abstraction(absName, direc)), jsonData['patcher']['boxes'][i]['box']['id'] + '_' + parent, direc)
                for j in range(len(absDict['nodes'])):
                    returnDict['nodes'].append(absDict['nodes'][j])
                for j in range(len(absDict['links'])):
                    returnDict['links'].append(absDict['links'][j])
                absType = 'poly'
            elif jsonData['patcher']['boxes'][i]['box']['text'][:5] == 'pfft~':
                absName = jsonData['patcher']['boxes'][i]['box']['text'].split()[1]
                absDict = json_trim(open_json(get_abstraction(absName, direc)), jsonData['patcher']['boxes'][i]['box']['id'] + '_' + parent, direc)
                for j in range(len(absDict['nodes'])):
                    returnDict['nodes'].append(absDict['nodes'][j])
                for j in range(len(absDict['links'])):
                    returnDict['links'].append(absDict['links'][j])
                absType = 'pfft'
        elif jsonData['patcher']['boxes'][i]['box']['maxclass'] == 'bpatcher':
            absName = jsonData['patcher']['boxes'][i]['box']['name'][:-7]
            absDict = json_trim(open_json(get_abstraction(absName, direc)), jsonData['patcher']['boxes'][i]['box']['id'] + '_' + parent, direc)
            for j in range(len(absDict['nodes'])):
                returnDict['nodes'].append(absDict['nodes'][j])
            for j in range(len(absDict['links'])):
                returnDict['links'].append(absDict['links'][j])
            absType = 'bpatcher'

        theDict = node_format(jsonData['patcher']['boxes'][i], parent, absType)
        returnDict['nodes'].append(theDict)

    for i in range(len(jsonData['patcher']['lines'])):
        theDict = edge_format(jsonData['patcher']['lines'][i], parent)
        returnDict['links'].append(theDict)

    return returnDict

def abstraction_check(obj, direc):
    # If the object is an abstraction, returns the filepath, of not returns ''.

    abstraction = ''
    if 'text' in obj['box'].keys():
        filename   = str(obj['box']['text']) + '.maxpat'
     
        fileList   = list()
        folderList = list()
        folderList.append(direc)
        for root, dirs, files in os.walk(direc, topdown=False):
            for name in files:
                fileList.append(os.path.join(root, name))
            for name in dirs:
                folderList.append(os.path.join(root, name))

        for folders in range(len(folderList)):
            if os.path.join(folderList[folders], filename) in fileList:
                abstraction = os.path.join(folderList[folders], filename)         

    return abstraction

def get_abstraction(absName, direc):
    abstraction = ''

    filename   = absName + '.maxpat'
    
    fileList   = list()
    folderList = list()
    folderList.append(direc)
    for root, dirs, files in os.walk(direc, topdown=False):
        for name in files:
            fileList.append(os.path.join(root, name))
        for name in dirs:
            folderList.append(os.path.join(root, name))

    for folders in range(len(folderList)):
        if os.path.join(folderList[folders], filename) in fileList:
            abstraction = os.path.join(folderList[folders], filename)         

    return abstraction

def subpatcher_check(obj):
    # If the object is a subpatcher, returns true, else retruns false.

    sub = False
    if 'patcher' in obj['box'].keys():
        sub = True

    return sub

def node_format(obj, parent, absType):
    objDict = {}
    objDict['uniqueid']        = obj['box']['id'] + '_' + parent
    objDict['id']              = obj['box']['id']
    objDict['maxclass']        = obj['box']['maxclass']
    objDict['numinlets']       = obj['box']['numinlets']
    objDict['numoutlets']      = obj['box']['numoutlets']
    objDict['patchx']          = obj['box']['patching_rect'][0]
    objDict['patchy']          = obj['box']['patching_rect'][1]
    objDict['parent']          = parent
    objDict['abstype']         = absType
    if 'text' in obj['box'].keys():
        objDict['text']        = obj['box']['text']
        objDict['displayname'] = obj['box']['text']
    elif obj['box']['maxclass'] != 'newobj':
        objDict['text']    = ''
        objDict['displayname'] = obj['box']['maxclass']
    else:
        objDict['text']    = ''
        objDict['displayname'] = objDict['uniqueid']
    
    return objDict
    
def edge_format(obj, parent):
    objDict = {}
    objDict['source'] = obj['patchline']['source'][0] + '_' + parent
    objDict['target'] = obj['patchline']['destination'][0] + '_' + parent
    objDict['outlet'] = obj['patchline']['source'][1]
    objDict['inlet']  = obj['patchline']['destination'][1]
    objDict['parent'] = parent
    
    return objDict

def format_dict(rawDict):
    '''
    Ok, so we want to incorporate everything into the same network.
    So, whenever there's and absType that isn't 'standard', we need to check if soemthing needs to be done.
    We'll be able to get all it's children.
    '''


    return rawDict

def json_export(exportDict, **kwargs):
    direc    = kwargs.get('direc',      os.getcwd())
    fileName = kwargs.get('fileName', 'json_export')

    fullFile = os.path.join(direc, fileName + '.json')
    
    with open(fullFile, 'w') as outFile:
        json.dump(exportDict, outFile)

    infoString = 'A network of ' + str(len(exportDict['nodes'])) + ' nodes and ' + str(len(exportDict['links'])) + ' edges was exported to: ' + str(fullFile)
    print(infoString)
    
def csv_export(exportDict, **kwargs):
    direc        = kwargs.get('direc',      os.getcwd())
    nodeFileName = kwargs.get('nodeFileName', 'node_list')
    edgeFileName = kwargs.get('edgeFileName', 'edge_list')

    nodeFullFile = os.path.join(direc, nodeFileName + '.csv')
    edgeFullFile = os.path.join(direc, edgeFileName + '.csv')
    
    nodeFile = open(nodeFullFile, 'w')
    
    header   = 'idx,'
    keys = list(exportDict['nodes'][0].keys())
    for i in range(len(keys)):
        header = header + keys[i] + ','
    header = header[:-1] + '\n'
    nodeFile.write(header)

    for i in range(len(exportDict['nodes'])):
        line = str(i) + ','
        for key in exportDict['nodes'][i]:
            line = line + str(exportDict['nodes'][i][key]) + ','
        line = line[:-1] + '\n'
        nodeFile.write(line)
    
    nodeFile.close()

    edgeFile = open(edgeFullFile, 'w')

    header   = 'idx,'
    keys = list(exportDict['links'][0].keys())
    for i in range(len(keys)):
        header = header + keys[i] + ','
    header = header[:-1] + '\n'
    edgeFile.write(header)

    for i in range(len(exportDict['links'])):
        line = str(i) + ','
        for key in exportDict['links'][i]:
            line = line + str(exportDict['links'][i][key]) + ','
        line = line[:-1] + '\n'
        edgeFile.write(line)

    edgeFile.close()

    infoString = 'A network of ' + str(len(exportDict['nodes'])) + ' nodes and ' + str(len(exportDict['links'])) + ' edges was exported to: ' + str(direc)
    print(infoString)

def process(file):
    thePatch      = open_json(file)
    patchDict     = json_trim(thePatch, 'root', os.path.split(file)[0])
    formattedDict = format_dict(patchDict)

    return formattedDict

finalDict = process('/Users/macbook/Documents/BACKUP_GIT/FLUCOMA SOURCES/Lauren Hayes/Code/For Visualisation/_Hayes_Patch.maxpat')

#json_export(finalDict)
csv_export(finalDict)
