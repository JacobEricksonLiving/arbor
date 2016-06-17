//list of all applicationnodes in the system.
var applicationNodes = {
	AX : {'color':'red','shape':'dot', 'label':'AX', 'expanded':false, 'parent':'Hyperion', 'base':true, 'server':'N/A', 
			'description':'Handles all finacial data. Recieves large files dropped at a time. Connections to AX represent transfer of finacial data.'},
	BizTalk : {'color':'blue','shape':'dot', 'label':'BizTalk', 'expanded':false, 'parent':'Corepoint', 'base':false, 'server':'N/A',
			 'description':'Used to reconfigure data for other applications then send the data downstream. Also refered to as ECIX.'},
	BizTalk360 : {'color':'blue','shape':'dot', 'label':'BizTalk360', 'expanded':false, 'parent':'BizTalk', 'base':false, 'server':'N/A',
				 'description':'This is an interface for BizTalk. It allows nonadministrators to access BizTalk.'},
	Centricity : {'color':'blue','shape':'dot', 'label':'Centricity', 'expanded':false, 'parent':'null', 'base':false, 'server':'N/A',
			 'description':'Keeps track of medical data for inhouse hospitals. Going to change to new application soon'},
	Cofax : {'color':'blue','shape':'dot', 'label':'Cofax', 'expanded':false, 'parent':'AX', 'base':false, 'server':'N/A',
			 'description':'Converts documents into usable computer images.'},
	Corepoint : {'color':'blue','shape':'dot', 'label':'Corepoint', 'expanded':false, 'parent':'Vision', 'base':false, 'server':'N/A',
				'description':'Designed to handle healthcare information. Corepoint reformats data for other applications and puts the data through logic checks. It then sends an xml message if it passes these checks.'},
	GSMS : {'color':'blue','shape':'dot', 'label':'GSMS', 'expanded':false, 'parent':'AX', 'base':false, 'server':'N/A',
			 'description':'(General Service Management System) Tracks maintenance and housekeeping costs.'},
	Hyperion : {'color':'blue','shape':'dot', 'label':'Hyperion', 'expanded':false, 'parent':'null', 'base':false, 'server':'N/A',
			'description':'Used to Exctract financial data for high level purposes.'},
	PeopleSoft : {'color':'blue','shape':'dot', 'label':'PeopleSoft', 'expanded':false, 'parent':'AX', 'base':false, 'server':'N/A',
				 'description':''},
	SalesForce : {'color':'blue', 'shape':'dot', 'label':'SalesForce', 'expanded':false, 'parent':'null', 'base':false, 'server':'N/A',
				'description':''},
	Symphony : {'color':'blue','shape':'dot', 'label':'Symphony', 'expanded':false, 'parent':'AX', 'base':false, 'server':'N/A',
			 'description':'Dinning Services applications. Handles dinning revenue.'},
	Vision : {'color':'red','shape':'dot', 'label':'Vision', 'expanded':false, 'parent':'SalesForce', 'base':true, 'server':'N/A',
			 'description':'Census Software. Handles new resident information inclucding an EMR and current living status. Vision also keeps track of financial data on residents that do not include food costs'}
}
//applicationConnections
var applicationConnections = {
	AXConnections : {
		nodes:{
			Cofax : applicationNodes.Cofax,
			PeopleSoft:applicationNodes.PeopleSoft,
			GSMS:applicationNodes.GSMS,
			Vision:applicationNodes.Vision,
			Symphony:applicationNodes.Symphony,
			Hyperion:applicationNodes.Hyperion
		},

		edges:{
			Cofax:{AX:{directed:true, weight:5}},
			PeopleSoft:{AX:{directed:true, weight:5}},
			GSMS:{AX:{directed:true, weight:5}},
			Vision:{AX:{directed:true, weight:5}},
			Symphony:{AX:{directed:true, weight:5}},
			AX:{Hyperion:{directed:true, weight:5}}
		}
	},//end AXConnections

	BizTalkConnections : {
		nodes:{
			BizTalk360:applicationNodes.BizTalk360
		},
		edges:{
			BizTalk:{BizTalk360:{directed:true, weight:5}}
		}

	},//end BizTalkConnections

	BizTalk360Connections : {
		nodes:{

		},
		edges:{

		}

	},//end BizTalk360Connections

	CentricityConnections : {
		nodes:{

		},
		edges:{

		}

	},//end CentricityConnections

	CofaxConnections : {
		nodes:{
			AX:applicationNodes.AX,
			PeopleSoft:applicationNodes.PeopleSoft
		},
		edges:{
			Cofax:{
				AX:{directed:true, weight:5},
				PeopleSoft:{directed:true, weight:5}
			}
		}

	},//end CofaxConnections

	CorepointConnections : {
		nodes:{
			BizTalk:applicationNodes.BizTalk
		},
		edges:{
			Corepoint:{BizTalk:{directed:true, weight:5}}
		}

	},//end CorepointConnections

	GSMSConnections : {
		nodes:{
					
		},
		edges:{
					
		}
	},//end GSMSConnections

	HyperionConnections : {
		nodes:{
			AX:applicationNodes.AX,
			SalesForce:applicationNodes.SalesForce
		},
		edges:{
			AX:{Hyperion:{directed:true, weight:5}},
			SalesForce:{Hyperion:{directed:true, weight:5}}
		}

	},//end HyperionConnections

	PeopleSoftConnections : {
		nodes:{
			AX:applicationNodes.AX,
			Cofax:applicationNodes.Cofax
		},
		edges:{
			PeopleSoft:{AX:{directed:true, weight:5}},
			Cofax:{PeopleSoft:{directed:true, weight:5}}
		}

	},//end PeopleSoftConnections

	SalesForceConnections : {
		nodes:{
			Hyperion:applicationNodes.Hyperion,
			Vision:applicationNodes.Vision
		},
		edges:{
			SalesForce:{
				Hyperion:{directed:true, weight:5},
				Vision:{directed:true, weight:5}
			}
		}

	},//end SalesForceConnections

	SymphonyConnections : {
		nodes:{

		},
		edges:{

		}

	},//end SymphonyConnections

	VisionConnections : {
		nodes:{
			AX:applicationNodes.AX,
			Corepoint:applicationNodes.Corepoint,
			SalesForce:applicationNodes.SalesForce
		},
		edges:{
			Vision:{
				AX:{directed:true, weight:5},
				Corepoint:{directed:true, weight:5}
			},
			SalesForce:{Vision:{directed:true, weight:5}}
		}

	}//end VisionConnections

}//end applicationsConnections

//switch case for which applicationNode edges are to be restored
function expandApplicationNode(nName){
	switch(nName){
		case "AX":
			sys.graft(applicationConnections.AXConnections);
			break;
		case "BizTalk":
			sys.graft(applicationConnections.BizTalkConnections);
			break;
		case "BizTalk360":
			sys.graft(applicationConnections.BizTalk360Connections);
			break;
		case "Centricity":
			sys.graft(applicationConnections.CentricityConnections);
			sys.addNode('Centricity', applicationNodes.Centricity);//note this is used since Centricty has no connections
			break;
		case "Cofax":
			sys.graft(applicationConnections.CofaxConnections);
			break;
		case "Corepoint":
			sys.graft(applicationConnections.CorepointConnections);
			break;  
		case "GSMS":
			sys.graft(applicationConnections.GSMSConnections);
			break;
		case "Hyperion":
			sys.graft(applicationConnections.HyperionConnections);
			break;
		case "PeopleSoft":
			sys.graft(applicationConnections.PeopleSoftConnections);
			break; 
		case "SalesForce":
			sys.graft(applicationConnections.SalesForceConnections);
			break;
		case "Symphony":
			sys.graft(applicationConnections.SymphonyConnections);
			break;   
		case "Vision":
			sys.graft(applicationConnections.VisionConnections);
			break;
	}
}//end expandApplicationNode