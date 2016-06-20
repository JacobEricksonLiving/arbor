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

	},

	VisionServers:{

	}
}//end serverNodes

//List of the connections for each serverNode in the system.
var serverConnections = {
	AXServers : {
		nodes:{
			AX_a:serverNodes.AXServers.AX_a
		},
		edges:{
			AX:{ AX_a:{weight:2}}
		}
	},

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
		nodes:{

		},
		edges:{

		}
	},

	VisionServers:{
		nodes:{

		},
		edges:{
			
		}
	}
}//end serverConnections