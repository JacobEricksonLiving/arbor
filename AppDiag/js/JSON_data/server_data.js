/*
server_data.js

Holds the information on each serverNode in the system as well as their connections
Also contains method used to expand specific serverNodes
*/

//List of all the serverNodes in the system
var serverNodes ={
	AXServers:{
		AX_a :{'color':'green', 'label':'a'}
	},

	BizTalkServers:{

	},

	BizTalk360Servers:{

	},

	CentricityServers:{

	},

	CofaxServers:{

	},

	CorepointServers:{

	},

	GSMSServers:{

	},

	HyperionServers:{

	},

	NetMenuServers:{

	},

	OdysseyServers:{

	},

	PeopleSoftServers:{

	},

	SalesForceServers:{

	},

	SimphonyServers:{
		Simphony_md1_ap64:{'color':'green', 'label':'md1-ap64'}
	},

	VisionServers:{

	}
}//end serverNodes

//List of the connections for each serverNode in the system.
var serverConnections = {
	AXServers : {
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
				AX_a:serverNodes.AXServers.AX_a
			},
			edges:{
				AX:{ AX_a:{weight:2}}
			}
		}
	},//end AXServers

	BizTalkServers :{
		nodes:{

		},
		edges:{

		}
	},

	BizTalk360Servers:{
		nodes:{

		},
		edges:{

		}
	},

	CentricityServers:{
		nodes:{

		},
		edges:{

		}
	},

	CofaxServers:{
		nodes:{

		},
		edges:{

		}
	},

	CorepointServers:{
		nodes:{

		},
		edges:{

		}
	},

	GSMSServers:{
		nodes:{

		},
		edges:{

		}
	},

	HyperionServers:{
		nodes:{

		},
		edges:{

		}
	},

	NetMenuServers:{
		nodes:{

		},
		edges:{

		}
	},

	OdysseyServers:{
		nodes:{

		},
		edges:{

		}
	},

	PeopleSoftServers:{
		nodes:{

		},
		edges:{

		}
	},

	SalesForceServers:{
		nodes:{

		},
		edges:{

		}
	},

	SimphonyServers:{
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
				Simphony_md1_ap64:serverNodes.SimphonyServers.Simphony_md1_ap64
			},
			edges:{
				Simphony:{Simphony_md1_ap64:{weight:2}}
			}
		}
	},

	VisionServers:{
		nodes:{

		},
		edges:{
			
		}
	}
}//end serverConnections