/*
server_data.js

Holds the information on each serverNode in the system as well as their connections
Also contains method used to expand specific serverNodes
*/

//List of all the serverNodes in the system
var serverNodes ={

}

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
				AX_a:{'color':'green', 'label':'a'}
			},
			edges:{
				AX:{ AX_a:{weight:2}}
			}
		}
	},//end AXServers

	BizTalkServers :{
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

	NetMenuServers:{
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

	SalesForceServers:{
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