//Holds the connection data used to regraph nodes once they are removed.
//Holds the data for all nodes in the system.
//Also Holds utility functions used by renderer.js

//list of all nodes in the system.
var AX = {'color':'red','shape':'dot', 'label':'AX', 'expanded':false, 'parent':'Hyperion', 'base':true, 'server':'N/A', 
			'description':'Handles all finacial data. Recieves large files dropped at a time. Connections to AX represent transfer of finacial data.'},
BizTalk = {'color':'blue','shape':'dot', 'label':'BizTalk', 'expanded':false, 'parent':'Corepoint', 'base':false, 'server':'N/A',
			 'description':'Used to reconfigure data for other applications then send the data downstream. Also refered to as ECIX.'};
BizTalk360 = {'color':'blue','shape':'dot', 'label':'BizTalk360', 'expanded':false, 'parent':'BizTalk', 'base':false, 'server':'N/A',
				 'description':'This is an interface for BizTalk. It allows nonadministrators to access BizTalk.'},
Cofax = {'color':'blue','shape':'dot', 'label':'Cofax', 'expanded':false, 'parent':'AX', 'base':false, 'server':'N/A',
			 'description':'Converts documents into usable computer images.'},
Corepoint = {'color':'blue','shape':'dot', 'label':'Corepoint', 'expanded':false, 'parent':'Vision', 'base':false, 'server':'N/A',
				'description':'Designed to handle healthcare information. Corepoint reformats data for other applications and puts the data through logic checks. It then sends an xml message if it passes these checks.'},
GSMS = {'color':'blue','shape':'dot', 'label':'GSMS', 'expanded':false, 'parent':'AX', 'base':false, 'server':'N/A',
			 'description':'(General Service Management System) Tracks maintenance and housekeeping costs.'},
Hyperion = {'color':'blue','shape':'dot', 'label':'Hyperion', 'expanded':false, 'parent':'null', 'base':false, 'server':'N/A',
			'description':'Used to Exctract financial data for high level purposes.'},
Peoplesoft = {'color':'blue','shape':'dot', 'label':'Peoplesoft', 'expanded':false, 'parent':'AX', 'base':false, 'server':'N/A',
				 'description':''},
Symphony = {'color':'blue','shape':'dot', 'label':'Symphony', 'expanded':false, 'parent':'AX', 'base':false, 'server':'N/A',
			 'description':'Dinning Services applications. Handles dinning revenue.'},
Vision = {'color':'red','shape':'dot', 'label':'Vision', 'expanded':false, 'parent':'AX', 'base':true, 'server':'N/A',
			 'description':'Census Software. Handles new resident information.'}

//NodeConnections
var AXConnections = {
	nodes:{
		Cofax,
		Peoplesoft,
		GSMS,
		Vision,
		Symphony,
		Hyperion
	},

	edges:{
		Cofax:{AX:{directed:true, weight:5}},
		Peoplesoft:{AX:{directed:true, weight:5}},
		GSMS:{AX:{directed:true, weight:5}},
		Vision:{AX:{directed:true, weight:5}},
		Symphony:{AX:{directed:true, weight:5}},
		AX:{Hyperion:{directed:true, weight:5}}
	}
}//end AXConnections

var BizTalkConnections = {
	nodes:{
		BizTalk360
	},
	edges:{
		BizTalk:{BizTalk360:{directed:true, weight:5}}
	}

}//end BizTalkConnections

var BizTalk360Connections = {
	nodes:{

	},
	edges:{

	}

}//end BizTalk360Connections

var CofaxConnections = {
	nodes:{

	},
	edges:{

	}

}//end CofaxConnections

var CorepointConnections = {
	nodes:{
		BizTalk
	},
	edges:{
		Corepoint:{BizTalk:{directed:true, weight:5}}
	}

}//end CorepointConnections

var GSMSConnections = {
	nodes:{
					
	},
	edges:{
					
	}
}

var HyperionConnections = {
	nodes:{

	},
	edges:{

	}

}//end HyperionConnections

var PeoplesoftConnections = {
	nodes:{

	},
	edges:{

	}

}//end PeoplesoftConnections

var SymphonyConnections = {
	nodes:{

	},
	edges:{

	}

}//end SymphonyConnections

var VisionConnections = {
	nodes:{
		Corepoint,
		AX
	},
	edges:{
		Vision:{
			Corepoint:{directed:true, weight:5},
			AX:{directed:true, weight:5}
		}
	}

}//end VisionConnections

//switch case for which node edges are to be restored
function switchNode(nName){
	switch(nName){
		case "AX":
			sys.graft(AXConnections);
			break;
		case "BizTalk":
			sys.graft(BizTalkConnections);
			break;
		case "BizTalk360":
			sys.graft(BizTalk360Connections);
			break;
		case "Cofax":
			sys.graft(CofaxConnections);
			break;
		case "Corepoint":
			sys.graft(CorepointConnections);
			break;  
		case "GSMS":
			sys.graft(GSMSConnections);
			break;
		case "Hyperion":
			sys.graft(HyperionConnections);
			break;
		case "Peoplesoft":
			sys.graft(PeoplesoftConnections);
			break; 
		case "Symphony":
			sys.graft(SymphonyConnections);
			break;   
		case "Vision":
			sys.graft(VisionConnections);
			break;
	}
}

function clip(nName1){//removes edges of a node but not the node
	sys.pruneNode(nName1);
    var temp = sys.addNode(nName1.name, {'color':nName1.data.color, 'shape':nName1.data.shape, 
    	'label':nName1.data.label, 'expanded':nName1.data.expanded,
        'parent':nName1.data.parent, 'base':nName1.data.base, 'description':nName1.data.description
    });
  }    