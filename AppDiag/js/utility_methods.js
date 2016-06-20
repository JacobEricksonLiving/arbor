function clip(nName1){//removes edges of a node but not the node
	sys.pruneNode(nName1);
    var temp = sys.addNode(nName1.name, {'color':nName1.data.color, 'shape':nName1.data.shape, 
    	'label':nName1.data.label, 'expanded':nName1.data.expanded,
        'parent':nName1.data.parent, 'base':nName1.data.base, 'description':nName1.data.description
    });
} 

function displayNodes(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){
		case "AX development":
			sys.graft(serverConnections.AXServers.development);
			break;
		case "AX test":
			sys.graft(serverConnections.AXServers.test);
			break;
		case "AX production":
			sys.graft(serverConnections.AXServers.production);
			break;

		case "BizTalk development":
			sys.graft(serverConnections.BizTalkServers.development);
			break;
		case "BizTalk test":
			sys.graft(serverConnections.BizTalkServers.test);
			break;
		case "BizTalk production":
			sys.graft(serverConnections.BizTalkServers.production);
			break;

		case "BizTalk360 development":
			sys.graft(serverConnections.BizTalk360Servers.development);
			break;
		case "BizTalk360 test":
			sys.graft(serverConnections.BizTalk360Servers.test);
			break;
		case "BizTalk360 production":
			sys.graft(serverConnections.BizTalk360Servers.production);
			break;

		case "Centricity development":
			sys.graft(serverConnections.CentricityServers.development);
			break;
		case "Centricity test":
			sys.graft(serverConnections.CentricityServers.test);
			break;
		case "Centricity production":
			sys.graft(serverConnections.CentricityServers.production);
			break;

		case "Cofax development":
			sys.graft(serverConnections.CofaxServers.development);
			break;
		case "Cofax test":
			sys.graft(serverConnections.CofaxServers.test);
			break;
		case "Cofax production":
			sys.graft(serverConnections.CofaxServers.production);
			break;

		case "Corepoint development":
			sys.graft(serverConnections.CorepointServers.development);
			break;
		case "Corepoint test":
			sys.graft(serverConnections.CorepointServers.test);
			break;
		case "Corepoint production":
			sys.graft(serverConnections.CorepointServers.production);
			break;

		case "GSMS development":
			sys.graft(serverConnections.GSMSServers.development);
			break;
		case "GSMS test":
			sys.graft(serverConnections.GSMSServers.test);
			break;
		case "GSMS production":
			sys.graft(serverConnections.GSMSServers.production);
			break;

		case "Hyperion development":
			sys.graft(serverConnections.HyperionServers.development);
			break;
		case "Hyperion test":
			sys.graft(serverConnections.HyperionServers.test);
			break;
		case "Hyperion production":
			sys.graft(serverConnections.HyperionServers.production);
			break;

		case "NetMenu development":
			sys.graft(serverConnections.NetMenuServers.development);
			break;
		case "NetMenu test":
			sys.graft(serverConnections.NetMenuServers.test);
			break;
		case "NetMenu production":
			sys.graft(serverConnections.NetMenuServers.production);
			break;

		case "Odyssey development":
			sys.graft(serverConnections.OdysseyServers.development);
			break;
		case "Odyssey test":
			sys.graft(serverConnections.OdysseyServers.test);
			break;
		case "Odyssey production":
			sys.graft(serverConnections.OdysseyServers.production);
			break;

		case "PeopleSoft development":
			sys.graft(serverConnections.PeopleSoftServers.development);
			break;
		case "PeopleSoft test":
			sys.graft(serverConnections.PeopleSoftServers.test);
			break;
		case "PeopleSoft production":
			sys.graft(serverConnections.PeopleSoftServers.production);
			break;

		case "SalesForce development":
			sys.graft(serverConnections.SalesForceServers.development);
			break;
		case "SalesForce test":
			sys.graft(serverConnections.SalesForceServers.test);
			break;
		case "SalesForce production":
			sys.graft(serverConnections.SalesForceServers.production);
			break;

		case "Simphony development":
			sys.graft(serverConnections.SimphonyServers.development);
			break;
		case "Simphony test":
			sys.graft(serverConnections.SimphonyServers.test);
			break;
		case "Simphony production":
			sys.graft(serverConnections.SimphonyServers.production);
			break;

		case "Vision development":
			sys.graft(serverConnections.VisionServers.development);
			break;
		case "Vision test":
			sys.graft(serverConnections.VisionServers.test);
			break;
		case "Vision production":
			sys.graft(serverConnections.VisionServers.production);
			break;

		case "expand all applications":
			expandAllApplications();
			break;
		default:
			alert("Please enter correct command");
	}
}  

function clearNodes(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){

		case "AX development":
			for(node in serverConnections.AXServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "AX test":
			for(node in serverConnections.AXServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "AX production":
			for(node in serverConnections.AXServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "BizTalk development":
			for(node in serverConnections.BizTalkServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "BizTalk test":
			for(node in serverConnections.BizTalkServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "BizTalk production":
			for(node in serverConnections.BizTalkServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "BizTalk360 development":
			for(node in serverConnections.BizTalk360Servers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "BizTalk360 test":
			for(node in serverConnections.BizTalk360Servers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "BizTalk360 production":
			for(node in serverConnections.BizTalk360Servers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "Centricity development":
			for(node in serverConnections.CentricityServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Centricity test":
			for(node in serverConnections.CentricityServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Centricity production":
			for(node in serverConnections.CentricityServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "Cofax development":
			for(node in serverConnections.CofaxServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Cofax test":
			for(node in serverConnections.CofaxServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Cofax production":
			for(node in serverConnections.CofaxServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "Corepoint development":
			for(node in serverConnections.CorepointServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Corepoint test":
			for(node in serverConnections.CorepointServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Corepoint production":
			for(node in serverConnections.CorepointServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "GSMS development":
			for(node in serverConnections.GSMSServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "GSMS test":
			for(node in serverConnections.GSMSServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "GSMS production":
			for(node in serverConnections.GSMSServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "Hyperion development":
			for(node in serverConnections.HyperionServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Hyperion test":
			for(node in serverConnections.HyperionServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Hyperion production":
			for(node in serverConnections.HyperionServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "NetMenu development":
			for(node in serverConnections.NetMenuServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "NetMenu test":
			for(node in serverConnections.NetMenuServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "NetMenu production":
			for(node in serverConnections.NetMenuServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "Odyssey development":
			for(node in serverConnections.OdysseyServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Odyssey test":
			for(node in serverConnections.OdysseyServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Odyssey production":
			for(node in serverConnections.OdysseyServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "PeopleSoft development":
			for(node in serverConnections.PeopleSoftServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "PeopleSoft test":
			for(node in serverConnections.PeopleSoftServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "PeopleSoft production":
			for(node in serverConnections.PeopleSoftServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "SalesForce development":
			for(node in serverConnections.SalesForceServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "SalesForce test":
			for(node in serverConnections.SalesForceServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "SalesForce production":
			for(node in serverConnections.SalesForceServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "Simphony development":
			for(node in serverConnections.SimphonyServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Simphony test":
			for(node in serverConnections.SimphonyServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Simphony production":
			for(node in serverConnections.SimphonyServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "Vision development":
			for(node in serverConnections.VisionServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Vision test":
			for(node in serverConnections.VisionServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Vision production":
			for(node in serverConnections.VisionServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "remove all applications":
			removeAllApplications();
			break;
		default:
			alert("Please enter correct command");
	}
}

function expandAllApplications(){
	for(node in applicationNodes){
		expandApplicationNode(node);
	}
}
function removeAllApplications(){
	expandAllApplications();//fixes unexpected behavior where system is not completely expanded yet
	for(node in applicationNodes){
		sys.pruneNode(node);		
	}
	sys.addNode('AX', applicationNodes.AX);//since this are removed with the for loop add back it
	sys.addNode('Vision', applicationNodes.Vision);
}