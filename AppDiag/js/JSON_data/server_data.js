/*
server_data.js

Holds the information on each serverNode in the system as well as their connections
*/

//List of the connections for each serverNode in the system.
var serverConnections = {
	AXServers : {
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{
				AX_a:{'color':'green', 'label':'a'}
			},
			edges:{
				AX:{ AX_a:{weight:2}}
			}
		}
	},//end AXServers

	BizTalkServers :{
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
		database:{
			nodes:{
				md1_db16:{'color':'purple', 'label':'md1-db16', 'description':'Primary database'},
				md1_db25:{'color':'purple', 'label':'md1-db16', 'description':'Shared DB used for Secure Messaging/Patient Portal'}				
			},
			edges:{
				Centricity:{
					md1_db16:{weight:2},
					md1_db25:{weight:2}
				}
			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
				md1_ap42:{'color':'green', 'label':'md1-ap42', 'description':'Corepoint Server'},
				md1_ap51:{'color':'green', 'label':'md1-ap51', 'description':'Secure Messaging/Patient Portal'},
				md1_ap52:{'color':'green', 'label':'md1-ap52', 'description':'Houses/Configure files for DocuTrack'},
				md1_ap53:{'color':'green', 'label':'md1-ap53', 'description':'Data Transfer Station. Inbound'},
				md1_ap54:{'color':'green', 'label':'md1-ap54', 'description':'Data Transfer Station. Outbound'},
				md1_ap55:{'color':'green', 'label':'md1-ap55', 'description':'Data Transfer Station. Clinical'},
				md1_ap73:{'color':'green', 'label':'md1-ap73', 'description':'Java Boss Server. Runs Reports. Secure Messaging/Patient Portal.'},
				md1_ap74:{'color':'green', 'label':'md1-ap74', 'description':'java Boss Server. Corepoint Server used to export changes.'},
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
					Minnow_01:{weight:2},
					xa102__xa117:{weight:2}
				}
			}
		}
	},//end CentricityServers

	CofaxServers:{
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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

	CorepointServers:{
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
	},//end CorepointServers

	DocuTrackServers:{
		database:{
			nodes:{
				md1_db04:{'color':'purple', 'label':'md1-db04', 'description':'Shared DB'}
			},
			edges:{
				DocuTrack:{md1_db04:{weight:2}}
			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{
				md1_xa100:{'color':'green', 'label':'md1-xa100', 'description':''},
				md1_xa101:{'color':'green', 'label':'md1-xa101', 'description':''}
			},
			edges:{
				DocuTrack:{
					md1_xa100:{weight:2},
					md1_xa101:{weight:2}
				}
			}
		}
	},//end DocuTrackServers

	GSMSServers:{
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
	},//end GSMSServers

	HyperionServers:{
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
	},//end HyperionServers

	MedicalManagerServers:{
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
		database:{
			nodes:{
				md1_db03:{'color':'purple', 'label':'md1_db03', 'description':''}
			},
			edges:{
				Odyssey:{md1_db03:{weight:2}}
			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
			nodes:{

			},
			edges:{

			}
		},

		production:{
			nodes:{
				md1_ap68:{'color':'green', 'label':'md1-ap68', 'description':''}
			},
			edges:{
				Odyssey:{md1_ap68:{weight:2}}
			}
		}
	},//end OdysseyServers

	PeopleSoftServers:{
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
		database:{
			nodes:{

			},
			edges:{

			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
				md1_db25:{'color':'purple', 'label':'md1-db25', 'description':''}
			},
			edges:{
				Simphony:{md1_db25:{weight:2}}
			}
		},

		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
			},
			edges:{
				Simphony:{
					md1_ap64:{weight:2},
					md1_ap65:{weight:2},
					md1_ap66:{weight:2},
					md1_ap67:{weight:2}
				}
			}
		}
	},//end SimphonyServers

	VisionServers:{
		database:{
			nodes:{

			},
			edges:{

			}
		},
		
		development:{
			nodes:{

			},
			edges:{

			}
		},

		test:{
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
	}//end VisionServers
}//end serverConnections