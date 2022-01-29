# An easy way to use the FluCoMa descriptors in python.
# A lot of this code is copy-pasted from James Bradbury's datamosh project.

import subprocess
import tempfile
import os
import sqlite3
import soundfile as sf

def process_folder(path, **kwargs):
    # Process all the files in a folder and subfolders.
    # Will overwrite the current SQLite descriptors database.

    filetypes      = kwargs.get('filetypes', ['.wav', '.aiff'])
    returnList     = kwargs.get('returnList', [['melbands',      [0, 1, 2, 3, 4, 5, 6]],
                                                    ['mfcc',     [0, 1, 2, 3, 4, 5, 6]],
                                                    ['shape',    [0, 1, 2, 3, 4, 5, 6]],
                                                    ['pitch',    [0, 1, 2, 3, 4, 5, 6]],
                                                    ['loudness', [0, 1, 2, 3, 4, 5, 6]]])
    # numbands, minfreq, maxfreq, fftsettings, numderivs, low, middle, high:
    melbandsParams = kwargs.get('melbandsParams', ['40', '20.0', '20000.0', ['1024', '-1', '-1'], '0', '0', '50', '100']) 
    # numcoefs, numbands, minfreq, maxfreq, fftsettings, numderivs, low, middle, high:
    mfccParams     = kwargs.get('mfccParams',     ['13', '40', '20.0', '20000.0', ['1024', '-1', '-1'], '0', '0', '50', '100'])
    # descriptors, fftsettings, numderivs, low, middle, high:
    shapeParams    = kwargs.get('shapeParams',    [[0, 1, 2, 3, 4, 5, 6], ['1024', '-1', '-1'], '0', '0', '50', '100'])
    # descriptors, algorithm, minfreq, maxfreq, unit, fftsettings, numderivs, low, middle, high:
    pitchParams    = kwargs.get('pitchParams',    [[0, 1], '2', '20.0', '10000.0', '0', ['1024', '-1', '-1'], '0', '0', '50', '100'])
    # descriptors, kweighting, truepeak, windowsize, hopsize, numderivs, low, middle, high:
    loudnessParams = kwargs.get('loudnessParams', [[0, 1], '1', '1', '1024', '512', '0', '0', '50', '100'])

    conn = sqlite3.connect('fluidDesc.db')
    c    = conn.cursor()
    
    c.execute("DROP TABLE if exists descriptions")
    c.execute("""CREATE TABLE descriptions (
        idx integer,
        filename text,
        filepath text,
        frames integer,
        channels integer,
        startframe integer,
        endframe integer,
        samplerate integer,
        lenms integer,
        startms integer,
        endms integer
    )""")

    channels = 2

    for i in range(len(returnList)):
        if(returnList[i][0] == 'melbands'):
            for chan in range(channels):
                for band in range(int(melbandsParams[0])):
                    stat = 0
                    for stat in range(len(returnList[i][1])):
                        columnname = 'melbands_channel_' + str(chan) + '_band_' + str(band) + '_'
                        if returnList[i][1][stat] == 0:
                            columnname = columnname + 'mean'
                        elif returnList[i][1][stat] == 1:
                            columnname = columnname + 'standard_deviation'
                        elif returnList[i][1][stat] == 2:
                            columnname = columnname + 'skewness'
                        elif returnList[i][1][stat] == 3:
                            columnname = columnname + 'kurtosis'
                        elif returnList[i][1][stat] == 4:
                            columnname = columnname + 'low'
                        elif returnList[i][1][stat] == 5:
                            columnname = columnname + 'mid'
                        elif returnList[i][1][stat] == 6:
                            columnname = columnname + 'high'
                        c.execute('ALTER TABLE descriptions ADD ' + columnname + ' text')
                        print('added column: ' + columnname)
                        stat += 1
                    '''
                    for deriv in range(int(melbandsParams[4])):
                        columnname = 'melbands_channel_' + str(chan) + '_band_' + str(band) + '_deriv_' + str(deriv + 1) + '_'

                        stat += 1
                    '''
    
    c.execute("DELETE FROM descriptions")
    idx = 0
    sftypes = sf.available_formats()
    for root, dirs, files in os.walk(path, topdown=False):
        for name in files:
            if os.path.splitext(name)[1] in filetypes and os.path.splitext(name)[1].replace('.','').upper() in sftypes:
                sound = sf.SoundFile(os.path.join(root, name), 'r')
                frames        = sound.frames
                channels      = sound.channels
                startframe    = 0
                endframe      = frames
                samplerate    = sound.samplerate
                lenms         = 1000 / (samplerate/ frames)
                startms       = 0
                endms         = lenms
                sound.close()

                executeString = "INSERT INTO descriptions VALUES (" + str(idx) + ", '" + str(name) + "', '" + str(os.path.join(root, name)) + "',"
                executeString = executeString + " " + str(frames) + ", " + str(channels) + ", " + str(startframe) + ", " + str(endframe) + ", " + str(samplerate) + ","
                executeString = executeString + " " + str(lenms) + ", " + str(startms) + ", " + str(endms)

                melbandValues = melbands(str(os.path.join(root, name)), numbands = melbandsParams[0], minfreq = melbandsParams[1],
                                            maxfreq = melbandsParams[2], fftsettings = melbandsParams[3], numderivs = melbandsParams[4],
                                            low = melbandsParams[5], mid = melbandsParams[6], high = melbandsParams[7])

                for i in range(len(melbandValues)):
                    for j in range(len(melbandValues[i])):
                        for k in range(len(melbandValues[i][j])):
                            executeString = executeString + ', ' + str(melbandValues[i][j][k])

                executeString = executeString + ")"

                c.execute(executeString)
                idx += 1
            else:
                print('error: ' + name + " is not a valid file type!")

            print('processed sample ' + str(idx))

    conn.commit()
    conn.close()

    db_to_csv('fluidDesc.db', 'descriptions', path = '/Users/macbook/Documents/Code/GitHub_repos/computationalMusicology/Descriptors/Python')

def db_to_csv(dbFile, table, **kwargs):
    # Export the given SQLite database table to a csv file at the given path.

    filename = kwargs.get('filename', str(table) + ".csv")
    path     = kwargs.get('path', os.getcwd())

    conn = sqlite3.connect(dbFile)
    c    = conn.cursor()

    c.execute('PRAGMA table_info(' + str(table) + ')')
    headList = c.fetchall()

    header = ''
    for i in range(len(headList)):
        header = header + str(headList[i][1]) + ','

    header = header[:-1] + "\n"

    f = open(path + '/' + filename, "w")
    f.writelines(header)

    data = c.execute('SELECT * FROM ' + str(table))
    for row in data:
        rowString = ''
        for i in range(len(row)):
            rowString = rowString + str(row[i]) + ','
        
        rowString = rowString[:-1] + "\n"
        f.writelines(rowString)

    f.close()

    conn.commit()
    conn.close()

def melbands(source, **kwargs):
    # Impliments the FluCoMa melbands descriptor.
    # Stats: 0 = mean, 1 = stddev, 2 = skewness, 3 = kurtosis, 4 = low, 5 = middle, 6 = high.
    # Will return an array containing: [stats for band 0, chan 0] [stats for band n, chan 0]
    #                                  [stats for band 0, chan n] [stats for band n, chan n]
    #                                  etc.

    startframe     = kwargs.get('startframe',                    '0')
    numframes      = kwargs.get('numframes',                    '-1')
    startchan      = kwargs.get('startchan',                     '0')
    numchans       = kwargs.get('numchans',                     '-1')
    numbands       = kwargs.get('numbands',                     '40')
    minfreq        = kwargs.get('minfreq',                    '20.0')
    maxfreq        = kwargs.get('maxfreq',                 '20000.0')
    fftsettings    = kwargs.get('fftsettings',  ['1024', '-1', '-1'])
    numderivs      = kwargs.get('numderivs',                     '0')
    low            = kwargs.get('low',                         '0.0')
    middle         = kwargs.get('middle',                     '50.0')
    high           = kwargs.get('high',                      '100.0')
    statsreturn    = kwargs.get('statsreturn', [0, 1, 2, 3, 4, 5, 6])

    numDescriptors = int(numbands)

    tmpdir         = tempfile.mkdtemp()
    features       = os.path.join(tmpdir, 'features.wav')
    stats          = os.path.join(tmpdir,    'stats.wav')

    subprocess.call(['fluid-melbands', '-source', source, '-features', features,
                        '-maxnumbands', numbands,
                        '-startframe', startframe, '-numframes', numframes,
                        '-startchan', startchan, '-numchans', numchans,
                        '-numbands', numbands, '-minfreq', minfreq, '-maxfreq', maxfreq,
                        '-fftsettings', fftsettings[0], fftsettings[1], fftsettings[2]])
    
    subprocess.call(['fluid-stats', '-source', features, '-stats', stats, '-numderivs', numderivs,
                        '-startframe', '0', '-numframes', '-1',
                        '-startchan', '0', '-numchans', '-1',
                        '-low', low, '-middle', middle, '-high', high])

    data      = bufspill(stats)

    outData   = []
    chanArray = []
    descArray = []
    channels  = int(len(data) / numDescriptors)
    channel   = 0
    desc      = 0
    sta       = 0
    for i in range(len(data)):
        for j in range(len(data[i])):
            if sta in statsreturn:
                descArray.append(data[i][j])
            sta += 1
            if sta == 7:
                sta = 0
    
        desc += 1
        if desc == numDescriptors:
            desc = 0
            channel += 1
            if len(descArray) > 0:
                chanArray.append(descArray)
            descArray = []
            if channel == channels:
                channel = 0
                outData.append(chanArray)
                chanArray = []

    return outData

def melbands_help():
    # Prints the melbands help file.

    print('- - - Fluid Melbands - - -\n')
    print('A Perceptually Spread Spectral Contour Descriptor on a Buffer.\n')
    print('The spread is based on the Mel scale (https://en.wikipedia.org/wiki/Mel_scale) which is one of the first attempt to mimic pitch perception scientifically. This implementation allows to select the range and number of bands dynamically.')
    print('The process will return a single multichannel buffer of numBands per input channel. Each frame represents a value, which is every hopSize.\n')
    print('- - - - - - - - - - - - - - - -\n')
    print('source: The index of the buffer to use as the source material to be described through the various descriptors. The different channels of multichannel buffers will be processing sequentially.\n')
    print('startframe: Where in the srcBuf should the process start, in sample.\n')
    print('numframes: How many frames should be processed.\n')
    print('startchan: For multichannel srcBuf, which channel should be processed first.\n')
    print('numchans: For multichannel srcBuf, how many channel should be processed.\n')
    print('features: The destination buffer for the STRONG::numBands:: amplitudes describing the spectral shape.\n')
    print('numbands: The number of bands that will be perceptually equally distributed between STRONG::minFreq:: and STRONG::maxFreq::. It will decide how many channels are produce per channel of the source.\n')
    print('minfreq: The lower boundary of the lowest band of the model, in Hz.\n')
    print('maxfreq: The highest boundary of the highest band of the model, in Hz.\n')
    print('fftsettings: FFT settings consist of three numbers representing the window size, hop size and FFT size:')
    print('    -The window size. As sinusoidal estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles. http://www.subsurfwiki.org/wiki/Gabor_uncertainty')
    print('    -The window hop size. As sinusoidal estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.')
    print('    -The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.\n')

def mfcc(source, **kwargs):
    # Impliments the FluCoMa MFCC descriptor.
    # Stats: 0 = mean, 1 = stddev, 2 = skewness, 3 = kurtosis, 4 = low, 5 = middle, 6 = high.
    # Will return an array containing: [stats for band 0, chan 0] [stats for band n, chan 0]
    #                                  [stats for band 0, chan n] [stats for band n, chan n]
    #                                  etc.

    startframe     = kwargs.get('startframe',                    '0')
    numframes      = kwargs.get('numframes',                    '-1')
    startchan      = kwargs.get('startchan',                     '0')
    numchans       = kwargs.get('numchans',                     '-1')
    numcoeffs      = kwargs.get('numcoeffs',                    '13')
    numbands       = kwargs.get('numbands',                     '40')
    minfreq        = kwargs.get('minfreq',                    '20.0')
    maxfreq        = kwargs.get('maxfreq',                 '20000.0')
    fftsettings    = kwargs.get('fftsettings',  ['1024', '-1', '-1'])
    numderivs      = kwargs.get('numderivs',                     '0')
    low            = kwargs.get('low',                         '0.0')
    middle         = kwargs.get('middle',                     '50.0')
    high           = kwargs.get('high',                      '100.0')
    statsreturn    = kwargs.get('statsreturn', [0, 1, 2, 3, 4, 5, 6])

    numDescriptors = int(numcoeffs)

    tmpdir         = tempfile.mkdtemp()
    features       = os.path.join(tmpdir, 'features.wav')
    stats          = os.path.join(tmpdir,    'stats.wav')

    subprocess.call(['fluid-mfcc', '-source', source, '-features', features,
                        '-numcoeffs', numcoeffs, '-maxnumcoeffs', numcoeffs,
                        '-startframe', startframe, '-numframes', numframes,
                        '-startchan', startchan, '-numchans', numchans,
                        '-numbands', numbands, '-minfreq', minfreq, '-maxfreq', maxfreq,
                        '-fftsettings', fftsettings[0], fftsettings[1], fftsettings[2]])

    subprocess.call(['fluid-stats', '-source', features, '-stats', stats, '-numderivs', numderivs,
                        '-startframe', '0', '-numframes', '-1',
                        '-startchan', '0', '-numchans', '-1',
                        '-low', low, '-middle', middle, '-high', high])

    data      = bufspill(stats)

    outData   = []
    chanArray = []
    descArray = []
    channels  = int(len(data) / numDescriptors)
    channel   = 0
    desc      = 0
    sta       = 0
    for i in range(len(data)):
        for j in range(len(data[i])):
            if sta in statsreturn:
                descArray.append(data[i][j])
            sta += 1
            if sta == 7:
                sta = 0
    
        desc += 1
        if desc == numDescriptors:
            desc = 0
            channel += 1
            if len(descArray) > 0:
                chanArray.append(descArray)
            descArray = []
            if channel == channels:
                channel = 0
                outData.append(chanArray)
                chanArray = []

    return outData

def mfcc_help():
    # Prints the MFCC help file.

    print('- - - Fluid MFCC - - -\n')
    print('A classic spectral descriptor, the Mel-Frequency Cepstral Coefficients (https://en.wikipedia.org/wiki/Mel-frequency_cepstrum).\n')
    print('The input is first decomposed into numBands perceptually spaced bands, as with the MelBands objects. It is then analysed in numCoefs number of cepstral coefficients.')
    print('It has the avantage to be amplitude invarient, except for the first coefficient.')
    print('The process will return a single multichannel buffer of numCoefs per input channel. Each frame represents a value, which is every hopSize.\n')
    print('- - - - - - - - - - - - - - - -\n')
    print('source: The index of the buffer to use as the source material to be described through the various descriptors. The different channels of multichannel buffers will be processing sequentially.\n')
    print('startframe: Where in the srcBuf should the process start, in sample.\n')
    print('numframes: How many frames should be processed.\n')
    print('startchan: For multichannel srcBuf, which channel should be processed first.\n')
    print('numchans: For multichannel srcBuf, how many channel should be processed.\n')
    print('features: The destination buffer for the numCoefs coefficients describing the spectral shape.\n')
    print('numcoeffs: Number of Cepstral Coefficients.\n')
    print('numbands: The number of bands that will be perceptually equally distributed between minFreq and maxFreq.\n')
    print('minfreq: The lower boundary of the lowest band of the model, in Hz.\n')
    print('maxfreq: The highest boundary of the highest band of the model, in Hz.\n')
    print('fftsettings: FFT settings consist of three numbers representing the window size, hop size and FFT size:')
    print('    -The window size. As sinusoidal estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles. http://www.subsurfwiki.org/wiki/Gabor_uncertainty')
    print('    -The window hop size. As sinusoidal estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.')
    print('    -The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.\n')

def shape(source, **kwargs):
    # Impliments the FluCoMa spectral shape descriptor.
    # Descriptor: 0 = centroid, 1 = spread, 2 = skewness, 3 = kurtosis, 4 = rolloff, 5 = flatness, 6 = crest.
    # Stats: 0 = mean, 1 = stddev, 2 = skewness, 3 = kurtosis, 4 = low, 5 = middle, 6 = high.
    # Will return an array containing: [stats for descriptor 0, chan 0] [stats for descriptor n, chan 0]
    #                                  [stats for descriptor 0, chan n] [stats for descriptor n, chan n]
    #                                  etc.

    numDescriptors = 7

    startframe     = kwargs.get('startframe',                    '0')
    numframes      = kwargs.get('numframes',                    '-1')
    startchan      = kwargs.get('startchan',                     '0')
    numchans       = kwargs.get('numchans',                     '-1')
    fftsettings    = kwargs.get('fftsettings',  ['1024', '-1', '-1'])
    numderivs      = kwargs.get('numderivs',                     '0')
    low            = kwargs.get('low',                         '0.0')
    middle         = kwargs.get('middle',                     '50.0')
    high           = kwargs.get('high',                      '100.0')
    descriptor     = kwargs.get('descriptor',  [0, 1, 2, 3, 4, 5, 6])
    statsreturn    = kwargs.get('statsreturn', [0, 1, 2, 3, 4, 5, 6])

    tmpdir         = tempfile.mkdtemp()
    features       = os.path.join(tmpdir, 'features.wav')
    stats          = os.path.join(tmpdir,    'stats.wav')

    subprocess.call(['fluid-spectralshape', '-source', source, '-features', features,
                        '-startframe', startframe, '-numframes', numframes,
                        '-startchan', startchan, '-numchans', numchans,
                        '-fftsettings', fftsettings[0], fftsettings[1], fftsettings[2]])
    
    subprocess.call(['fluid-stats', '-source', features, '-stats', stats, '-numderivs', numderivs,
                        '-startframe', '0', '-numframes', '-1',
                        '-startchan', '0', '-numchans', '-1',
                        '-low', low, '-middle', middle, '-high', high])

    data     = bufspill(stats)

    outData   = []
    chanArray = []
    descArray = []
    channels  = int(len(data) / numDescriptors)
    channel   = 0
    desc      = 0
    sta       = 0
    for i in range(len(data)):
        for j in range(len(data[i])):
            if desc in descriptor and sta in statsreturn:
                descArray.append(data[i][j])
            sta += 1
            if sta == 7:
                sta = 0
    
        desc += 1
        if desc == numDescriptors:
            desc = 0
            channel += 1
            if len(descArray) > 0:
                chanArray.append(descArray)
            descArray = []
            if channel == channels:
                channel = 0
                outData.append(chanArray)
                chanArray = []

    return outData

def shape_help():
    # Prints the spectral shape help file.

    print('- - - Fluid Spectral Shape - - -\n')
    print('Seven of the spectral shape descriptors, computed on a linear scale for both amplitude and frequency.\n')
    print('- - - - - - - - - - - - - - - -\n')
    print('source: The index of the buffer to use as the source material to be described through the various descriptors. The different channels of multichannel buffers will be processing sequentially.\n')
    print('startframe: Where in the srcBuf should the process start, in sample.\n')
    print('numframes: How many frames should be processed.\n')
    print('startchan: For multichannel srcBuf, which channel should be processed first.\n')
    print('numchans: For multichannel srcBuf, how many channel should be processed.\n')
    print('features: The destination buffer for the 7 spectral features describing the spectral shape.\n')
    print('fftsettings: FFT settings consist of three numbers representing the window size, hop size and FFT size:')
    print('    -The window size. As sinusoidal estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles. http://www.subsurfwiki.org/wiki/Gabor_uncertainty')
    print('    -The window hop size. As sinusoidal estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.')
    print('    -The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.\n')

def pitch(source, **kwargs):
    # Impliments the FluCoMa pitch descriptor.
    # Descriptor: 0 = frequency, 1 = confidence.
    # Stats: 0 = mean, 1 = stddev, 2 = skewness, 3 = kurtosis, 4 = low, 5 = middle, 6 = high.
    # Will return an array containing: [stats for descriptor 0, chan 0] [stats for descriptor n, chan 0]
    #                                  [stats for descriptor 0, chan n] [stats for descriptor n, chan n]
    #                                  etc.

    numDescriptors = 2

    startframe     = kwargs.get('startframe',                    '0')
    numframes      = kwargs.get('numframes',                    '-1')
    startchan      = kwargs.get('startchan',                     '0')
    numchans       = kwargs.get('numchans',                     '-1')
    algorithm      = kwargs.get('algorithm',                     '2')
    minfreq        = kwargs.get('minfreq',                    '20.0')
    maxfreq        = kwargs.get('maxfreq',                 '10000.0')
    unit           = kwargs.get('unit',                          '0')
    fftsettings    = kwargs.get('fftsettings',  ['1024', '-1', '-1'])
    numderivs      = kwargs.get('numderivs',                     '0')
    low            = kwargs.get('low',                         '0.0')
    middle         = kwargs.get('middle',                     '50.0')
    high           = kwargs.get('high',                      '100.0')
    descriptor     = kwargs.get('descriptor',                 [0, 1])
    statsreturn    = kwargs.get('statsreturn', [0, 1, 2, 3, 4, 5, 6])

    tmpdir         = tempfile.mkdtemp()
    features       = os.path.join(tmpdir, 'features.wav')
    stats          = os.path.join(tmpdir,    'stats.wav')

    subprocess.call(['fluid-pitch', '-source', source, '-features', features,
                        '-startframe', startframe, '-numframes', numframes,
                        '-startchan', startchan, '-numchans', numchans,
                        '-algorithm', algorithm, '-minfreq', minfreq,
                        '-maxfreq', maxfreq, '-unit', unit,
                        '-fftsettings', fftsettings[0], fftsettings[1], fftsettings[2]])
    
    subprocess.call(['fluid-stats', '-source', features, '-stats', stats, '-numderivs', numderivs,
                        '-startframe', '0', '-numframes', '-1',
                        '-startchan', '0', '-numchans', '-1',
                        '-low', low, '-middle', middle, '-high', high])

    data     = bufspill(stats)

    outData   = []
    chanArray = []
    descArray = []
    channels  = int(len(data) / numDescriptors)
    channel   = 0
    desc      = 0
    sta       = 0
    for i in range(len(data)):
        for j in range(len(data[i])):
            if desc in descriptor and sta in statsreturn:
                descArray.append(data[i][j])
            sta += 1
            if sta == 7:
                sta = 0
    
        desc += 1
        if desc == numDescriptors:
            desc = 0
            channel += 1
            if len(descArray) > 0:
                chanArray.append(descArray)
            descArray = []
            if channel == channels:
                channel = 0
                outData.append(chanArray)
                chanArray = []

    return outData

def pitch_help():
    # Prints the pitch help file.

    print('- - - Fluid Pitch - - -\n')
    print('Implements three pitch descriptors, computed as frequency and the confidence in its value.\n')
    print('The process will return a multichannel buffer with two channels per input channel, one for pitch and one for the pitch tracking confidence.')
    print('Each sample represents a value, which is every hopSize. Its sampling rate is sourceSR / hopSize.\n')
    print('- - - - - - - - - - - - - - - -\n')
    print('source: The index of the buffer to use as the source material to be pitch-tracked. The different channels of multichannel buffers will be processing sequentially.\n')
    print('startframe: Where in the srcBuf should the process start, in sample.\n')
    print('numframes: How many frames should be processed.\n')
    print('startchan: For multichannel srcBuf, which channel should be processed first.\n')
    print('numchans: For multichannel srcBuf, how many channel should be processed.\n')
    print('features: The destination buffer for the pitch descriptors.\n')
    print('algorithm: The algorithm to estimate the pitch. The options are:')
    print('    - 0 = Cepstrum: Returns a pitch estimate as the location of the second highest peak in the Cepstrum of the signal (after DC).')
    print('    - 1 = Harmonic Product Spectrum: Implements the Harmonic Product Spectrum algorithm for pitch detection . See e.g. A. Lerch, "An Introduction to Audio Content Analysis: Applications in Signal Processing and Music Informatics." John Wiley & Sons, 2012.https://onlinelibrary.wiley.com/doi/book/10.1002/9781118393550')
    print('    - 2 = YinFFT: Implements the frequency domain version of the YIN algorithm, as described in P. M. Brossier, "Automatic Annotation of Musical Audio for Interactive Applications.” QMUL, London, UK, 2007. See also https://essentia.upf.edu/documentation/reference/streaming_PitchYinFFT.html\n')
    print('minfreq: The minimum frequency that the algorithm will search for an estimated fundamental. This sets the lowest value that will be generated.\n')
    print('maxfreq: The maximum frequency that the algorithm will search for an estimated fundamental. This sets the highest value that will be generated.\n')
    print('unit: The unit of the estimated value. The default of 0 is in Hz. A value of 1 will convert to MIDI note values.\n')
    print('fftsettings: FFT settings consist of three numbers representing the window size, hop size and FFT size:')
    print('    -The window size. As sinusoidal estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles. http://www.subsurfwiki.org/wiki/Gabor_uncertainty')
    print('    -The window hop size. As sinusoidal estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.')
    print('    -The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.\n')

def loudness(source, **kwargs):
    # Impliments the FluCoMa loudness descriptor.
    # Descriptor: 0 = loudness, 1 = true peak.
    # Stats: 0 = mean, 1 = stddev, 2 = skewness, 3 = kurtosis, 4 = low, 5 = middle, 6 = high.
    # Will return an array containing: [stats for descriptor 0, chan 0] [stats for descriptor n, chan 0]
    #                                  [stats for descriptor 0, chan n] [stats for descriptor n, chan n]
    #                                  etc.

    numDescriptors = 2

    startframe     = kwargs.get('startframe',                    '0')
    numframes      = kwargs.get('numframes',                    '-1')
    startchan      = kwargs.get('startchan',                     '0')
    numchans       = kwargs.get('numchans',                     '-1')
    kweighting     = kwargs.get('kweighting',                    '1')
    truepeak       = kwargs.get('truepeak',                      '1')
    windowsize     = kwargs.get('windowsize',                 '1024')
    hopsize        = kwargs.get('hopsize',                     '512')
    numderivs      = kwargs.get('numderivs',                     '0')
    low            = kwargs.get('low',                         '0.0')
    middle         = kwargs.get('middle',                     '50.0')
    high           = kwargs.get('high',                      '100.0')
    descriptor     = kwargs.get('descriptor',                 [0, 1])
    statsreturn    = kwargs.get('statsreturn', [0, 1, 2, 3, 4, 5, 6])

    tmpdir         = tempfile.mkdtemp()
    features       = os.path.join(tmpdir, 'features.wav')
    stats          = os.path.join(tmpdir,    'stats.wav')

    subprocess.call(['fluid-loudness', '-source', source, '-features', features,
                        '-startframe', startframe, '-numframes', numframes,
                        '-startchan', startchan, '-numchans', numchans,
                        '-kweighting', kweighting, '-truepeak', truepeak,
                        '-windowsize', windowsize, '-hopsize', hopsize])
    
    subprocess.call(['fluid-stats', '-source', features, '-stats', stats, '-numderivs', numderivs,
                        '-startframe', '0', '-numframes', '-1',
                        '-startchan', '0', '-numchans', '-1',
                        '-low', low, '-middle', middle, '-high', high])

    data     = bufspill(stats)

    outData   = []
    chanArray = []
    descArray = []
    channels  = int(len(data) / numDescriptors)
    channel   = 0
    desc      = 0
    sta       = 0
    for i in range(len(data)):
        for j in range(len(data[i])):
            if desc in descriptor and sta in statsreturn:
                descArray.append(data[i][j])
            sta += 1
            if sta == 7:
                sta = 0
    
        desc += 1
        if desc == numDescriptors:
            desc = 0
            channel += 1
            if len(descArray) > 0:
                chanArray.append(descArray)
            descArray = []
            if channel == channels:
                channel = 0
                outData.append(chanArray)
                chanArray = []

    return outData

def loudness_help():
    # Prints the loudness help file.

    print('- - - Fluid Loudness - - -\n')
    print('Two loudness descriptors, computing the true peak of the signal as well as applying the filters proposed by broadcasting standards to emulate the perception of amplitude.\n')
    print('The process will return a multichannel buffer with two channels per input channel, one for loudness and one for the true peak value of the frame, both in dBfs.')
    print('More information on broadcasting standardisation of loudness measurement is available at https://tech.ebu.ch/docs/tech/tech3341.pdf, and in more musician-friendly explantions at http://designingsound.org/2013/02/06/loudness-and-metering-part-1/.')
    print('Each sample represents a value, which is every hopSize. Its sampling rate is sourceSR / hopSize.\n')
    print('- - - - - - - - - - - - - - - -\n')
    print('source: The index of the buffer to use as the source material to be described. The different channels of multichannel buffers will be processing sequentially.\n')
    print('startframe: Where in the srcBuf should the process start, in sample.\n')
    print('numframes: How many frames should be processed.\n')
    print('startchan: For multichannel srcBuf, which channel should be processed first.\n')
    print('numchans: For multichannel srcBuf, how many channel should be processed.\n')
    print('features: The destination buffer for the loudness descriptors.\n')
    print('kweighting: A flag to switch the perceptual model of loudness. On by default, removing it makes the algorithm more CPU efficient by reverting to a simple RMS of the frame.\n')
    print('truepeak: A flag to switch the computation of TruePeak. On by default, removing it makes the algorithm more CPU efficient by reverting to a simple absolute peak of the frame.\n')
    print('windowsize: The size of the window on which the computation is done. By default 1024 to be similar with all other FluCoMa objects, the EBU specifies other values as per the examples below.\n')
    print('hopsize: How much the buffered window moves forward, in samples. By default 512 to be similar with all other FluCoMa objects, the EBU specifies other values as per the examples below.\n')

def bufspill(audio_file):
    # Reads an audio file and converts its content to a numpy array.

    try:
        t_data, _ = sf.read(audio_file)
        return t_data.transpose()
    except:
        print(f'Could not read: {audio_file}')

def print_results(results):
    # Print the results of a description.
    
    print('\n')
    for i in range(len(results)):
        for j in range(len(results[i])):
            for k in range(len(results[i][j])):
                print(results[i][j][k])

#process_folder('/Users/macbook/Documents/Music/Samples/autechre_like/Blips 001 - Atom')