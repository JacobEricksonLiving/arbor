/*
application_data.js

Holds the information on each applicationNode in the system as well as their connections
*/


//List of all the applicationNodes in the system
var applicationNodes = {
	AX : {'color':'red','shape':'dot', 'label':'AX', 'expanded':false, 
	'to':['CoFax', 'GSMS', 'PeopleSoft', 'Simphony', 'Vision'], 
	'from':['Hyperion'], 'base':true, 'server':false, 
	'description':'Handles all finacial data. Recieves large files dropped at a time. Connections to AX represent transfer of finacial data.'},
	
	BizTalk : {'color':'blue','shape':'dot', 'label':'BizTalk', 'expanded':false, 
	'to':['CorePoint'], 
	'from':['BizTalk360', 'CorePoint'], 'base':false, 'server':false,
	'description':'Used to reconfigure data for other applications then send the data downstream. Also refered to as ECIX.'},
	
	BizTalk360 : {'color':'blue','shape':'dot', 'label':'BizTalk360', 'expanded':false, 
	'to':['BizTalk'], 
	'from':[], 'base':false, 'server':false,
	'description':'This is an interface for BizTalk. It allows nonadministrators to access BizTalk.'},
	
	Centricity : {'color':'blue','shape':'dot', 'label':'Centricity', 'expanded':false, 
	'to':['MedicalManager','Portal'], 
	'from':['DocuTrack', 'MedicalManager'], 'base':false, 'server':false,
	'description':'Keeps track of outpatient medical data. Going to change to new application soon'},
	
	CoFax : {'color':'blue','shape':'dot', 'label':'CoFax', 'expanded':false, 
	'to':[], 
	'from':['AX', 'PeopleSoft'], 
	'base':false, 'server':false,
	'description':'Converts documents into usable computer images.'},//need to meet
	
	CorePoint : {'color':'red','shape':'dot', 'label':'CorePoint', 'expanded':false, 
	'to':['BizTalk', 'MedicalManager', 'Vision'], 
	'from':['BizTalk', 'MedicalManager', 'NetMenu', 'Vision'], 
	'base':true, 'server':false,
	'description':'Designed to handle healthcare information. CorePoint reformats data for other applications and puts the data through logic checks. It then sends an xml message if it passes these checks.'},
	
	DocuTrack:{'color':'blue','shape':'dot', 'label':'DocuTrack', 'expanded':false, 
	'to':[], 
	'from':['Centricity'], 
	'base':false, 'server':false,
	'description':'Used to scan documents into Centricity'},

	GSMS : {'color':'blue','shape':'dot', 'label':'GSMS', 'expanded':false, 
	'to':['PeopleSoft', 'Vision'], 
	'from':['AX', 'Vision'], 'base':false, 'server':false,
	'description':'(General Service Management System) This is a field services application. It creates tickets for maintance and keeps track of who is charged.'},
	
	Hyperion : {'color':'blue','shape':'dot', 'label':'Hyperion', 'expanded':false, 
	'to':['AX', 'SalesForce'], 
	'from':[], 'base':false, 'server':false,
	'description':'Exctracts financial data for high level purposes. It shows community and corprate financial data. Displays a summary level of the information.'},
	
	JDE : {'color':'blue','shape':'dot', 'label':'JDE', 'expanded':false, 
	'to':[], 
	'from':['Hyperion'], 'base':false, 'server':false,
	'description':'Previos application used for financial data before AX. Still sends information to Hyperion.'},

	MedicalManager : {'color':'blue','shape':'dot', 'label':'MedicalManager', 'expanded':false, 
	'to':['Centricity', 'CorePoint'], 
	'from':['Centricity', 'CorePoint'], 'base':false, 'server':false,
	'description':'Houses demographic information and handles appointments/billing on site.'},

	NetMenu : {'color':'blue','shape':'dot', 'label':'NetMenu', 'expanded':false, 
	'to':['NetMenu', 'Simphony'], 
	'from':['Simphony'], 'base':false, 'server':false,
	'description':'Note: not yet in use. Allows a chef to create a menu item then directly communicate that information Simphony'},
	
	Odyssey : {'color':'blue', 'shape':'dot', 'label':'Odyssey', 'expanded':false, 
	'to':['BizTalk'], 
	'from':['Vision'], 'base':false, 'server':false,
	'description':'Point of Sale(POS) application. Handles charges such as gift cards, meal plans, and department/resident charges. Also generates meal plan for resident based on information recieved form Vision'},
	
	PeopleSoft : {'color':'blue','shape':'dot', 'label':'PeopleSoft', 'expanded':false, 
	'to':['CoFax'], 
	'from':['GSMS'], 'base':false, 'server':false,
	'description':''},//need to meet
	
	Portal : {'color':'blue','shape':'dot', 'label':'Portal', 'expanded':false, 
	'to':['Centricity', 'Vision'], 
	'from':[], 'base':false, 'server':false,
	'description':'Allows user to view information held in Centricity and Vision from the opposite application.'},

	SalesForce : {'color':'blue', 'shape':'dot', 'label':'SalesForce', 'expanded':false, 
	'to':[], 
	'from':['Hyperion', 'Vision'], 'base':false, 'server':false,
	'description':''},//need to meet
	
	Simphony : {'color':'blue','shape':'dot', 'label':'Simphony', 'expanded':false, 
	'to':['NetMenu'], 
	'from':['NetMenu'], 'base':false, 'server':false,
	'description':'Point of Sale(POS) applications. This is the applications that runs the Kitcken Display Systems(KDS) for vendors. Also responsible for sending financial data to AX'},
	
	Vision : {'color':'red','shape':'dot', 'label':'Vision', 'expanded':false, 
	'to':['CorePoint', 'GSMS', 'Odyssey', 'SalesForce'], 
	'from':['AX', 'CorePoint', 'GSMS','Portal'], 'base':true, 'server':false,
	'description':'Census Software. Handles new resident information inclucding an EMR and current living status. Vision also keeps track of financial data on residents that do not include food costs'}
}

//List of all the application to application edges in the system.
var applicationEdges ={
	//note edges are named as Source_Destination
		AX_Hyperion:{name:'AX_Hyperion', directed:true, weight:6, label:''},

		BizTalk_BizTalk360:{name:'BizTalk_BizTalk360', directed:true, weight:6, label:''},
		BizTalk_CorePoint:{name:'BizTalk_CorePoint', directed:true, weight:6, label:''},
		BizTalk_Odyssey:{name:'BizTalk_Odyssey', directed:true, weight:6, label:''},

		Centricity_MedicalManager:{name:'Centricity_MedicalManager', directed:true, weight:6, label:''},
		Centricity_Portal:{name:'Centricity_Portal', directed:true, weight:6, label:''},

		CoFax_AX:{name:'CoFax_AX', directed:true, weight:6, label:''},
		CoFax_PeopleSoft:{name:'CoFax_PeopleSoft', directed:true, weight:6, label:''},

		CorePoint_BizTalk:{name:'CorePoint_BizTalk', directed:true, weight:6, label:''},
		CorePoint_MedicalManager:{name:'CorePoint_MedicalManager', directed:true, weight:6, label:''},
		CorePoint_NetMenu:{name:'CorePoint_NetMenu', directed:true, weight:6, label:''},
		CorePoint_Vision:{name:'CorePoint_Vision', directed:true, weight:6, label:''},

		DocuTrack_Centricity:{name:'DocuTrack_Centricity', directed:true, weight:6, label:''},

		GSMS_AX:{name:'GSMS_AX', directed:true, weight:6, label:''},
		GSMS_Vision:{name:'GSMS_Vision', directed:true, weight:6, label:''},

		JDE_Hyperion:{name:'JDE_Hyperion', directed:true, weight:6, label:''},

		MedicalManager_Centricity:{name:'MedicalManager_Centricity', directed:true, weight:6, label:''},
		MedicalManager_CorePoint:{name:'MedicalManager_CorePoint', directed:true, weight:6, label:''},

		NetMenu_Simphony:{name:'NetMenu_Simphony', directed:true, weight:6, label:''},

		Odyssey_Vision:{name:'Odyssey_Vision', directed:true, weight:6, label:''},

		PeopleSoft_AX:{name:'PeopleSoft_AX', directed:true, weight:6, label:''},
		PeopleSoft_GSMS:{name:'PeopleSoft_GSMS', directed:true, weight:6, label:''},

		SalesForce_Hyperion:{name:'SalesForce_Hyperion', directed:true, weight:6, label:''},
		SalesForce_Vision:{name:'SalesForce_Vision', directed:true, weight:6, label:''},

		Simphony_AX:{name:'Simphony_AX', directed:true, weight:6, label:''},
		Simphony_NetMenu:{name:'Simphony_NetMenu', directed:true, weight:6, label:''},

		Vision_AX:{name:'Vision_AX', directed:true, weight:6, label:''},
		Vision_CorePoint:{name:'Vision_CorePoint', directed:true, weight:6, label:''},
		Vision_GSMS:{name:'Vision_GSMS', directed:true, weight:6, label:''},
		Vision_Portal:{name:'Vision_Portal', directed:true, weight:6, label:''}
	
}

//List of the connections for each applicationNode in the system.
var applicationConnections = {
	AXConnections : {
		nodes:{
			CoFax : applicationNodes.CoFax,
			GSMS:applicationNodes.GSMS,
			Hyperion:applicationNodes.Hyperion,
			PeopleSoft:applicationNodes.PeopleSoft,
			Simphony:applicationNodes.Simphony,
			Vision:applicationNodes.Vision
		},

		edges:{
			AX:{Hyperion:applicationEdges.AX_Hyperion},
			CoFax:{AX:applicationEdges.CoFax_AX},
			GSMS:{AX:applicationEdges.GSMS_AX},
			PeopleSoft:{AX:applicationEdges.PeopleSoft_AX},
			Simphony:{AX:applicationEdges.Simphony_AX},
			Vision:{AX:applicationEdges.Vision_AX}
		}
	},//end AXConnections

	BizTalkConnections : {
		nodes:{
			BizTalk360:applicationNodes.BizTalk360,
			CorePoint:applicationNodes.CorePoint,
			Odyssey:applicationNodes.Odyssey
		},
		edges:{
			BizTalk:{
				BizTalk360:applicationEdges.BizTalk_BizTalk360,
				CorePoint:applicationEdges.BizTalk_CorePoint,
				Odyssey:applicationEdges.BizTalk_Odyssey
			},
			CorePoint:{BizTalk:applicationEdges.CorePoint_BizTalk}
		}

	},//end BizTalkConnections

	BizTalk360Connections : {
		nodes:{
			BizTalk:applicationNodes.BizTalk
		},
		edges:{
			BizTalk:{BizTalk360:applicationEdges.BizTalk_BizTalk360}
		}

	},//end BizTalk360Connections

	CentricityConnections : {
		nodes:{
			DocuTrack:applicationNodes.DocuTrack,
			MedicalManager:applicationNodes.MedicalManager,
			Portal:applicationNodes.Portal
		},
		edges:{
			DocuTrack:{Centricity:applicationEdges.DocuTrack_Centricity},
			Centricity:{
				Portal:applicationEdges.Centricity_Portal,
				MedicalManager:applicationEdges.Centricity_MedicalManager
			},
			MedicalManager:{Centricity:applicationEdges.MedicalManager_Centricity}
		}

	},//end CentricityConnections

	CoFaxConnections : {
		nodes:{
			AX:applicationNodes.AX,
			PeopleSoft:applicationNodes.PeopleSoft
		},
		edges:{
			CoFax:{
				AX:applicationEdges.CoFax_AX,
				PeopleSoft:applicationEdges.CoFax_PeopleSoft
			}
		}

	},//end CoFaxConnections

	CorePointConnections : {
		nodes:{
			BizTalk:applicationNodes.BizTalk,
			MedicalManager:applicationNodes.MedicalManager,
			NetMenu:applicationNodes.NetMenu,
			Vision:applicationNodes.Vision
		},
		edges:{
			BizTalk:{CorePoint:applicationEdges.BizTalk_CorePoint},
			CorePoint:{
				BizTalk:applicationEdges.CorePoint_BizTalk,
				MedicalManager:applicationEdges.CorePoint_MedicalManager,
				NetMenu:applicationEdges.CorePoint_NetMenu,
				Vision:applicationEdges.CorePoint_Vision
			},
			MedicalManager:{CorePoint:applicationEdges.MedicalManager_CorePoint},
			Vision:{CorePoint:applicationEdges.Vision_CorePoint}
		}

	},//end CorePointConnections

	DocuTrackConnections:{
		nodes:{
			Centricity:applicationNodes.Centricity
		},
		edges:{
			DocuTrack:{Centricity:applicationEdges.DocuTrack_Centricity}
		}
	},

	GSMSConnections : {
		nodes:{
			AX:applicationNodes.AX,
			PeopleSoft:applicationNodes.PeopleSoft,
			Vision:applicationNodes.Vision
		},
		edges:{
			GSMS:{
				AX:applicationEdges.GSMS_AX,
				Vision:applicationEdges.GSMS_Vision
			},
			PeopleSoft:{GSMS:applicationEdges.PeopleSoft_GSMS},
			Vision:{GSMS:applicationEdges.Vision_GSMS}
		}
	},//end GSMSConnections

	HyperionConnections : {
		nodes:{
			AX:applicationNodes.AX,
			JDE:applicationNodes.JDE,
			SalesForce:applicationNodes.SalesForce
		},
		edges:{
			AX:{Hyperion:applicationEdges.AX_Hyperion},
			JDE:{Hyperion:applicationEdges.JDE_Hyperion},
			SalesForce:{Hyperion:applicationEdges.SalesForce_Hyperion}
		}

	},//end HyperionConnections

	JDEConnections: {
		nodes:{
			Hyperion:applicationNodes.Hyperion
		},
		edges:{
			JDE:{Hyperion:applicationEdges.JDE_Hyperion}
		}
	},//end JDEConnections

	MedicalManagerConnections: {
		nodes:{
			Centricity:applicationNodes.Centricity,
			CorePoint:applicationNodes.CorePoint
		},
		edges:{
			MedicalManager:{
				Centricity:applicationEdges.MedicalManager_Centricity,
				CorePoint:applicationEdges.MedicalManager_CorePoint
			},
			Centricity:{MedicalManager:applicationEdges.Centricity_MedicalManager},
			CorePoint:{MedicalManager:applicationEdges.CorePoint_MedicalManager}

		}
	},//end MedicalManagerConnections

	NetMenuConnections: {
		nodes:{
			CorePoint:applicationNodes.CorePoint,
			Simphony:applicationNodes.Simphony
		},
		edges:{
			CorePoint:{NetMenu:applicationEdges.CorePoint_NetMenu},
			NetMenu:{Simphony:applicationEdges.NetMenu_Simphony},
			Simphony:{NetMenu:applicationEdges.Simphony_NetMenu}
		}
	},//end NetMenuConnections

	OdysseyConnections:{
		nodes:{
			BizTalk:applicationNodes.BizTalk,
			Vision:applicationNodes.Vision
		},
		edges:{
			Odyssey:{Vision:applicationEdges.Odyssey_Vision},
			BizTalk:{Odyssey:applicationEdges.BizTalk_Odyssey}
		}
	},//end OdysseyConnections

	PeopleSoftConnections : {
		nodes:{
			AX:applicationNodes.AX,
			CoFax:applicationNodes.CoFax,
			GSMS:applicationNodes.GSMS
		},
		edges:{
			CoFax:{PeopleSoft:applicationEdges.CoFax_PeopleSoft},
			PeopleSoft:{
				AX:applicationEdges.PeopleSoft_AX,
				GSMS:applicationEdges.PeopleSoft_GSMS
			}			
		}

	},//end PeopleSoftConnections

	PortalConnections:{
		nodes:{
			Centricity:applicationNodes.Centricity,
			Vision:applicationNodes.Vision
		},
		edges:{
			Centricity:{Portal:applicationEdges.Centricity_Portal},
			Vision:{Portal:applicationEdges.Vision_Portal}
		}
	},//end PortalConnections

	SalesForceConnections : {
		nodes:{
			Hyperion:applicationNodes.Hyperion,
			Vision:applicationNodes.Vision
		},
		edges:{
			SalesForce:{
				Hyperion:applicationEdges.SalesForce_Hyperion,
				Vision:applicationEdges.SalesForce_Vision
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
				AX:applicationEdges.Simphony_AX,
				NetMenu:applicationEdges.Simphony_NetMenu
			},
			NetMenu:{Simphony:applicationEdges.NetMenu_Simphony}
		}

	},//end SimphonyConnections

	VisionConnections : {
		nodes:{
			AX:applicationNodes.AX,
			CorePoint:applicationNodes.CorePoint,
			GSMS:applicationNodes.GSMS,
			Odyssey:applicationNodes.Odyssey,
			Portal:applicationNodes.Portal,
			SalesForce:applicationNodes.SalesForce
		},
		edges:{
			CorePoint:{Vision:applicationEdges.CorePoint_Vision},
			GSMS:{Vision:applicationEdges.GSMS_Vision},
			Odyssey:{Vision:applicationEdges.Odyssey_Vision},
			SalesForce:{Vision:applicationEdges.SalesForce_Vision},
			Vision:{
				AX:applicationEdges.Vision_AX,
				CorePoint:applicationEdges.Vision_CorePoint,
				GSMS:applicationEdges.Vision_GSMS,
				Portal:applicationEdges.Vision_Portal
			}		
		}

	}//end VisionConnections

}//end applicationsConnections
