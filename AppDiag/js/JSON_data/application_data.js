/*
application_data.js

Holds the information on each applicationNode in the system as well as their connections
*/


//List of all the applicationNodes in the system
var applicationNodes = {
	AX : {'color':'red','shape':'dot', 'label':'AX', 'expanded':false, 
	'to':['Cofax', 'GSMS', 'PeopleSoft', 'Simphony', 'Vision'], 
	'from':['Hyperion'], 'base':true, 'server':'N/A', 
	'description':'Handles all finacial data. Recieves large files dropped at a time. Connections to AX represent transfer of finacial data.'},
	
	BizTalk : {'color':'blue','shape':'dot', 'label':'BizTalk', 'expanded':false, 
	'to':['CorePoint'], 
	'from':['BizTalk360', 'CorePoint'], 'base':false, 'server':'N/A',
	'description':'Used to reconfigure data for other applications then send the data downstream. Also refered to as ECIX.'},
	
	BizTalk360 : {'color':'blue','shape':'dot', 'label':'BizTalk360', 'expanded':false, 
	'to':['BizTalk'], 
	'from':[], 'base':false, 'server':'N/A',
	'description':'This is an interface for BizTalk. It allows nonadministrators to access BizTalk.'},
	
	Centricity : {'color':'blue','shape':'dot', 'label':'Centricity', 'expanded':false, 
	'to':['MedicalManager','Portal'], 
	'from':['DocuTrack', 'MedicalManager'], 'base':false, 'server':'N/A',
	'description':'Keeps track of outpatient medical data. Going to change to new application soon'},
	
	Cofax : {'color':'blue','shape':'dot', 'label':'Cofax', 'expanded':false, 
	'to':[], 
	'from':['AX', 'PeopleSoft'], 
	'base':false, 'server':'N/A',
	'description':'Converts documents into usable computer images.'},
	
	CorePoint : {'color':'red','shape':'dot', 'label':'CorePoint', 'expanded':false, 
	'to':['BizTalk', 'MedicalManager', 'Vision'], 
	'from':['BizTalk', 'MedicalManager', 'NetMenu', 'Vision'], 
	'base':true, 'server':'N/A',
	'description':'Designed to handle healthcare information. CorePoint reformats data for other applications and puts the data through logic checks. It then sends an xml message if it passes these checks.'},
	
	DocuTrack:{'color':'blue','shape':'dot', 'label':'DocuTrack', 'expanded':false, 
	'to':[], 
	'from':['Centricity'], 
	'base':false, 'server':'N/A',
	'description':'Used to scan documents into Centricity'},

	GSMS : {'color':'blue','shape':'dot', 'label':'GSMS', 'expanded':false, 
	'to':[], 
	'from':['AX'], 'base':false, 'server':'N/A',
	'description':'(General Service Management System) Tracks maintenance and housekeeping costs.'},
	
	Hyperion : {'color':'blue','shape':'dot', 'label':'Hyperion', 'expanded':false, 
	'to':['AX', 'SalesForce'], 
	'from':[], 'base':false, 'server':'N/A',
	'description':'Used to Exctract financial data for high level purposes.'},
	
	MedicalManager : {'color':'blue','shape':'dot', 'label':'MedicalManager', 'expanded':false, 
	'to':['Centricity', 'CorePoint'], 
	'from':['Centricity', 'CorePoint'], 'base':false, 'server':'N/A',
	'description':'Houses demographic information and handles appointments/billing on site.'},

	NetMenu : {'color':'blue','shape':'dot', 'label':'NetMenu', 'expanded':false, 
	'to':['NetMenu', 'Simphony'], 
	'from':['Simphony'], 'base':false, 'server':'N/A',
	'description':'Note: not yet in use. Allows a chef to create a menu item then directly communicate that information Simphony'},
	
	Odyssey : {'color':'blue', 'shape':'dot', 'label':'Odyssey', 'expanded':false, 
	'to':['BizTalk'], 
	'from':['Vision'], 'base':false, 'server':'N/A',
	'description':'Point of Sale(POS) application. Handles charges such as gift cards, meal plans, and department/resident charges. Also generates meal plan for resident based on information recieved form Vision'},
	
	PeopleSoft : {'color':'blue','shape':'dot', 'label':'PeopleSoft', 'expanded':false, 
	'to':['Cofax'], 
	'from':['PeopleSoft'], 'base':false, 'server':'N/A',
	'description':''},
	
	Portal : {'color':'blue','shape':'dot', 'label':'Portal', 'expanded':false, 
	'to':['Centricity', 'Vision'], 
	'from':[], 'base':false, 'server':'N/A',
	'description':'Allows user to view information held in Centricity and Vision from the opposite application.'},

	SalesForce : {'color':'blue', 'shape':'dot', 'label':'SalesForce', 'expanded':false, 
	'to':[], 
	'from':['Hyperion', 'Vision'], 'base':false, 'server':'N/A',
	'description':''},
	
	Simphony : {'color':'blue','shape':'dot', 'label':'Simphony', 'expanded':false, 
	'to':['NetMenu'], 
	'from':['NetMenu'], 'base':false, 'server':'N/A',
	'description':'Point of Sale(POS) applications. This is the applications that runs the Kitcken Display Systems(KDS) for vendors. Also responsible for sending financial data to AX'},
	
	Vision : {'color':'red','shape':'dot', 'label':'Vision', 'expanded':false, 
	'to':['CorePoint', 'Odyssey', 'SalesForce', 'Vision'], 
	'from':['AX', 'CorePoint', 'Portal'], 'base':true, 'server':'N/A',
	'description':'Census Software. Handles new resident information inclucding an EMR and current living status. Vision also keeps track of financial data on residents that do not include food costs'}
}
//List of the connections for each applicationNode in the system.
var applicationConnections = {
	AXConnections : {
		nodes:{
			Cofax : applicationNodes.Cofax,
			GSMS:applicationNodes.GSMS,
			Hyperion:applicationNodes.Hyperion,
			PeopleSoft:applicationNodes.PeopleSoft,
			Simphony:applicationNodes.Simphony,
			Vision:applicationNodes.Vision
		},

		edges:{
			AX:{Hyperion:{directed:true, weight:5}},
			Cofax:{AX:{directed:true, weight:5}},
			GSMS:{AX:{directed:true, weight:5}},
			PeopleSoft:{AX:{directed:true, weight:5}},
			Simphony:{AX:{directed:true, weight:5}},
			Vision:{AX:{directed:true, weight:5}}
		}
	},//end AXConnections

	BizTalkConnections : {
		nodes:{
			BizTalk360:applicationNodes.BizTalk360,
			CorePoint:applicationNodes.CorePoint,
			Odyssey:applicationNodes.Odyssey,
			Vision:applicationNodes.Vision
		},
		edges:{
			BizTalk:{
				BizTalk360:{directed:true, weight:5},
				CorePoint:{directed:true, weight:5},
				Odyssey:{directed:true, weight:5}
			},
			CorePoint:{BizTalk:{directed:true, weight:5}},
		}

	},//end BizTalkConnections

	BizTalk360Connections : {
		nodes:{
			BizTalk:applicationNodes.BizTalk
		},
		edges:{
			BizTalk:{BizTalk360:{directed:true, weight:5}}
		}

	},//end BizTalk360Connections

	CentricityConnections : {
		nodes:{
			DocuTrack:applicationNodes.DocuTrack,
			MedicalManager:applicationNodes.MedicalManager,
			Portal:applicationNodes.Portal
		},
		edges:{
			DocuTrack:{Centricity:{directed:true, weight:5}},
			Centricity:{
				Portal:{directed:true, weight:5},
				MedicalManager:{directed:true, weight:5}
			},
			MedicalManager:{Centricity:{directed:true, weight:5}}
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

	CorePointConnections : {
		nodes:{
			BizTalk:applicationNodes.BizTalk,
			MedicalManager:applicationNodes.MedicalManager,
			NetMenu:applicationNodes.NetMenu,
			Vision:applicationNodes.Vision
		},
		edges:{
			BizTalk:{CorePoint:{directed:true, weight:5}},
			CorePoint:{
				BizTalk:{directed:true, weight:5},
				MedicalManager:{directed:true, weight:5},
				NetMenu:{directed:true, weight:5},
				Vision:{directed:true, weight:5}
			},
			MedicalManager:{CorePoint:{directed:true, weight:5}},
			Vision:{CorePoint:{directed:true, weight:5}}
		}

	},//end CorePointConnections

	DocuTrackConnections:{
		nodes:{
			Centricity:applicationNodes.Centricity
		},
		edges:{
			DocuTrack:{Centricity:{directed:true, weight:5}}
		}
	},

	GSMSConnections : {
		nodes:{
			AX:applicationNodes.AX,
		},
		edges:{
			GSMS:{AX:{directed:true, weight:5}}
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

	MedicalManagerConnections: {
		nodes:{
			Centricity:applicationNodes.Centricity,
			CorePoint:applicationNodes.CorePoint
		},
		edges:{
			MedicalManager:{
				Centricity:{directed:true, weight:5},
				CorePoint:{directed:true, weight:5}
			},
			Centricity:{MedicalManager:{directed:true, weight:5}},
			CorePoint:{MedicalManager:{directed:true, weight:5}}

		}
	},//end MedicalManagerConnections

	NetMenuConnections: {
		nodes:{
			CorePoint:applicationNodes.CorePoint,
			Simphony:applicationNodes.Simphony
		},
		edges:{
			CorePoint:{NetMenu:{directed:true, weight:5}},
			NetMenu:{Simphony:{directed:true, weight:5}},
			Simphony:{NetMenu:{directed:true, weight:5}}
		}
	},//end NetMenuConnections

	OdysseyConnections:{
		nodes:{
			BizTalk:applicationNodes.BizTalk,
			Vision:applicationNodes.Vision
		},
		edges:{
			Odyssey:{Vision:{directed:true, weight:5}},
			BizTalk:{Odyssey:{directed:true, weight:5}}
		}
	},//end OdysseyConnections

	PeopleSoftConnections : {
		nodes:{
			AX:applicationNodes.AX,
			Cofax:applicationNodes.Cofax
		},
		edges:{
			Cofax:{PeopleSoft:{directed:true, weight:5}},
			PeopleSoft:{AX:{directed:true, weight:5}}			
		}

	},//end PeopleSoftConnections

	PortalConnections:{
		nodes:{
			Centricity:applicationNodes.Centricity,
			Vision:applicationNodes.Vision
		},
		edges:{
			Centricity:{Portal:{directed:true, weight:5}},
			Vision:{Portal:{directed:true, weight:5}}
		}
	},//end PortalConnections

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
			AX:applicationNodes.AX,
			NetMenu:applicationNodes.NetMenu
		},
		edges:{
			Simphony:{
				AX:{directed:true, weight:5},
				NetMenu:{directed:true, weight:5}
			},
			NetMenu:{Simphony:{directed:true, weight:5}}
		}

	},//end SimphonyConnections

	VisionConnections : {
		nodes:{
			AX:applicationNodes.AX,
			CorePoint:applicationNodes.CorePoint,
			Odyssey:applicationNodes.Odyssey,
			Portal:applicationNodes.Portal,
			SalesForce:applicationNodes.SalesForce
		},
		edges:{
			CorePoint:{Vision:{directed:true, weight:5}},
			Odyssey:{Vision:{directed:true, weight:5}},
			SalesForce:{Vision:{directed:true, weight:5}},
			Vision:{
				AX:{directed:true, weight:5},
				CorePoint:{directed:true, weight:5},
				Portal:{directed:true, weight:5}
			}		
		}

	}//end VisionConnections

}//end applicationsConnections
