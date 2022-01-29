exports.sourceBuf = "src";
exports.indicesBuf = "idx";
exports.startframe = 0;
exports.startchan = 0;
exports.numframes = -1;
exports.numchans = -1;
exports.minslicelength = 2;
exports.fftwindow = 9;
fftWindowDisplay = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384];
exports.ffthop = 9;
exports.fftsize = 10;
fftOtherDisplay = [-1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384];
onsetMetrics = ["Energy", "High Frequency Content", "Spectral Flux", "Modified Kullback-Leibler", "Itakura-Saito", "Cosine", "Phase Deviation", "Weighted Phase Deviation", "Complex Domain", "Rectified Complex Domain"];
onsetMetricsDesc = ["", "", "", "", "", "", "", "", "", ""];
onsetMetricsMenu = [onsetMetrics, onsetMetricsDesc, [0, false], true, "", []];
noveltyFeatures = ["Spectrum", "MFCC", "Pitch", "Loudness"]
noveltyFeaturesDesc = ["The magnitude of the full spectrum.", "13 mel-frequency cepstrum coefficients.", "The pitch and its confidence.", "The TruePeak and Loudness."]
noveltyFeatureMenu = [noveltyFeatures, noveltyFeaturesDesc, [0, false], true, "", []];
exports.threshold = 0.5;
exports.filtersize = 5;
exports.framedelta = 0;
exports.overwriteSlices = true;
// [BinCol1, BinCol2, windowSizeCol, hopSizeCol, fftSizeCol, borderCol, borderWid]
exports.fftStyle = [[0.392, 0.706, 0.737, 1.000], [0.545, 0.804, 0.827, 1.000], [0.663, 0.196, 0.196, 1.000], [0.424, 0.306, 0.306, 1.000], [0,0,1,1], [0,0,0,1], 1, 2]
exports.sampleRate = 44100;
exports.numBins = 0;
exports.kernelsize = 3;

exports.trigger_slice = function()
{
    outlet(1, "process");
}

exports.clear_slices = function()
{
    outlet(1, "clear");
}

exports.load_source = function()
{
    outlet(1, "load_src");
}

exports.load_index = function()
{
    outlet(1, "load_idx");
}

exports.overwrite_change = function()
{
    if(ff.overwriteSlices)
        outlet(1, "overwrite 1");
    else
        outlet(1, "overwrite 0");
}

exports.display_menu = function (obj)
{
    if(obj == "fluid.bufonsetslice~")
    {
        ff.buf_offset_slice_menu(ui.m4lStyle);
    }
    if(obj == "fluid.bufnoveltyslice~")
    {
        ff.buf_novelty_slice_menu(ui.m4lStyle);
    }
}

exports.buf_novelty_slice_menu = function(style)
{
    var srcBuf = new Buffer(ff.sourceBuf);

    patcherDeets = get_patcher_details();
    actualSpace = [patcherDeets[4],patcherDeets[5] - 40]

    // ######## Back Canvas ##############
    ui.blankCanvas(0, 20, actualSpace[0], actualSpace[1],
                   style, ui.mouseState, 0,
                   "Buffer-based novelty-based slicer.",
                   style[0], true);

    // ######## Title ##############
    ui.txtBox(0, 20, actualSpace[0], actualSpace[1] * 0.1,
              style, ui.mouseState, 0,
              "Buffer-based novelty-based slicer.",
              "Novelty Slicer (offline) || fluid.bufnoveltyslice~",
              "left", false);

    colWid = (patcherDeets[4] * 0.5) * 0.5;

    // ######## Visualisation ##############
    ff.fft_visualiser(0, 20 + ((actualSpace[1] * 0.1) * 6), colWid * 3, (actualSpace[1] * 0.1) * 4,
                      ff.fftStyle, style);

    // ######## Slice button ##############
    ui.txtBtn(colWid * 3, 20 + ((actualSpace[1] * 0.1) * 6), colWid, (actualSpace[1] * 0.1) * 2,
              style, ui.mouseState, 0,
              "Trigger the currently selected process.",
              "slcBtn", "SLICE!", 'ff.trigger_slice();');

      // ######## Clear button ##############
      ui.txtBtn(colWid * 3, 20 + ((actualSpace[1] * 0.1) * 8), colWid, actualSpace[1] * 0.1,
                style, ui.mouseState, 0,
                "Disgard all the current slices.",
                "clrBtn", "Clear Slices", 'ff.clear_slices();');

        // ######## Overwrite toggle ##############
        ui.boxToggle(colWid * 3, 20 + ((actualSpace[1] * 0.1) * 9), colWid / 3, actualSpace[1] * 0.1,
            style, ui.mouseState, 0,
            "Overwrite existing slices.",
            "ovrWriteTog", "ff.overwrite_change();", "ff.overwriteSlices");


    // ######## Load source button ##############
    ui.txtBtn(colWid * 3 + (colWid / 3), 20 + ((actualSpace[1] * 0.1) * 9), colWid / 3, actualSpace[1] * 0.1,
              style, ui.mouseState, 0,
              "Load a new source.",
              "ldSrcBtn", "Src", 'ff.load_source();');


      // ######## Load index button ##############
      ui.txtBtn(colWid * 3 + ((colWid / 3) * 2), 20 + ((actualSpace[1] * 0.1) * 9), colWid / 3, actualSpace[1] * 0.1,
                style, ui.mouseState, 0,
                "Load an existing indices buffer.",
                "ldIdxBtn", "Idx", 'ff.load_index();');

    paramsY = 20 + actualSpace[1] * 0.1;
    objHeiAdv = ((actualSpace[1] * 0.1) * 5) / 7;

    // ######## Parameters ##############
    if(displayMode == "advanced")
    {

        // ######## COL 1 ##############
        // #############################

        // source
        ui.txtBox(0, paramsY, colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "The index of the buffer used as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                  "Source Buffer: " + String(ff.sourceBuf),
                  "left", false);

        ui.txtBtn(colWid + (colWid * 0.5), paramsY, colWid * 0.5, objHeiAdv,
                  style, ui.mouseState, 0,
                  "The index of the buffer used as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                  "srcBtn", "Edit", 'ui.get_text(0, "' + String(ff.sourceBuf) + '");')

        // indices
        ui.txtBox(0, paramsY + objHeiAdv, colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "The index of the buffer where the indices (in sample) of the estimated starting points of slices will be written. The first and last points are always the boundary points of the analysis.",
                  "Index Buffer: " + String(ff.indicesBuf),
                  "left", false);

        ui.txtBtn(colWid + (colWid * 0.5), paramsY + objHeiAdv, colWid * 0.5, objHeiAdv,
                  style, ui.mouseState, 0,
                  "The index of the buffer where the indices (in sample) of the estimated starting points of slices will be written. The first and last points are always the boundary points of the analysis.",
                  "idxBtn", "Edit", 'ui.get_text(1, "' + String(ff.indicesBuf) + '");')

        // startframe
        ui.txtBox(0, paramsY + (objHeiAdv * 2), colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "Where in the source buffer shpuld the process start (in samples).",
                  "Start Frame: " + String(ff.startframe),
                  "left", false);

        ui.hSlider(colWid, paramsY + (objHeiAdv * 2), colWid * 0.75, objHeiAdv,
                   style, ui.mouseState, 0,
                   "Where in the source buffer shpuld the process start (in samples).",
                   "stsFrmSld", "ff.send_number(0);", "ff.startframe", 0, srcBuf.framecount(), "int");

       ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 2), colWid * 0.25, objHeiAdv,
                 style, ui.mouseState, 0,
                 "Where in the source buffer shpuld the process start (in samples).",
                 "stsFrmBtn", "...", 'ui.get_text(2, "' + String(ff.startframe) + '");');

        // startchan
        ui.txtBox(0, paramsY + (objHeiAdv * 3), colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "For multichannel sources, which channel should be processed.",
                  "Start Channel: " + String(ff.startchan),
                  "left", false);

      ui.hSlider(colWid, paramsY + (objHeiAdv * 3), colWid * 0.75, objHeiAdv,
                 style, ui.mouseState, 0,
                 "For multichannel sources, which channel should be processed.",
                 "stsChnSld", "ff.send_number(1);", "ff.startchan", 0, srcBuf.channelcount(), "int");

     ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 3), colWid * 0.25, objHeiAdv,
               style, ui.mouseState, 0,
               "For multichannel sources, which channel should be processed.",
               "stsChnBtn", "...", 'ui.get_text(3, "' + String(ff.startchan) + '");');

        // numframes
        ui.txtBox(0, paramsY + (objHeiAdv * 4), colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "How many frames should be processed (-1 = All).",
                  "N° Frames: " + String(ff.numframes),
                  "left", false);

      ui.hSlider(colWid, paramsY + (objHeiAdv * 4), colWid * 0.75, objHeiAdv,
                 style, ui.mouseState, 0,
                 "How many frames should be processed (-1 = All).",
                 "numFrmSld", "ff.send_number(2);", "ff.numframes", -1, srcBuf.framecount(), "int");

     ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 4), colWid * 0.25, objHeiAdv,
               style, ui.mouseState, 0,
               "How many frames should be processed (-1 = All).",
               "numFrmBtn", "...", 'ui.get_text(4, "' + String(ff.numframes) + '");');

        // numchans
        ui.txtBox(0, paramsY + (objHeiAdv * 5), colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "For multichannel sources, how many channels should be summed (-1 = All).",
                  "N° Channels: " + String(ff.numchans),
                  "left", false);

      ui.hSlider(colWid, paramsY + (objHeiAdv * 5), colWid * 0.75, objHeiAdv,
                 style, ui.mouseState, 0,
                 "For multichannel sources, how many channels should be summed (-1 = All).",
                 "numChnSld", "ff.send_number(3);", "ff.numchans", -1, srcBuf.channelcount(), "int");

     ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 5), colWid * 0.25, objHeiAdv,
               style, ui.mouseState, 0,
               "For multichannel sources, how many channels should be summed (-1 = All).",
               "numChnBtn", "...", 'ui.get_text(5, "' + String(ff.numchans) + '");');

              // ######## COL 2 ##############
              // #############################

              // fftwindow
              ui.txtBox(colWid * 2, paramsY, colWid, objHeiAdv,
                        style, ui.mouseState, 0,
                        "As spectral differencing relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with the Gabor Uncertainty principles.",
                        "FFT Window: " + String(fftWindowDisplay[ff.fftwindow]),
                        "left", false);

              ui.hSlider((colWid * 2) + colWid, paramsY, colWid, objHeiAdv,
                       style, ui.mouseState, 0,
                       "As spectral differencing relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with the Gabor Uncertainty principles.",
                       "fftWdwSld", "ff.send_number(5);", "ff.fftwindow", 0, fftWindowDisplay.length - 1, "int");

               // ffthop
               ui.txtBox(colWid * 2, paramsY + objHeiAdv, colWid, objHeiAdv,
                         style, ui.mouseState, 0,
                         "As spectral differencing relies on spectral frames, we need to move the window forward. Low overlap will create audible artefacts. Typically is half the window size.",
                         "FFT Hop: " + String(fftOtherDisplay[ff.ffthop]),
                         "left", false);

               ui.hSlider((colWid * 2) + colWid, paramsY + objHeiAdv, colWid, objHeiAdv,
                        style, ui.mouseState, 0,
                        "As spectral differencing relies on spectral frames, we need to move the window forward. Low overlap will create audible artefacts. Typically is half the window size.",
                        "fftHopSld", "ff.send_number(6);", "ff.ffthop", 0, fftWindowDisplay.length - 1, "int");

                // ffthop
                ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 2), colWid, objHeiAdv,
                          style, ui.mouseState, 0,
                          "The inner FFT/IFFT size. Should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                          "FFT Size: " + String(fftOtherDisplay[ff.fftsize]),
                          "left", false);

                ui.hSlider((colWid * 2) + colWid, paramsY + (objHeiAdv * 2), colWid, objHeiAdv,
                         style, ui.mouseState, 0,
                         "The inner FFT/IFFT size. Should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                         "fftSizSld", "ff.send_number(7);", "ff.fftsize", 0, fftWindowDisplay.length - 1, "int");

                
                 // feature
                 ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 3), colWid, objHeiAdv,
                           style, ui.mouseState, 0,
                           "The feature on which novelty is computed.",
                           "Feature: " + String(noveltyFeatures[noveltyFeatureMenu[2][0]]),
                           "left", false);

                // DROP MENU DRAWN LAST

                // threshold
                ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 4), colWid, objHeiAdv,
                          style, ui.mouseState, 0,
                          "The threshold of a new slice. Value ranges are different for each metric, from 0 upwards.",
                          "Threshold: " + String(ff.threshold),
                          "left", false);

              ui.hSlider((colWid * 2) + colWid, paramsY + (objHeiAdv * 4), colWid * 0.75, objHeiAdv,
                         style, ui.mouseState, 0,
                         "The threshold of a new slice. Value ranges are different for each metric, from 0 upwards.",
                         "thrshldSld", "ff.send_number(8);", "ff.threshold", 0, 1, "float");

             ui.txtBtn((colWid * 2) + colWid + (colWid * 0.75),paramsY + (objHeiAdv * 4), colWid * 0.25, objHeiAdv,
                       style, ui.mouseState, 0,
                       "The threshold of a new slice. Value ranges are different for each metric, from 0 upwards.",
                       "thrshldBtn", "...", 'ui.get_text(7, "' + String(ff.threshold) + '");');

           // filtersize
           ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 5), colWid, objHeiAdv,
                     style, ui.mouseState, 0,
                     "The size of a smoothing filter that is applied on the novelty curve. A larger filter size allows for cleaner cuts on very sharp changes.",
                     "Filter Size: " + String(ff.filtersize),
                     "left", false);

         ui.hSlider((colWid * 2) + colWid, paramsY + (objHeiAdv * 5), colWid * 0.75, objHeiAdv,
                    style, ui.mouseState, 0,
                    "The size of a smoothing filter that is applied on the novelty curve. A larger filter size allows for cleaner cuts on very sharp changes.",
                    "fltSizSld", "ff.send_number(9);", "ff.filtersize", 1, 10, "int");

        ui.txtBtn((colWid * 2) + colWid + (colWid * 0.75),paramsY + (objHeiAdv * 5), colWid * 0.25, objHeiAdv,
                  style, ui.mouseState, 0,
                  "The size of a smoothing filter that is applied on the novelty curve. A larger filter size allows for cleaner cuts on very sharp changes.",
                  "fltSizBtn", "...", 'ui.get_text(8, "' + String(ff.filtersize) + '");');

            
          // kernelsize
          ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 6), colWid, objHeiAdv,
                    style, ui.mouseState, 0,
                    "The granularity of the window in which the algorithm looks for change in samples. A small number will be sensitive to short term changes, and a large number should look for long term changes.",
                    "Frame Delta: " + String(ff.kernelsize),
                    "left", false);

        ui.hSlider((colWid * 2) + colWid, paramsY + (objHeiAdv * 6), colWid * 0.75, objHeiAdv,
                   style, ui.mouseState, 0,
                   "The granularity of the window in which the algorithm looks for change in samples. A small number will be sensitive to short term changes, and a large number should look for long term changes.",
                   "frmDelSld", "ff.send_number(11);", "ff.kernelsize", 0, 1000, "int");

       ui.txtBtn((colWid * 2) + colWid + (colWid * 0.75),paramsY + (objHeiAdv * 6), colWid * 0.25, objHeiAdv,
                 style, ui.mouseState, 0,
                 "The granularity of the window in which the algorithm looks for change in samples. A small number will be sensitive to short term changes, and a large number should look for long term changes.",
                 "frmDelSld", "...", 'ui.get_text(10, "' + String(ff.kernelsize) + '");');

                

         ui.dropMenu((colWid * 2) + colWid, paramsY + (objHeiAdv * 3), colWid, objHeiAdv,
                     style, ui.mouseState, 0,
                     "The feature on which novelty is computed.",
                     "ftrMenu", "ff.send_drop_menu(1)", noveltyFeatureMenu);
    }
}

exports.buf_offset_slice_menu = function(style)
{
    var srcBuf = new Buffer(ff.sourceBuf);

    patcherDeets = get_patcher_details();
    actualSpace = [patcherDeets[4],patcherDeets[5] - 40]

    // ######## Back Canvas ##############
    ui.blankCanvas(0, 20, actualSpace[0], actualSpace[1],
                   style, ui.mouseState, 0,
                   "Spectral difference-based audio buffer slicer.",
                   style[0], true);

    // ######## Title ##############
    ui.txtBox(0, 20, actualSpace[0], actualSpace[1] * 0.1,
              style, ui.mouseState, 0,
              "Spectral difference-based audio buffer slicer.",
              "Onset Slicer (offline) || fluid.bufonsetslice~",
              "left", false);

    colWid = (patcherDeets[4] * 0.5) * 0.5;

    // ######## Visualisation ##############
    ff.fft_visualiser(0, 20 + ((actualSpace[1] * 0.1) * 6), colWid * 3, (actualSpace[1] * 0.1) * 4,
                      ff.fftStyle, style);

    // ######## Slice button ##############
    ui.txtBtn(colWid * 3, 20 + ((actualSpace[1] * 0.1) * 6), colWid, (actualSpace[1] * 0.1) * 2,
              style, ui.mouseState, 0,
              "Trigger the currently selected process.",
              "slcBtn", "SLICE!", 'ff.trigger_slice();');

      // ######## Clear button ##############
      ui.txtBtn(colWid * 3, 20 + ((actualSpace[1] * 0.1) * 8), colWid, actualSpace[1] * 0.1,
                style, ui.mouseState, 0,
                "Disgard all the current slices.",
                "clrBtn", "Clear Slices", 'ff.clear_slices();');

        // ######## Overwrite toggle ##############
        ui.boxToggle(colWid * 3, 20 + ((actualSpace[1] * 0.1) * 9), colWid / 3, actualSpace[1] * 0.1,
            style, ui.mouseState, 0,
            "Overwrite existing slices.",
            "ovrWriteTog", "ff.overwrite_change();", "ff.overwriteSlices");


    // ######## Load source button ##############
    ui.txtBtn(colWid * 3 + (colWid / 3), 20 + ((actualSpace[1] * 0.1) * 9), colWid / 3, actualSpace[1] * 0.1,
              style, ui.mouseState, 0,
              "Load a new source.",
              "ldSrcBtn", "Src", 'ff.load_source();');


      // ######## Load index button ##############
      ui.txtBtn(colWid * 3 + ((colWid / 3) * 2), 20 + ((actualSpace[1] * 0.1) * 9), colWid / 3, actualSpace[1] * 0.1,
                style, ui.mouseState, 0,
                "Load an existing indices buffer.",
                "ldIdxBtn", "Idx", 'ff.load_index();');

    paramsY = 20 + actualSpace[1] * 0.1;
    objHeiAdv = ((actualSpace[1] * 0.1) * 5) / 7;

    // ######## Parameters ##############
    if(displayMode == "advanced")
    {

        // ######## COL 1 ##############
        // #############################

        // source
        ui.txtBox(0, paramsY, colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "The index of the buffer used as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                  "Source Buffer: " + String(ff.sourceBuf),
                  "left", false);

        ui.txtBtn(colWid + (colWid * 0.5), paramsY, colWid * 0.5, objHeiAdv,
                  style, ui.mouseState, 0,
                  "The index of the buffer used as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                  "srcBtn", "Edit", 'ui.get_text(0, "' + String(ff.sourceBuf) + '");')

        // indices
        ui.txtBox(0, paramsY + objHeiAdv, colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "The index of the buffer where the indices (in sample) of the estimated starting points of slices will be written. The first and last points are always the boundary points of the analysis.",
                  "Index Buffer: " + String(ff.indicesBuf),
                  "left", false);

        ui.txtBtn(colWid + (colWid * 0.5), paramsY + objHeiAdv, colWid * 0.5, objHeiAdv,
                  style, ui.mouseState, 0,
                  "The index of the buffer where the indices (in sample) of the estimated starting points of slices will be written. The first and last points are always the boundary points of the analysis.",
                  "idxBtn", "Edit", 'ui.get_text(1, "' + String(ff.indicesBuf) + '");')

        // startframe
        ui.txtBox(0, paramsY + (objHeiAdv * 2), colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "Where in the source buffer shpuld the process start (in samples).",
                  "Start Frame: " + String(ff.startframe),
                  "left", false);

        ui.hSlider(colWid, paramsY + (objHeiAdv * 2), colWid * 0.75, objHeiAdv,
                   style, ui.mouseState, 0,
                   "Where in the source buffer shpuld the process start (in samples).",
                   "stsFrmSld", "ff.send_number(0);", "ff.startframe", 0, srcBuf.framecount(), "int");

       ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 2), colWid * 0.25, objHeiAdv,
                 style, ui.mouseState, 0,
                 "Where in the source buffer shpuld the process start (in samples).",
                 "stsFrmBtn", "...", 'ui.get_text(2, "' + String(ff.startframe) + '");');

        // startchan
        ui.txtBox(0, paramsY + (objHeiAdv * 3), colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "For multichannel sources, which channel should be processed.",
                  "Start Channel: " + String(ff.startchan),
                  "left", false);

      ui.hSlider(colWid, paramsY + (objHeiAdv * 3), colWid * 0.75, objHeiAdv,
                 style, ui.mouseState, 0,
                 "For multichannel sources, which channel should be processed.",
                 "stsChnSld", "ff.send_number(1);", "ff.startchan", 0, srcBuf.channelcount(), "int");

     ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 3), colWid * 0.25, objHeiAdv,
               style, ui.mouseState, 0,
               "For multichannel sources, which channel should be processed.",
               "stsChnBtn", "...", 'ui.get_text(3, "' + String(ff.startchan) + '");');

        // numframes
        ui.txtBox(0, paramsY + (objHeiAdv * 4), colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "How many frames should be processed (-1 = All).",
                  "N° Frames: " + String(ff.numframes),
                  "left", false);

      ui.hSlider(colWid, paramsY + (objHeiAdv * 4), colWid * 0.75, objHeiAdv,
                 style, ui.mouseState, 0,
                 "How many frames should be processed (-1 = All).",
                 "numFrmSld", "ff.send_number(2);", "ff.numframes", -1, srcBuf.framecount(), "int");

     ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 4), colWid * 0.25, objHeiAdv,
               style, ui.mouseState, 0,
               "How many frames should be processed (-1 = All).",
               "numFrmBtn", "...", 'ui.get_text(4, "' + String(ff.numframes) + '");');

        // numchans
        ui.txtBox(0, paramsY + (objHeiAdv * 5), colWid + (colWid * 0.5), objHeiAdv,
                  style, ui.mouseState, 0,
                  "For multichannel sources, how many channels should be summed (-1 = All).",
                  "N° Channels: " + String(ff.numchans),
                  "left", false);

      ui.hSlider(colWid, paramsY + (objHeiAdv * 5), colWid * 0.75, objHeiAdv,
                 style, ui.mouseState, 0,
                 "For multichannel sources, how many channels should be summed (-1 = All).",
                 "numChnSld", "ff.send_number(3);", "ff.numchans", -1, srcBuf.channelcount(), "int");

     ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 5), colWid * 0.25, objHeiAdv,
               style, ui.mouseState, 0,
               "For multichannel sources, how many channels should be summed (-1 = All).",
               "numChnBtn", "...", 'ui.get_text(5, "' + String(ff.numchans) + '");');

           // minslicelength
           ui.txtBox(0, paramsY + (objHeiAdv * 6), colWid + (colWid * 0.5), objHeiAdv,
                     style, ui.mouseState, 0,
                     "Minimum length of a slice.",
                     "Min. Slice: " + String(ff.minslicelength),
                     "left", false);

         ui.hSlider(colWid, paramsY + (objHeiAdv * 6), colWid * 0.75, objHeiAdv,
                    style, ui.mouseState, 0,
                    "Minimum length of a slice.",
                    "minSlcSld", "ff.send_number(4);", "ff.minslicelength", 0, 100, "int");

        ui.txtBtn(colWid + (colWid * 0.75),paramsY + (objHeiAdv * 6), colWid * 0.25, objHeiAdv,
                  style, ui.mouseState, 0,
                  "Minimum length of a slice.",
                  "minSlcBtn", "...", 'ui.get_text(6, "' + String(ff.minslicelength) + '");');


              // ######## COL 2 ##############
              // #############################

              // fftwindow
              ui.txtBox(colWid * 2, paramsY, colWid, objHeiAdv,
                        style, ui.mouseState, 0,
                        "As spectral differencing relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with the Gabor Uncertainty principles.",
                        "FFT Window: " + String(fftWindowDisplay[ff.fftwindow]),
                        "left", false);

              ui.hSlider((colWid * 2) + colWid, paramsY, colWid, objHeiAdv,
                       style, ui.mouseState, 0,
                       "As spectral differencing relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with the Gabor Uncertainty principles.",
                       "fftWdwSld", "ff.send_number(5);", "ff.fftwindow", 0, fftWindowDisplay.length - 1, "int");

               // ffthop
               ui.txtBox(colWid * 2, paramsY + objHeiAdv, colWid, objHeiAdv,
                         style, ui.mouseState, 0,
                         "As spectral differencing relies on spectral frames, we need to move the window forward. Low overlap will create audible artefacts. Typically is half the window size.",
                         "FFT Hop: " + String(fftOtherDisplay[ff.ffthop]),
                         "left", false);

               ui.hSlider((colWid * 2) + colWid, paramsY + objHeiAdv, colWid, objHeiAdv,
                        style, ui.mouseState, 0,
                        "As spectral differencing relies on spectral frames, we need to move the window forward. Low overlap will create audible artefacts. Typically is half the window size.",
                        "fftHopSld", "ff.send_number(6);", "ff.ffthop", 0, fftWindowDisplay.length - 1, "int");

                // ffthop
                ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 2), colWid, objHeiAdv,
                          style, ui.mouseState, 0,
                          "The inner FFT/IFFT size. Should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                          "FFT Size: " + String(fftOtherDisplay[ff.fftsize]),
                          "left", false);

                ui.hSlider((colWid * 2) + colWid, paramsY + (objHeiAdv * 2), colWid, objHeiAdv,
                         style, ui.mouseState, 0,
                         "The inner FFT/IFFT size. Should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                         "fftSizSld", "ff.send_number(7);", "ff.fftsize", 0, fftWindowDisplay.length - 1, "int");

                 // metric
                 ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 3), colWid, objHeiAdv,
                           style, ui.mouseState, 0,
                           "The metric used to derive a difference curve between spectral frames.",
                           "Metric: " + String(onsetMetrics[onsetMetricsMenu[2][0]]),
                           "left", false);

                // DROP MENU DRAWN LAST

                // threshold
                ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 4), colWid, objHeiAdv,
                          style, ui.mouseState, 0,
                          "The threshold of a new slice. Value ranges are different for each metric, from 0 upwards.",
                          "Threshold: " + String(ff.threshold),
                          "left", false);

              ui.hSlider((colWid * 2) + colWid, paramsY + (objHeiAdv * 4), colWid * 0.75, objHeiAdv,
                         style, ui.mouseState, 0,
                         "The threshold of a new slice. Value ranges are different for each metric, from 0 upwards.",
                         "thrshldSld", "ff.send_number(8);", "ff.threshold", 0, 1, "float");

             ui.txtBtn((colWid * 2) + colWid + (colWid * 0.75),paramsY + (objHeiAdv * 4), colWid * 0.25, objHeiAdv,
                       style, ui.mouseState, 0,
                       "The threshold of a new slice. Value ranges are different for each metric, from 0 upwards.",
                       "thrshldBtn", "...", 'ui.get_text(7, "' + String(ff.threshold) + '");');

           // filtersize
           ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 5), colWid, objHeiAdv,
                     style, ui.mouseState, 0,
                     "The size of a smoothing filter that is applied on the novelty curve. A larger filter size allows for cleaner cuts on very sharp changes.",
                     "Filter Size: " + String(ff.filtersize),
                     "left", false);

         ui.hSlider((colWid * 2) + colWid, paramsY + (objHeiAdv * 5), colWid * 0.75, objHeiAdv,
                    style, ui.mouseState, 0,
                    "The size of a smoothing filter that is applied on the novelty curve. A larger filter size allows for cleaner cuts on very sharp changes.",
                    "fltSizSld", "ff.send_number(9);", "ff.filtersize", 1, 10, "int");

        ui.txtBtn((colWid * 2) + colWid + (colWid * 0.75),paramsY + (objHeiAdv * 5), colWid * 0.25, objHeiAdv,
                  style, ui.mouseState, 0,
                  "The size of a smoothing filter that is applied on the novelty curve. A larger filter size allows for cleaner cuts on very sharp changes.",
                  "fltSizBtn", "...", 'ui.get_text(8, "' + String(ff.filtersize) + '");');

          // framedelta
          ui.txtBox(colWid * 2, paramsY + (objHeiAdv * 6), colWid, objHeiAdv,
                    style, ui.mouseState, 0,
                    "For certain metrics (HFC, SpectralFlux, MKL, Cosine), the distance does not have to be computed between consecutive frames. By default (0) it is, otherwise this sets the distance between the comparaison window in samples.",
                    "Frame Delta: " + String(ff.framedelta),
                    "left", false);

        ui.hSlider((colWid * 2) + colWid, paramsY + (objHeiAdv * 6), colWid * 0.75, objHeiAdv,
                   style, ui.mouseState, 0,
                   "For certain metrics (HFC, SpectralFlux, MKL, Cosine), the distance does not have to be computed between consecutive frames. By default (0) it is, otherwise this sets the distance between the comparaison window in samples.",
                   "frmDelSld", "ff.send_number(10);", "ff.framedelta", 0, 1000, "int");

       ui.txtBtn((colWid * 2) + colWid + (colWid * 0.75),paramsY + (objHeiAdv * 6), colWid * 0.25, objHeiAdv,
                 style, ui.mouseState, 0,
                 "For certain metrics (HFC, SpectralFlux, MKL, Cosine), the distance does not have to be computed between consecutive frames. By default (0) it is, otherwise this sets the distance between the comparaison window in samples.",
                 "frmDelSld", "...", 'ui.get_text(9, "' + String(ff.framedelta) + '");');

         ui.dropMenu((colWid * 2) + colWid, paramsY + (objHeiAdv * 3), colWid, objHeiAdv,
                     style, ui.mouseState, 0,
                     "The metric used to derive a difference curve between spectral frames.",
                     "mtrcMenu", "ff.send_drop_menu(0)", onsetMetricsMenu);
    }
}

exports.send_drop_menu = function(menu)
{
    if(menu == 0)
    {
        outlet(0, "metric " + onsetMetricsMenu[2][0]);
    }
    if(menu == 1)
    {
        outlet(0, "feature " + noveltyFeatureMenu[2][0]);
    }
}

exports.send_number = function(param)
{
    if(param == 0)
    {
        outlet(0, "startframe " + ff.startframe);
    }
    else if(param == 1)
    {
        outlet(0, "startchan " + ff.startchan);
    }
    else if(param == 2)
    {
        //post(ff.numframes + "\n");
        outlet(0, "numframes " + ff.numframes);
    }
    else if(param == 3)
    {
        outlet(0, "numchans " + ff.numchans);
    }
    else if(param == 4)
    {
        outlet(0, "minslicelength " + ff.minslicelength);
    }
    else if(param == 5)
    {
        outlet(0, "fftsettings " + fftWindowDisplay[ff.fftwindow] + " " + fftOtherDisplay[ff.ffthop] + " " + fftOtherDisplay[ff.fftsize]);
    }
    else if(param == 6)
    {
        outlet(0, "fftsettings " + fftWindowDisplay[ff.fftwindow] + " " + fftOtherDisplay[ff.ffthop] + " " + fftOtherDisplay[ff.fftsize]);
    }
    else if(param == 7)
    {
        outlet(0, "fftsettings " + fftWindowDisplay[ff.fftwindow] + " " + fftOtherDisplay[ff.ffthop] + " " + fftOtherDisplay[ff.fftsize]);
    }
    else if(param == 8)
    {
        outlet(0, "threshold " + ff.threshold);
    }
    else if(param == 9)
    {
        outlet(0, "filtersize " + ff.filtersize);
    }
    else if(param == 10)
    {
        outlet(0, "framedelta " + ff.framedelta);
    }
    else if(param == 11)
    {
        outlet(0, "kernelsize " + ff.kernelsize);
    }
}

exports.fft_visualiser = function(x, y, w, h, fftstyle, style)
{
    ui.blankCanvas(x, y, w, h, style, ui.mouseState, 0, "FFT Visulaisation", [0,0,0,0], false);

    with(mgraphics)
    {
        // Draw bins:
        ff.get_num_bins();
        binH = h / ff.numBins;
        for(i = 0; i < ff.numBins; i++)
        {
            if(i % 2 == 0)
            {
                set_source_rgba(fftstyle[0])
            }
            else
            {
                set_source_rgba(fftstyle[1])
            }
            rectangle(x, y + (binH * i), w, binH);
            fill();
        }

        theScale = parseInt(fftWindowDisplay[ff.fftwindow]);
        if(parseInt(fftOtherDisplay[ff.fftsize]) > parseInt(fftWindowDisplay[ff.fftwindow]))
            theScale = parseInt(fftOtherDisplay[ff.fftsize]);

        //Draw window size
        rectWid = (parseInt(fftWindowDisplay[ff.fftwindow]) / theScale) * w;
        rectH = h * 0.75
        windCol = fftstyle[2];
        windColBord = fftstyle[2];
        //windColBord = fftstyle[5];
        windCol[3] = 0.5;
        set_source_rgba(windCol);
        rectangle(x, y + h * 0.25, rectWid, rectH);
        fill();
        set_source_rgba(windColBord);
        set_line_width(fftstyle[7]);
        move_to(x + fftstyle[7], (y + h) - fftstyle[7]);
        line_to(x + fftstyle[7], (y + h * 0.25) + fftstyle[7]);
        line_to(x - fftstyle[7] + rectWid, (y + h * 0.25) + fftstyle[7]);
        line_to(x - fftstyle[7] + rectWid, (y + h) - fftstyle[7]);
        stroke();

        //Draw hop size
        if(fftOtherDisplay[ff.ffthop] != -1)
            hopWid = (parseInt(fftOtherDisplay[ff.ffthop]) / theScale) * w;
        else
            hopWid = ((parseInt(fftWindowDisplay[ff.fftwindow]) / theScale) * w) * 0.5;

        drawHops = true;
        i = 1;
        alpha = 0.5;
        yOffset = 0.1;
        bordCol = fftstyle[3];
        //bordCol = fftstyle[5];
        while(drawHops)
        {
            col = fftstyle[3]
            col[3] = alpha
            set_source_rgba(col);

            if(x + (hopWid * i) > w)
            {
                drawHops = false;
                rectWid = rectWid - (w - (x + (hopWid * i)))
            }
            rectangle(x + (hopWid * i), ((y + h) - rectH) - h * yOffset, rectWid, rectH);
            fill();

            set_source_rgba(bordCol);
            set_line_width(fftstyle[7])
            move_to((x + (hopWid * i)), (((y + h) - rectH) - h * yOffset) + rectH);
            line_to((x + (hopWid * i)), (((y + h) - rectH) - h * yOffset));
            line_to((x + (hopWid * i)) + rectWid, (((y + h) - rectH) - h * yOffset));
            line_to((x + (hopWid * i)) + rectWid, (((y + h) - rectH) - h * yOffset) + rectH);
            stroke();

            i = i + 1;
            alpha = alpha * 0.5;
            yOffset = yOffset * 1.4;
        }

        // draw border
        set_source_rgba(fftstyle[5]);
        set_line_width(fftstyle[6]);
        move_to(x, y );
        line_to(x + w, y);
        line_to(x + w , y + h );
        line_to(x , y + h);
        line_to(x, y);
        stroke();
    }
}

exports.get_num_bins = function()
{
    if(fftOtherDisplay[ff.fftsize] != -1)
        binSize = ff.sampleRate / fftOtherDisplay[ff.fftsize];
    else
        binSize = ff.sampleRate / fftWindowDisplay[ff.fftwindow];
    nyquist = ff.sampleRate * 0.5;
    ff.numBins = Math.floor(nyquist / binSize);
}

exports.load_new_obj = function()
{
    patcherDeets = get_patcher_details()
    conectObj1 = patcherDeets[0].getnamed("fluidIn1")
    conectObj2 = patcherDeets[0].getnamed("fluidOut1")
    oldObj = patcherDeets[0].getnamed("theFluidObj")
    oldCoords = [oldObj.rect[0], oldObj.rect[1]]

    patcherDeets[0].remove(oldObj)

    if (ui.objChooseMenAttr[2][0] == 0)
    {
        currentObject = "fluid.bufampslice~";
        newObj = create_object("theFluidObj", oldCoords[0], oldCoords[1], "fluid.bufampslice~", "@source", ff.sourceBuf, "@indices", ff.indicesBuf)
    }
    else if (ui.objChooseMenAttr[2][0] == 1)
    {
        currentObject = "fluid.bufnoveltyslice~";
        newObj = create_object("theFluidObj", oldCoords[0], oldCoords[1], "fluid.bufnoveltyslice~", "@source", ff.sourceBuf, "@indices", ff.indicesBuf)
    }
    else if(ui.objChooseMenAttr[2][0] == 2)
    {
        currentObject = "fluid.bufonsetslice~";
        newObj = create_object("theFluidObj", oldCoords[0], oldCoords[1], "fluid.bufonsetslice~", "@source", ff.sourceBuf, "@indices", ff.indicesBuf)
    }
    else if (ui.objChooseMenAttr[2][0] == 3)
    {
        currentObject = "fluid.buftransientslice~";
        newObj = create_object("theFluidObj", oldCoords[0], oldCoords[1], "fluid.buftransientslice~", "@source", ff.sourceBuf, "@indices", ff.indicesBuf)
    }

    patcherDeets[0].connect(conectObj1, 0, newObj, 0)
    patcherDeets[0].connect(newObj, 0, conectObj2, 0)  
}

function create_object(varname, x, y, object, args)
{
    // ##############################
    // Create an object in the patcher, and return the object as a javascript object.
    // ##############################

    patcherDetails = get_patcher_details();

    var args_array = [];

    if (arguments.length > 4)
    {
        for (i = 4; i < arguments.length; i++)
        {
            args_array.push(arguments[i]);
        }
    }

    a = patcherDetails[0].newdefault(x, y, object, args_array);
    a.varname = varname;

    return a;
}

exports.top_toolbar = function()
{
    windowSize = get_window_size();

    ui.dropMenu(0, 0, (windowSize[0] * 0.1) * 3, 20,
                ui.m4lStyle, ui.mouseState, 0,
                "Choose a segmentation object.",
                "objChsMen", "ff.load_new_obj();", ui.objChooseMenAttr);

    ui.dropMenu((windowSize[0] * 0.1) * 3, 0, (windowSize[0] * 0.1) * 2, 20,
                ui.m4lStyle, ui.mouseState, 0,
                "Choose a settings preset.",
                "preChsMen", "", ui.preChooseMenAttr);

    ui.txtBtn((windowSize[0] * 0.1) * 5, 0, windowSize[0] * 0.1, 20,
              ui.m4lStyle, ui.mouseState, 0,
              "Load object settings from file.",
              "ldBut", "Load", "");

    ui.txtBtn((windowSize[0] * 0.1) * 6, 0, windowSize[0] * 0.1, 20,
            ui.m4lStyle, ui.mouseState, 0,
            "Save the current settings to file.",
            "svBut", "Save", "");

    ui.txtBtn((windowSize[0] * 0.1) * 7, 0, windowSize[0] * 0.1, 20,
              ui.m4lStyle, ui.mouseState, 0,
              "Choose a random segmentation object and settings.",
              "randBut", "[:]", "");

    ui.txtBtn((windowSize[0] * 0.1) * 8, 0, windowSize[0] * 0.1, 20,
          ui.m4lStyle, ui.mouseState, 0,
          "Switch between simple and advanced view. (currently " + displayMode + ").",
          "disModeBut", "[-]", "change_display_mode();");

    ui.txtBtn((windowSize[0] * 0.1) * 9, 0, windowSize[0] * 0.1, 20,
            ui.m4lStyle, ui.mouseState, 0,
            "See a detailed explanation about the currently selected segmentation tool.",
            "hlpBut", "?", "");
}
