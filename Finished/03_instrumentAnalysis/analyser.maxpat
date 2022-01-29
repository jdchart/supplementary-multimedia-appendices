{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 0,
			"revision" : 3,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 35.0, 79.0, 970.0, 658.0 ],
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
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-14195",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 903.0, 157.0, 105.0, 20.0 ],
					"text" : "Print Commands"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14196",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 877.0, 157.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10054",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 813.5, 181.0, 70.0, 22.0 ],
					"text" : "loadmess 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8909",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 772.0, 121.0, 79.0, 20.0 ],
					"text" : "Run Process"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8907",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 798.0, 157.0, 77.0, 20.0 ],
					"text" : "Print Results"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8333",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 710.0, 121.0, 60.0, 60.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8331",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 772.0, 157.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8329",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 772.0, 186.071426391601562, 40.0, 22.0 ],
					"text" : "pak i i"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8328",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 710.0, 225.0, 81.0, 22.0 ],
					"text" : "zl reg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8327",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 710.0, 266.78570556640625, 84.0, 22.0 ],
					"text" : "process $1 $2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6494",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 823.5, 518.0, 382.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-6492",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 804.0, 613.0, 63.0, 22.0 ],
					"text" : "sprintf %s"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2041",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 699.0, 5.0, 48.0, 22.0 ],
					"text" : "replace"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2039",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 828.0, 80.5, 35.0, 22.0 ],
					"text" : "dac~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2038",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 862.0, 5.0, 31.0, 22.0 ],
					"text" : "stop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2037",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 828.0, 5.0, 32.0, 22.0 ],
					"text" : "start"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2033",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "bang" ],
					"patching_rect" : [ 828.0, 45.0, 57.0, 22.0 ],
					"text" : "play~ src"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2032",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"patching_rect" : [ 699.0, 45.0, 127.0, 22.0 ],
					"text" : "buffer~ src oizo_01.aif"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10300",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 0,
							"revision" : 3,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 359.0, 175.0, 450.0, 294.0 ],
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
									"id" : "obj-142",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 0,
											"revision" : 3,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 59.0, 104.0, 626.0, 632.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-9",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "list" ],
													"patching_rect" : [ 253.0, 454.0, 56.0, 22.0 ],
													"text" : "listfunnel"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-7",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 236.5, 554.0, 54.0, 22.0 ],
													"text" : "deferlow"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-6",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 236.5, 586.0, 99.0, 22.0 ],
													"text" : "process_finished"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-3",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 23.0, 514.0, 29.5, 22.0 ],
													"text" : "t l l"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-2",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "int", "float" ],
													"patching_rect" : [ 224.0, 498.0, 60.0, 22.0 ],
													"text" : "unpack i f"
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-190",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 23.0, 490.0, 63.0, 22.0 ],
													"text" : "sprintf %s"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-136",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 555.375, 199.0, 35.0, 22.0 ],
													"text" : "bang"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-134",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 23.0, 429.0, 29.5, 22.0 ],
													"text" : "iter"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-132",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 56.0, 429.0, 77.0, 22.0 ],
													"text" : "set_offset $1"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-129",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 56.0, 402.0, 103.0, 22.0 ],
													"text" : "set_numchans $1"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-128",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 56.0, 378.0, 80.0, 22.0 ],
													"text" : "set_derivs $1"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-126",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 23.0, 461.0, 69.0, 22.0 ],
													"saved_object_attributes" : 													{
														"filename" : "statIter.js",
														"parameter_enable" : 0
													}
,
													"text" : "js statIter.js"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-106",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 521.75, 315.0, 95.0, 22.0 ],
													"text" : "route numderivs"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-8",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 23.0, 565.0, 110.0, 22.0 ],
													"text" : "prepend fl_desc_in"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-94",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 130.0, 163.0, 111.0, 22.0 ],
													"text" : "prepend numchans"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-93",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "int" ],
													"patching_rect" : [ 23.0, 125.0, 29.5, 22.0 ],
													"text" : "- 1"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-92",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 23.0, 163.0, 105.0, 22.0 ],
													"text" : "prepend startchan"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-91",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "int", "int", "" ],
													"patcher" : 													{
														"fileversion" : 1,
														"appversion" : 														{
															"major" : 8,
															"minor" : 0,
															"revision" : 3,
															"architecture" : "x64",
															"modernui" : 1
														}
,
														"classnamespace" : "box",
														"rect" : [ 59.0, 104.0, 825.0, 469.0 ],
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
														"boxes" : [ 															{
																"box" : 																{
																	"id" : "obj-19",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 733.6922607421875, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-18",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 673.3846435546875, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-17",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 613.0770263671875, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-16",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 552.769287109375, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-15",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 492.4615478515625, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-14",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 432.15380859375, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-13",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 371.84613037109375, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-12",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 311.5384521484375, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-8",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 251.0, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-7",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 190.923095703125, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-5",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 130.6153564453125, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-3",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 70.30767822265625, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-2",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "bang" ],
																	"patching_rect" : [ 10.0, 108.0, 31.0, 22.0 ],
																	"text" : "t s b"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "Rest of Message",
																	"id" : "obj-1",
																	"index" : 3,
																	"maxclass" : "outlet",
																	"numinlets" : 1,
																	"numoutlets" : 0,
																	"patching_rect" : [ 733.6922607421875, 421.0, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-83",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 745.6922607421875, 147.0, 29.5, 22.0 ],
																	"text" : "0 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-82",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 685.3846435546875, 147.0, 29.5, 22.0 ],
																	"text" : "0 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-79",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 625.0770263671875, 147.0, 29.5, 22.0 ],
																	"text" : "1 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-80",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 564.769287109375, 147.0, 29.5, 22.0 ],
																	"text" : "0 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-78",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 504.4615478515625, 147.0, 29.5, 22.0 ],
																	"text" : "1 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-74",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 444.15380859375, 147.0, 29.5, 22.0 ],
																	"text" : "0 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-75",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 383.84613037109375, 147.0, 29.5, 22.0 ],
																	"text" : "6 7"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-76",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 323.5384521484375, 147.0, 29.5, 22.0 ],
																	"text" : "5 7"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-77",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 263.23077392578125, 147.0, 29.5, 22.0 ],
																	"text" : "4 7"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-72",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 202.923095703125, 147.0, 29.5, 22.0 ],
																	"text" : "3 7"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-73",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 142.6153564453125, 147.0, 29.5, 22.0 ],
																	"text" : "2 7"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-71",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 82.30767822265625, 147.0, 29.5, 22.0 ],
																	"text" : "1 7"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-70",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 22.0, 147.0, 29.5, 22.0 ],
																	"text" : "0 7"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-68",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "int", "int" ],
																	"patching_rect" : [ 22.0, 190.0, 176.5, 22.0 ],
																	"text" : "unpack i i"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-45",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "int", "int" ],
																	"patching_rect" : [ 106.0, 319.0, 92.5, 22.0 ],
																	"text" : "t i i"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-29",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "int" ],
																	"patching_rect" : [ 106.0, 380.0, 29.5, 22.0 ],
																	"text" : "+ 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-10",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "int" ],
																	"patching_rect" : [ 106.0, 350.0, 52.5, 22.0 ],
																	"text" : "*"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-9",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "bang", "int" ],
																	"patching_rect" : [ 22.0, 231.0, 136.5, 22.0 ],
																	"text" : "t b i"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-6",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "int" ],
																	"patching_rect" : [ 106.0, 291.0, 92.5, 22.0 ],
																	"text" : "/ 7"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-4",
																	"maxclass" : "newobj",
																	"numinlets" : 14,
																	"numoutlets" : 14,
																	"outlettype" : [ "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
																	"patching_rect" : [ 10.0, 70.0, 803.0, 22.0 ],
																	"text" : "route fl_centroid fl_spread fl_skewness fl_kurtosis fl_rolloff fl_flatness fl_crest fl_loudness fl_true_peak fl_frequency fl_confidence fl_melbands fl_mfcc"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-11",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 9,
																	"outlettype" : [ "float", "list", "float", "float", "float", "float", "float", "", "int" ],
																	"patching_rect" : [ 22.0, 258.0, 103.0, 22.0 ],
																	"text" : "info~ features"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-88",
																	"index" : 1,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 10.0, 10.0, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "Num Chans",
																	"id" : "obj-89",
																	"index" : 2,
																	"maxclass" : "outlet",
																	"numinlets" : 1,
																	"numoutlets" : 0,
																	"patching_rect" : [ 179.5, 421.0, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "Start Chan",
																	"id" : "obj-90",
																	"index" : 1,
																	"maxclass" : "outlet",
																	"numinlets" : 1,
																	"numoutlets" : 0,
																	"patching_rect" : [ 106.0, 421.0, 30.0, 30.0 ]
																}

															}
 ],
														"lines" : [ 															{
																"patchline" : 																{
																	"destination" : [ "obj-29", 0 ],
																	"midpoints" : [ 115.5, 375.0, 115.5, 375.0 ],
																	"source" : [ "obj-10", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-6", 0 ],
																	"midpoints" : [ 115.5, 282.0, 115.5, 282.0 ],
																	"source" : [ "obj-11", 8 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 321.0384521484375, 132.0, 363.0, 132.0, 363.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-12", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-76", 0 ],
																	"midpoints" : [ 333.0384521484375, 132.0, 333.0384521484375, 132.0 ],
																	"source" : [ "obj-12", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 381.34613037109375, 132.0, 423.0, 132.0, 423.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-13", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-75", 0 ],
																	"midpoints" : [ 393.34613037109375, 132.0, 393.34613037109375, 132.0 ],
																	"source" : [ "obj-13", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 441.65380859375, 132.0, 483.0, 132.0, 483.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-14", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-74", 0 ],
																	"midpoints" : [ 453.65380859375, 132.0, 453.65380859375, 132.0 ],
																	"source" : [ "obj-14", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 501.9615478515625, 132.0, 543.0, 132.0, 543.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-15", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-78", 0 ],
																	"midpoints" : [ 513.9615478515625, 132.0, 513.9615478515625, 132.0 ],
																	"source" : [ "obj-15", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 562.269287109375, 132.0, 603.0, 132.0, 603.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-16", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-80", 0 ],
																	"midpoints" : [ 574.269287109375, 132.0, 574.269287109375, 132.0 ],
																	"source" : [ "obj-16", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 622.5770263671875, 132.0, 666.0, 132.0, 666.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-17", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-79", 0 ],
																	"midpoints" : [ 634.5770263671875, 132.0, 634.5770263671875, 132.0 ],
																	"source" : [ "obj-17", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 682.8846435546875, 132.0, 726.0, 132.0, 726.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-18", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-82", 0 ],
																	"midpoints" : [ 694.8846435546875, 132.0, 694.8846435546875, 132.0 ],
																	"source" : [ "obj-18", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 743.1922607421875, 132.0, 743.1922607421875, 132.0 ],
																	"source" : [ "obj-19", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-83", 0 ],
																	"midpoints" : [ 755.1922607421875, 132.0, 755.1922607421875, 132.0 ],
																	"source" : [ "obj-19", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 19.5, 132.0, 183.0, 132.0, 183.0, 177.0, 210.0, 177.0, 210.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-2", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-70", 0 ],
																	"midpoints" : [ 31.5, 132.0, 31.5, 132.0 ],
																	"source" : [ "obj-2", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-90", 0 ],
																	"midpoints" : [ 115.5, 405.0, 115.5, 405.0 ],
																	"source" : [ "obj-29", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 79.80767822265625, 132.0, 183.0, 132.0, 183.0, 177.0, 210.0, 177.0, 210.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-3", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-71", 0 ],
																	"midpoints" : [ 91.80767822265625, 132.0, 91.80767822265625, 132.0 ],
																	"source" : [ "obj-3", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-12", 0 ],
																	"midpoints" : [ 321.038461538461547, 93.0, 321.0384521484375, 93.0 ],
																	"source" : [ "obj-4", 5 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-13", 0 ],
																	"midpoints" : [ 381.346153846153868, 93.0, 381.34613037109375, 93.0 ],
																	"source" : [ "obj-4", 6 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-14", 0 ],
																	"midpoints" : [ 441.653846153846132, 93.0, 441.65380859375, 93.0 ],
																	"source" : [ "obj-4", 7 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-15", 0 ],
																	"midpoints" : [ 501.961538461538453, 93.0, 501.9615478515625, 93.0 ],
																	"source" : [ "obj-4", 8 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-16", 0 ],
																	"midpoints" : [ 562.269230769230717, 93.0, 562.269287109375, 93.0 ],
																	"source" : [ "obj-4", 9 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-17", 0 ],
																	"midpoints" : [ 622.576923076923094, 93.0, 622.5770263671875, 93.0 ],
																	"source" : [ "obj-4", 10 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-18", 0 ],
																	"midpoints" : [ 682.884615384615358, 93.0, 682.8846435546875, 93.0 ],
																	"source" : [ "obj-4", 11 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-19", 0 ],
																	"midpoints" : [ 743.192307692307736, 93.0, 743.1922607421875, 93.0 ],
																	"source" : [ "obj-4", 12 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-2", 0 ],
																	"midpoints" : [ 19.5, 93.0, 19.5, 93.0 ],
																	"source" : [ "obj-4", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-3", 0 ],
																	"midpoints" : [ 79.807692307692307, 93.0, 79.80767822265625, 93.0 ],
																	"source" : [ "obj-4", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-5", 0 ],
																	"midpoints" : [ 140.115384615384613, 93.0, 140.1153564453125, 93.0 ],
																	"source" : [ "obj-4", 2 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-7", 0 ],
																	"midpoints" : [ 200.423076923076934, 93.0, 200.423095703125, 93.0 ],
																	"source" : [ "obj-4", 3 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-8", 0 ],
																	"midpoints" : [ 260.730769230769226, 93.0, 260.5, 93.0 ],
																	"source" : [ "obj-4", 4 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-10", 0 ],
																	"midpoints" : [ 115.5, 342.0, 115.5, 342.0 ],
																	"source" : [ "obj-45", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-89", 0 ],
																	"midpoints" : [ 189.0, 342.0, 189.0, 342.0 ],
																	"source" : [ "obj-45", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 140.1153564453125, 132.0, 183.0, 132.0, 183.0, 177.0, 210.0, 177.0, 210.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-5", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-73", 0 ],
																	"midpoints" : [ 152.1153564453125, 132.0, 152.1153564453125, 132.0 ],
																	"source" : [ "obj-5", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-45", 0 ],
																	"midpoints" : [ 115.5, 315.0, 115.5, 315.0 ],
																	"source" : [ "obj-6", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-6", 1 ],
																	"midpoints" : [ 189.0, 213.0, 189.0, 213.0 ],
																	"source" : [ "obj-68", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-9", 0 ],
																	"midpoints" : [ 31.5, 213.0, 31.5, 213.0 ],
																	"source" : [ "obj-68", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 200.423095703125, 132.0, 243.0, 132.0, 243.0, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-7", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-72", 0 ],
																	"midpoints" : [ 212.423095703125, 132.0, 212.423095703125, 132.0 ],
																	"source" : [ "obj-7", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 31.5, 171.0, 31.5, 171.0 ],
																	"source" : [ "obj-70", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 91.80767822265625, 171.0, 63.0, 171.0, 63.0, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-71", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 212.423095703125, 171.0, 63.0, 171.0, 63.0, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-72", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 152.1153564453125, 171.0, 63.0, 171.0, 63.0, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-73", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 453.65380859375, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-74", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 393.34613037109375, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-75", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 333.0384521484375, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-76", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 272.73077392578125, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-77", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 513.9615478515625, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-78", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 634.5770263671875, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-79", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"midpoints" : [ 260.5, 408.0, 743.1922607421875, 408.0 ],
																	"source" : [ "obj-8", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-77", 0 ],
																	"midpoints" : [ 272.5, 132.0, 272.73077392578125, 132.0 ],
																	"source" : [ "obj-8", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 574.269287109375, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-80", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 694.8846435546875, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-82", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-68", 0 ],
																	"midpoints" : [ 755.1922607421875, 186.0, 31.5, 186.0 ],
																	"source" : [ "obj-83", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-4", 0 ],
																	"midpoints" : [ 19.5, 42.0, 19.5, 42.0 ],
																	"source" : [ "obj-88", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-10", 1 ],
																	"midpoints" : [ 149.0, 276.0, 210.0, 276.0, 210.0, 351.0, 159.0, 351.0, 159.0, 345.0, 149.0, 345.0 ],
																	"source" : [ "obj-9", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-11", 0 ],
																	"midpoints" : [ 31.5, 255.0, 31.5, 255.0 ],
																	"source" : [ "obj-9", 0 ]
																}

															}
 ]
													}
,
													"patching_rect" : [ 23.0, 85.0, 233.0, 22.0 ],
													"saved_object_attributes" : 													{
														"description" : "",
														"digest" : "",
														"globalpatchername" : "",
														"tags" : ""
													}
,
													"text" : "p getStartNumchans"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-44",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "int" ],
													"patching_rect" : [ 332.25, 199.0, 41.0, 22.0 ],
													"text" : "t s s 3"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-41",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "int" ],
													"patching_rect" : [ 243.0, 199.0, 41.0, 22.0 ],
													"text" : "t s s 1"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-42",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "int" ],
													"patching_rect" : [ 287.625, 199.0, 41.0, 22.0 ],
													"text" : "t s s 2"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-43",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "int" ],
													"patching_rect" : [ 376.875, 199.0, 41.0, 22.0 ],
													"text" : "t s s 4"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-40",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "int" ],
													"patching_rect" : [ 421.5, 199.0, 41.0, 22.0 ],
													"text" : "t s s 5"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-39",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "int" ],
													"patching_rect" : [ 466.125, 199.0, 41.0, 22.0 ],
													"text" : "t s s 6"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-38",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "int" ],
													"patching_rect" : [ 510.75, 199.0, 41.0, 22.0 ],
													"text" : "t s s 7"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-16",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 243.0, 276.0, 99.0, 22.0 ],
													"text" : "process_finished"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-17",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 243.0, 243.0, 54.0, 22.0 ],
													"text" : "deferlow"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-21",
													"maxclass" : "newobj",
													"numinlets" : 9,
													"numoutlets" : 9,
													"outlettype" : [ "", "", "", "", "", "", "", "", "" ],
													"patching_rect" : [ 243.0, 163.0, 376.0, 22.0 ],
													"text" : "route mean standard_deviation skewness kurtosis min mid max bang"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-13",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 23.0, 315.0, 334.0, 22.0 ],
													"text" : "fluid.bufstats~ @source features @stats stats @numderivs 1"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-140",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 23.0, 10.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-141",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 23.0, 596.0, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-128", 0 ],
													"midpoints" : [ 531.25, 363.0, 65.5, 363.0 ],
													"source" : [ "obj-106", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-190", 0 ],
													"midpoints" : [ 32.5, 486.0, 32.5, 486.0 ],
													"source" : [ "obj-126", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-126", 0 ],
													"midpoints" : [ 65.5, 402.0, 9.0, 402.0, 9.0, 456.0, 32.5, 456.0 ],
													"source" : [ "obj-128", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-126", 0 ],
													"midpoints" : [ 65.5, 426.0, 18.0, 426.0, 18.0, 453.0, 32.5, 453.0 ],
													"source" : [ "obj-129", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-134", 0 ],
													"midpoints" : [ 32.5, 339.0, 32.5, 339.0 ],
													"source" : [ "obj-13", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-126", 0 ],
													"midpoints" : [ 65.5, 453.0, 32.5, 453.0 ],
													"source" : [ "obj-132", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-126", 0 ],
													"midpoints" : [ 32.5, 453.0, 32.5, 453.0 ],
													"source" : [ "obj-134", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 564.875, 240.0, 32.5, 240.0 ],
													"source" : [ "obj-136", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-21", 0 ],
													"midpoints" : [ 32.5, 72.0, 267.0, 72.0, 267.0, 150.0, 252.5, 150.0 ],
													"order" : 0,
													"source" : [ "obj-140", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-91", 0 ],
													"midpoints" : [ 32.5, 42.0, 32.5, 42.0 ],
													"order" : 1,
													"source" : [ "obj-140", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-141", 0 ],
													"midpoints" : [ 252.5, 300.0, 9.0, 300.0, 9.0, 591.0, 32.5, 591.0 ],
													"source" : [ "obj-16", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-16", 0 ],
													"midpoints" : [ 252.5, 267.0, 252.5, 267.0 ],
													"source" : [ "obj-17", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-3", 0 ],
													"source" : [ "obj-190", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-8", 0 ],
													"midpoints" : [ 274.5, 548.0, 84.0, 548.0, 84.0, 551.0, 18.0, 551.0, 18.0, 561.0, 32.5, 561.0 ],
													"source" : [ "obj-2", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-136", 0 ],
													"midpoints" : [ 564.875, 186.0, 564.875, 186.0 ],
													"source" : [ "obj-21", 7 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-38", 0 ],
													"midpoints" : [ 520.25, 186.0, 520.25, 186.0 ],
													"source" : [ "obj-21", 6 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-39", 0 ],
													"midpoints" : [ 475.625, 186.0, 475.625, 186.0 ],
													"source" : [ "obj-21", 5 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-40", 0 ],
													"midpoints" : [ 431.0, 186.0, 431.0, 186.0 ],
													"source" : [ "obj-21", 4 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-41", 0 ],
													"midpoints" : [ 252.5, 186.0, 252.5, 186.0 ],
													"source" : [ "obj-21", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-42", 0 ],
													"midpoints" : [ 297.125, 186.0, 297.125, 186.0 ],
													"source" : [ "obj-21", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-43", 0 ],
													"midpoints" : [ 386.375, 186.0, 386.375, 186.0 ],
													"source" : [ "obj-21", 3 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-44", 0 ],
													"midpoints" : [ 341.75, 186.0, 341.75, 186.0 ],
													"source" : [ "obj-21", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-7", 0 ],
													"source" : [ "obj-3", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-9", 0 ],
													"source" : [ "obj-3", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-106", 0 ],
													"midpoints" : [ 531.25, 222.0, 531.25, 222.0 ],
													"order" : 0,
													"source" : [ "obj-38", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 531.25, 240.0, 32.5, 240.0 ],
													"order" : 1,
													"source" : [ "obj-38", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-132", 0 ],
													"midpoints" : [ 542.25, 300.0, 369.0, 300.0, 369.0, 363.0, 42.0, 363.0, 42.0, 426.0, 65.5, 426.0 ],
													"source" : [ "obj-38", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"midpoints" : [ 520.25, 237.0, 252.5, 237.0 ],
													"source" : [ "obj-38", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-106", 0 ],
													"midpoints" : [ 486.625, 300.0, 531.25, 300.0 ],
													"order" : 0,
													"source" : [ "obj-39", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 486.625, 240.0, 32.5, 240.0 ],
													"order" : 1,
													"source" : [ "obj-39", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-132", 0 ],
													"midpoints" : [ 497.625, 363.0, 42.0, 363.0, 42.0, 426.0, 65.5, 426.0 ],
													"source" : [ "obj-39", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"midpoints" : [ 475.625, 237.0, 252.5, 237.0 ],
													"source" : [ "obj-39", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-106", 0 ],
													"midpoints" : [ 442.0, 300.0, 531.25, 300.0 ],
													"order" : 0,
													"source" : [ "obj-40", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 442.0, 240.0, 32.5, 240.0 ],
													"order" : 1,
													"source" : [ "obj-40", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-132", 0 ],
													"midpoints" : [ 453.0, 363.0, 42.0, 363.0, 42.0, 426.0, 65.5, 426.0 ],
													"source" : [ "obj-40", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"midpoints" : [ 431.0, 237.0, 252.5, 237.0 ],
													"source" : [ "obj-40", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-106", 0 ],
													"midpoints" : [ 263.5, 231.0, 531.25, 231.0 ],
													"order" : 0,
													"source" : [ "obj-41", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 263.5, 222.0, 32.5, 222.0 ],
													"order" : 1,
													"source" : [ "obj-41", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-132", 0 ],
													"midpoints" : [ 274.5, 222.0, 9.0, 222.0, 9.0, 414.0, 51.0, 414.0, 51.0, 426.0, 65.5, 426.0 ],
													"source" : [ "obj-41", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"midpoints" : [ 252.5, 222.0, 252.5, 222.0 ],
													"source" : [ "obj-41", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-106", 0 ],
													"midpoints" : [ 308.125, 231.0, 531.25, 231.0 ],
													"order" : 0,
													"source" : [ "obj-42", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 308.125, 222.0, 32.5, 222.0 ],
													"order" : 1,
													"source" : [ "obj-42", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-132", 0 ],
													"midpoints" : [ 319.125, 261.0, 369.0, 261.0, 369.0, 363.0, 42.0, 363.0, 42.0, 426.0, 65.5, 426.0 ],
													"source" : [ "obj-42", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"midpoints" : [ 297.125, 222.0, 252.5, 222.0 ],
													"source" : [ "obj-42", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-106", 0 ],
													"midpoints" : [ 397.375, 300.0, 531.25, 300.0 ],
													"order" : 0,
													"source" : [ "obj-43", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 397.375, 240.0, 32.5, 240.0 ],
													"order" : 1,
													"source" : [ "obj-43", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-132", 0 ],
													"midpoints" : [ 408.375, 363.0, 42.0, 363.0, 42.0, 426.0, 65.5, 426.0 ],
													"source" : [ "obj-43", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"midpoints" : [ 386.375, 237.0, 252.5, 237.0 ],
													"source" : [ "obj-43", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-106", 0 ],
													"midpoints" : [ 352.75, 261.0, 531.25, 261.0 ],
													"order" : 0,
													"source" : [ "obj-44", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 352.75, 240.0, 32.5, 240.0 ],
													"order" : 1,
													"source" : [ "obj-44", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-132", 0 ],
													"midpoints" : [ 363.75, 300.0, 369.0, 300.0, 369.0, 363.0, 42.0, 363.0, 42.0, 426.0, 65.5, 426.0 ],
													"source" : [ "obj-44", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"midpoints" : [ 341.75, 237.0, 252.5, 237.0 ],
													"source" : [ "obj-44", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-141", 0 ],
													"source" : [ "obj-6", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-6", 0 ],
													"source" : [ "obj-7", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-141", 0 ],
													"midpoints" : [ 32.5, 588.0, 32.5, 588.0 ],
													"source" : [ "obj-8", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-2", 0 ],
													"source" : [ "obj-9", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-129", 0 ],
													"midpoints" : [ 139.5, 150.0, 9.0, 150.0, 9.0, 396.0, 65.5, 396.0 ],
													"order" : 1,
													"source" : [ "obj-91", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-21", 0 ],
													"midpoints" : [ 246.5, 150.0, 252.5, 150.0 ],
													"source" : [ "obj-91", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-93", 0 ],
													"midpoints" : [ 32.5, 108.0, 32.5, 108.0 ],
													"source" : [ "obj-91", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-94", 0 ],
													"midpoints" : [ 139.5, 108.0, 139.5, 108.0 ],
													"order" : 0,
													"source" : [ "obj-91", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 32.5, 186.0, 32.5, 186.0 ],
													"source" : [ "obj-92", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-92", 0 ],
													"midpoints" : [ 32.5, 150.0, 32.5, 150.0 ],
													"source" : [ "obj-93", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"midpoints" : [ 139.5, 300.0, 32.5, 300.0 ],
													"source" : [ "obj-94", 0 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 364.428558349609375, 165.0, 51.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p fl_stat"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-37",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 0,
											"revision" : 3,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 59.0, 104.0, 332.0, 322.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-30",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 11.0, 71.0, 75.0, 22.0 ],
													"text" : "t s s"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-25",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 11.0, 126.0, 54.0, 22.0 ],
													"text" : "sel bang"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-16",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 46.0, 201.0, 99.0, 22.0 ],
													"text" : "process_finished"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-17",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 46.0, 168.0, 54.0, 22.0 ],
													"text" : "deferlow"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-11",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 67.0, 126.0, 259.0, 22.0 ],
													"text" : "fluid.bufmfcc~ @source src @features features"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-31",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 11.0, 11.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-32",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 46.0, 283.0, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-11", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-32", 0 ],
													"source" : [ "obj-16", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-16", 0 ],
													"source" : [ "obj-17", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-25", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-30", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-30", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-30", 0 ],
													"source" : [ "obj-31", 0 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 305.0, 165.0, 57.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p fl_mfcc"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-36",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 0,
											"revision" : 3,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 59.0, 104.0, 402.0, 354.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-30",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 50.0, 100.0, 75.0, 22.0 ],
													"text" : "t s s"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-25",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 50.0, 155.0, 54.0, 22.0 ],
													"text" : "sel bang"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-16",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 85.0, 230.0, 99.0, 22.0 ],
													"text" : "process_finished"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-17",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 85.0, 197.0, 54.0, 22.0 ],
													"text" : "deferlow"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-11",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 106.0, 155.0, 286.0, 22.0 ],
													"text" : "fluid.bufmelbands~ @source src @features features"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-31",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 50.0, 40.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-32",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 85.0, 312.0, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-11", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-32", 0 ],
													"source" : [ "obj-16", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-16", 0 ],
													"source" : [ "obj-17", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-25", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-30", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-30", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-30", 0 ],
													"source" : [ "obj-31", 0 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 246.0, 165.0, 57.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p fl_melb"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-35",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 0,
											"revision" : 3,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 59.0, 104.0, 335.0, 323.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-30",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 12.0, 71.0, 75.0, 22.0 ],
													"text" : "t s s"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-25",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 12.0, 126.0, 54.0, 22.0 ],
													"text" : "sel bang"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-16",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 47.0, 201.0, 99.0, 22.0 ],
													"text" : "process_finished"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-17",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 47.0, 168.0, 54.0, 22.0 ],
													"text" : "deferlow"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-11",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 68.0, 126.0, 259.0, 22.0 ],
													"text" : "fluid.bufpitch~ @source src @features features"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-31",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 12.0, 11.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-32",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 47.0, 283.0, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-11", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-32", 0 ],
													"source" : [ "obj-16", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-16", 0 ],
													"source" : [ "obj-17", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-25", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-30", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-30", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-30", 0 ],
													"source" : [ "obj-31", 0 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 194.0, 165.0, 50.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p fl_pitc"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-34",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 0,
											"revision" : 3,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 59.0, 104.0, 361.0, 322.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-30",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 14.0, 71.0, 75.0, 22.0 ],
													"text" : "t s s"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-25",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 14.0, 126.0, 54.0, 22.0 ],
													"text" : "sel bang"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-16",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 49.0, 201.0, 99.0, 22.0 ],
													"text" : "process_finished"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-17",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 49.0, 168.0, 54.0, 22.0 ],
													"text" : "deferlow"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-11",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 70.0, 126.0, 282.0, 22.0 ],
													"text" : "fluid.bufloudness~ @source src @features features"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-31",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 14.0, 11.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-32",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 49.0, 283.0, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-11", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-32", 0 ],
													"source" : [ "obj-16", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-16", 0 ],
													"source" : [ "obj-17", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-25", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-30", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-30", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-30", 0 ],
													"source" : [ "obj-31", 0 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 138.0, 165.0, 54.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p fl_loud"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-33",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 0,
											"revision" : 3,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 59.0, 104.0, 384.0, 324.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-30",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 11.0, 69.0, 75.0, 22.0 ],
													"text" : "t s s"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-25",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 11.0, 124.0, 54.0, 22.0 ],
													"text" : "sel bang"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-16",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 46.0, 199.0, 99.0, 22.0 ],
													"text" : "process_finished"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-17",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 46.0, 166.0, 54.0, 22.0 ],
													"text" : "deferlow"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-11",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 67.0, 124.0, 309.0, 22.0 ],
													"text" : "fluid.bufspectralshape~ @source src @features features"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-31",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 11.0, 9.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-32",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 46.0, 281.0, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-11", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-32", 0 ],
													"source" : [ "obj-16", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-16", 0 ],
													"source" : [ "obj-17", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-17", 0 ],
													"source" : [ "obj-25", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-30", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-30", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-30", 0 ],
													"source" : [ "obj-31", 0 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 79.0, 165.0, 57.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p fl_spsh"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-24",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 0,
											"revision" : 3,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 59.0, 104.0, 289.0, 312.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-12",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 122.0, 132.0, 29.5, 22.0 ],
													"text" : "t l l"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-2",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "int", "float" ],
													"patching_rect" : [ 155.0, 219.0, 60.0, 22.0 ],
													"text" : "unpack i f"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-1",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "list" ],
													"patching_rect" : [ 155.0, 192.0, 56.0, 22.0 ],
													"text" : "listfunnel"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-10",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 12.0, 178.0, 99.0, 22.0 ],
													"text" : "process_finished"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-8",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 155.0, 243.0, 117.0, 22.0 ],
													"text" : "prepend ah_desc_in"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-7",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 12.0, 70.0, 173.0, 22.0 ],
													"text" : "t s s"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-6",
													"maxclass" : "newobj",
													"numinlets" : 3,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "" ],
													"patching_rect" : [ 12.0, 101.0, 151.0, 22.0 ],
													"text" : "route descriptors fftparams"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-4",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 12.0, 145.0, 54.0, 22.0 ],
													"text" : "deferlow"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-3",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "list" ],
													"patching_rect" : [ 166.0, 101.0, 74.0, 22.0 ],
													"text" : "descriptors~"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-22",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 12.0, 10.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-23",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 12.0, 269.0, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-2", 0 ],
													"midpoints" : [ 164.5, 215.0, 164.5, 215.0 ],
													"source" : [ "obj-1", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-23", 0 ],
													"source" : [ "obj-10", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-1", 0 ],
													"source" : [ "obj-12", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-10", 0 ],
													"source" : [ "obj-12", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-8", 0 ],
													"source" : [ "obj-2", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-7", 0 ],
													"source" : [ "obj-22", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-12", 0 ],
													"source" : [ "obj-3", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-10", 0 ],
													"source" : [ "obj-4", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-4", 0 ],
													"source" : [ "obj-6", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-4", 0 ],
													"source" : [ "obj-6", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-3", 0 ],
													"source" : [ "obj-7", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-6", 0 ],
													"source" : [ "obj-7", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-23", 0 ],
													"source" : [ "obj-8", 0 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 13.0, 165.0, 64.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p ah_desc"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-20",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "float", "bang" ],
									"patching_rect" : [ 122.0, 10.0, 93.0, 22.0 ],
									"text" : "buffer~ features"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-19",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "float", "bang" ],
									"patching_rect" : [ 45.0, 10.0, 75.0, 22.0 ],
									"text" : "buffer~ stats"
								}

							}
, 							{
								"box" : 								{
									"comment" : "Process Done",
									"id" : "obj-5",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 13.0, 250.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "Command In",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 13.0, 10.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 8,
									"numoutlets" : 8,
									"outlettype" : [ "", "", "", "", "", "", "", "" ],
									"patching_rect" : [ 13.0, 61.0, 429.0, 22.0 ],
									"text" : "route AH_DESC FL_SPSH FL_LOUD FL_PITC FL_MELB FL_MFCC FL_STAT"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-142", 0 ],
									"midpoints" : [ 373.928571428571445, 84.0, 373.928558349609375, 84.0 ],
									"source" : [ "obj-1", 6 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-24", 0 ],
									"midpoints" : [ 22.5, 84.0, 22.5, 84.0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-33", 0 ],
									"midpoints" : [ 81.071428571428569, 150.0, 88.5, 150.0 ],
									"source" : [ "obj-1", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-34", 0 ],
									"midpoints" : [ 139.642857142857139, 150.0, 147.5, 150.0 ],
									"source" : [ "obj-1", 2 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-35", 0 ],
									"midpoints" : [ 198.214285714285722, 159.0, 203.5, 159.0 ],
									"source" : [ "obj-1", 3 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-36", 0 ],
									"midpoints" : [ 256.785714285714278, 84.0, 255.5, 84.0 ],
									"source" : [ "obj-1", 4 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-37", 0 ],
									"midpoints" : [ 315.357142857142833, 159.0, 314.5, 159.0 ],
									"source" : [ "obj-1", 5 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"midpoints" : [ 373.928558349609375, 237.0, 22.5, 237.0 ],
									"source" : [ "obj-142", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"midpoints" : [ 22.5, 42.0, 22.5, 42.0 ],
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"midpoints" : [ 22.5, 189.0, 22.5, 189.0 ],
									"source" : [ "obj-24", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"midpoints" : [ 88.5, 237.0, 22.5, 237.0 ],
									"source" : [ "obj-33", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"midpoints" : [ 147.5, 237.0, 22.5, 237.0 ],
									"source" : [ "obj-34", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"midpoints" : [ 203.5, 237.0, 22.5, 237.0 ],
									"source" : [ "obj-35", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"midpoints" : [ 255.5, 237.0, 22.5, 237.0 ],
									"source" : [ "obj-36", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"midpoints" : [ 314.5, 237.0, 22.5, 237.0 ],
									"source" : [ "obj-37", 0 ]
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
								"name" : "Luca",
								"default" : 								{
									"accentcolor" : [ 0.32549, 0.345098, 0.372549, 1.0 ],
									"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
									"bgcolor" : [ 0.904179, 0.895477, 0.842975, 0.56 ],
									"fontname" : [ "Open Sans Semibold" ],
									"selectioncolor" : [ 0.720698, 0.16723, 0.080014, 1.0 ],
									"textcolor_inverse" : [ 0.239216, 0.254902, 0.278431, 1.0 ],
									"bgfillcolor" : 									{
										"type" : "gradient",
										"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"color1" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
										"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}
,
									"color" : [ 0.475135, 0.293895, 0.251069, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "PAt_style0",
								"default" : 								{
									"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"fontsize" : [ 12.0 ],
									"bgcolor" : [ 0.901961, 0.901961, 0.901961, 1.0 ],
									"fontname" : [ "Arial" ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
									"clearcolor" : [ 1.0, 0.947758, 0.687073, 1.0 ],
									"bgfillcolor" : 									{
										"type" : "gradient",
										"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"color1" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
										"color2" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}
,
									"color" : [ 0.952941, 0.564706, 0.098039, 1.0 ]
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
								"name" : "max6box",
								"default" : 								{
									"accentcolor" : [ 0.8, 0.839216, 0.709804, 1.0 ],
									"bgcolor" : [ 1.0, 1.0, 1.0, 0.5 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "max6inlet",
								"default" : 								{
									"color" : [ 0.423529, 0.372549, 0.27451, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "max6message",
								"default" : 								{
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
									"bgfillcolor" : 									{
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
, 							{
								"name" : "max6outlet",
								"default" : 								{
									"color" : [ 0.0, 0.454902, 0.498039, 1.0 ]
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
								"name" : "newobjMagenta-1",
								"default" : 								{
									"accentcolor" : [ 0.840663, 0.060168, 0.769195, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "newobjYellow-1",
								"default" : 								{
									"accentcolor" : [ 0.82517, 0.78181, 0.059545, 1.0 ],
									"fontsize" : [ 12.059008 ]
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
, 							{
								"name" : "sliderGold-1",
								"default" : 								{
									"accentcolor" : [ 0.764706, 0.592157, 0.101961, 1.0 ],
									"color" : [ 0.907107, 0.934609, 0.842715, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "tap",
								"default" : 								{
									"fontname" : [ "Lato Light" ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 880.0, 583.0, 64.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p describe"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 763.0, 547.0, 105.0, 22.0 ],
					"text" : "loadmess compile"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 20.0,
					"id" : "obj-863",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 6.0, 511.0, 192.0, 29.0 ],
					"text" : "Descriptors ▲"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 20.0,
					"id" : "obj-862",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 6.0, 606.0, 242.0, 29.0 ],
					"text" : "What to return ▼"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 20.0,
					"id" : "obj-860",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 107.0, 553.5, 192.0, 29.0 ],
					"text" : "Parameters ►",
					"textjustification" : 2
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-5452",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 159.0, 108.0, 20.0 ],
					"text" : "Duration",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-5453",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 137.0, 108.0, 20.0 ],
					"text" : "Spectral Peaks",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-5454",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 159.0, 75.0, 20.0 ],
					"text" : "ah_duration $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5455",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 159.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-5456",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 137.0, 106.0, 20.0 ],
					"text" : "ah_spectral_peaks $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5457",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 137.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-633",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 699.0, 518.0, 121.0, 22.0 ],
					"text" : "get_command_string"
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-778",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 467.0, 108.0, 20.0 ],
					"text" : "MFCC",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-777",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 445.0, 108.0, 20.0 ],
					"text" : "Melbands",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-776",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 423.0, 108.0, 20.0 ],
					"text" : "Coinfidence",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-775",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 401.0, 108.0, 20.0 ],
					"text" : "Frequency",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-774",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 379.0, 108.0, 20.0 ],
					"text" : "True Peak",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-773",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 357.0, 108.0, 20.0 ],
					"text" : "Loudness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-772",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 335.0, 108.0, 20.0 ],
					"text" : "Crest",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-771",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 313.0, 108.0, 20.0 ],
					"text" : "Flatness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-770",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 291.0, 108.0, 20.0 ],
					"text" : "Rolloff",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-769",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 269.0, 108.0, 20.0 ],
					"text" : "Kurtosis",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-768",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 247.0, 108.0, 20.0 ],
					"text" : "Skewness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-767",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 225.0, 108.0, 20.0 ],
					"text" : "Spread",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-766",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 203.0, 108.0, 20.0 ],
					"text" : "Centroid",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-541",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 115.0, 108.0, 20.0 ],
					"text" : "Roughness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-542",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 93.0, 108.0, 20.0 ],
					"text" : "Inharmonicity",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-543",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 71.0, 108.0, 20.0 ],
					"text" : "Confidence",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-544",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 49.0, 108.0, 20.0 ],
					"text" : "Pitch",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-545",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 27.0, 108.0, 20.0 ],
					"text" : "Harmonic Ratio",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-546",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.0, 5.0, 108.0, 20.0 ],
					"text" : "Noise Ratio",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-547",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 489.0, 135.0, 20.0 ],
					"text" : "SFM",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-548",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 467.0, 135.0, 20.0 ],
					"text" : "Log. Brightness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-549",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 445.0, 135.0, 20.0 ],
					"text" : "Lin. Brightness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-540",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 423.0, 135.0, 20.0 ],
					"text" : "Log. Kurtosis",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-539",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 401.0, 135.0, 20.0 ],
					"text" : "Lin. Kurtosis",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-538",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 379.0, 135.0, 20.0 ],
					"text" : "Log. Skewness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-537",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 357.0, 135.0, 20.0 ],
					"text" : "Lin. Skewness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-536",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 335.0, 135.0, 20.0 ],
					"text" : "Log. Spread",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-535",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 313.0, 135.0, 20.0 ],
					"text" : "Lin. Spread",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-534",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 291.0, 135.0, 20.0 ],
					"text" : "Log. Centroid",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-533",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 269.0, 135.0, 20.0 ],
					"text" : "Lin. Centroid",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-532",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 247.0, 135.0, 20.0 ],
					"text" : "Loudness",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-531",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 225.0, 135.0, 20.0 ],
					"text" : "Peak Amplitude",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-530",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 203.0, 135.0, 20.0 ],
					"text" : "RMS",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-529",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 181.0, 135.0, 20.0 ],
					"text" : "ABS",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-528",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 159.0, 135.0, 20.0 ],
					"text" : "Foote",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-527",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 137.0, 135.0, 20.0 ],
					"text" : "MKL",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-526",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 115.0, 135.0, 20.0 ],
					"text" : "Flux",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-525",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 93.0, 135.0, 20.0 ],
					"text" : "Spectral Crest",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-524",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 71.0, 135.0, 20.0 ],
					"text" : "Rolloff",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-523",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 49.0, 135.0, 20.0 ],
					"text" : "Energy Ratio",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"align" : 2,
					"bgcolor" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-341",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 6.0, 27.0, 135.0, 20.0 ],
					"text" : "Energy",
					"textjustification" : 2,
					"textoncolor" : [ 0.129, 0.129, 0.129, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 699.0, 583.0, 124.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "descriptorControl.js",
						"parameter_enable" : 0
					}
,
					"text" : "js descriptorControl.js"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-190",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 699.0, 613.0, 63.0, 22.0 ],
					"text" : "sprintf %s"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-177",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 423.0, 81.0, 20.0 ],
					"text" : "fl_confidence $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-179",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 423.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-848",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 379.0, 77.0, 20.0 ],
					"text" : "fl_true_peak $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-176",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 379.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-849",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 335.0, 55.0, 20.0 ],
					"text" : "fl_crest $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-173",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 335.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-850",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 313.0, 67.0, 20.0 ],
					"text" : "fl_flatness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-170",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 313.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-165",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 291.0, 57.0, 20.0 ],
					"text" : "fl_rolloff $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-851",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 291.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-162",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 269.0, 67.0, 20.0 ],
					"text" : "fl_kurtosis $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-852",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 269.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-159",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 247.0, 77.0, 20.0 ],
					"text" : "fl_skewness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-853",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 247.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-156",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 225.0, 64.0, 20.0 ],
					"text" : "fl_spread $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-158",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 225.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-854",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 203.0, 69.0, 20.0 ],
					"text" : "fl_centroid $1"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-148",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 401.0, 77.0, 20.0 ],
					"text" : "fl_frequency $1"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-149",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 467.0, 54.0, 20.0 ],
					"text" : "fl_mfcc $1"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-855",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 445.0, 76.0, 20.0 ],
					"text" : "fl_melbands $1"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-151",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 357.0, 73.0, 20.0 ],
					"text" : "fl_loudness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-856",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 203.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-138",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 401.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-857",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 467.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-142",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 445.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontsize" : 12.0,
					"id" : "obj-858",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 165.0, 181.0, 130.0, 20.0 ],
					"text" : "FluCoMa Descriptors",
					"textjustification" : 2
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-145",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 357.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-128",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 115.0, 86.0, 20.0 ],
					"text" : "ah_roughness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-130",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 115.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-859",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 93.0, 98.0, 20.0 ],
					"text" : "ah_inharmonicity $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-127",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 93.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-861",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 71.0, 87.0, 20.0 ],
					"text" : "ah_confidence $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-124",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 71.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-864",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 49.0, 60.0, 20.0 ],
					"text" : "ah_pitch $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-121",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 49.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-116",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 27.0, 105.0, 20.0 ],
					"text" : "ah_harmonic_ratio $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-865",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 27.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-113",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 5.0, 88.0, 20.0 ],
					"text" : "ah_noise_ratio $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-866",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 275.0, 5.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-110",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 489.0, 55.0, 20.0 ],
					"text" : "ah_sfm $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-867",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 489.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-107",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 467.0, 104.0, 20.0 ],
					"text" : "ah_log_brightness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-109",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 467.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-868",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 445.0, 101.0, 20.0 ],
					"text" : "ah_lin_brightness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-106",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 445.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-869",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 423.0, 92.0, 20.0 ],
					"text" : "ah_log_kurtosis $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-103",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 423.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-870",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 401.0, 89.0, 20.0 ],
					"text" : "ah_lin_kurtosis $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-100",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 401.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-95",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 379.0, 102.0, 20.0 ],
					"text" : "ah_log_skewness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-871",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 379.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-92",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 357.0, 99.0, 20.0 ],
					"text" : "ah_lin_skewness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-872",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 357.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-89",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 335.0, 89.0, 20.0 ],
					"text" : "ah_log_spread $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-873",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 335.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-85",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 313.0, 85.0, 20.0 ],
					"text" : "ah_lin_spread $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-88",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 313.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-82",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 291.0, 94.0, 20.0 ],
					"text" : "ah_log_centroid $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-874",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 291.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-875",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 269.0, 90.0, 20.0 ],
					"text" : "ah_lin_centroid $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-80",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 269.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-75",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 247.0, 79.0, 20.0 ],
					"text" : "ah_loudness $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-876",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 247.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-72",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 225.0, 80.0, 20.0 ],
					"text" : "ah_peakamp $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-877",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 225.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-69",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 203.0, 56.0, 20.0 ],
					"text" : "ah_rms $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-878",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 203.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-66",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 181.0, 55.0, 20.0 ],
					"text" : "ah_abs $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-879",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 181.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-63",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 159.0, 61.0, 20.0 ],
					"text" : "ah_foote $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-65",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 159.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-60",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 137.0, 55.0, 20.0 ],
					"text" : "ah_mkl $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-62",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 137.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-880",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 115.0, 55.0, 20.0 ],
					"text" : "ah_flux $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-59",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 115.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-881",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 93.0, 101.0, 20.0 ],
					"text" : "ah_spectral_crest $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-56",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 93.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-882",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 71.0, 63.0, 20.0 ],
					"text" : "ah_rolloff $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-53",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 71.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-46",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 49.0, 95.0, 20.0 ],
					"text" : "ah_energy_ratio $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-883",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 49.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-45",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 0,
							"revision" : 3,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 431.0, 79.0, 640.0, 480.0 ],
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
									"id" : "obj-24",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 183.0, 151.0, 164.0, 22.0 ],
									"text" : "prepend set_descriptor_state"
								}

							}
, 							{
								"box" : 								{
									"comment" : "Descriptor Control Out",
									"id" : "obj-23",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 183.0, 266.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 183.0, 85.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-24", 0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-23", 0 ],
									"source" : [ "obj-24", 0 ]
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
								"name" : "Luca",
								"default" : 								{
									"accentcolor" : [ 0.32549, 0.345098, 0.372549, 1.0 ],
									"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
									"bgcolor" : [ 0.904179, 0.895477, 0.842975, 0.56 ],
									"fontname" : [ "Open Sans Semibold" ],
									"selectioncolor" : [ 0.720698, 0.16723, 0.080014, 1.0 ],
									"textcolor_inverse" : [ 0.239216, 0.254902, 0.278431, 1.0 ],
									"bgfillcolor" : 									{
										"type" : "gradient",
										"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"color1" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
										"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}
,
									"color" : [ 0.475135, 0.293895, 0.251069, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "PAt_style0",
								"default" : 								{
									"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"fontsize" : [ 12.0 ],
									"bgcolor" : [ 0.901961, 0.901961, 0.901961, 1.0 ],
									"fontname" : [ "Arial" ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
									"clearcolor" : [ 1.0, 0.947758, 0.687073, 1.0 ],
									"bgfillcolor" : 									{
										"type" : "gradient",
										"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"color1" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
										"color2" : [ 0.862745, 0.870588, 0.878431, 1.0 ],
										"angle" : 270.0,
										"proportion" : 0.39,
										"autogradient" : 0
									}
,
									"color" : [ 0.952941, 0.564706, 0.098039, 1.0 ]
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
								"name" : "max6box",
								"default" : 								{
									"accentcolor" : [ 0.8, 0.839216, 0.709804, 1.0 ],
									"bgcolor" : [ 1.0, 1.0, 1.0, 0.5 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "max6inlet",
								"default" : 								{
									"color" : [ 0.423529, 0.372549, 0.27451, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "max6message",
								"default" : 								{
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
									"bgfillcolor" : 									{
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
, 							{
								"name" : "max6outlet",
								"default" : 								{
									"color" : [ 0.0, 0.454902, 0.498039, 1.0 ]
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
								"name" : "newobjMagenta-1",
								"default" : 								{
									"accentcolor" : [ 0.840663, 0.060168, 0.769195, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "newobjYellow-1",
								"default" : 								{
									"accentcolor" : [ 0.82517, 0.78181, 0.059545, 1.0 ],
									"fontsize" : [ 12.059008 ]
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
, 							{
								"name" : "sliderGold-1",
								"default" : 								{
									"accentcolor" : [ 0.764706, 0.592157, 0.101961, 1.0 ],
									"color" : [ 0.907107, 0.934609, 0.842715, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "tap",
								"default" : 								{
									"fontname" : [ "Lato Light" ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
 ]
					}
,
					"patching_rect" : [ 699.0, 547.0, 62.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p descSet"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.0,
					"hidden" : 1,
					"id" : "obj-884",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 27.0, 70.0, 20.0 ],
					"text" : "ah_energy $1"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontsize" : 12.0,
					"id" : "obj-885",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 6.0, 5.0, 157.0, 20.0 ],
					"text" : "Alex Harker's Descriptors",
					"textjustification" : 2
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-886",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 143.0, 27.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"border" : 1,
					"bordercolor" : [ 0.996078431372549, 0.0, 0.0, 1.0 ],
					"grad1" : [ 0.301961, 0.301961, 0.301961, 0.0 ],
					"grad2" : [ 0.2, 0.2, 0.2, 0.0 ],
					"id" : "obj-2484",
					"maxclass" : "panel",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 6.0, 5.0, 289.0, 504.0 ],
					"proportion" : 0.5
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontsize" : 14.0,
					"id" : "obj-6063",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 10.0, 390.0, 22.0 ],
					"text" : "Alex Harker's Pitch",
					"varname" : "jscreated[1]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"id" : "obj-6065",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 32.0, 390.0, 20.0 ],
					"text" : "An autocorrelation fundamental pitch estimator with output in Hz.",
					"varname" : "jscreated[2]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6067",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 89.799999999999997, 195.0, 20.0 ],
					"text" : "Threshold",
					"textjustification" : 2,
					"varname" : "jscreated[3]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6069",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 109.799999999999997, 390.0, 18.0 ],
					"text" : "Confidence level required to report a pitch (higher values indicate more confidence).",
					"textjustification" : 1,
					"varname" : "jscreated[4]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6070",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 297.0, 5.0, 124.0, 22.0 ],
					"text" : "prepend param_set 0",
					"varname" : "jscreated[5]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6072",
					"maxclass" : "flonum",
					"maximum" : 1.0,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 502.0, 87.799999999999997, 190.0, 22.0 ],
					"varname" : "jscreated[6]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6074",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 205.399999999999977, 195.0, 20.0 ],
					"text" : "FFT Size",
					"textjustification" : 2,
					"varname" : "jscreated[7]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6076",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 225.399999999999977, 390.0, 40.0 ],
					"text" : "There is (as always) a trade-off between time and frequency resolutions. Higher FFt sizes give better frequency resolution at the expense of time resolution and vice versa.",
					"textjustification" : 1,
					"varname" : "jscreated[8]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6077",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 297.0, 5.0, 124.0, 22.0 ],
					"text" : "prepend param_set 1",
					"varname" : "jscreated[9]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6079",
					"items" : [ 4, ",", 8, ",", 16, ",", 32, ",", 64, ",", 128, ",", 256, ",", 512, ",", 1024, ",", 2048, ",", 4096, ",", 8192, ",", 16384 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 502.0, 203.399999999999977, 190.0, 22.0 ],
					"varname" : "jscreated[10]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6081",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 321.0, 195.0, 20.0 ],
					"text" : "FFT Hop Size",
					"textjustification" : 2,
					"varname" : "jscreated[11]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6083",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 341.0, 390.0, 51.0 ],
					"text" : "The distance in samples between consecutive frames. Smaller hop sizes will require more time to calculate but can improve time resolution to some extent. If the hop size is greater than the fft size then parts of the data in the buffer~ will be missed (this is not advised but allowed).",
					"textjustification" : 1,
					"varname" : "jscreated[12]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6084",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 297.0, 5.0, 124.0, 22.0 ],
					"text" : "prepend param_set 2",
					"varname" : "jscreated[13]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6086",
					"items" : [ 4, ",", 8, ",", 16, ",", 32, ",", 64, ",", 128, ",", 256, ",", 512, ",", 1024, ",", 2048, ",", 4096, ",", 8192, ",", 16384 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 502.0, 319.0, 190.0, 22.0 ],
					"varname" : "jscreated[14]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6088",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 436.599999999999966, 195.0, 20.0 ],
					"text" : "FFT Window Size",
					"textjustification" : 2,
					"varname" : "jscreated[15]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6090",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 456.599999999999966, 390.0, 40.0 ],
					"text" : "If you wish to perform zero-padding you should set the window size smaller than the fft size. In this circumstance the pitch descriptor may not function correctly (use with caution). The window size cannot be larger than the fft size.",
					"textjustification" : 1,
					"varname" : "jscreated[16]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6091",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 297.0, 5.0, 124.0, 22.0 ],
					"text" : "prepend param_set 3",
					"varname" : "jscreated[17]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6093",
					"items" : [ 4, ",", 8, ",", 16, ",", 32, ",", 64, ",", 128, ",", 256, ",", 512, ",", 1024, ",", 2048, ",", 4096, ",", 8192, ",", 16384 ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 502.0, 434.599999999999966, 190.0, 22.0 ],
					"varname" : "jscreated[18]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6095",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 552.199999999999932, 195.0, 20.0 ],
					"text" : "FFT Window Type",
					"textjustification" : 2,
					"varname" : "jscreated[19]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6097",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 302.0, 572.199999999999932, 390.0, 29.0 ],
					"text" : "Different windows have different characteristics - there are many good references (paper and internet) on this topic. For most purposes the default (hann) will be fine.",
					"textjustification" : 1,
					"varname" : "jscreated[20]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6098",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 297.0, 5.0, 124.0, 22.0 ],
					"text" : "prepend param_set 4",
					"varname" : "jscreated[21]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6100",
					"items" : [ "rectangle", ",", "hann", ",", "hamming", ",", "kaiser", ",", "triangle", ",", "blackman", ",", "blackman62", ",", "blackman70", ",", "blackman74", ",", "blackman92", ",", "blackman", ",", "flattop" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 502.0, 550.199999999999932, 190.0, 22.0 ],
					"varname" : "jscreated[22]"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"bgcolor" : [ 0, 0, 0, 0 ],
					"border" : 1,
					"bordercolor" : [ 1.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-6061",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 297.0, 5.0, 400.0, 630.0 ],
					"proportion" : 0.39,
					"varname" : "jscreated"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"bgcolor" : [ 0, 0, 0, 0 ],
					"border" : 1,
					"bordercolor" : [ 1.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-6102",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 6.0, 637.0, 1200.0, 437.0 ],
					"proportion" : 0.39,
					"varname" : "jscreated[23]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6104",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 11.0, 642.0, 75.0, 20.0 ],
					"text" : "Mean",
					"varname" : "jscreated[24]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6106",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 11.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[25]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6107",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 174.0, 22.0 ],
					"text" : "prepend return_set mean state",
					"varname" : "jscreated[26]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6109",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 91.0, 642.0, 75.0, 20.0 ],
					"text" : "Median",
					"varname" : "jscreated[27]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6111",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 91.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[28]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6112",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 182.0, 22.0 ],
					"text" : "prepend return_set median state",
					"varname" : "jscreated[29]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6114",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 171.0, 642.0, 75.0, 33.0 ],
					"text" : "Time Centroid",
					"varname" : "jscreated[30]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6116",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 171.0, 675.0, 24.0, 24.0 ],
					"varname" : "jscreated[31]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6117",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 216.0, 22.0 ],
					"text" : "prepend return_set time_centroid state",
					"varname" : "jscreated[32]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6119",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 251.0, 642.0, 75.0, 33.0 ],
					"text" : "Standard Deviation",
					"varname" : "jscreated[33]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6121",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 251.0, 675.0, 24.0, 24.0 ],
					"varname" : "jscreated[34]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6122",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 216.0, 22.0 ],
					"text" : "prepend return_set standard_dev state",
					"varname" : "jscreated[35]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6124",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 331.0, 642.0, 75.0, 20.0 ],
					"text" : "Range",
					"varname" : "jscreated[36]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6126",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 331.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[37]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6127",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 174.0, 22.0 ],
					"text" : "prepend return_set range state",
					"varname" : "jscreated[38]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6129",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 411.0, 642.0, 75.0, 20.0 ],
					"text" : "Ratio Above",
					"varname" : "jscreated[39]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6131",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 411.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[40]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6132",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 206.0, 22.0 ],
					"text" : "prepend return_set ratio_above state",
					"varname" : "jscreated[41]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6134",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 411.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[42]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6136",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 411.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[43]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6137",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 230.0, 22.0 ],
					"text" : "prepend return_set ratio_above threshold",
					"varname" : "jscreated[44]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6139",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 411.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[45]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6141",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 411.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[46]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6142",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 256.0, 22.0 ],
					"text" : "prepend return_set ratio_above thresholdType",
					"varname" : "jscreated[47]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6144",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 491.0, 642.0, 75.0, 20.0 ],
					"text" : "Ratio Below",
					"varname" : "jscreated[48]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6146",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 491.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[49]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6147",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 204.0, 22.0 ],
					"text" : "prepend return_set ratio_below state",
					"varname" : "jscreated[50]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6149",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 491.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[51]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6151",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 491.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[52]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6152",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 228.0, 22.0 ],
					"text" : "prepend return_set ratio_below threshold",
					"varname" : "jscreated[53]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6154",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 491.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[54]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6156",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 491.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[55]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6157",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 254.0, 22.0 ],
					"text" : "prepend return_set ratio_below thresholdType",
					"varname" : "jscreated[56]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6159",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 642.0, 75.0, 20.0 ],
					"text" : "Max.",
					"varname" : "jscreated[57]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6161",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[58]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6162",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 166.0, 22.0 ],
					"text" : "prepend return_set max state",
					"varname" : "jscreated[59]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6164",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[60]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6166",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[61]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6167",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 190.0, 22.0 ],
					"text" : "prepend return_set max threshold",
					"varname" : "jscreated[62]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6169",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[63]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6171",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[64]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6172",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 216.0, 22.0 ],
					"text" : "prepend return_set max thresholdType",
					"varname" : "jscreated[65]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6174",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 766.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[66]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6176",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 795.0, 75.0, 22.0 ],
					"varname" : "jscreated[67]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6177",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 252.0, 22.0 ],
					"text" : "prepend return_set max numberReturnValues",
					"varname" : "jscreated[68]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6179",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 642.0, 75.0, 20.0 ],
					"text" : "Max. Pos.",
					"varname" : "jscreated[69]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6181",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[70]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6182",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 192.0, 22.0 ],
					"text" : "prepend return_set max_pos state",
					"varname" : "jscreated[71]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6184",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[72]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6186",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[73]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6187",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 216.0, 22.0 ],
					"text" : "prepend return_set max_pos threshold",
					"varname" : "jscreated[74]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6189",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[75]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6191",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[76]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6192",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 242.0, 22.0 ],
					"text" : "prepend return_set max_pos thresholdType",
					"varname" : "jscreated[77]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6194",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 766.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[78]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6196",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 795.0, 75.0, 22.0 ],
					"varname" : "jscreated[79]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6197",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 278.0, 22.0 ],
					"text" : "prepend return_set max_pos numberReturnValues",
					"varname" : "jscreated[80]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6199",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 642.0, 75.0, 20.0 ],
					"text" : "Min.",
					"varname" : "jscreated[81]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6201",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[82]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6202",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 162.0, 22.0 ],
					"text" : "prepend return_set min state",
					"varname" : "jscreated[83]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6204",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[84]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6206",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[85]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6207",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 186.0, 22.0 ],
					"text" : "prepend return_set min threshold",
					"varname" : "jscreated[86]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6209",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[87]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6211",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[88]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6212",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 212.0, 22.0 ],
					"text" : "prepend return_set min thresholdType",
					"varname" : "jscreated[89]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6214",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 766.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[90]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6216",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 795.0, 75.0, 22.0 ],
					"varname" : "jscreated[91]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6217",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 248.0, 22.0 ],
					"text" : "prepend return_set min numberReturnValues",
					"varname" : "jscreated[92]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6219",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 642.0, 75.0, 20.0 ],
					"text" : "Min. Pos.",
					"varname" : "jscreated[93]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6221",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[94]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6222",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 188.0, 22.0 ],
					"text" : "prepend return_set min_pos state",
					"varname" : "jscreated[95]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6224",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[96]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6226",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[97]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6227",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 212.0, 22.0 ],
					"text" : "prepend return_set min_pos threshold",
					"varname" : "jscreated[98]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6229",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[99]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6231",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[100]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6232",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 238.0, 22.0 ],
					"text" : "prepend return_set min_pos thresholdType",
					"varname" : "jscreated[101]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6234",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 766.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[102]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6236",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 795.0, 75.0, 22.0 ],
					"varname" : "jscreated[103]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6237",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 274.0, 22.0 ],
					"text" : "prepend return_set min_pos numberReturnValues",
					"varname" : "jscreated[104]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6239",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 642.0, 75.0, 20.0 ],
					"text" : "Peak",
					"varname" : "jscreated[105]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6241",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[106]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6242",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 170.0, 22.0 ],
					"text" : "prepend return_set peak state",
					"varname" : "jscreated[107]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6244",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[108]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6246",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[109]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6247",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 192.0, 22.0 ],
					"text" : "prepend return_set peak threshold",
					"varname" : "jscreated[110]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6249",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[111]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6251",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[112]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6252",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 218.0, 22.0 ],
					"text" : "prepend return_set peak thresholdType",
					"varname" : "jscreated[113]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6254",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 766.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[114]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6256",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 795.0, 75.0, 22.0 ],
					"varname" : "jscreated[115]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6257",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 256.0, 22.0 ],
					"text" : "prepend return_set peak numberReturnValues",
					"varname" : "jscreated[116]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6259",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 971.0, 642.0, 75.0, 20.0 ],
					"text" : "Peak Pos.",
					"varname" : "jscreated[117]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6261",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 971.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[118]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6262",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 196.0, 22.0 ],
					"text" : "prepend return_set peak_pos state",
					"varname" : "jscreated[119]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6264",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 971.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[120]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6266",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 971.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[121]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6267",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 218.0, 22.0 ],
					"text" : "prepend return_set peak_pos threshold",
					"varname" : "jscreated[122]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6269",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 971.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[123]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6271",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 971.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[124]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6272",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 244.0, 22.0 ],
					"text" : "prepend return_set peak_pos thresholdType",
					"varname" : "jscreated[125]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6274",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 971.0, 766.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[126]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6276",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 971.0, 795.0, 75.0, 22.0 ],
					"varname" : "jscreated[127]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6277",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 282.0, 22.0 ],
					"text" : "prepend return_set peak_pos numberReturnValues",
					"varname" : "jscreated[128]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6279",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1051.0, 642.0, 75.0, 20.0 ],
					"text" : "Trough",
					"varname" : "jscreated[129]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6281",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1051.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[130]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6282",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 178.0, 22.0 ],
					"text" : "prepend return_set trough state",
					"varname" : "jscreated[131]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6284",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1051.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[132]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6286",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1051.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[133]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6287",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 200.0, 22.0 ],
					"text" : "prepend return_set trough threshold",
					"varname" : "jscreated[134]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6289",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1051.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[135]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6291",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1051.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[136]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6292",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 226.0, 22.0 ],
					"text" : "prepend return_set trough thresholdType",
					"varname" : "jscreated[137]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6294",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1051.0, 766.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[138]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6296",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1051.0, 795.0, 75.0, 22.0 ],
					"varname" : "jscreated[139]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6297",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 264.0, 22.0 ],
					"text" : "prepend return_set trough numberReturnValues",
					"varname" : "jscreated[140]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6299",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1131.0, 642.0, 75.0, 20.0 ],
					"text" : "Trough Pos.",
					"varname" : "jscreated[141]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6301",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1131.0, 662.0, 24.0, 24.0 ],
					"varname" : "jscreated[142]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6302",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 204.0, 22.0 ],
					"text" : "prepend return_set trough_pos state",
					"varname" : "jscreated[143]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6304",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1131.0, 686.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[144]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6306",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1131.0, 704.0, 75.0, 22.0 ],
					"varname" : "jscreated[145]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6307",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 226.0, 22.0 ],
					"text" : "prepend return_set trough_pos threshold",
					"varname" : "jscreated[146]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6309",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1131.0, 726.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[147]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6311",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1131.0, 744.0, 75.0, 22.0 ],
					"varname" : "jscreated[148]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6312",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 252.0, 22.0 ],
					"text" : "prepend return_set trough_pos thresholdType",
					"varname" : "jscreated[149]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6314",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1131.0, 766.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[150]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6316",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1131.0, 795.0, 75.0, 22.0 ],
					"varname" : "jscreated[151]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6317",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 290.0, 22.0 ],
					"text" : "prepend return_set trough_pos numberReturnValues",
					"varname" : "jscreated[152]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6319",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 11.0, 817.0, 75.0, 33.0 ],
					"text" : "Crossing Peak",
					"varname" : "jscreated[153]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6321",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 11.0, 850.0, 24.0, 24.0 ],
					"varname" : "jscreated[154]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6322",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 220.0, 22.0 ],
					"text" : "prepend return_set crossing_peak state",
					"varname" : "jscreated[155]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6324",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 11.0, 874.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[156]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6326",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 11.0, 892.0, 75.0, 22.0 ],
					"varname" : "jscreated[157]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6327",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 244.0, 22.0 ],
					"text" : "prepend return_set crossing_peak threshold",
					"varname" : "jscreated[158]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6329",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 11.0, 914.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[159]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6331",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 11.0, 932.0, 75.0, 22.0 ],
					"varname" : "jscreated[160]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6332",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 270.0, 22.0 ],
					"text" : "prepend return_set crossing_peak thresholdType",
					"varname" : "jscreated[161]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6334",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 11.0, 954.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[162]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6336",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 11.0, 983.0, 75.0, 22.0 ],
					"varname" : "jscreated[163]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6337",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 306.0, 22.0 ],
					"text" : "prepend return_set crossing_peak numberReturnValues",
					"varname" : "jscreated[164]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6339",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 11.0, 1005.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[165]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6341",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 11.0, 1034.0, 75.0, 22.0 ],
					"varname" : "jscreated[166]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6342",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 250.0, 22.0 ],
					"text" : "prepend return_set crossing_peak maskTime",
					"varname" : "jscreated[167]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6344",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 91.0, 817.0, 75.0, 33.0 ],
					"text" : "Crossing Peak Pos.",
					"varname" : "jscreated[168]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6346",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 91.0, 850.0, 24.0, 24.0 ],
					"varname" : "jscreated[169]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6347",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 246.0, 22.0 ],
					"text" : "prepend return_set crossing_peak_pos state",
					"varname" : "jscreated[170]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6349",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 91.0, 874.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[171]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6351",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 91.0, 892.0, 75.0, 22.0 ],
					"varname" : "jscreated[172]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6352",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 270.0, 22.0 ],
					"text" : "prepend return_set crossing_peak_pos threshold",
					"varname" : "jscreated[173]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6354",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 91.0, 914.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[174]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6356",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 91.0, 932.0, 75.0, 22.0 ],
					"varname" : "jscreated[175]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6357",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 296.0, 22.0 ],
					"text" : "prepend return_set crossing_peak_pos thresholdType",
					"varname" : "jscreated[176]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6359",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 91.0, 954.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[177]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6361",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 91.0, 983.0, 75.0, 22.0 ],
					"varname" : "jscreated[178]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6362",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 332.0, 22.0 ],
					"text" : "prepend return_set crossing_peak_pos numberReturnValues",
					"varname" : "jscreated[179]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6364",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 91.0, 1005.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[180]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6366",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 91.0, 1034.0, 75.0, 22.0 ],
					"varname" : "jscreated[181]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6367",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 276.0, 22.0 ],
					"text" : "prepend return_set crossing_peak_pos maskTime",
					"varname" : "jscreated[182]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6369",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 171.0, 817.0, 75.0, 33.0 ],
					"text" : "Cross Above",
					"varname" : "jscreated[183]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6371",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 171.0, 850.0, 24.0, 24.0 ],
					"varname" : "jscreated[184]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6372",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 212.0, 22.0 ],
					"text" : "prepend return_set cross_above state",
					"varname" : "jscreated[185]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6374",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 171.0, 874.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[186]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6376",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 171.0, 892.0, 75.0, 22.0 ],
					"varname" : "jscreated[187]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6377",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 234.0, 22.0 ],
					"text" : "prepend return_set cross_above threshold",
					"varname" : "jscreated[188]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6379",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 171.0, 914.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[189]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6381",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 171.0, 932.0, 75.0, 22.0 ],
					"varname" : "jscreated[190]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6382",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 260.0, 22.0 ],
					"text" : "prepend return_set cross_above thresholdType",
					"varname" : "jscreated[191]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6384",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 171.0, 954.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[192]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6386",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 171.0, 983.0, 75.0, 22.0 ],
					"varname" : "jscreated[193]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6387",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 298.0, 22.0 ],
					"text" : "prepend return_set cross_above numberReturnValues",
					"varname" : "jscreated[194]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6389",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 171.0, 1005.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[195]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6391",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 171.0, 1034.0, 75.0, 22.0 ],
					"varname" : "jscreated[196]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6392",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 240.0, 22.0 ],
					"text" : "prepend return_set cross_above maskTime",
					"varname" : "jscreated[197]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6394",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 251.0, 817.0, 75.0, 33.0 ],
					"text" : "Crossings Above",
					"varname" : "jscreated[198]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6396",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 251.0, 850.0, 24.0, 24.0 ],
					"varname" : "jscreated[199]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6397",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 234.0, 22.0 ],
					"text" : "prepend return_set crossings_above state",
					"varname" : "jscreated[200]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6399",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 251.0, 874.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[201]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6401",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 251.0, 892.0, 75.0, 22.0 ],
					"varname" : "jscreated[202]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6402",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 256.0, 22.0 ],
					"text" : "prepend return_set crossings_above threshold",
					"varname" : "jscreated[203]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6404",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 251.0, 914.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[204]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6406",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 251.0, 932.0, 75.0, 22.0 ],
					"varname" : "jscreated[205]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6407",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 282.0, 22.0 ],
					"text" : "prepend return_set crossings_above thresholdType",
					"varname" : "jscreated[206]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6409",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 251.0, 954.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[207]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6411",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 251.0, 983.0, 75.0, 22.0 ],
					"varname" : "jscreated[208]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6412",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 320.0, 22.0 ],
					"text" : "prepend return_set crossings_above numberReturnValues",
					"varname" : "jscreated[209]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6414",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 251.0, 1005.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[210]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6416",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 251.0, 1034.0, 75.0, 22.0 ],
					"varname" : "jscreated[211]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6417",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 262.0, 22.0 ],
					"text" : "prepend return_set crossings_above maskTime",
					"varname" : "jscreated[212]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6419",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 331.0, 817.0, 75.0, 33.0 ],
					"text" : "Crossing Trough",
					"varname" : "jscreated[213]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6421",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 331.0, 850.0, 24.0, 24.0 ],
					"varname" : "jscreated[214]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6422",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 228.0, 22.0 ],
					"text" : "prepend return_set crossing_trough state",
					"varname" : "jscreated[215]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6424",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 331.0, 874.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[216]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6426",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 331.0, 892.0, 75.0, 22.0 ],
					"varname" : "jscreated[217]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6427",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 252.0, 22.0 ],
					"text" : "prepend return_set crossing_trough threshold",
					"varname" : "jscreated[218]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6429",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 331.0, 914.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[219]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6431",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 331.0, 932.0, 75.0, 22.0 ],
					"varname" : "jscreated[220]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6432",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 278.0, 22.0 ],
					"text" : "prepend return_set crossing_trough thresholdType",
					"varname" : "jscreated[221]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6434",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 331.0, 954.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[222]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6436",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 331.0, 983.0, 75.0, 22.0 ],
					"varname" : "jscreated[223]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6437",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 314.0, 22.0 ],
					"text" : "prepend return_set crossing_trough numberReturnValues",
					"varname" : "jscreated[224]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6439",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 331.0, 1005.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[225]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6441",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 331.0, 1034.0, 75.0, 22.0 ],
					"varname" : "jscreated[226]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6442",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 258.0, 22.0 ],
					"text" : "prepend return_set crossing_trough maskTime",
					"varname" : "jscreated[227]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6444",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 411.0, 817.0, 75.0, 33.0 ],
					"text" : "Crossing Trough Pos.",
					"varname" : "jscreated[228]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6446",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 411.0, 850.0, 24.0, 24.0 ],
					"varname" : "jscreated[229]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6447",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 254.0, 22.0 ],
					"text" : "prepend return_set crossing_trough_pos state",
					"varname" : "jscreated[230]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6449",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 411.0, 874.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[231]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6451",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 411.0, 892.0, 75.0, 22.0 ],
					"varname" : "jscreated[232]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6452",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 278.0, 22.0 ],
					"text" : "prepend return_set crossing_trough_pos threshold",
					"varname" : "jscreated[233]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6454",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 411.0, 914.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[234]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6456",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 411.0, 932.0, 75.0, 22.0 ],
					"varname" : "jscreated[235]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6457",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 304.0, 22.0 ],
					"text" : "prepend return_set crossing_trough_pos thresholdType",
					"varname" : "jscreated[236]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6459",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 411.0, 954.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[237]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6461",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 411.0, 983.0, 75.0, 22.0 ],
					"varname" : "jscreated[238]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6462",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 340.0, 22.0 ],
					"text" : "prepend return_set crossing_trough_pos numberReturnValues",
					"varname" : "jscreated[239]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6464",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 411.0, 1005.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[240]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6466",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 411.0, 1034.0, 75.0, 22.0 ],
					"varname" : "jscreated[241]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6467",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 284.0, 22.0 ],
					"text" : "prepend return_set crossing_trough_pos maskTime",
					"varname" : "jscreated[242]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6469",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 491.0, 817.0, 75.0, 33.0 ],
					"text" : "Cross Below",
					"varname" : "jscreated[243]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6471",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 491.0, 850.0, 24.0, 24.0 ],
					"varname" : "jscreated[244]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6472",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 210.0, 22.0 ],
					"text" : "prepend return_set cross_below state",
					"varname" : "jscreated[245]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6474",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 491.0, 874.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[246]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6476",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 491.0, 892.0, 75.0, 22.0 ],
					"varname" : "jscreated[247]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6477",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 234.0, 22.0 ],
					"text" : "prepend return_set cross_below threshold",
					"varname" : "jscreated[248]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6479",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 491.0, 914.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[249]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6481",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 491.0, 932.0, 75.0, 22.0 ],
					"varname" : "jscreated[250]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6482",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 260.0, 22.0 ],
					"text" : "prepend return_set cross_below thresholdType",
					"varname" : "jscreated[251]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6484",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 491.0, 954.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[252]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6486",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 491.0, 983.0, 75.0, 22.0 ],
					"varname" : "jscreated[253]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6487",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 296.0, 22.0 ],
					"text" : "prepend return_set cross_below numberReturnValues",
					"varname" : "jscreated[254]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6489",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 491.0, 1005.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[255]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6491",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 491.0, 1034.0, 75.0, 22.0 ],
					"varname" : "jscreated[256]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6493",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 238.0, 22.0 ],
					"text" : "prepend return_set cross_below maskTime",
					"varname" : "jscreated[257]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6496",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 817.0, 75.0, 33.0 ],
					"text" : "Crossings Below",
					"varname" : "jscreated[258]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6498",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 850.0, 24.0, 24.0 ],
					"varname" : "jscreated[259]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6499",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 232.0, 22.0 ],
					"text" : "prepend return_set crossings_below state",
					"varname" : "jscreated[260]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6501",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 874.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[261]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6503",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 892.0, 75.0, 22.0 ],
					"varname" : "jscreated[262]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6504",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 256.0, 22.0 ],
					"text" : "prepend return_set crossings_below threshold",
					"varname" : "jscreated[263]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6506",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 914.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[264]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6508",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 932.0, 75.0, 22.0 ],
					"varname" : "jscreated[265]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6509",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 282.0, 22.0 ],
					"text" : "prepend return_set crossings_below thresholdType",
					"varname" : "jscreated[266]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6511",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 954.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[267]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6513",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 983.0, 75.0, 22.0 ],
					"varname" : "jscreated[268]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6514",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 318.0, 22.0 ],
					"text" : "prepend return_set crossings_below numberReturnValues",
					"varname" : "jscreated[269]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6516",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 571.0, 1005.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[270]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6518",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 571.0, 1034.0, 75.0, 22.0 ],
					"varname" : "jscreated[271]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6519",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 260.0, 22.0 ],
					"text" : "prepend return_set crossings_below maskTime",
					"varname" : "jscreated[272]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6521",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 817.0, 75.0, 47.0 ],
					"text" : "Longest Cross Above",
					"varname" : "jscreated[273]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6523",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 864.0, 24.0, 24.0 ],
					"varname" : "jscreated[274]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6524",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 256.0, 22.0 ],
					"text" : "prepend return_set longest_cross_above state",
					"varname" : "jscreated[275]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6526",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 888.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[276]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6528",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 906.0, 75.0, 22.0 ],
					"varname" : "jscreated[277]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6529",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 280.0, 22.0 ],
					"text" : "prepend return_set longest_cross_above threshold",
					"varname" : "jscreated[278]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6531",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 928.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[279]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6533",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 946.0, 75.0, 22.0 ],
					"varname" : "jscreated[280]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6534",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 306.0, 22.0 ],
					"text" : "prepend return_set longest_cross_above thresholdType",
					"varname" : "jscreated[281]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6536",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 968.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[282]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6538",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 997.0, 75.0, 22.0 ],
					"varname" : "jscreated[283]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6539",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 342.0, 22.0 ],
					"text" : "prepend return_set longest_cross_above numberReturnValues",
					"varname" : "jscreated[284]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6541",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 651.0, 1019.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[285]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6543",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 651.0, 1048.0, 75.0, 22.0 ],
					"varname" : "jscreated[286]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6544",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 286.0, 22.0 ],
					"text" : "prepend return_set longest_cross_above maskTime",
					"varname" : "jscreated[287]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6546",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 817.0, 75.0, 47.0 ],
					"text" : "Longest Crossings Above",
					"varname" : "jscreated[288]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6548",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 864.0, 24.0, 24.0 ],
					"varname" : "jscreated[289]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6549",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 278.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_above state",
					"varname" : "jscreated[290]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6551",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 888.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[291]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6553",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 906.0, 75.0, 22.0 ],
					"varname" : "jscreated[292]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6554",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 302.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_above threshold",
					"varname" : "jscreated[293]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6556",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 928.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[294]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6558",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 946.0, 75.0, 22.0 ],
					"varname" : "jscreated[295]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6559",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 328.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_above thresholdType",
					"varname" : "jscreated[296]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6561",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 968.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[297]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6563",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 997.0, 75.0, 22.0 ],
					"varname" : "jscreated[298]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6564",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 364.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_above numberReturnValues",
					"varname" : "jscreated[299]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6566",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 731.0, 1019.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[300]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6568",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 731.0, 1048.0, 75.0, 22.0 ],
					"varname" : "jscreated[301]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6569",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 308.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_above maskTime",
					"varname" : "jscreated[302]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6571",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 817.0, 75.0, 47.0 ],
					"text" : "Longest Cross Below",
					"varname" : "jscreated[303]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6573",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 864.0, 24.0, 24.0 ],
					"varname" : "jscreated[304]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6574",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 256.0, 22.0 ],
					"text" : "prepend return_set longest_cross_below state",
					"varname" : "jscreated[305]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6576",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 888.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[306]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6578",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 906.0, 75.0, 22.0 ],
					"varname" : "jscreated[307]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6579",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 278.0, 22.0 ],
					"text" : "prepend return_set longest_cross_below threshold",
					"varname" : "jscreated[308]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6581",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 928.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[309]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6583",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 946.0, 75.0, 22.0 ],
					"varname" : "jscreated[310]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6584",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 304.0, 22.0 ],
					"text" : "prepend return_set longest_cross_below thresholdType",
					"varname" : "jscreated[311]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6586",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 968.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[312]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6588",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 997.0, 75.0, 22.0 ],
					"varname" : "jscreated[313]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6589",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 342.0, 22.0 ],
					"text" : "prepend return_set longest_cross_below numberReturnValues",
					"varname" : "jscreated[314]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6591",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 811.0, 1019.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[315]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6593",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 811.0, 1048.0, 75.0, 22.0 ],
					"varname" : "jscreated[316]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6594",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 284.0, 22.0 ],
					"text" : "prepend return_set longest_cross_below maskTime",
					"varname" : "jscreated[317]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6596",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 817.0, 75.0, 47.0 ],
					"text" : "Longest Crossings Below",
					"varname" : "jscreated[318]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6598",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 864.0, 24.0, 24.0 ],
					"varname" : "jscreated[319]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6599",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 278.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_below state",
					"varname" : "jscreated[320]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6601",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 888.0, 75.0, 18.0 ],
					"text" : "Threshold:",
					"varname" : "jscreated[321]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-6603",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 906.0, 75.0, 22.0 ],
					"varname" : "jscreated[322]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6604",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 300.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_below threshold",
					"varname" : "jscreated[323]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6606",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 928.0, 75.0, 18.0 ],
					"text" : "Type:",
					"varname" : "jscreated[324]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6608",
					"items" : [ "abs", ",", "peak_mul", ",", "peak_add", ",", "peak_db", ",", "mean_mul", ",", "mean_add", ",", "mean_db" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 946.0, 75.0, 22.0 ],
					"varname" : "jscreated[325]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6609",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 326.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_below thresholdType",
					"varname" : "jscreated[326]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6611",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 968.0, 75.0, 29.0 ],
					"text" : "No. Return Values:",
					"varname" : "jscreated[327]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6613",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 997.0, 75.0, 22.0 ],
					"varname" : "jscreated[328]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6614",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 364.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_below numberReturnValues",
					"varname" : "jscreated[329]"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 2,
					"fontsize" : 10.0,
					"id" : "obj-6616",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 891.0, 1019.0, 75.0, 29.0 ],
					"text" : "Mask Time (ms):",
					"varname" : "jscreated[330]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6618",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 891.0, 1048.0, 75.0, 22.0 ],
					"varname" : "jscreated[331]"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-6619",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 6.0, 637.0, 306.0, 22.0 ],
					"text" : "prepend return_set longest_crossings_below maskTime",
					"varname" : "jscreated[332]"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-870", 0 ],
					"hidden" : 1,
					"source" : [ "obj-100", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8331", 0 ],
					"source" : [ "obj-10054", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-869", 0 ],
					"hidden" : 1,
					"source" : [ "obj-103", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-10300", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-868", 0 ],
					"hidden" : 1,
					"source" : [ "obj-106", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-107", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-107", 0 ],
					"hidden" : 1,
					"source" : [ "obj-109", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-110", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-113", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-116", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-864", 0 ],
					"hidden" : 1,
					"source" : [ "obj-121", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-861", 0 ],
					"hidden" : 1,
					"source" : [ "obj-124", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-859", 0 ],
					"hidden" : 1,
					"source" : [ "obj-127", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-128", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-128", 0 ],
					"hidden" : 1,
					"source" : [ "obj-130", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-148", 0 ],
					"hidden" : 1,
					"source" : [ "obj-138", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8329", 1 ],
					"source" : [ "obj-14196", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-855", 0 ],
					"hidden" : 1,
					"source" : [ "obj-142", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-151", 0 ],
					"hidden" : 1,
					"source" : [ "obj-145", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-148", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-149", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-151", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-156", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-156", 0 ],
					"hidden" : 1,
					"source" : [ "obj-158", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-159", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-162", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-165", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-850", 0 ],
					"hidden" : 1,
					"source" : [ "obj-170", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-849", 0 ],
					"hidden" : 1,
					"source" : [ "obj-173", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-848", 0 ],
					"hidden" : 1,
					"source" : [ "obj-176", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-177", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-177", 0 ],
					"hidden" : 1,
					"source" : [ "obj-179", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10300", 0 ],
					"source" : [ "obj-190", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2039", 1 ],
					"order" : 0,
					"source" : [ "obj-2033", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2039", 0 ],
					"order" : 1,
					"source" : [ "obj-2033", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2033", 0 ],
					"source" : [ "obj-2037", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2033", 0 ],
					"source" : [ "obj-2038", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2032", 0 ],
					"source" : [ "obj-2041", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-190", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6492", 0 ],
					"source" : [ "obj-3", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-884", 0 ],
					"hidden" : 1,
					"source" : [ "obj-341", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-46", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"hidden" : 1,
					"source" : [ "obj-523", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-882", 0 ],
					"hidden" : 1,
					"source" : [ "obj-524", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-881", 0 ],
					"hidden" : 1,
					"source" : [ "obj-525", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-880", 0 ],
					"hidden" : 1,
					"source" : [ "obj-526", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"hidden" : 1,
					"source" : [ "obj-527", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-63", 0 ],
					"hidden" : 1,
					"source" : [ "obj-528", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-66", 0 ],
					"hidden" : 1,
					"source" : [ "obj-529", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-882", 0 ],
					"hidden" : 1,
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-69", 0 ],
					"hidden" : 1,
					"source" : [ "obj-530", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 0 ],
					"hidden" : 1,
					"source" : [ "obj-531", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-875", 0 ],
					"hidden" : 1,
					"source" : [ "obj-533", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-82", 0 ],
					"hidden" : 1,
					"source" : [ "obj-534", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-85", 0 ],
					"hidden" : 1,
					"source" : [ "obj-535", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-89", 0 ],
					"hidden" : 1,
					"source" : [ "obj-536", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-92", 0 ],
					"hidden" : 1,
					"source" : [ "obj-537", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 0 ],
					"hidden" : 1,
					"source" : [ "obj-538", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-870", 0 ],
					"hidden" : 1,
					"source" : [ "obj-539", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-869", 0 ],
					"hidden" : 1,
					"source" : [ "obj-540", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-128", 0 ],
					"hidden" : 1,
					"source" : [ "obj-541", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-859", 0 ],
					"hidden" : 1,
					"source" : [ "obj-542", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-861", 0 ],
					"hidden" : 1,
					"source" : [ "obj-543", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-864", 0 ],
					"hidden" : 1,
					"source" : [ "obj-544", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-116", 0 ],
					"hidden" : 1,
					"source" : [ "obj-545", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5454", 0 ],
					"hidden" : 1,
					"source" : [ "obj-5452", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5456", 0 ],
					"hidden" : 1,
					"source" : [ "obj-5453", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-5454", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5454", 0 ],
					"hidden" : 1,
					"source" : [ "obj-5455", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-5456", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5456", 0 ],
					"hidden" : 1,
					"source" : [ "obj-5457", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-113", 0 ],
					"hidden" : 1,
					"source" : [ "obj-546", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-110", 0 ],
					"hidden" : 1,
					"source" : [ "obj-547", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-107", 0 ],
					"hidden" : 1,
					"source" : [ "obj-548", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-868", 0 ],
					"hidden" : 1,
					"source" : [ "obj-549", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-881", 0 ],
					"hidden" : 1,
					"source" : [ "obj-56", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-880", 0 ],
					"hidden" : 1,
					"source" : [ "obj-59", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6070", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6070", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6072", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6077", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6077", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6079", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6084", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6084", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6086", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6091", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6091", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6093", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6098", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6098", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6100", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6107", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6106", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6107", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6112", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6111", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6112", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6117", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6116", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6117", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6122", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6121", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6122", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6127", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6126", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6127", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6132", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6131", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6132", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6137", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6136", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6137", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6142", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6141", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6142", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6147", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6146", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6147", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6152", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6151", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6152", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6157", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6156", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6157", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6162", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6161", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6162", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6167", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6166", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6167", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6172", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6171", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6172", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6177", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6176", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6177", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6182", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6181", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6182", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6187", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6186", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6187", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6192", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6191", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6192", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6197", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6196", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6197", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"hidden" : 1,
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6202", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6201", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6202", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6207", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6206", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6207", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6212", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6211", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6212", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6217", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6216", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6217", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6222", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6221", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6222", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6227", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6226", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6227", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6232", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6231", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6232", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6237", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6236", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6237", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6242", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6241", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6242", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6247", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6246", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6247", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6252", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6251", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6252", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6257", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6256", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6257", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6262", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6261", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6262", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6267", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6266", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6267", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6272", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6271", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6272", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6277", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6276", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6277", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6282", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6281", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6282", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6287", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6286", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6287", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6292", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6291", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6292", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6297", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6296", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6297", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-63", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6302", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6301", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6302", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6307", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6306", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6307", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6312", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6311", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6312", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6317", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6316", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6317", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6322", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6321", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6322", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6327", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6326", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6327", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-633", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6332", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6331", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6332", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6337", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6336", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6337", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6342", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6341", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6342", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6347", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6346", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6347", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6352", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6351", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6352", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6357", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6356", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6357", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6362", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6361", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6362", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6367", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6366", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6367", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6372", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6371", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6372", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6377", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6376", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6377", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6382", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6381", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6382", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6387", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6386", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6387", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6392", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6391", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6392", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6397", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6396", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6397", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6402", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6401", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6402", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6407", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6406", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6407", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6412", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6411", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6412", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6417", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6416", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6417", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6422", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6421", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6422", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6427", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6426", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6427", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6432", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6431", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6432", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6437", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6436", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6437", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6442", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6441", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6442", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6447", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6446", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6447", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6452", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6451", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6452", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6457", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6456", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6457", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6462", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6461", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6462", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6467", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6466", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6467", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6472", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6471", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6472", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6477", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6476", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6477", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6482", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6481", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6482", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6487", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6486", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6487", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6493", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6491", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6494", 0 ],
					"source" : [ "obj-6492", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6493", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6499", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6498", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6499", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-63", 0 ],
					"hidden" : 1,
					"source" : [ "obj-65", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6504", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6503", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6504", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6509", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6508", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6509", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6514", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6513", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6514", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6519", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6518", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6519", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6524", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6523", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6524", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6529", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6528", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6529", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6534", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6533", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6534", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6539", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6538", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6539", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6544", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6543", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6544", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6549", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6548", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6549", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6554", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6553", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6554", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6559", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6558", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6559", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6564", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6563", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6564", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6569", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6568", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6569", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6574", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6573", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6574", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6579", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6578", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6579", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6584", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6583", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6584", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6589", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6588", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6589", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6594", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6593", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6594", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6599", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6598", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6599", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-66", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6604", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6603", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6604", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6609", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6608", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6609", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6614", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6613", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6614", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6619", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6618", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"source" : [ "obj-6619", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-69", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-72", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-75", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-854", 0 ],
					"hidden" : 1,
					"source" : [ "obj-766", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-156", 0 ],
					"hidden" : 1,
					"source" : [ "obj-767", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-159", 0 ],
					"hidden" : 1,
					"source" : [ "obj-768", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-162", 0 ],
					"hidden" : 1,
					"source" : [ "obj-769", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-165", 0 ],
					"hidden" : 1,
					"source" : [ "obj-770", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-850", 0 ],
					"hidden" : 1,
					"source" : [ "obj-771", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-849", 0 ],
					"hidden" : 1,
					"source" : [ "obj-772", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-151", 0 ],
					"hidden" : 1,
					"source" : [ "obj-773", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-848", 0 ],
					"hidden" : 1,
					"source" : [ "obj-774", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-148", 0 ],
					"hidden" : 1,
					"source" : [ "obj-775", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-177", 0 ],
					"hidden" : 1,
					"source" : [ "obj-776", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-855", 0 ],
					"hidden" : 1,
					"source" : [ "obj-777", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-149", 0 ],
					"hidden" : 1,
					"source" : [ "obj-778", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-875", 0 ],
					"hidden" : 1,
					"source" : [ "obj-80", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-82", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-8327", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8327", 0 ],
					"source" : [ "obj-8328", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8328", 1 ],
					"source" : [ "obj-8329", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8329", 0 ],
					"source" : [ "obj-8331", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8328", 0 ],
					"source" : [ "obj-8333", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-848", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-849", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-85", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-850", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-165", 0 ],
					"hidden" : 1,
					"source" : [ "obj-851", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-162", 0 ],
					"hidden" : 1,
					"source" : [ "obj-852", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-159", 0 ],
					"hidden" : 1,
					"source" : [ "obj-853", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-854", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-855", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-854", 0 ],
					"hidden" : 1,
					"source" : [ "obj-856", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-149", 0 ],
					"hidden" : 1,
					"source" : [ "obj-857", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-859", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-861", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-864", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-116", 0 ],
					"hidden" : 1,
					"source" : [ "obj-865", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-113", 0 ],
					"hidden" : 1,
					"source" : [ "obj-866", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-110", 0 ],
					"hidden" : 1,
					"source" : [ "obj-867", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-868", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-869", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-870", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 0 ],
					"hidden" : 1,
					"source" : [ "obj-871", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-92", 0 ],
					"hidden" : 1,
					"source" : [ "obj-872", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-89", 0 ],
					"hidden" : 1,
					"source" : [ "obj-873", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-82", 0 ],
					"hidden" : 1,
					"source" : [ "obj-874", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-875", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"hidden" : 1,
					"source" : [ "obj-876", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 0 ],
					"hidden" : 1,
					"source" : [ "obj-877", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-69", 0 ],
					"hidden" : 1,
					"source" : [ "obj-878", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-66", 0 ],
					"hidden" : 1,
					"source" : [ "obj-879", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-85", 0 ],
					"hidden" : 1,
					"source" : [ "obj-88", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-880", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-881", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-882", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"hidden" : 1,
					"source" : [ "obj-883", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-884", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-884", 0 ],
					"hidden" : 1,
					"source" : [ "obj-886", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-89", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"hidden" : 1,
					"source" : [ "obj-95", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "descriptorControl.js",
				"bootpath" : "~/Documents/_research_coding/instrumentAnalysis",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "statIter.js",
				"bootpath" : "~/Documents/_research_coding/instrumentAnalysis",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "descriptors~.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "fluid.bufspectralshape~.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "fluid.bufloudness~.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "fluid.bufpitch~.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "fluid.bufmelbands~.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "fluid.bufmfcc~.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "fluid.bufstats~.mxo",
				"type" : "iLaX"
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
					"accentcolor" : [ 0.32549, 0.345098, 0.372549, 1.0 ],
					"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
					"bgcolor" : [ 0.904179, 0.895477, 0.842975, 0.56 ],
					"fontname" : [ "Open Sans Semibold" ],
					"selectioncolor" : [ 0.720698, 0.16723, 0.080014, 1.0 ],
					"textcolor_inverse" : [ 0.239216, 0.254902, 0.278431, 1.0 ],
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
					"color" : [ 0.475135, 0.293895, 0.251069, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "PAt_style0",
				"default" : 				{
					"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"fontsize" : [ 12.0 ],
					"bgcolor" : [ 0.901961, 0.901961, 0.901961, 1.0 ],
					"fontname" : [ "Arial" ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"clearcolor" : [ 1.0, 0.947758, 0.687073, 1.0 ],
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
					"accentcolor" : [ 0.8, 0.839216, 0.709804, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.5 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
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
					"accentcolor" : [ 0.82517, 0.78181, 0.059545, 1.0 ],
					"fontsize" : [ 12.059008 ]
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
