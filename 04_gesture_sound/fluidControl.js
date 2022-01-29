//to do:
//      long desc
//      menu descs

var objectDict = 
{ "fluid.bufampslice~" : {"name" : "Amplitude Slice",
                                            "desc" : "This class implements an amplitude-based slicer, with various customisable options and conditions to detect absolute and relative amplitude changes as onsets and offsets.",
                                            "long_desc" : "FluidAmpSlice is based on two envelop followers on a highpassed version of the signal: one absolute, and one relative. Each have features that will interact, including independent Schmidt triggers and state-aware time contraints. The example code below is unfolding the various possibilites in order of complexity. The process will return a two-channel buffer with the addresses of the onset on the first channel, and the address of the offset on the second channel.",
                                            "params" : {"source" : {"name" : "Source",
                                                                    "desc" : "The index of the buffer to use as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                                                                    "type" : "string",
                                                                    "default" : "src",
                                                                    "current" : "src"
                                                                    },
                                                        "startframe" : {"name" : "Start Frame",
                                                                    "desc" : "Where in the srcBuf should the slicing process start, in sample.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numframes" : {"name" : "Number of Frames",
                                                                    "desc" : "How many frames should be processed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "startchan" : {"name" : "Start Channel",
                                                                    "desc" : "For multichannel sources, which channel should be processed.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numchans" : {"name" : "Number of Channels",
                                                                    "desc" : "For multichannel sources, how many channel should be summed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "indices" : {"name" : "Indices",
                                                                    "desc" : "The index of the buffer where the indices (in sample) of the estimated starting points of slices will be written. The first and last points are always the boundary points of the analysis.",
                                                                    "type" : "string",
                                                                    "default" : "indices",
                                                                    "current" : "indices"
                                                                    },
                                                        "absrampup" : {"name" : "Absolute Ramp Up",
                                                                    "desc" : "The number of samples the absolute envelope follower will take to reach the next value when raising.",
                                                                    "type" : "float",
                                                                    "default" : 10.0,
                                                                    "current" : 10.0
                                                                    },
                                                        "absrampdown" : {"name" : "Absolute Ramp Down",
                                                                    "desc" : "The number of samples the absolute envelope follower will take to reach the next value when falling.",
                                                                    "type" : "float",
                                                                    "default" : 10.0,
                                                                    "current" : 10.0
                                                                    },
                                                        "absthreshon" : {"name" : "Absolute Theshold On",
                                                                    "desc" : "The threshold in dB of the absolute envelope follower to trigger an onset, aka to go ON when in OFF state.",
                                                                    "type" : "float",
                                                                    "default" : -90.0,
                                                                    "current" : -90.0
                                                                    },
                                                        "absthreshoff" : {"name" : "Absolute Theshold Off",
                                                                    "desc" : "The threshold in dB of the absolute envelope follower to trigger an offset, , aka to go ON when in OFF state.",
                                                                    "type" : "float",
                                                                    "default" : -90.0,
                                                                    "current" : -90.0
                                                                    },
                                                        "minslicelength" : {"name" : "Min. Slice Length",
                                                                    "desc" : "The length in samples that the Slice will stay ON. Changes of states during that period will be ignored.",
                                                                    "type" : "int",
                                                                    "default" : 1,
                                                                    "current" : 1
                                                                    },
                                                        "minsilencelength" : {"name" : "Min. Silence Length",
                                                                    "desc" : "The length in samples that the Slice will stay OFF. Changes of states during that period will be ignored.",
                                                                    "type" : "int",
                                                                    "default" : 1,
                                                                    "current" : 1
                                                                    },
                                                        "minlengthabove" : {"name" : "Min. Length Above",
                                                                    "desc" : "The length in samples that the absolute envelope have to be above the threshold to consider it a valid transition to ON. The Slice will start at the first sample when the condition is met. Therefore, this affects the latency.",
                                                                    "type" : "int",
                                                                    "default" : 1,
                                                                    "current" : 1
                                                                    },
                                                        "minlengthbelow" : {"name" : "Min. Length Below",
                                                                    "desc" : "The length in samples that the absolute envelope have to be below the threshold to consider it a valid transition to OFF. The Slice will end at the first sample when the condition is met. Therefore, this affects the latency.",
                                                                    "type" : "int",
                                                                    "default" : 1,
                                                                    "current" : 1
                                                                    },
                                                        "lookback" : {"name" : "Look Back",
                                                                    "desc" : "The length of the buffer kept before an onset to allow the algorithm, once a new Slice is detected, to go back in time (up to that many samples) to find the minimum amplitude as the Slice onset point. This affects the latency of the algorithm.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "lookahead" : {"name" : "Look Ahead",
                                                                    "desc" : "The length of the buffer kept after an offset to allow the algorithm, once the Slice is considered finished, to wait further in time (up to that many samples) to find a minimum amplitude as the Slice offset point. This affects the latency of the algorithm.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "relrampup" : {"name" : "Relative Ramp Up",
                                                                    "desc" : "The number of samples the relative envelope follower will take to reach the next value when raising. Typically, this will be faster than absRampUp.",
                                                                    "type" : "float",
                                                                    "default" : 1.0,
                                                                    "current" : 1.0
                                                                    },
                                                        "relrampdown" : {"name" : "Relative Ramp Down",
                                                                    "desc" : "The number of samples the relative envelope follower will take to reach the next value when falling. Typically, this will be faster than absRampDown.",
                                                                    "type" : "float",
                                                                    "default" : 1.0,
                                                                    "current" : 1.0
                                                                    },
                                                        "relthreshon" : {"name" : "Relative Threshold On",
                                                                    "desc" : "The threshold in dB of the relative envelope follower to trigger an onset, aka to go ON when in OFF state. It is computed on the difference between the two envelope followers.",
                                                                    "type" : "float",
                                                                    "default" : 144.0,
                                                                    "current" : 144.0
                                                                    },
                                                        "relthreshoff" : {"name" : "Relative Threshold Off",
                                                                    "desc" : "The threshold in dB of the relative envelope follower to reset, aka to allow the differential envelop to trigger again.",
                                                                    "type" : "float",
                                                                    "default" : -144.0,
                                                                    "current" : -144.0
                                                                    },
                                                        "highpassfreq" : {"name" : "Relative Threshold Off",
                                                                    "desc" : "The frequency of the fourth-order Linkwitz–Riley high-pass filter. This is done first on the signal to minimise low frequency intermodulation with very fast ramp lengths.",
                                                                    "type" : "float",
                                                                    "default" : 85.0,
                                                                    "current" : 85.0
                                                                    }
                                                        }
                                            },
                    "fluid.bufnoveltyslice~" : {"name" : "Amplitude Slice",
                                            "desc" : "A non-real-time slicer using an algorithm assessing novelty in the signal to estimate the slicing points.",
                                            "long_desc" : "A novelty curve is derived from running a kernel across the diagonal of the similarity matrix, and looking for peak of changes. It implements the seminal results published in 'Automatic Audio Segmentation Using a Measure of Audio Novelty' by J Foote. The process will return a buffer which contains indices (in sample) of estimated starting points of different slices.",
                                            "params" : {"source" : {"name" : "Source",
                                                                    "desc" : "The index of the buffer to use as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                                                                    "type" : "string",
                                                                    "default" : "src",
                                                                    "current" : "src"
                                                                    },
                                                        "startframe" : {"name" : "Start Frame",
                                                                    "desc" : "Where in the srcBuf should the slicing process start, in sample.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numframes" : {"name" : "Number of Frames",
                                                                    "desc" : "How many frames should be processed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "startchan" : {"name" : "Start Channel",
                                                                    "desc" : "For multichannel sources, which channel should be processed.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numchans" : {"name" : "Number of Channels",
                                                                    "desc" : "For multichannel sources, how many channel should be summed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "indices" : {"name" : "Indices",
                                                                    "desc" : "The index of the buffer where the indices (in sample) of the estimated starting points of slices will be written. The first and last points are always the boundary points of the analysis.",
                                                                    "type" : "string",
                                                                    "default" : "indices",
                                                                    "current" : "indices"
                                                                    },
                                                        "feature" : {"name" : "Feature",
                                                                    "desc" : "The feature on which novelty is computed.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : ["Spectrum", "MFCC", "Pitch", "Loudness"],
                                                                    "descList" : ["The magnitude of the full spectrum.", "13 Mel-Frequency Cepstrum Coefficients.", "The pitch and its confidence.", "The TruePeak and Loudness."]
                                                                    },
                                                        "kernelsize" : {"name" : "Kernel Size",
                                                                    "desc" : "The granularity of the window in which the algorithm looks for change, in samples. A small number will be sensitive to short term changes, and a large number should look for long term changes.",
                                                                    "type" : "int",
                                                                    "default" : 3,
                                                                    "current" : 3
                                                                    },
                                                        "threshold" : {"name" : "Threshold",
                                                                    "desc" : "The normalised threshold, between 0 an 1, on the novelty curve to consider it a segmentation point.",
                                                                    "type" : "float",
                                                                    "default" : 0.5,
                                                                    "current" : 0.5
                                                                    },
                                                        "filtersize" : {"name" : "Filter Size",
                                                                    "desc" : "The size of a smoothing filter that is applied on the novelty curve. A larger filter filter size allows for cleaner cuts on very sharp changes.",
                                                                    "type" : "int",
                                                                    "default" : 1,
                                                                    "current" : 1
                                                                    },
                                                        "FFTWindowSize" : {"name" : "FFT Window Size",
                                                                    "desc" : "The window size. As novelty estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles.",
                                                                    "type" : "menu",
                                                                    "default" : 8,
                                                                    "current" : 8,
                                                                    "items" : [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTHopSize" : {"name" : "FFT Hop Size",
                                                                    "desc" : "The window hop size. As novelty estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTSize" : {"name" : "FFT Size",
                                                                    "desc" : "The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    }
                                                        }
                                            },
                "fluid.bufonsetslice~" : {"name" : "Onset Slice",
                                            "desc" : "Implements many spectral-based onset detection metrics, most of them taken from the literature.",
                                            "long_desc" : "For an overview of onset detection metrics see (http://www.dafx.ca/proceedings/papers/p_133.pdf). Some are already available in SuperCollider's Onsets object, yet not as offline processes. The process will return a buffer which contains indices (in sample) of estimated starting points of different slices.",
                                            "params" : {"source" : {"name" : "Source",
                                                                    "desc" : "The index of the buffer to use as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                                                                    "type" : "string",
                                                                    "default" : "src",
                                                                    "current" : "src"
                                                                    },
                                                        "startframe" : {"name" : "Start Frame",
                                                                    "desc" : "Where in the srcBuf should the slicing process start, in sample.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numframes" : {"name" : "Number of Frames",
                                                                    "desc" : "How many frames should be processed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "startchan" : {"name" : "Start Channel",
                                                                    "desc" : "For multichannel sources, which channel should be processed.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numchans" : {"name" : "Number of Channels",
                                                                    "desc" : "For multichannel sources, how many channel should be summed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "indices" : {"name" : "Indices",
                                                                    "desc" : "The index of the buffer where the indices (in sample) of the estimated starting points of slices will be written. The first and last points are always the boundary points of the analysis.",
                                                                    "type" : "string",
                                                                    "default" : "indices",
                                                                    "current" : "indices"
                                                                    },
                                                        "metric" : {"name" : "Metric",
                                                                    "desc" : "The metric used to derive a difference curve between spectral frames.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : ["Energy", "High Frequency Content", "Spectral Flux", "Modified Kullback-Leibler", "Itakura-Saito", "Cosine", "Phase Deviation", "Weighted Phase Deviation", "Complex Domain", "Rectified Complex Domain"],
                                                                    "descList" : ["thresholds on (sum of squares of magnitudes / nBins) (like Onsets power).", "Thresholds on (sum of (squared magnitudes * binNum) / nBins).", "Thresholds on (diffence in magnitude between consecutive frames, half rectified).", "Thresholds on (sum of log of magnitude ratio per bin) (or equivalently, sum of difference of the log magnitude per bin) (like Onsets mkl).", "(WILL PROBABLY BE REMOVED) Itakura - Saito divergence (see literature).", "Thresholds on (cosine distance between comparison frames).", "Takes the past 2 frames, projects to the current, as anticipated if it was a steady state, then compute the sum of the differences, on which it thresholds (like Onsets phase).", "Same as PhaseDev, but weighted by the magnitude in order to remove chaos noise floor (like Onsets wphase).", "Same as PhaseDev, but in the complex domain - the anticipated amp is considered steady, and the phase is projected, then a complex subtraction is done with the actual present frame. The sum of magnitudes is used to threshold (like Onsets complex).", "Same as above, but rectified (like Onsets rcomplex)."]    
                                                                },
                                                        "threshold" : {"name" : "Threshold",
                                                                    "desc" : "The thresholding of a new slice. Value ranges are different for each metric, from 0 upwards.",
                                                                    "type" : "float",
                                                                    "default" : 0.5,
                                                                    "current" : 0.5
                                                                    },
                                                        "minslicelength" : {"name" : "Min. Slice Length",
                                                                    "desc" : "Minimum Length of Slice.",
                                                                    "type" : "int",
                                                                    "default" : 2,
                                                                    "current" : 2
                                                                    },
                                                        "filtersize" : {"name" : "Filter Size",
                                                                    "desc" : "The size of a smoothing filter that is applied on the novelty curve. A larger filter filter size allows for cleaner cuts on very sharp changes.",
                                                                    "type" : "int",
                                                                    "default" : 5,
                                                                    "current" : 5
                                                                    },
                                                        "framedelta" : {"name" : "Frame Delta",
                                                                    "desc" : "For certain metrics (HFC, SpectralFlux, MKL, Cosine), the distance does not have to be computed between consecutive frames. By default (0) it is, otherwise this sets the distane between the comparison window in samples.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "FFTWindowSize" : {"name" : "FFT Window Size",
                                                                    "desc" : "The window size. As novelty estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles.",
                                                                    "type" : "menu",
                                                                    "default" : 8,
                                                                    "current" : 8,
                                                                    "items" : [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTHopSize" : {"name" : "FFT Hop Size",
                                                                    "desc" : "The window hop size. As novelty estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTSize" : {"name" : "FFT Size",
                                                                    "desc" : "The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    }
                                                        }
                                            },
                "fluid.buftransientslice~" : {"name" : "Transient Slice",
                                            "desc" : "Transient-based slice extractor on buffers.",
                                            "long_desc" : "This relies on the same algorithm as BufTransients using clicks/transients/derivation/anomalies in the signal to estimate the slicing points. The process will return a buffer which contains indices (in sample) of estimated starting points of the different slices.",
                                            "params" : {"source" : {"name" : "Source",
                                                                    "desc" : "The index of the buffer to use as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                                                                    "type" : "string",
                                                                    "default" : "src",
                                                                    "current" : "src"
                                                                    },
                                                        "startframe" : {"name" : "Start Frame",
                                                                    "desc" : "Where in the srcBuf should the slicing process start, in sample.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numframes" : {"name" : "Number of Frames",
                                                                    "desc" : "How many frames should be processed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "startchan" : {"name" : "Start Channel",
                                                                    "desc" : "For multichannel sources, which channel should be processed.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numchans" : {"name" : "Number of Channels",
                                                                    "desc" : "For multichannel sources, how many channel should be summed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "indices" : {"name" : "Indices",
                                                                    "desc" : "The index of the buffer where the indices (in sample) of the estimated starting points of slices will be written. The first and last points are always the boundary points of the analysis.",
                                                                    "type" : "string",
                                                                    "default" : "indices",
                                                                    "current" : "indices"
                                                                    },
                                                        "order" : {"name" : "Order",
                                                                    "desc" : "The order in samples of the impulse response filter used to model the estimated continuous signal. It is how many previous samples are used by the algorithm to predict the next one as reference for the model. The higher the order, the more accurate is its spectral definition, not unlike fft, improving low frequency resolution, but it differs in that it is not conected to its temporal resolution.",
                                                                    "type" : "int",
                                                                    "default" : 20,
                                                                    "current" : 20
                                                                    },
                                                        "blocksize" : {"name" : "Blocksize",
                                                                    "desc" : "The size in samples of frame on which it the algorithm is operating. High values are more cpu intensive, and also determines the maximum transient size, which will not be allowed to be more than half that lenght in size.",
                                                                    "type" : "int",
                                                                    "default" : 256,
                                                                    "current" : 256
                                                                    },
                                                        "padsize" : {"name" : "Pad Size",
                                                                    "desc" : "The size of the handles on each sides of the block simply used for analysis purpose and avoid boundary issues.",
                                                                    "type" : "int",
                                                                    "default" : 128,
                                                                    "current" : 128
                                                                    },
                                                        "skew" : {"name" : "Skew",
                                                                    "desc" : "The nervousness of the bespoke detection function with values from -10 to 10. It allows to decide how peaks are amplified or smoothed before the thresholding. High values increase the sensitivity to small variations.",
                                                                    "type" : "float",
                                                                    "default" : 0.0,
                                                                    "current" : 0.0
                                                                    },
                                                        "threshfwd" : {"name" : "Threshold Forward",
                                                                    "desc" : "The threshold of the onset of the smoothed error function. It allows tight start of the identification of the anomaly as it proceeds forward.",
                                                                    "type" : "float",
                                                                    "default" : 2.0,
                                                                    "current" : 2.0
                                                                    },
                                                        "threshback" : {"name" : "Threshold Back",
                                                                    "desc" : "The threshold of the offset of the smoothed error function. As it proceeds backwards in time, it allows tight ending of the identification of the anomaly.",
                                                                    "type" : "float",
                                                                    "default" : 1.1,
                                                                    "current" : 1.1
                                                                    },
                                                        "windowsize" : {"name" : "Window Size",
                                                                    "desc" : "The averaging window of the error detection function. It needs smoothing as it is very jittery. The longer the window, the less precise, but the less false positives.",
                                                                    "type" : "int",
                                                                    "default" : 14,
                                                                    "current" : 14
                                                                    },
                                                        "clumplength" : {"name" : "Clump Length",
                                                                    "desc" : "Clumping Window Length.",
                                                                    "type" : "int",
                                                                    "default" : 25,
                                                                    "current" : 25
                                                                    },
                                                        "minslicelength" : {"name" : "Min. Slice Length",
                                                                    "desc" : "Minimum Length of Slice.",
                                                                    "type" : "int",
                                                                    "default" : 1000,
                                                                    "current" : 1000
                                                                    }
                                                        }
                                            },
                "fluid.bufhpss~" : {"name" : "Harmonic-Percussive Source Separation",
                                            "desc" : "FluidBufHPSS performs Harmonic-Percussive Source Separation (HPSS) on the contents of a Buffer.",
                                            "long_desc" : "HPSS works by using median filters on the spectral magnitudes of a sound. It hinges on a simple modelling assumption that tonal components will tend to yield concentrations of energy across time, spread out in frequency, and percussive components will manifest as concentrations of energy across frequency, spread out in time. By using median filters across time and frequency respectively, we get initial esitmates of the tonal-ness / transient-ness of a point in time and frequency. These are then combined into 'masks' that are applied to the orginal spectral data in order to produce a separation. The maskingMode parameter provides different approaches to combinging estimates and producing masks. Some settings (especially in modes 1 & 2) will provide better separation but with more artefacts. These can, in principle, be ameliorated by applying smoothing filters to the masks before transforming back to the time-domain (not yet implemented).",
                                            "params" : {"source" : {"name" : "Source",
                                                                    "desc" : "The index of the buffer to use as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                                                                    "type" : "string",
                                                                    "default" : "src",
                                                                    "current" : "src"
                                                                    },
                                                        "startframe" : {"name" : "Start Frame",
                                                                    "desc" : "Where in the srcBuf should the slicing process start, in sample.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numframes" : {"name" : "Number of Frames",
                                                                    "desc" : "How many frames should be processed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "startchan" : {"name" : "Start Channel",
                                                                    "desc" : "For multichannel sources, which channel should be processed.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numchans" : {"name" : "Number of Channels",
                                                                    "desc" : "For multichannel sources, how many channel should be summed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "harmonic" : {"name" : "Harmonic",
                                                                    "desc" : "The index of the buffer where the extracted harmonic component will be reconstructed.",
                                                                    "type" : "string",
                                                                    "default" : "harmBuf",
                                                                    "current" : "harmBuf"
                                                                    },
                                                        "percussive" : {"name" : "Percussive",
                                                                    "desc" : "The index of the buffer where the extracted percussive component will be reconstructed.",
                                                                    "type" : "string",
                                                                    "default" : "percBuf",
                                                                    "current" : "percBuf"
                                                                    },
                                                        "residual" : {"name" : "Residual",
                                                                    "desc" : "The index of the buffer where the residual component will be reconstructed in mode 2.",
                                                                    "type" : "string",
                                                                    "default" : "percBuf",
                                                                    "current" : "percBuf"
                                                                    },
                                                        "harmfiltersize" : {"name" : "Harmonic Filter Size",
                                                                    "desc" : "The size, in spectral frames, of the median filter for the harmonic component. Must be an odd number, >= 3.",
                                                                    "type" : "int",
                                                                    "default" : 17,
                                                                    "current" : 17
                                                                    },
                                                        "percfiltersize" : {"name" : "Percussive Filter Size",
                                                                    "desc" : "The size, in spectral bins, of the median filter for the percussive component. Must be an odd number, >=3",
                                                                    "type" : "int",
                                                                    "default" : 31,
                                                                    "current" : 31
                                                                    },
                                                        "maskingmode" : {"name" : "Masking Mode",
                                                                    "desc" : "The way the masking is applied to the original spectrogram.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : ["Classic", "Coupled", "Advanced"],
                                                                    "descList" : ["The traditional soft mask used in Fitzgerald's original method of 'Wiener-inspired' filtering. Complimentary, soft masks are made for the harmonic and percussive parts by allocating some fraction of a point in time-frequency to each. This provides the fewest artefacts, but the weakest separation. The two resulting buffers will sum to exactly the original material.", "Relative mode - Better separation, with more artefacts. The harmonic mask is constructed using a binary decision, based on whether a threshold is exceeded at a given time-frequency point (these are set using harmThreshFreq1, harmThreshAmp1, harmThreshFreq2, harmThreshAmp2, see below). The percussive mask is then formed as the inverse of the harmonic one, meaning that as above, the two components will sum to the original sound.", "Inter-dependent mode - Thresholds can be varied independently, but are coupled in effect. Binary masks are made for each of the harmonic and percussive components, and the masks are converted to soft at the end so that everything null sums even if the params are independent, that is what makes it harder to control. These aren't guranteed to cover the whole sound; in this case the 'leftovers' will placed into a third buffer."]
                                                                    },
                                                        "harmthresh" : {"name" : "Harmonic Threshold",
                                                                        "desc" : "Harmonic Filter Thresholds.",
                                                                        "type" : "4float",
                                                                        "default" : [0.0, 1.0, 1.0, 1.0],
                                                                        "current" : [0.0, 1.0, 1.0, 1.0]
                                                        },
                                                        "percthresh" : {"name" : "Percussive Threshold",
                                                                        "desc" : "Percussive Filter Thresholds.",
                                                                        "type" : "4float",
                                                                        "default" : [0.0, 1.0, 1.0, 1.0],
                                                                        "current" : [0.0, 1.0, 1.0, 1.0]
                                                        },
                                                        "FFTWindowSize" : {"name" : "FFT Window Size",
                                                                    "desc" : "The window size. As novelty estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles.",
                                                                    "type" : "menu",
                                                                    "default" : 8,
                                                                    "current" : 8,
                                                                    "items" : [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTHopSize" : {"name" : "FFT Hop Size",
                                                                    "desc" : "The window hop size. As novelty estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTSize" : {"name" : "FFT Size",
                                                                    "desc" : "The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    }
                                                        }
                                            },
                        "fluid.bufnmf~" : {"name" : "NMF",
                                            "desc" : "Decomposes the spectrum of a sound into a number of components using Non-Negative Matrix Factorisation (NMF).",
                                            "long_desc" : "NMF has been a popular technique in signal processing research for things like source separation and transcription (see Smaragdis and Brown, Non-Negative Matrix Factorization for Polyphonic Music Transcription.), although its creative potential is so far relatively unexplored. The algorithm takes a buffer in and divides it into a number of components, determined by the components argument. It works iteratively, by trying to find a combination of spectral templates ('bases') and envelopes ('activations') that yield the original magnitude spectrogram when added together. By and large, there is no unique answer to this question (i.e. there are different ways of accounting for an evolving spectrum in terms of some set of templates and envelopes). In its basic form, NMF is a form of unsupervised learning: it starts with some random data and then converges towards something that minimizes the distance between its generated data and the original:it tends to converge very quickly at first and then level out. Fewer iterations mean less processing, but also less predictable results.",
                                            "params" : {"source" : {"name" : "Source",
                                                                    "desc" : "The index of the buffer to use as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                                                                    "type" : "string",
                                                                    "default" : "src",
                                                                    "current" : "src"
                                                                    },
                                                        "startframe" : {"name" : "Start Frame",
                                                                    "desc" : "Where in the srcBuf should the slicing process start, in sample.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numframes" : {"name" : "Number of Frames",
                                                                    "desc" : "How many frames should be processed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "startchan" : {"name" : "Start Channel",
                                                                    "desc" : "For multichannel sources, which channel should be processed.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numchans" : {"name" : "Number of Channels",
                                                                    "desc" : "For multichannel sources, how many channel should be summed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "resynth" : {"name" : "Resynth",
                                                                    "desc" : "Resynthesis Buffer",
                                                                    "type" : "string",
                                                                    "default" : "resynthBuf",
                                                                    "current" : "resynthBuf"
                                                                    },
                                                        "bases" : {"name" : "Bases",
                                                                    "desc" : "The index of the buffer where the different bases will be written to and/or read from: the behaviour is set in the following argument. If nil is provided, no bases will be returned.",
                                                                    "type" : "string",
                                                                    "default" : "basesBuf",
                                                                    "current" : "basesBuf"
                                                                    },
                                                        "activations" : {"name" : "Activations",
                                                                    "desc" : "The index of the buffer where the different activations will be written to and/or read from: the behaviour is set in the following argument. If nil is provided, no activation will be returned.",
                                                                    "type" : "string",
                                                                    "default" : "actBuf",
                                                                    "current" : "actBuf"
                                                                    },
                                                        "basesmode" : {"name" : "Bases Mode",
                                                                    "desc" : "This flag decides of how the basis buffer passed as the previous argument is treated.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : ["None", "Seed", "Fixed"],
                                                                    "descList" : ["The bases are seeded randomly, and the resulting ones will be written after the process in the passed buffer. The buffer is resized to components * numChannelsProcessed channels and (fftSize / 2 + 1) lenght.", "The passed buffer is considered as seed for the bases. Its dimensions should match the values above. The resulting bases will replace the seed ones.", "The passed buffer is considered as a template for the bases, and will therefore not change. Its bases should match the values above."]
                                                                    },
                                                        "actmode" : {"name" : "Activations Mode",
                                                                    "desc" : "This flag decides of how the activation buffer passed as the previous argument is treated.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : ["None", "Seed", "Fixed"],
                                                                    "descList" : ["The activations are seeded randomly, and the resulting ones will be written after the process in the passed buffer. The buffer is resized to components * numChannelsProcessed channels and (sourceDuration / hopsize + 1) lenght.", "The passed buffer is considered as seed for the activations. Its dimensions should match the values above. The resulting activations will replace the seed ones.", "The passed buffer is considered as a template for the activations, and will therefore not change. Its dimensions should match the values above."]
                                                                    },
                                                        "components" : {"name" : "Components",
                                                                    "desc" : "The number of elements the NMF algorithm will try to divide the spectrogram of the source in.",
                                                                    "type" : "int",
                                                                    "default" : 1,
                                                                    "current" : 1
                                                                    },
                                                        "iterations" : {"name" : "Iterations",
                                                                    "desc" : "Number of Iterations.",
                                                                    "type" : "int",
                                                                    "default" : 100,
                                                                    "current" : 100
                                                                    },
                                                        "FFTWindowSize" : {"name" : "FFT Window Size",
                                                                    "desc" : "The window size. As novelty estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles.",
                                                                    "type" : "menu",
                                                                    "default" : 8,
                                                                    "current" : 8,
                                                                    "items" : [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTHopSize" : {"name" : "FFT Hop Size",
                                                                    "desc" : "The window hop size. As novelty estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTSize" : {"name" : "FFT Size",
                                                                    "desc" : "The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    }
                                                        }
                                            },
                        "fluid.bufsines~" : {"name" : "Sines",
                                            "desc" : "Sinusoidal modelling on buffers.",
                                            "long_desc" : "It implements a mix and match algorithms taken from classic papers. The algorithm will take a buffer in, and will divide it in two parts: a reconstruction of what it detects as sinusoidal; a residual derived from the previous buffer to allow null-summing. The whole process is based on the assumption that signal is made of pitched steady components that have a long-enough duration and are periodic enough to be perceived as such, that can be tracked, resynthesised and removed from the original, leaving behind what is considered as non-pitched, noisy, and/or transient. It first tracks the peaks, then checks if they are the continuation of a peak in previous spectral frames, by assigning them a track.",
                                            "params" : {"source" : {"name" : "Source",
                                                                    "desc" : "The index of the buffer to use as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                                                                    "type" : "string",
                                                                    "default" : "src",
                                                                    "current" : "src"
                                                                    },
                                                        "startframe" : {"name" : "Start Frame",
                                                                    "desc" : "Where in the srcBuf should the slicing process start, in sample.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numframes" : {"name" : "Number of Frames",
                                                                    "desc" : "How many frames should be processed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "startchan" : {"name" : "Start Channel",
                                                                    "desc" : "For multichannel sources, which channel should be processed.",
                                                                    "type" : "int",
                                                                    "default" : 0,
                                                                    "current" : 0
                                                                    },
                                                        "numchans" : {"name" : "Number of Channels",
                                                                    "desc" : "For multichannel sources, how many channel should be summed.",
                                                                    "type" : "int",
                                                                    "default" : -1,
                                                                    "current" : -1
                                                                    },
                                                        "sines" : {"name" : "Sines",
                                                                    "desc" : "The index of the buffer where the extracted sinusoidal component will be reconstructed.",
                                                                    "type" : "string",
                                                                    "default" : "sinesBuf",
                                                                    "current" : "sinesBuf"
                                                                    },
                                                        "residual" : {"name" : "Residual",
                                                                    "desc" : "The index of the buffer where the residual of the sinusoidal component will be reconstructed.",
                                                                    "type" : "string",
                                                                    "default" : "residualBuf",
                                                                    "current" : "residualBuf"
                                                                    },
                                                        "bandwidth" : {"name" : "Bandwidth",
                                                                    "desc" : "The width in bins of the fragment of the fft window that is considered a normal deviation for a potential continuous sinusoidal track. It has an effect on CPU cost: the widest is more accurate but more computationally expensive. It is capped at (fftSize / 2) + 1.",
                                                                    "type" : "int",
                                                                    "default" : 76,
                                                                    "current" : 76
                                                                    },
                                                        "threshold" : {"name" : "Threshold",
                                                                    "desc" : "The normalised threshold, between 0 an 1, to consider a peak as a sinusoidal component from the normalized cross-correlation.",
                                                                    "type" : "float",
                                                                    "default" : 0.7,
                                                                    "current" : 0.7
                                                                    },
                                                        "mintracklen" : {"name" : "Min. Tack Length",
                                                                    "desc" : "The minimum duration, in spectral frames, for a sinusoidal track to be accepted as a partial. It allows to remove space-monkeys, but is more CPU intensive and might reject quick pitch material.",
                                                                    "type" : "int",
                                                                    "default" : 15,
                                                                    "current" : 15
                                                                    },
                                                        "magweight" : {"name" : "Magnitude Weight",
                                                                    "desc" : "The weight of the magnitude proximity of a peak when trying to associate it to an existing track (relative to freqWeight - suggested between 0 to 1).",
                                                                    "type" : "float",
                                                                    "default" : 0.01,
                                                                    "current" : 0.01
                                                                    },
                                                        "freqweight" : {"name" : "Frequency Weight",
                                                                    "desc" : "The weight of the frequency proximity of a peak when trying to associate it to an existing track (relative to magWeight - suggested between 0 to 1).",
                                                                    "type" : "float",
                                                                    "default" : 0.5,
                                                                    "current" : 0.5
                                                                    },
                                                        "FFTWindowSize" : {"name" : "FFT Window Size",
                                                                    "desc" : "The window size. As novelty estimation relies on spectral frames, we need to decide what precision we give it spectrally and temporally, in line with Gabor Uncertainty principles.",
                                                                    "type" : "menu",
                                                                    "default" : 8,
                                                                    "current" : 8,
                                                                    "items" : [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTHopSize" : {"name" : "FFT Hop Size",
                                                                    "desc" : "The window hop size. As novelty estimation relies on spectral frames, we need to move the window forward. It can be any size but low overlap will create audible artefacts.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    },
                                                        "FFTSize" : {"name" : "FFT Size",
                                                                    "desc" : "The inner FFT/IFFT size. It should be at least 4 samples long, at least the size of the window, and a power of 2. Making it larger allows an oversampling of the spectral precision.",
                                                                    "type" : "menu",
                                                                    "default" : 0,
                                                                    "current" : 0,
                                                                    "items" : [-1, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
                                                                    }
                                                        }
                                            },
                                            "fluid.buftransients~" : {"name" : "Transients",
                                                                "desc" : "A transient extractor on buffers.",
                                                                "long_desc" : "It implements declicking algorithm from chapter 5 of 'Digital Audio Restoration' by Godsill, Simon J., Rayner, Peter J.W. with some bespoke improvements on the detection function tracking. The algorithm will take a buffer in, and will divide it in two outputs: the transients, estimated from the signal and extracted from it; the remainder of the material, as estimated by the algorithm. The whole process is based on the assumption that a transient is an element that is deviating from the surrounding material, as sort of click or anomaly. The algorithm then estimates what should have happened if the signal had followed its normal path, and resynthesises this estimate, removing the anomaly which is considered as the transient.",
                                                                "params" : {"source" : {"name" : "Source",
                                                                                        "desc" : "The index of the buffer to use as the source material to be sliced through novelty identification. The different channels of multichannel buffers will be summed.",
                                                                                        "type" : "string",
                                                                                        "default" : "src",
                                                                                        "current" : "src"
                                                                                        },
                                                                            "startframe" : {"name" : "Start Frame",
                                                                                        "desc" : "Where in the srcBuf should the slicing process start, in sample.",
                                                                                        "type" : "int",
                                                                                        "default" : 0,
                                                                                        "current" : 0
                                                                                        },
                                                                            "numframes" : {"name" : "Number of Frames",
                                                                                        "desc" : "How many frames should be processed.",
                                                                                        "type" : "int",
                                                                                        "default" : -1,
                                                                                        "current" : -1
                                                                                        },
                                                                            "startchan" : {"name" : "Start Channel",
                                                                                        "desc" : "For multichannel sources, which channel should be processed.",
                                                                                        "type" : "int",
                                                                                        "default" : 0,
                                                                                        "current" : 0
                                                                                        },
                                                                            "numchans" : {"name" : "Number of Channels",
                                                                                        "desc" : "For multichannel sources, how many channel should be summed.",
                                                                                        "type" : "int",
                                                                                        "default" : -1,
                                                                                        "current" : -1
                                                                                        },
                                                                            "transients" : {"name" : "Transients",
                                                                                        "desc" : "The index of the buffer where the extracted transient component will be reconstructed.",
                                                                                        "type" : "string",
                                                                                        "default" : "transBuf",
                                                                                        "current" : "transBuf"
                                                                                        },
                                                                            "residual" : {"name" : "Residual",
                                                                                        "desc" : "The index of the buffer where the estimated continuous component will be reconstructed.",
                                                                                        "type" : "string",
                                                                                        "default" : "residualBuf",
                                                                                        "current" : "residualBuf"
                                                                                        },
                                                                            "order" : {"name" : "Order",
                                                                                        "desc" : "The order in samples of the impulse response filter used to model the estimated continuous signal. It is how many previous samples are used by the algorithm to predict the next one as reference for the model. The higher the order, the more accurate is its spectral definition, not unlike fft, improving low frequency resolution, but it differs in that it is not conected to its temporal resolution.",
                                                                                        "type" : "int",
                                                                                        "default" : 20,
                                                                                        "current" : 20
                                                                                        },
                                                                            "blocksize" : {"name" : "Block Size",
                                                                                        "desc" : "The size in samples of frame on which it the algorithm is operating. High values are more cpu intensive, and also determines the maximum transient size, which will not be allowed to be more than half that lenght in size.",
                                                                                        "type" : "int",
                                                                                        "default" : 256,
                                                                                        "current" : 256
                                                                                        },
                                                                            "padsize" : {"name" : "Pad Size",
                                                                                        "desc" : "The size of the handles on each sides of the block simply used for analysis purpose and avoid boundary issues.",
                                                                                        "type" : "int",
                                                                                        "default" : 128,
                                                                                        "current" : 128
                                                                                        },
                                                                            "skew" : {"name" : "Skew",
                                                                                        "desc" : "The nervousness of the bespoke detection function with values from -10 to 10. It allows to decide how peaks are amplified or smoothed before the thresholding. High values increase the sensitivity to small variations.",
                                                                                        "type" : "float",
                                                                                        "default" : 0.0,
                                                                                        "current" : 0.0
                                                                                        },
                                                                            "threshfwd" : {"name" : "Threshold Forward",
                                                                                        "desc" : "The threshold of the onset of the smoothed error function. It allows tight start of the identification of the anomaly as it proceeds forward.",
                                                                                        "type" : "float",
                                                                                        "default" : 2.0,
                                                                                        "current" : 2.0
                                                                                        },
                                                                            "threshback" : {"name" : "Threshold Back",
                                                                                        "desc" : "The threshold of the offset of the smoothed error function. As it proceeds backwards in time, it allows tight ending of the identification of the anomaly.",
                                                                                        "type" : "float",
                                                                                        "default" : 1.1,
                                                                                        "current" : 1.1
                                                                                        },
                                                                            "windowsize" : {"name" : "Window Size",
                                                                                        "desc" : "The averaging window of the error detection function. It needs smoothing as it is very jittery. The longer the window, the less precise, but the less false positive.",
                                                                                        "type" : "int",
                                                                                        "default" : 14,
                                                                                        "current" : 14
                                                                                        },
                                                                            "clumplength" : {"name" : "Clump Length",
                                                                                        "desc" : "Clumping window length.",
                                                                                        "type" : "int",
                                                                                        "default" : 25,
                                                                                        "current" : 25
                                                                                        }
                                                                            }
                                                                }
}

var paramObjectList = [];
var rectCoords = [8, 56, 1100, 600];
var objPadding = 5;
var paramsPerColumn = 10;
var currentObj = "";
var toBangList = [];

function initialise()
{
    removeList = [];
    currentObj = this.patcher.firstobject;
    for(i = 0; i < this.patcher.count; i++)
    {
        if(currentObj.varname.indexOf("jscreated") !== -1)
            removeList.push(currentObj);
        
            currentObj = currentObj.nextobject;
    }

    for(i = 0; i < removeList.length; i++)
    {
        this.patcher.remove(removeList[i]);
    }    
}

function set_object(object)
{
    create_objects(object, rectCoords[0], rectCoords[1], rectCoords[2], rectCoords[3]);
    currentObj = object;

    for(i = 0; i < toBangList.length; i++)
    {
        toBangList[i].message("bang");
    }
}

function set_param(param, value)
{
    objectDict[currentObj]["params"][param]["current"] = value;
}

function set_4float(param, idx, value)
{
    objectDict[currentObj]["params"][param]["current"][idx] = value;
}

function create_objects(object, x, y, w, h)
{
    toBangList = [];

    for(i = 0; i < paramObjectList.length; i++)
    {
        this.patcher.remove(paramObjectList[i]);
    }

    fluidInObj = this.patcher.getnamed("fluidInObj");
    fluidOutObj = this.patcher.getnamed("fluidOutObj");

    theFluCoMobject = this.patcher.newdefault(x, y, object);
    theFluCoMobject.varname = "jscreated";
    theFluCoMobject.hidden = true;
    paramObjectList.push(theFluCoMobject);
    this.patcher.hiddenconnect(fluidInObj, 0, theFluCoMobject, 0);
    this.patcher.hiddenconnect(theFluCoMobject, 0, fluidOutObj, 0);

    // Create title:
    titleComment = this.patcher.newdefault(x + objPadding, y + objPadding, "comment");
    titleComment.varname = "jscreated";
    titleComment.message("fontsize", 14);
    titleComment.message("fontface", "bold");
    titleComment.message("set", objectDict[object]["name"]);
    titleComment.message("patching_rect", x + objPadding, y + objPadding, w - (objPadding * 2), h);
    paramObjectList.push(titleComment);

    // Create description:
    descComment = this.patcher.newdefault(x + objPadding, titleComment.rect[3], "comment");
    descComment.varname = "jscreated";
    descComment.message("fontface", "italic");
    descComment.message("set", objectDict[object]["desc"]);
    descComment.message("patching_rect", x + objPadding, titleComment.rect[3], w - (objPadding * 2), h);
    paramObjectList.push(descComment);

    //FFT Settings:
    if("FFTWindowSize" in objectDict[object]["params"])
    {
        packObjFFT = this.patcher.newdefault(x, y, "pak", "i", "i", "i");
        packObjFFT.varname = "jscreated";
        packObjFFT.hidden = true;
        paramObjectList.push(packObjFFT);

        packObjFFT.message(objectDict[object]["params"]["FFTWindowSize"]["current"], objectDict[object]["params"]["FFTHopSize"]["current"], objectDict[object]["params"]["FFTSize"]["current"]);

        prepenObjFFT = this.patcher.newdefault(x, y, "prepend", "fftsettings");
        prepenObjFFT.varname = "jscreated";
        prepenObjFFT.hidden = true;
        paramObjectList.push(prepenObjFFT);

        this.patcher.hiddenconnect(packObjFFT, 0, prepenObjFFT, 0);
        this.patcher.hiddenconnect(prepenObjFFT, 0, fluidInObj, 0);
    }

    if(object == "fluid.bufhpss~")
    {
        packObjFiltHarm = this.patcher.newdefault(x, y, "pak", "f", "f", "f", "f");
        packObjFiltHarm.varname = "jscreated";
        packObjFiltHarm.hidden = true;
        paramObjectList.push(packObjFiltHarm);
        packObjFiltHarm.message(objectDict[object]["params"]["harmthresh"]["current"][0], objectDict[object]["params"]["harmthresh"]["current"][1], objectDict[object]["params"]["harmthresh"]["current"][2], objectDict[object]["params"]["harmthresh"]["current"][3]);

        prepenObjFiltHarm = this.patcher.newdefault(x, y, "prepend", "harmthresh");
        prepenObjFiltHarm.varname = "jscreated";
        prepenObjFiltHarm.hidden = true;
        paramObjectList.push(prepenObjFiltHarm);

        packObjFiltPerc = this.patcher.newdefault(x, y, "pak", "f", "f", "f", "f");
        packObjFiltPerc.varname = "jscreated";
        packObjFiltPerc.hidden = true;
        paramObjectList.push(packObjFiltPerc);
        packObjFiltPerc.message(objectDict[object]["params"]["percthresh"]["current"][0], objectDict[object]["params"]["percthresh"]["current"][1], objectDict[object]["params"]["percthresh"]["current"][2], objectDict[object]["params"]["percthresh"]["current"][3]);

        prepenObjFiltPerc = this.patcher.newdefault(x, y, "prepend", "percthresh");
        prepenObjFiltPerc.varname = "jscreated";
        prepenObjFiltPerc.hidden = true;
        paramObjectList.push(prepenObjFiltPerc);

        this.patcher.hiddenconnect(packObjFiltHarm, 0, prepenObjFiltHarm, 0);
        this.patcher.hiddenconnect(prepenObjFiltHarm, 0, fluidInObj, 0);
        this.patcher.hiddenconnect(packObjFiltPerc, 0, prepenObjFiltPerc, 0);
        this.patcher.hiddenconnect(prepenObjFiltPerc, 0, fluidInObj, 0);
    }
    
    initOffset = (titleComment.rect[3] - titleComment.rect[1]) + (descComment.rect[3] - descComment.rect[1])

    eachWidth = w / paramsPerColumn;
    i = 0;
    columnOffset = 0;
    biggestYOffset = 0;
    for(key in objectDict[object]["params"])
    {
        //Name:
        retLabel = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding, "comment");
        retLabel.varname = "jscreated";
        retLabel.message("set", objectDict[object]["params"][key]["name"]); 
        retLabel.message("patching_rect", x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding, eachWidth - objPadding, h);
        paramObjectList.push(retLabel);
        yOffset = retLabel.rect[3] - retLabel.rect[1];

        if(objectDict[object]["params"][key]["type"] == "int")
        {
            retToggle = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "number");
            retToggle.varname = "jscreated";
            retToggle.message("set", objectDict[object]["params"][key]["current"]);  
            paramObjectList.push(retToggle);
            retToggle.message("patching_rect", x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, eachWidth - objPadding, h);
            yOffset = yOffset + retToggle.rect[3] - retToggle.rect[1];

            toJSObj = this.patcher.newdefault(x, y, "prepend", "set_param", key);
            toJSObj.varname = "jscreated";
            toJSObj.hidden = true;
            paramObjectList.push(toJSObj);
            this.patcher.hiddenconnect(retToggle, 0, toJSObj, 0);
            this.patcher.hiddenconnect(toJSObj, 0, this.box, 0);

            formatObj1 = this.patcher.newdefault(x, y, "prepend", key);
            formatObj1.varname = "jscreated";
            formatObj1.hidden = true;
            paramObjectList.push(formatObj1);
            this.patcher.hiddenconnect(retToggle, 0, formatObj1, 0);
            this.patcher.hiddenconnect(formatObj1, 0, fluidInObj, 0);

            toBangList.push(retToggle);
        }
        else if(objectDict[object]["params"][key]["type"] == "float")
        {
            retToggle = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "flonum");
            retToggle.varname = "jscreated";
            retToggle.message("set", objectDict[object]["params"][key]["current"]);  
            paramObjectList.push(retToggle);
            retToggle.message("patching_rect", x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, eachWidth - objPadding, h);
            yOffset = yOffset + retToggle.rect[3] - retToggle.rect[1];

            toJSObj = this.patcher.newdefault(x, y, "prepend", "set_param", key);
            toJSObj.varname = "jscreated";
            toJSObj.hidden = true;
            paramObjectList.push(toJSObj);
            this.patcher.hiddenconnect(retToggle, 0, toJSObj, 0);
            this.patcher.hiddenconnect(toJSObj, 0, this.box, 0);

            formatObj1 = this.patcher.newdefault(x, y, "prepend", key);
            formatObj1.varname = "jscreated";
            formatObj1.hidden = true;
            paramObjectList.push(formatObj1);
            this.patcher.hiddenconnect(retToggle, 0, formatObj1, 0);
            this.patcher.hiddenconnect(formatObj1, 0, fluidInObj, 0);

            toBangList.push(retToggle);
        }
        else if(objectDict[object]["params"][key]["type"] == "string")
        {
            retToggle = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "textedit");
            retToggle.varname = "jscreated";
            retToggle.message("set", objectDict[object]["params"][key]["current"]);  
            paramObjectList.push(retToggle);
            retToggle.message("patching_rect", x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, eachWidth - objPadding, 50);
            yOffset = yOffset + retToggle.rect[3] - retToggle.rect[1];

            formatObj1 = this.patcher.newdefault(x, y, "route", "text");
            formatObj1.varname = "jscreated";
            formatObj1.hidden = true;
            paramObjectList.push(formatObj1);
            this.patcher.hiddenconnect(retToggle, 0, formatObj1, 0);

            formatObj2 = this.patcher.newdefault(x, y, "prepend", key);
            formatObj2.varname = "jscreated";
            formatObj2.hidden = true;
            paramObjectList.push(formatObj2);
            this.patcher.hiddenconnect(formatObj1, 0, formatObj2, 0);
            this.patcher.hiddenconnect(formatObj2, 0, fluidInObj, 0);

            toJSObj = this.patcher.newdefault(x, y, "prepend", "set_param", key);
            toJSObj.varname = "jscreated";
            toJSObj.hidden = true;
            paramObjectList.push(toJSObj);
            this.patcher.hiddenconnect(formatObj1, 0, toJSObj, 0);
            this.patcher.hiddenconnect(toJSObj, 0, this.box, 0);

            toBangList.push(retToggle);
        }
        else if(objectDict[object]["params"][key]["type"] == "menu")
        {
            retToggle = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "umenu");
            retToggle.varname = "jscreated";
            for(j = 0; j < objectDict[object]["params"][key]["items"].length; j++)
            {
                retToggle.message("append", objectDict[object]["params"][key]["items"][j]);
            }
            retToggle.message("set", objectDict[object]["params"][key]["current"]);  
            paramObjectList.push(retToggle);
            retToggle.message("patching_rect", x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, eachWidth - objPadding, h);
            yOffset = yOffset + retToggle.rect[3] - retToggle.rect[1];

            toJSObj = this.patcher.newdefault(x, y, "prepend", "set_param", key);
            toJSObj.varname = "jscreated";
            toJSObj.hidden = true;
            paramObjectList.push(toJSObj);
            this.patcher.hiddenconnect(retToggle, 0, toJSObj, 0);
            this.patcher.hiddenconnect(toJSObj, 0, this.box, 0);

            if(key != "FFTWindowSize" && key != "FFTHopSize" && key != "FFTSize")
            {
                formatObj1 = this.patcher.newdefault(x, y, "prepend", key);
                formatObj1.varname = "jscreated";
                formatObj1.hidden = true;
                paramObjectList.push(formatObj1);
                this.patcher.hiddenconnect(retToggle, 0, formatObj1, 0);
                this.patcher.hiddenconnect(formatObj1, 0, fluidInObj, 0);
            }
            else
            {
                if(key == "FFTWindowSize")
                {
                    this.patcher.hiddenconnect(retToggle, 1, packObjFFT, 0)
                }
                if(key == "FFTHopSize")
                {
                    this.patcher.hiddenconnect(retToggle, 1, packObjFFT, 1)
                }
                if(key == "FFTSize")
                {
                    this.patcher.hiddenconnect(retToggle, 1, packObjFFT, 2)
                }
            }

            toBangList.push(retToggle);
        }
        else if(objectDict[object]["params"][key]["type"] == "4float")
        {
            flt1 = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "flonum");
            flt1.varname = "jscreated";
            flt1.message("set", objectDict[object]["params"][key]["current"][0]);  
            paramObjectList.push(flt1);
            flt1.message("triangle", 0);
            flt1.message("patching_rect", x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, (eachWidth * 0.25) - objPadding, 50);
            
            flt2 = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "flonum");
            flt2.varname = "jscreated";
            flt2.message("set", objectDict[object]["params"][key]["current"][1]);  
            paramObjectList.push(flt2);
            flt2.message("triangle", 0);
            flt2.message("patching_rect", ((eachWidth * 0.25) * 1) + x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, (eachWidth * 0.25) - objPadding, 50);
            
            flt3 = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "flonum");
            flt3.varname = "jscreated";
            flt3.message("set", objectDict[object]["params"][key]["current"][2]);  
            paramObjectList.push(flt3);
            flt3.message("triangle", 0);
            flt3.message("patching_rect", ((eachWidth * 0.25) * 2) + x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, (eachWidth * 0.25) - objPadding, 50);

            flt4 = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "flonum");
            flt4.varname = "jscreated";
            flt4.message("set", objectDict[object]["params"][key]["current"][3]);  
            paramObjectList.push(flt4);
            flt4.message("triangle", 0);
            flt4.message("patching_rect", ((eachWidth * 0.25) * 3) + x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, (eachWidth * 0.25) - objPadding, 50);

            yOffset = yOffset + flt1.rect[3] - flt1.rect[1];

            if(key == "harmthresh")
            {
                this.patcher.hiddenconnect(flt1, 0, packObjFiltHarm, 0);
                this.patcher.hiddenconnect(flt2, 0, packObjFiltHarm, 1);
                this.patcher.hiddenconnect(flt3, 0, packObjFiltHarm, 2);
                this.patcher.hiddenconnect(flt4, 0, packObjFiltHarm, 3);
            }
            else if(key == "percthresh")
            {
                this.patcher.hiddenconnect(flt1, 0, packObjFiltPerc, 0);
                this.patcher.hiddenconnect(flt2, 0, packObjFiltPerc, 1);
                this.patcher.hiddenconnect(flt3, 0, packObjFiltPerc, 2);
                this.patcher.hiddenconnect(flt4, 0, packObjFiltPerc, 3);
            }

            toJSObj = this.patcher.newdefault(x, y, "prepend", "set_4float", key, 0);
            toJSObj.varname = "jscreated";
            toJSObj.hidden = true;
            paramObjectList.push(toJSObj);
            this.patcher.hiddenconnect(flt1, 0, toJSObj, 0);
            this.patcher.hiddenconnect(toJSObj, 0, this.box, 0);

            toJSObj1 = this.patcher.newdefault(x, y, "prepend", "set_4float", key, 1);
            toJSObj1.varname = "jscreated";
            toJSObj1.hidden = true;
            paramObjectList.push(toJSObj1);
            this.patcher.hiddenconnect(flt2, 0, toJSObj1, 0);
            this.patcher.hiddenconnect(toJSObj1, 0, this.box, 0);

            toJSObj2 = this.patcher.newdefault(x, y, "prepend", "set_4float", key, 2);
            toJSObj2.varname = "jscreated";
            toJSObj2.hidden = true;
            paramObjectList.push(toJSObj2);
            this.patcher.hiddenconnect(flt3, 0, toJSObj2, 0);
            this.patcher.hiddenconnect(toJSObj2, 0, this.box, 0);

            toJSObj3 = this.patcher.newdefault(x, y, "prepend", "set_4float", key, 3);
            toJSObj3.varname = "jscreated";
            toJSObj3.hidden = true;
            paramObjectList.push(toJSObj3);
            this.patcher.hiddenconnect(flt4, 0, toJSObj3, 0);
            this.patcher.hiddenconnect(toJSObj3, 0, this.box, 0);

            toBangList.push(flt1);
            toBangList.push(flt2);
            toBangList.push(flt3);
            toBangList.push(flt4);
        }

        //Description:
        retDesc = this.patcher.newdefault(x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, "comment");
        retDesc.varname = "jscreated";
        retDesc.message("set", objectDict[object]["params"][key]["desc"]); 
        retDesc.message("fontsize", 10);
        retDesc.message("fontface", "italic");
        retDesc.message("patching_rect", x + (eachWidth * i) + objPadding, initOffset + columnOffset + y + objPadding + yOffset, eachWidth - objPadding, h);
        paramObjectList.push(retDesc);
        yOffset = yOffset + retDesc.rect[3] - retDesc.rect[1];

        // ----------------------------------
        i = i + 1;

        if(yOffset > biggestYOffset)
            biggestYOffset = yOffset;

        if(i % paramsPerColumn == 0)
        {
            i = 0;
            columnOffset = columnOffset + biggestYOffset;
            biggestYOffset = 0;
        }
    }
}

initialise();
