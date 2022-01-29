{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 0,
			"revision" : 6,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 314.0, 136.0, 1048.0, 457.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 848.41773152380938, 258.272461000000021, 85.0, 22.0 ],
					"text" : "prepend offset",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-14",
					"maxclass" : "newobj",
					"numinlets" : 8,
					"numoutlets" : 8,
					"outlettype" : [ "", "", "", "", "", "", "", "" ],
					"patching_rect" : [ 175.166666666666686, 124.272460999999993, 804.459575666666524, 22.0 ],
					"text" : "route folder bass treble gain fold crease offset",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-6",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 527.032369333333349, 373.0, 222.0, 20.0 ],
					"text" : "for preset randomization and MIDI learn"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 449.321736333333376, 341.86547900000005, 77.0, 22.0 ],
					"text" : "r thispatcher"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 449.321736333333376, 373.0, 69.0, 22.0 ],
					"save" : [ "#N", "thispatcher", ";", "#Q", "end", ";" ],
					"text" : "thispatcher"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 535.12331133333339, 341.86547900000005, 114.0, 22.0 ],
					"text" : "r preset_randomize"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 1.0, 1.0, 0.0, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 381.256307333333382, 373.0, 50.0, 22.0 ],
					"text" : "s hover"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-22",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 381.256307333333382, 341.86547900000005, 59.5, 22.0 ],
					"saved_object_attributes" : 					{
						"mode" : 0
					}
,
					"text" : "hover"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-8",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 245.583333333333371, 374.0, 118.0, 20.0 ],
					"text" : "expose pattr objects"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 185.583333333333371, 373.0, 58.0, 22.0 ],
					"restore" : 					{
						"Bass" : [ 80.0 ],
						"Crease" : [ 15.0 ],
						"Fold" : [ 50.0 ],
						"Gain" : [ 30.0 ],
						"Offset" : [ 50.0 ],
						"Treble" : [ 100.0 ],
						"chopper" : [ 0.0 ]
					}
,
					"text" : "autopattr",
					"varname" : "u460008577"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 207.166666666666686, 74.0, 72.0, 20.0 ],
					"text" : "control inlet"
				}

			}
, 			{
				"box" : 				{
					"comment" : "control inlet",
					"id" : "obj-13",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 175.166666666666686, 69.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 880.41773152380938, 373.0, 79.0, 20.0 ],
					"text" : "control outlet"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-16",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 848.41773152380938, 368.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-17",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 44.583333333333371, 368.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 76.791666666666686, 74.0, 53.0, 20.0 ],
					"text" : "audio in"
				}

			}
, 			{
				"box" : 				{
					"comment" : "audio in",
					"id" : "obj-20",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 44.791666666666686, 69.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-128",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 511.792199095237947, 258.272461000000021, 79.0, 22.0 ],
					"text" : "prepend gain",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-145",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 736.209220714285721, 258.272461000000021, 92.0, 22.0 ],
					"text" : "prepend crease",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-183",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 399.583688285714288, 258.272461000000021, 86.0, 22.0 ],
					"text" : "prepend treble",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-194",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 623.939904095238035, 258.272461000000021, 75.0, 22.0 ],
					"text" : "prepend fold",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-195",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 287.375177476190458, 258.272461000000021, 81.0, 22.0 ],
					"text" : "prepend bass",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-196",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 174.958333333333371, 258.272461000000021, 86.0, 22.0 ],
					"text" : "prepend folder",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.741176, 0.184314, 0.756863, 0.74902 ],
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 0,
							"revision" : 6,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 628.0, 156.0, 424.0, 312.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "signal" ],
									"patching_rect" : [ 184.0, 190.119048750000019, 155.0, 22.0 ],
									"text" : "poly~ process_wavefolder~"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 169.830139000000003, 247.492065000000025, 60.0, 20.0 ],
									"text" : "audio out"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 26.0, 30.0, 53.0, 20.0 ],
									"text" : "audio in"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 169.830139000000003, 30.0, 59.0, 20.0 ],
									"text" : "control in"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-1991",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 133.0, 85.373016250000006, 206.0, 22.0 ],
									"text" : "route folder",
									"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "signal", "" ],
									"patching_rect" : [ 133.0, 137.746032500000013, 70.0, 22.0 ],
									"text" : "bypass 10"
								}

							}
, 							{
								"box" : 								{
									"comment" : "control in",
									"id" : "obj-6",
									"index" : 2,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 133.0, 25.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "audio out",
									"id" : "obj-7",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 133.0, 242.492065000000025, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "audio in",
									"id" : "obj-9",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 85.0, 25.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"destination" : [ "obj-4", 1 ],
									"source" : [ "obj-1991", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"destination" : [ "obj-5", 0 ],
									"source" : [ "obj-1991", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 2 ],
									"midpoints" : [ 193.5, 222.119048750000019, 348.5, 222.119048750000019, 348.5, 126.746032500000013, 193.5, 126.746032500000013 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"source" : [ "obj-5", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 0 ],
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"destination" : [ "obj-1991", 0 ],
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"color" : [ 1.0, 1.0, 0.0, 1.0 ],
									"destination" : [ "obj-5", 1 ],
									"midpoints" : [ 94.5, 124.0, 168.0, 124.0 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "AudioStatus_Menu",
								"default" : 								{
									"bgfillcolor" : 									{
										"type" : "color",
										"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
										"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
										"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}

								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "ksliderWhite",
								"default" : 								{
									"color" : [ 1.0, 1.0, 1.0, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "newobjBlue-1",
								"default" : 								{
									"accentcolor" : [ 0.317647, 0.654902, 0.976471, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "newobjBrown-1",
								"default" : 								{
									"accentcolor" : [ 0.654902, 0.572549, 0.376471, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "newobjCyan-1",
								"default" : 								{
									"accentcolor" : [ 0.029546, 0.773327, 0.821113, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "newobjGreen-1",
								"default" : 								{
									"accentcolor" : [ 0.0, 0.533333, 0.168627, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "newobjYellow-1",
								"default" : 								{
									"fontsize" : [ 12.059008 ],
									"accentcolor" : [ 0.82517, 0.78181, 0.059545, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "numberGold-1",
								"default" : 								{
									"accentcolor" : [ 0.764706, 0.592157, 0.101961, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "rsliderGold",
								"default" : 								{
									"bgcolor" : [ 0.764706, 0.592157, 0.101961, 1.0 ],
									"color" : [ 0.646639, 0.821777, 0.854593, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 44.791666666666686, 317.0, 77.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p wavefolder",
					"varname" : "wavefolder"
				}

			}
, 			{
				"box" : 				{
					"handoff" : "",
					"hltcolor" : [ 0.47451, 0.694118, 1.0, 0.0 ],
					"id" : "obj-24",
					"maxclass" : "ubutton",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "bang", "bang", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 202.83335366666671, 169.833252000000016, 32.0, 19.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 8.572876000000001, 5.306061, 102.766113257812492, 19.0 ]
				}

			}
, 			{
				"box" : 				{
					"activebgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"activebgoncolor" : [ 0.356863, 0.72549, 0.341176, 1.0 ],
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgoncolor" : [ 0.356863, 0.72549, 0.341176, 1.0 ],
					"bordercolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"focusbordercolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"id" : "obj-102",
					"maxclass" : "live.toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 179.666666666666686, 211.0, 11.0, 11.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 11.572876000000001, 9.806061, 11.0, 11.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_shortname" : "chopper on/off",
							"parameter_enum" : [ "val1", "val2" ],
							"parameter_type" : 2,
							"parameter_linknames" : 1,
							"parameter_longname" : "chopper",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 1,
							"parameter_initial" : [ 0.0 ]
						}

					}
,
					"varname" : "chopper"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Helvetica Neue Light Italic",
					"id" : "obj-69",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 44.791666666666686, 24.799987999999985, 85.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 26.3389892578125, 5.306060791015625, 85.0, 20.0 ],
					"text" : "WAVEFOLDER",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"activedialcolor" : [ 0.670588, 0.254902, 0.678431, 1.0 ],
					"activefgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"activeneedlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"fgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"id" : "obj-5",
					"maxclass" : "live.dial",
					"needlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 848.41773152380938, 174.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 126.024861647786452, 101.0, 44.0, 48.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_shortname" : "Offset",
							"parameter_type" : 0,
							"parameter_unitstyle" : 5,
							"parameter_linknames" : 1,
							"parameter_longname" : "Offset",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 100.0,
							"parameter_initial" : [ 50 ]
						}

					}
,
					"textcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"varname" : "Offset"
				}

			}
, 			{
				"box" : 				{
					"activedialcolor" : [ 0.670588, 0.254902, 0.678431, 1.0 ],
					"activefgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"activeneedlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"fgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"id" : "obj-73",
					"maxclass" : "live.dial",
					"needlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 736.209220714285721, 174.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 126.024861647786452, 40.0, 44.0, 48.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_shortname" : "Crease",
							"parameter_type" : 0,
							"parameter_unitstyle" : 5,
							"parameter_linknames" : 1,
							"parameter_longname" : "Crease",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 100.0,
							"parameter_initial" : [ 15 ]
						}

					}
,
					"textcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"varname" : "Crease"
				}

			}
, 			{
				"box" : 				{
					"activedialcolor" : [ 0.670588, 0.254902, 0.678431, 1.0 ],
					"activefgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"activeneedlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"fgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"id" : "obj-23",
					"maxclass" : "live.dial",
					"needlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 624.000709904761834, 174.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 70.5, 40.0, 44.0, 48.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_shortname" : "Fold",
							"parameter_type" : 0,
							"parameter_unitstyle" : 5,
							"parameter_linknames" : 1,
							"parameter_longname" : "Fold",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 100.0,
							"parameter_initial" : [ 50 ]
						}

					}
,
					"textcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"varname" : "Fold"
				}

			}
, 			{
				"box" : 				{
					"activedialcolor" : [ 0.670588, 0.254902, 0.678431, 1.0 ],
					"activefgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"activeneedlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"fgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"id" : "obj-1",
					"maxclass" : "live.dial",
					"needlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 511.792199095237947, 174.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 14.975138352213548, 40.0, 44.0, 48.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_shortname" : "Gain",
							"parameter_type" : 0,
							"parameter_unitstyle" : 5,
							"parameter_linknames" : 1,
							"parameter_longname" : "Gain",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 100.0,
							"parameter_initial" : [ 30 ]
						}

					}
,
					"textcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"varname" : "Gain"
				}

			}
, 			{
				"box" : 				{
					"activedialcolor" : [ 0.670588, 0.254902, 0.678431, 1.0 ],
					"activefgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"activeneedlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"fgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"id" : "obj-4",
					"maxclass" : "live.dial",
					"needlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 399.583688285714288, 174.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 70.5, 101.0, 44.0, 48.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_shortname" : "Treble",
							"parameter_type" : 0,
							"parameter_unitstyle" : 5,
							"parameter_linknames" : 1,
							"parameter_longname" : "Treble",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 100.0,
							"parameter_initial" : [ 100 ]
						}

					}
,
					"textcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"varname" : "Treble"
				}

			}
, 			{
				"box" : 				{
					"activedialcolor" : [ 0.670588, 0.254902, 0.678431, 1.0 ],
					"activefgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"activeneedlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"fgdialcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"id" : "obj-21",
					"maxclass" : "live.dial",
					"needlecolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 287.375177476190458, 174.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 14.975138352213548, 101.0, 44.0, 48.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_shortname" : "Bass",
							"parameter_type" : 0,
							"parameter_unitstyle" : 5,
							"parameter_linknames" : 1,
							"parameter_longname" : "Bass",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 100.0,
							"parameter_initial" : [ 80 ]
						}

					}
,
					"textcolor" : [ 0.901960849761963, 0.901960849761963, 0.901960730552673, 1.0 ],
					"varname" : "Bass"
				}

			}
, 			{
				"box" : 				{
					"background" : 1,
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-27",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "fx_background.maxpat",
					"numinlets" : 0,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 44.791666666666686, 24.799987999999985, 85.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 0.0, 185.0, 169.0 ],
					"viewvisibility" : 1
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-128", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-196", 0 ],
					"source" : [ "obj-102", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-10", 1 ],
					"midpoints" : [ 521.292199095237947, 298.136230500000011, 112.291666666666686, 298.136230500000011 ],
					"order" : 1,
					"source" : [ "obj-128", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.986246049404144, 0.007120788097382, 0.027434188872576, 1.0 ],
					"destination" : [ "obj-16", 0 ],
					"midpoints" : [ 521.292199095237947, 308.136229999999955, 857.91773152380938, 308.136229999999955 ],
					"order" : 0,
					"source" : [ "obj-128", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 1.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-14", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-102", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-14", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-23", 0 ],
					"source" : [ "obj-14", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-14", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-14", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-73", 0 ],
					"source" : [ "obj-14", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-10", 1 ],
					"midpoints" : [ 745.709220714285721, 298.136230500000011, 112.291666666666686, 298.136230500000011 ],
					"order" : 1,
					"source" : [ "obj-145", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.986246049404144, 0.007120788097382, 0.027434188872576, 1.0 ],
					"destination" : [ "obj-16", 0 ],
					"midpoints" : [ 745.709220714285721, 308.636230500000011, 857.91773152380938, 308.636230500000011 ],
					"order" : 0,
					"source" : [ "obj-145", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-10", 1 ],
					"midpoints" : [ 409.083688285714288, 298.136230500000011, 112.291666666666686, 298.136230500000011 ],
					"order" : 1,
					"source" : [ "obj-183", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.986246049404144, 0.007120788097382, 0.027434188872576, 1.0 ],
					"destination" : [ "obj-16", 0 ],
					"midpoints" : [ 409.083688285714288, 308.136229999999955, 857.91773152380938, 308.136229999999955 ],
					"order" : 0,
					"source" : [ "obj-183", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-10", 1 ],
					"midpoints" : [ 633.439904095238035, 298.136230500000011, 112.291666666666686, 298.136230500000011 ],
					"order" : 1,
					"source" : [ "obj-194", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.986246049404144, 0.007120788097382, 0.027434188872576, 1.0 ],
					"destination" : [ "obj-16", 0 ],
					"midpoints" : [ 633.439904095238035, 308.136229999999955, 857.91773152380938, 308.136229999999955 ],
					"order" : 0,
					"source" : [ "obj-194", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-10", 1 ],
					"midpoints" : [ 296.875177476190458, 298.136230500000011, 112.291666666666686, 298.136230500000011 ],
					"order" : 1,
					"source" : [ "obj-195", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.986246049404144, 0.007120788097382, 0.027434188872576, 1.0 ],
					"destination" : [ "obj-16", 0 ],
					"midpoints" : [ 296.875177476190458, 308.136229999999955, 857.91773152380938, 308.136229999999955 ],
					"order" : 0,
					"source" : [ "obj-195", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-10", 1 ],
					"midpoints" : [ 184.458333333333371, 298.136230500000011, 112.291666666666686, 298.136230500000011 ],
					"order" : 1,
					"source" : [ "obj-196", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.986246049404144, 0.007120788097382, 0.027434188872576, 1.0 ],
					"destination" : [ "obj-16", 0 ],
					"midpoints" : [ 184.458333333333371, 308.136229999999955, 857.91773152380938, 308.136229999999955 ],
					"order" : 0,
					"source" : [ "obj-196", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.999996185302734, 0.99993908405304, 0.041033305227757, 1.0 ],
					"destination" : [ "obj-10", 0 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-195", 0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-194", 0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-102", 0 ],
					"source" : [ "obj-24", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"midpoints" : [ 544.62331133333339, 367.93273899999997, 458.821736333333376, 367.93273899999997 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-183", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-145", 0 ],
					"source" : [ "obj-73", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"destination" : [ "obj-10", 1 ],
					"midpoints" : [ 857.91773152380938, 298.136230500000011, 112.291666666666686, 298.136230500000011 ],
					"order" : 1,
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.986246049404144, 0.007120788097382, 0.027434188872576, 1.0 ],
					"destination" : [ "obj-16", 0 ],
					"order" : 0,
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-1" : [ "Gain", "Gain", 0 ],
			"obj-73" : [ "Crease", "Crease", 0 ],
			"obj-102" : [ "chopper", "chopper on/off", 0 ],
			"obj-5" : [ "Offset", "Offset", 0 ],
			"obj-23" : [ "Fold", "Fold", 0 ],
			"obj-21" : [ "Bass", "Bass", 0 ],
			"obj-4" : [ "Treble", "Treble", 0 ],
			"parameterbanks" : 			{

			}

		}
,
		"dependency_cache" : [ 			{
				"name" : "fx_background.maxpat",
				"bootpath" : "~/Sync/Patches/Testing/Wavefolder",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bypass.maxpat",
				"bootpath" : "~/Sync/Patches/Testing/Wavefolder",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "process_wavefolder~.maxpat",
				"bootpath" : "~/Sync/Patches/Testing/Wavefolder",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "process_wavefolder_core~.maxpat",
				"bootpath" : "~/Sync/Patches/Testing/Wavefolder",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "AudioStatus_Menu",
				"default" : 				{
					"bgfillcolor" : 					{
						"type" : "color",
						"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
						"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
						"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}

				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "Luca",
				"default" : 				{
					"fontname" : [ "Open Sans Semibold" ],
					"selectioncolor" : [ 0.720698, 0.16723, 0.080014, 1.0 ],
					"textcolor_inverse" : [ 0.239216, 0.254902, 0.278431, 1.0 ],
					"bgcolor" : [ 0.904179, 0.895477, 0.842975, 0.56 ],
					"bgfillcolor" : 					{
						"type" : "gradient",
						"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"color1" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
						"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}
,
					"accentcolor" : [ 0.32549, 0.345098, 0.372549, 1.0 ],
					"color" : [ 0.475135, 0.293895, 0.251069, 1.0 ],
					"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "PAt_style0",
				"default" : 				{
					"fontname" : [ "Arial" ],
					"clearcolor" : [ 1.0, 0.947758, 0.687073, 1.0 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 0.901961, 0.901961, 0.901961, 1.0 ],
					"bgfillcolor" : 					{
						"type" : "gradient",
						"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"color1" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
						"color2" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}
,
					"fontsize" : [ 12.0 ],
					"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"color" : [ 0.952941, 0.564706, 0.098039, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "ksliderWhite",
				"default" : 				{
					"color" : [ 1.0, 1.0, 1.0, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "max6box",
				"default" : 				{
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.5 ],
					"accentcolor" : [ 0.8, 0.839216, 0.709804, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "max6inlet",
				"default" : 				{
					"color" : [ 0.423529, 0.372549, 0.27451, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "max6message",
				"default" : 				{
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgfillcolor" : 					{
						"type" : "gradient",
						"color1" : [ 0.866667, 0.866667, 0.866667, 1.0 ],
						"color2" : [ 0.788235, 0.788235, 0.788235, 1.0 ],
						"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}

				}
,
				"parentstyle" : "max6box",
				"multi" : 0
			}
, 			{
				"name" : "max6outlet",
				"default" : 				{
					"color" : [ 0.0, 0.454902, 0.498039, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjBlue-1",
				"default" : 				{
					"accentcolor" : [ 0.317647, 0.654902, 0.976471, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjBrown-1",
				"default" : 				{
					"accentcolor" : [ 0.654902, 0.572549, 0.376471, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjCyan-1",
				"default" : 				{
					"accentcolor" : [ 0.029546, 0.773327, 0.821113, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjGreen-1",
				"default" : 				{
					"accentcolor" : [ 0.0, 0.533333, 0.168627, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjMagenta-1",
				"default" : 				{
					"accentcolor" : [ 0.840663, 0.060168, 0.769195, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjYellow-1",
				"default" : 				{
					"fontsize" : [ 12.059008 ],
					"accentcolor" : [ 0.82517, 0.78181, 0.059545, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "numberGold-1",
				"default" : 				{
					"accentcolor" : [ 0.764706, 0.592157, 0.101961, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "rsliderGold",
				"default" : 				{
					"bgcolor" : [ 0.764706, 0.592157, 0.101961, 1.0 ],
					"color" : [ 0.646639, 0.821777, 0.854593, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "sliderGold-1",
				"default" : 				{
					"accentcolor" : [ 0.764706, 0.592157, 0.101961, 1.0 ],
					"color" : [ 0.907107, 0.934609, 0.842715, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "tap",
				"default" : 				{
					"fontname" : [ "Lato Light" ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ]
	}

}
