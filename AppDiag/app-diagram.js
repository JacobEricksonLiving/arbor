//Holds the connection data used to regraph nodes once they are removed.
//Holds the data for all nodes in the system.
//Also Holds utility functions used by renderer.js

//list of all nodes in the system.
var Nodes = {
	AX : {'color':'red','shape':'dot', 'label':'AX', 'expanded':false, 'parent':'Hyperion', 'base':true, 'server':'N/A', 
			'description':'Handles all finacial data. Recieves large files dropped at a time. Connections to AX represent transfer of finacial data.'},
	BizTalk : {'color':'blue','shape':'dot', 'label':'BizTalk', 'expanded':false, 'parent':'Corepoint', 'base':false, 'server':'N/A',
			 'description':'Used to reconfigure data for other applications then send the data downstream. Also refered to as ECIX.'},
	BizTalk360 : {'color':'blue','shape':'dot', 'label':'BizTalk360', 'expanded':false, 'parent':'BizTalk', 'base':false, 'server':'N/A',
				 'description':'This is an interface for BizTalk. It allows nonadministrators to access BizTalk.'},
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
	Vision : {'color':'red','shape':'dot', 'label':'Vision', 'expanded':false, 'parent':'AX', 'base':true, 'server':'N/A',
			 'description':'Census Software. Handles new resident information.'}
}
//NodeConnections
var Connections = {
	AXConnections : {
		nodes:{
			Cofax : Nodes.Cofax,
			PeopleSoft:Nodes.PeopleSoft,
			GSMS:Nodes.GSMS,
			Vision:Nodes.Vision,
			Symphony:Nodes.Symphony,
			Hyperion:Nodes.Hyperion
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
			BizTalk360:Nodes.BizTalk360
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

	CofaxConnections : {
		nodes:{
			AX:Nodes.AX,
			PeopleSoft:Nodes.PeopleSoft
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
			BizTalk:Nodes.BizTalk
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
			AX:Nodes.AX,
			SalesForce:Nodes.SalesForce
		},
		edges:{
			AX:{Hyperion:{directed:true, weight:5}},
			SalesForce:{Hyperion:{directed:true, weight:5}}
		}

	},//end HyperionConnections

	PeopleSoftConnections : {
		nodes:{
			AX:Nodes.AX,
			Cofax:Nodes.Cofax
		},
		edges:{
			PeopleSoft:{AX:{directed:true, weight:5}},
			Cofax:{PeopleSoft:{directed:true, weight:5}}
		}

	},//end PeopleSoftConnections

	SalesForceConnections : {
		nodes:{
			Hyperion:Nodes.Hyperion
		},
		edges:{
			SalesForce:{Hyperion:{directed:true, weight:5}}
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
			AX:Nodes.AX,
			Corepoint:Nodes.Corepoint
		},
		edges:{
			Vision:{
				AX:{directed:true, weight:5},
				Corepoint:{directed:true, weight:5}
			}
		}

	}//end VisionConnections

}//end Connections
var AXServers = {
	nodes:{
		a :{'color':'green', 'label':'a'}
	},
	edges:{
		AX:{ a:{weight:5}}
	}
}



//switch case for which node edges are to be restored
function expandNode(nName){
	switch(nName){
		case "AX":
			sys.graft(Connections.AXConnections);
			break;
		case "BizTalk":
			sys.graft(Connections.BizTalkConnections);
			break;
		case "BizTalk360":
			sys.graft(Connections.BizTalk360Connections);
			break;
		case "Cofax":
			sys.graft(Connections.CofaxConnections);
			break;
		case "Corepoint":
			sys.graft(Connections.CorepointConnections);
			break;  
		case "GSMS":
			sys.graft(Connections.GSMSConnections);
			break;
		case "Hyperion":
			sys.graft(Connections.HyperionConnections);
			break;
		case "PeopleSoft":
			sys.graft(Connections.PeopleSoftConnections);
			break; 
		case "SalesForce":
			sys.graft(Connections.SalesForceConnections);
			break;
		case "Symphony":
			sys.graft(Connections.SymphonyConnections);
			break;   
		case "Vision":
			sys.graft(Connections.VisionConnections);
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

function displayServer(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){
		case "AX":
			sys.graft(AXServers);
			break;
		case "expand all":
			expandAll();
			break;
		default:
			var outputText = document.getElementById("output");
			outputText.innerHTML = "";
			outputText.innerHTML += "Pleas enter correct command.";
	}
}  

function clearServer(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){
		case "AX":
			for(var nodes in AXServers.nodes){
				sys.pruneNode(nodes);
			}
		case "remove all":
			removeAll();
		default:
			var outputText = document.getElementById("output");
			outputText.innerHTML = "";
			outputText.innerHTML += "Pleas enter correct command.";
	}
}

function expandAll(){
	for(node in Nodes){
		expandNode(node);
	}
}
function removeAll(){
	expandAll();//fixes unexpected behavior where system is not completely expanded yet
	for(node in Nodes){
		sys.pruneNode(node);		
	}
	sys.addNode('AX', Nodes.AX);//since this are removed with the for loop add back it
	sys.addNode('Vision', Nodes.Vision);
}
