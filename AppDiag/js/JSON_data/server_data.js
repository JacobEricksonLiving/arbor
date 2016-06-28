/*
server_data.js

Holds the information on each serverNode in the system as well as their connections
*/

//List of the connections for each serverNode in the system.
var serverConnections = {
	AXServers : {
		pre_production:{
			nodes:{
				md1_devap38:{'color':'orange', 'label':'md1-devap38', 'description':'QA'},
				md1_devap39:{'color':'orange', 'label':'md1-devap39', 'description':'QA'},
				md1_devap40:{'color':'orange', 'label':'md1-devap40', 'description':'QA'},
				md1_devap41:{'color':'orange', 'label':'md1-devap41', 'description':'DEV-STG'},
				md1_testap27:{'color':'brown', 'label':'md1-testap27', 'description':'TEST'},
				md1_testap28:{'color':'brown', 'label':'md1-testap28', 'description':'TRAIN'},

			},
			edges:{
				AX:{
					md1_devap38:{weight:2},
					md1_devap39:{weight:2},
					md1_devap40:{weight:2},
					md1_devap41:{weight:2},
					md1_testap27:{weight:2},
					md1_testap28:{weight:2},
				}
			}
		},

		production:{
			nodes:{
				md1_ap90:{'color':'green', 'label':'md1-ap90', 'description':''},
				md1_ap91:{'color':'green', 'label':'md1-ap91', 'description':''},
				md1_ap92:{'color':'green', 'label':'md1-ap92', 'description':''},
				md1_db39:{'color':'purple', 'label':'md1-db39', 'description':'SQL AX'},
			},
			edges:{
				AX:{
					md1_ap90:{weight:2},
					md1_ap91:{weight:2},
					md1_ap92:{weight:2},
					md1_db39:{weight:2},
				}
			}
		}
	},//end AXServers

	BizTalkServers :{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//end BizTalkServers

	BizTalk360Servers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//BizTalk360Servers

	CentricityServers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{
				md1_ap10:{'color':'green', 'label':'md1-ap10', 'description':'Report Server'},
				md1_ap14:{'color':'green', 'label':'md1-ap14', 'description':'Utility Integration Server'},
				md1_ap37:{'color':'green', 'label':'md1-ap37', 'description':'ePerscription Server'},
				md1_ap42:{'color':'green', 'label':'md1-ap42', 'description':'CorePoint Server'},
				md1_ap51:{'color':'green', 'label':'md1-ap51', 'description':'Secure Messaging/Patient Portal'},
				md1_ap52:{'color':'green', 'label':'md1-ap52', 'description':'Houses/Configure files for DocuTrack'},
				md1_ap53:{'color':'green', 'label':'md1-ap53', 'description':'Data Transfer Station. Inbound'},
				md1_ap54:{'color':'green', 'label':'md1-ap54', 'description':'Data Transfer Station. Outbound'},
				md1_ap55:{'color':'green', 'label':'md1-ap55', 'description':'Data Transfer Station. Clinical'},
				md1_ap73:{'color':'green', 'label':'md1-ap73', 'description':'Java Boss Server. Runs Reports. Secure Messaging/Patient Portal.'},
				md1_ap74:{'color':'green', 'label':'md1-ap74', 'description':'java Boss Server. CorePoint Server used to export changes.'},
				md1_db16:{'color':'purple', 'label':'md1-db16', 'description':'Primary database'},
				md1_db25:{'color':'purple', 'label':'md1-db16', 'description':'Shared DB used for Secure Messaging/Patient Portal'},	
				Minnow_01:{'color':'green', 'label':'Minnow-01', 'description':'DMZ Web Server for Secure Messaging/Patient Portal'},
				xa102__xa117:{'color':'green', 'label':'xa102--xa117', 'description':'Some are in reserver'}
			},
			edges:{
				Centricity:{
					md1_ap10:{weight:2},
					md1_ap14:{weight:2},
					md1_ap37:{weight:2},
					md1_ap42:{weight:2},
					md1_ap51:{weight:2},
					md1_ap52:{weight:2},
					md1_ap53:{weight:2},
					md1_ap54:{weight:2},
					md1_ap55:{weight:2},
					md1_ap73:{weight:2},
					md1_ap74:{weight:2},
					md1_db16:{weight:2},
					md1_db25:{weight:2},
					Minnow_01:{weight:2},
					xa102__xa117:{weight:2}
				}
			}
		}
	},//end CentricityServers

	CofaxServers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//end CofaxServers

	CorePointServers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//end CorePointServers

	DocuTrackServers:{
		pre_production:{
			nodes:{
				
			},
			edges:{
			}
		},

		production:{
			nodes:{
				md1_db04:{'color':'purple', 'label':'md1-db04', 'description':'Shared DB'},
				md1_xa100:{'color':'green', 'label':'md1-xa100', 'description':''},
				md1_xa101:{'color':'green', 'label':'md1-xa101', 'description':''}
			},
			edges:{
				DocuTrack:{
					md1_db04:{weight:2},
					md1_xa100:{weight:2},
					md1_xa101:{weight:2}
				}
			}
		}
	},//end DocuTrackServers

	GSMSServers:{
		pre_production:{
			nodes:{
				md1_devap01:{'color':'orange', 'label':'md1-devap01', 'description':''},
				md1_testap11:{'color':'brown', 'label':'md1-testap11', 'description':''},
				md1_testap12:{'color':'brown', 'label':'md1-testap12', 'description':''},
				md1_testap13:{'color':'brown', 'label':'md1-testap13', 'description':''},
				md1_ws05:{'color':'brown', 'label':'md1-ws05', 'description':''},//may need to change the color here
				md1_ws07:{'color':'brown', 'label':'md1-ws07', 'description':''}//may change color here
			},
			edges:{
				GSMS:{
					md1_devap01:{weight:2},
					md1_testap11:{weight:2},
					md1_testap12:{weight:2},
					md1_testap13:{weight:2},
					md1_ws05:{weight:2},
					md1_ws07:{weight:2}
				}
			}
		},

		production:{
			nodes:{
				csl_ws01:{'color':'green', 'label':'csl-ws01', 'description':''},
				csl_ap11:{'color':'green', 'label':'csl-ap11', 'description':''},
				csl_ap12:{'color':'green', 'label':'csl-ws01', 'description':''},
				md1_testap25:{'color':'green', 'label':'csl-ws01', 'description':''},
			},
			edges:{
				GSMS:{
					csl_ws01:{weight:2},
					csl_ap11:{weight:2},
					csl_ap12:{weight:2},
					md1_testap25:{weight:2}
				}
			}
		}
	},//end GSMSServers

	HyperionServers:{
		pre_production:{
			nodes:{
				md1_devap04:{'color':'orange', 'label':'md1-devap04', 'description':'Essbase Server'},
				md1_devws02:{'color':'orange', 'label':'md1-devws02', 'description':'Foundation Services'},
				md1_devws03:{'color':'orange', 'label':'md1-devws03', 'description':'Planning/Reporting/Analysis Web Server 1'},
				md1_testdb5:{'color':'brown', 'label':'md1-testdb5', 'description':'Relational Database Server'}
			},
			edges:{
				Hyperion:{
					md1_devap04:{weight:2},
					md1_devws02:{weight:2},
					md1_devws03:{weight:2},
					md1_testdb5:{weight:2}
				}
			}
		},

		production:{
			nodes:{
				md1_ap25:{'color':'green', 'label':'md1-ap25', 'description':'Foundation Services'},
				md1_ap26:{'color':'green', 'label':'md1-ap26', 'description':'Essbase Server'},
				md1_db36:{'color':'purple', 'label':'md1-db36', 'description':'Relational Database Server'},
				md1_ws14:{'color':'green', 'label':'md1-ws14', 'description':'Planning/Reporting/Analysis '}
			},
			edges:{
				Hyperion:{
					md1_ap25:{weight:2},
					md1_ap26:{weight:2},
					md1_db36:{weight:2},
					md1_ws14:{weight:2}
				}
			}
		}
	},//end HyperionServers

	MedicalManagerServers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//end MedicalManagerServers

	NetMenuServers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//end NetMenuServers

	OdysseyServers:{
		pre_production:{
			nodes:{
				
			},
			edges:{
				
			}
		},

		production:{
			nodes:{
				md1_db03:{'color':'purple', 'label':'md1_db03', 'description':''},
				md1_ap68:{'color':'green', 'label':'md1-ap68', 'description':''}
			},
			edges:{
				Odyssey:{
					md1_db03:{weight:2},
					md1_ap68:{weight:2}
				}
			}
		}
	},//end OdysseyServers

	PeopleSoftServers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//end PeopleSoftServers

	PortalServers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//end PortalServers

	SalesForceServers:{
		pre_production:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{

			},
			edges:{

			}
		}
	},//end SalesForceServers

	SimphonyServers:{
		database:{
			nodes:{
				
			},
			edges:{
				
			}
		},

		production:{
			nodes:{
				md1_ap64:{'color':'green', 'label':'md1-ap64'},
				md1_ap65:{'color':'green', 'label':'md1-ap65'},
				md1_ap66:{'color':'green', 'label':'md1-ap66'},
				md1_ap67:{'color':'green', 'label':'md1-ap67'},
				md1_db25:{'color':'purple', 'label':'md1-db25', 'description':''}
			},
			edges:{
				Simphony:{
					md1_ap64:{weight:2},
					md1_ap65:{weight:2},
					md1_ap66:{weight:2},
					md1_ap67:{weight:2},
					md1_db25:{weight:2}
				}
			}
		}
	},//end SimphonyServers

	VisionServers:{
		pre_production:{
			nodes:{
				md1_testdb19:{'color':'purple', 'label':'md1-testdb19', 'description':''},
				md1_testdb30:{'color':'purple', 'label':'md1-testdb30', 'description':''},
				md1_testdb31:{'color':'purple', 'label':'md1-testdb31', 'description':''},
				md1_testdb32:{'color':'purple', 'label':'md1-testdb32', 'description':''},
				md1_testdb33:{'color':'purple', 'label':'md1-testdb33', 'description':''},
				md1_testws05:{'color':'brown', 'label':'md1-testws05', 'description':'ICD10'},
				md1_testws06:{'color':'brown', 'label':'md1-testws06', 'description':'DEV'},
				md1_testws07:{'color':'brown', 'label':'md1-testws07', 'description':'EA'},
				md1_testws08:{'color':'brown', 'label':'md1-testws08', 'description':'TEST'},
				md1_testws31:{'color':'brown', 'label':'md1-testws31', 'description':'TRAIN'}
			},
			edges:{
				Vision:{
					md1_testdb19:{weight:2},
					md1_testdb30:{weight:2},
					md1_testdb31:{weight:2},
					md1_testdb32:{weight:2},
					md1_testdb33:{weight:2},
					md1_testws05:{weight:2},
					md1_testws06:{weight:2},
					md1_testws07:{weight:2},
					md1_testws08:{weight:2},
					md1_testws31:{weight:2}
				}
			}
		},

		production:{
			nodes:{
				md1_db11:{'color':'purple', 'label':'md1-db11', 'description':''},
				md1_ws36:{'color':'green', 'label':'md1-ws36', 'description':''},
				md1_ws37:{'color':'green', 'label':'md1-ws37', 'description':''},
				md1_ws38:{'color':'green', 'label':'md1-ws38', 'description':''},
				md1_ws39:{'color':'green', 'label':'md1-ws39', 'description':''}
			},
			edges:{
				Vision:{
					md1_db11:{weight:2},
					md1_ws36:{weight:2},
					md1_ws37:{weight:2},
					md1_ws38:{weight:2},
					md1_ws39:{weight:2}
				}
			}
		}
	}//end VisionServers
}//end serverConnections