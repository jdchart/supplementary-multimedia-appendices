import os
import fluidDescriptors as fd

def process(folder, **kwargs):
    filetypes = kwargs.get('filetypes', ['.wav', '.wave', '.aif', '.aiff'])
    output    = kwargs.get('output', os.path.join(os.getcwd(), 'DESCRIPTOR_OUTPUT.csv'))
    files     = get_file_list(folder, filetypes)
    data      = []

    print('Creating output file: ' + output)
    outputFile = open(output, "w")

    header = 'Idx,Name,Directory\n'
    outputFile.writelines(header)

    print('Processing...')
    for i in range(len(files)):
        print('File ' + str(i + 1) + ' of ' + str(len(files)) + ': ' + files[i]) + ','
        fileData = process_file(files[i])
        csvData  = str(i) + ',' + os.path.split(files[i])[1] + ',' + files[i] + data_to_csv_string(fileData)
        outputFile.writelines(csvData)

    outputFile.close()

def process_file(file):
    returnList = []

    melbandsData = fd.melbands(file)
    mfccData     = fd.mfcc(file)
    shapeData    = fd.shape(file)
    pitchData    = fd.pitch(file)
    loudnessData = fd.loudness(file)

    returnList.append(unpack_data(melbandsData))
    returnList.append(unpack_data(mfccData))
    returnList.append(unpack_data(shapeData))
    returnList.append(unpack_data(pitchData))
    returnList.append(unpack_data(loudnessData))

    return returnList

def unpack_data(data):
    unpacked = []

    for i in range(len(data)):
        for j in range(len(data[i])):
            for k in range(len(data[i][j])):
                unpacked.append(data[i][j][k])

    return unpacked

def data_to_csv_string(data):
    returnString = ''

    for i in range(len(data)):
        for j in range(len(data[i])):
            returnString = returnString + str(data[i][j]) + ','

    return returnString[:-1] + '\n'

def get_file_list(folder, filetypes):
    returnList = []

    for file in os.listdir(folder):
        if os.path.splitext(file)[1] in filetypes:
            returnList.append(os.path.join(folder, file))
                
    return returnList

process('/Users/macbook/Documents/Music/Samples/autechre_like/Blips 001 - Atom/')