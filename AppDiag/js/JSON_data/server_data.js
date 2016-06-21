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
				Odyssey_md1_ap68:{'color':'green', 'label':'md1-ap68'}
			},
			edges:{
				Odyssey:{Odyssey_md1_ap68:{weight:2}}
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
				Simphony_md1_ap64:{'color':'green', 'label':'md1-ap64'},
				Simphony_md1_ap65:{'color':'green', 'label':'md1-ap65'},
				Simphony_md1_ap66:{'color':'green', 'label':'md1-ap66'},
				Simphony_md1_ap67:{'color':'green', 'label':'md1-ap67'},
			},
			edges:{
				Simphony:{
					Simphony_md1_ap64:{weight:2},
					Simphony_md1_ap65:{weight:2},
					Simphony_md1_ap66:{weight:2},
					Simphony_md1_ap67:{weight:2}
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