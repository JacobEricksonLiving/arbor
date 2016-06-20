/*
application_data.js

Holds the information on each applicationNode in the system as well as their connections
Also contains method used to expand specific applicationNodes
*/


//List of all the applicationNodes in the system
var applicationNodes = {
	AX : {'color':'red','shape':'dot', 'label':'AX', 'expanded':false, 'to':['Cofax', 'GSMS', 'PeopleSoft', 'Simphony', 'Vision'], 'from':['Hyperion'], 'base':true, 'server':'N/A', 
			'description':'Handles all finacial data. Recieves large files dropped at a time. Connections to AX represent transfer of finacial data.'},
	BizTalk : {'color':'blue','shape':'dot', 'label':'BizTalk', 'expanded':false, 'to':['Corepoint'], 'from':['BizTalk360'], 'base':false, 'server':'N/A',
			 'description':'Used to reconfigure data for other applications then send the data downstream. Also refered to as ECIX.'},
	BizTalk360 : {'color':'blue','shape':'dot', 'label':'BizTalk360', 'expanded':false, 'to':['BizTalk'], 'from':[], 'base':false, 'server':'N/A',
				 'description':'This is an interface for BizTalk. It allows nonadministrators to access BizTalk.'},
	Centricity : {'color':'blue','shape':'dot', 'label':'Centricity', 'expanded':false, 'to':[], 'from':[], 'base':false, 'server':'N/A',
			 'description':'Keeps track of medical data for inhouse hospitals. Going to change to new application soon'},
	Cofax : {'color':'blue','shape':'dot', 'label':'Cofax', 'expanded':false, 'to':[], 'from':['AX', 'PeopleSoft'], 'base':false, 'server':'N/A',
			 'description':'Converts documents into usable computer images.'},
	Corepoint : {'color':'blue','shape':'dot', 'label':'Corepoint', 'expanded':false, 'to':['Vision'], 'from':['BizTalk'], 'base':false, 'server':'N/A',
				'description':'Designed to handle healthcare information. Corepoint reformats data for other applications and puts the data through logic checks. It then sends an xml message if it passes these checks.'},
	GSMS : {'color':'blue','shape':'dot', 'label':'GSMS', 'expanded':false, 'to':[], 'from':['AX'], 'base':false, 'server':'N/A',
			 'description':'(General Service Management System) Tracks maintenance and housekeeping costs.'},
	Hyperion : {'color':'blue','shape':'dot', 'label':'Hyperion', 'expanded':false, 'to':['AX', 'SalesForce'], 'from':[], 'base':false, 'server':'N/A',
			'description':'Used to Exctract financial data for high level purposes.'},
	NetMenu : {'color':'blue','shape':'dot', 'label':'NetMenu', 'expanded':false, 'to':['Simphony'], 'from':['Simphony'], 'base':false, 'server':'N/A',
			'description':'Note: not yet in use. Allows a chef to create a menu item then directly communicate that information Simphony'},
	PeopleSoft : {'color':'blue','shape':'dot', 'label':'PeopleSoft', 'expanded':false, 'to':['Cofax'], 'from':['PeopleSoft'], 'base':false, 'server':'N/A',
				 'description':''},
	SalesForce : {'color':'blue', 'shape':'dot', 'label':'SalesForce', 'expanded':false, 'to':[], 'from':['Hyperion', 'Vision'], 'base':false, 'server':'N/A',
				'description':''},
	Simphony : {'color':'blue','shape':'dot', 'label':'Simphony', 'expanded':false, 'to':['NetMenu'], 'from':['NetMenu'], 'base':false, 'server':'N/A',
			 'description':'Point of Sale(POS) applications. This is the applications that runs the Kitcken Display Systems(KDS) for vendors.'},
	Vision : {'color':'red','shape':'dot', 'label':'Vision', 'expanded':false, 'to':['SalesForce'], 'from':['AX', 'Corepoint'], 'base':true, 'server':'N/A',
			 'description':'Census Software. Handles new resident information inclucding an EMR and current living status. Vision also keeps track of financial data on residents that do not include food costs'}
}
//List of the connections for each applicationNode in the system.
var applicationConnections = {
	AXConnections : {
		nodes:{
			Cofax : applicationNodes.Cofax,
			PeopleSoft:applicationNodes.PeopleSoft,
			GSMS:applicationNodes.GSMS,
			Vision:applicationNodes.Vision,
			Simphony:applicationNodes.Simphony,
			Hyperion:applicationNodes.Hyperion
		},

		edges:{
			Cofax:{AX:{directed:true, weight:5}},
			PeopleSoft:{AX:{directed:true, weight:5}},
			GSMS:{AX:{directed:true, weight:5}},
			Vision:{AX:{directed:true, weight:5}},
			Simphony:{AX:{directed:true, weight:5}},
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

	NetMenuConnections: {
		nodes:{
			Simphony:applicationNodes.Simphony
		},
		edges:{
			Simphony:{NetMenu:{directed:true, weight:5}},
			NetMenu:{Simphony:{directed:true, weight:5}}
		}
	},//end NetMenuConnections

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

	SimphonyConnections : {
		nodes:{
			NetMenu:applicationNodes.NetMenu
		},
		edges:{
			Simphony:{NetMenu:{directed:true, weight:5}},
			NetMenu:{Simphony:{directed:true, weight:5}}
		}

	},//end SimphonyConnections

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

//switch case for which applicationNode connections should be graphed
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
		case "NetMenu":
			sys.graft(applicationConnections.NetMenuConnections);
			break;
		case "PeopleSoft":
			sys.graft(applicationConnections.PeopleSoftConnections);
			break; 
		case "SalesForce":
			sys.graft(applicationConnections.SalesForceConnections);
			break;
		case "Simphony":
			sys.graft(applicationConnections.SimphonyConnections);
			break;   
		case "Vision":
			sys.graft(applicationConnections.VisionConnections);
			break;
	}
}//end expandApplicationNode