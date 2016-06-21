/*
Contains functions which are called throughout the entire Application Diagram Program
*/

//switch case for which applicationNode connections should be graphed
function expandApplicationNode(nName){
	switch(nName){
		case "AX":
			sys.addNode('AX', applicationNodes.AX);
			sys.graft(applicationConnections.AXConnections);
			break;
		case "BizTalk":
			sys.addNode('BizTalk', applicationNodes.BizTalk);
			sys.graft(applicationConnections.BizTalkConnections);
			break;
		case "BizTalk360":
			sys.addNode('BizTalk360', applicationNodes.BizTalk360);
			sys.graft(applicationConnections.BizTalk360Connections);
			break;
		case "Centricity":
			sys.addNode('Centricity', applicationNodes.Centricity);
			sys.graft(applicationConnections.CentricityConnections);
			break;
		case "Cofax":
			sys.addNode('Cofax', applicationNodes.Cofax);
			sys.graft(applicationConnections.CofaxConnections);
			break;
		case "CorePoint":
			sys.addNode('CorePoint', applicationNodes.CorePoint);
			sys.graft(applicationConnections.CorePointConnections);
			break;  
		case "DocuTrack":
			sys.addNode('DocuTrack', applicationNodes.DocuTrack);
			sys.graft(applicationConnections.DocuTrackConnections);
			break; 
		case "GSMS":
			sys.addNode('GSMS', applicationNodes.GSMS);
			sys.graft(applicationConnections.GSMSConnections);
			break;
		case "Hyperion":
			sys.addNode('Hyperion', applicationNodes.Hyperion);
			sys.graft(applicationConnections.HyperionConnections);
			break;
		case "MedicalManager":
			sys.addNode('MedicalManager', applicationNodes.MedicalManager);
			sys.graft(applicationConnections.MedicalManagerConnections);
			break;
		case "NetMenu":
			sys.addNode('NetMenu', applicationNodes.NetMenu);
			sys.graft(applicationConnections.NetMenuConnections);
			break;
		case "Odyssey":
			sys.addNode('Odyssey', applicationNodes.Odyssey);
			sys.graft(applicationConnections.OdysseyConnections);
			break;
		case "PeopleSoft":
			sys.addNode('PeopleSoft', applicationNodes.PeopleSoft);
			sys.graft(applicationConnections.PeopleSoftConnections);
			break; 
		case "Portal":
			sys.addNode('Portal', applicationNodes.Portal);
			sys.graft(applicationConnections.PortalConnections);
			break; 
		case "SalesForce":
			sys.addNode('SalesForce', applicationNodes.SalesForce);
			sys.graft(applicationConnections.SalesForceConnections);
			break;
		case "Simphony":
			sys.addNode('Simphony', applicationNodes.Simphony);
			sys.graft(applicationConnections.SimphonyConnections);
			break;   
		case "Vision":
			sys.addNode('Vision', applicationNodes.Vision);
			sys.graft(applicationConnections.VisionConnections);
			break;
	}
}//end expandApplicationNode

//switch case for different commands when clicking the Generate button
function displayNodes(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){

		case "AX":
			expandApplicationNode("AX");
			break;
		case "AX database":
			sys.graft(serverConnections.AXServers.database);
			break;
		case "AX development":
			sys.graft(serverConnections.AXServers.development);
			break;
		case "AX test":
			sys.graft(serverConnections.AXServers.test);
			break;
		case "AX production":
			sys.graft(serverConnections.AXServers.production);
			break;


		case "BizTalk":
			expandApplicationNode("BizTalk");
			break;
		case "BizTalk database":
			sys.graft(serverConnections.BizTalkServers.database);
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


		case "BizTalk360":
			expandApplicationNode("BizTalk360");
			break;
		case "BizTalk360 database":
			sys.graft(serverConnections.BizTalk360Servers.database);
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


		case "Centricity":
			expandApplicationNode("Centricity");
			break;
		case "Centricity database":
			sys.graft(serverConnections.CentricityServers.database);
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


		case "Cofax":
			expandApplicationNode("Cofax");
			break;
		case "Cofax database":
			sys.graft(serverConnections.CofaxServers.database);
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


		case "CorePoint":
			expandApplicationNode("CorePoint");
			break;
		case "CorePoint database":
			sys.graft(serverConnections.CorePointServers.database);
			break;
		case "CorePoint development":
			sys.graft(serverConnections.CorePointServers.development);
			break;
		case "CorePoint test":
			sys.graft(serverConnections.CorePointServers.test);
			break;
		case "CorePoint production":
			sys.graft(serverConnections.CorePointServers.production);
			break;


		case "DocuTrack":
			expandApplicationNode("DocuTrack");
			break;
		case "DocuTrack database":
			sys.graft(serverConnections.DocuTrackServers.database);
			break;
		case "DocuTrack development":
			sys.graft(serverConnections.DocuTrackServers.development);
			break;
		case "DocuTrack test":
			sys.graft(serverConnections.DocuTrackServers.test);
			break;
		case "DocuTrack production":
			sys.graft(serverConnections.DocuTrackServers.production);
			break;


		case "GSMS":
			expandApplicationNode("GSMS");
			break;
		case "GSMS database":
			sys.graft(serverConnections.GSMSServers.database);
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


		case "Hyperion":
			expandApplicationNode("Hyperion");
			break;
		case "Hyperion database":
			sys.graft(serverConnections.HyperionServers.database);
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


		case "MedicalManager":
			expandApplicationNode("MedicalManager");
			break;
		case "MedicalManager database":
			sys.graft(serverConnections.MedicalManagerServers.database);
			break;
		case "MedicalManager development":
			sys.graft(serverConnections.MedicalManagerServers.development);
			break;
		case "MedicalManager test":
			sys.graft(serverConnections.MedicalManagerServers.test);
			break;
		case "MedicalManager production":
			sys.graft(serverConnections.MedicalManagerServers.production);
			break;


		case "NetMenu":
			expandApplicationNode("NetMenu");
			break;
		case "NetMenu database":
			sys.graft(serverConnections.NetMenuServers.database);
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


		case "Odyssey":
			expandApplicationNode("Odyssey");
			break;
		case "Odyssey database":
			sys.graft(serverConnections.OdysseyServers.database);
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


		case "PeopleSoft":
			expandApplicationNode("PeopleSoft");
			break;
		case "PeopleSoft database":
			sys.graft(serverConnections.PeopleSoftServers.database);
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


		case "Portal":
			expandApplicationNode("Portal");
			break;
		case "Portal database":
			sys.graft(serverConnections.PortalServers.database);
			break;
		case "Portal development":
			sys.graft(serverConnections.PortalServers.development);
			break;
		case "Portal test":
			sys.graft(serverConnections.PortalServers.test);
			break;
		case "Portal production":
			sys.graft(serverConnections.PortalServers.production);
			break;


		case "SalesForce":
			expandApplicationNode("SalesForce");
			break;
		case "SalesForce database":
			sys.graft(serverConnections.SalesForceServers.database);
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


		case "Simphony":
			expandApplicationNode("Simphony");
			break;
		case "Simphony database":
			sys.graft(serverConnections.SimphonyServers.database);
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


		case "Vision":
			expandApplicationNode("Vision");
			break;
		case "Vision database":
			sys.graft(serverConnections.VisionServers.database);
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

		case "generate all applications":
			generateAllApplications();
			break;
		default:
			alert("Please enter correct command");
	}
}  

//switch case for different commands when clicking the Remove button
function clearNodes(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){

		case "AX":
			alert("Red nodes cannot be removed");
			break;
		case "AX database":
			for(node in serverConnections.AXServers.database.nodes){
				sys.pruneNode(node);
			}
			break;
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


		case "BizTalk":
			sys.pruneNode("BizTalk");
			break;
		case "BizTalk database":
			for(node in serverConnections.BizTalkServers.database.nodes){
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


		case "BizTalk360":
			sys.pruneNode("BizTalk360");
			break;
		case "BizTalk360 database":
			for(node in serverConnections.BizTalk360Servers.database.nodes){
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


		case "Centricity":
			sys.pruneNode("Centricity");
			break;
		case "Centricity database":
			for(node in serverConnections.CentricityServers.database.nodes){
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


		case "Cofax":
			sys.pruneNode("Cofax");
			break;
		case "Cofax database":
			for(node in serverConnections.CofaxServers.database.nodes){
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


		case "CorePoint":
			sys.pruneNode("CorePoint");
			break;
		case "CorePoint database":
			for(node in serverConnections.CorePointServers.database.nodes){
				sys.pruneNode(node);
			}
			break;
		case "CorePoint development":
			for(node in serverConnections.CorePointServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "CorePoint test":
			for(node in serverConnections.CorePointServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "CorePoint production":
			for(node in serverConnections.CorePointServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "DocuTrack":
			sys.pruneNode("DocuTrack");
			break;
		case "DocuTrack database":
			for(node in serverConnections.DocuTrackServers.database.nodes){
				sys.pruneNode(node);
			}
			break;
		case "DocuTrack development":
			for(node in serverConnections.DocuTrackServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "DocuTrack test":
			for(node in serverConnections.DocuTrackServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "DocuTrack production":
			for(node in serverConnections.DocuTrackServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "GSMS":
			sys.pruneNode("GSMS");
			break;
		case "GSMS database":
			for(node in serverConnections.GSMSServers.database.nodes){
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


		case "Hyperion":
			sys.pruneNode("Hyperion");
			break;
		case "Hyperion database":
			for(node in serverConnections.HyperionServers.database.nodes){
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


		case "MedicalManager":
			sys.pruneNode("MedicalManager");
			break;
		case "MedicalManager database":
			for(node in serverConnections.MedicalManagerServers.database.nodes){
				sys.pruneNode(node);
			}
			break;
		case "MedicalManager development":
			for(node in serverConnections.MedicalManagerServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "MedicalManager test":
			for(node in serverConnections.MedicalManagerServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "MedicalManager production":
			for(node in serverConnections.MedicalManagerServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "NetMenu":
			sys.pruneNode("NetMenu");
			break;
		case "NetMenu database":
			for(node in serverConnections.NetMenuServers.database.nodes){
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


		case "Odyssey":
			sys.pruneNode("Odyssey");
			break;
		case "Odyssey database":
			for(node in serverConnections.OdysseyServers.database.nodes){
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


		case "PeopleSoft":
			sys.pruneNode("PeopleSoft");
			break;
		case "PeopleSoft database":
			for(node in serverConnections.PeopleSoftServers.database.nodes){
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


		case "Portal":
			sys.pruneNode("Portal");
			break;
		case "Portal database":
			for(node in serverConnections.PortalServers.database.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Portal development":
			for(node in serverConnections.PortalServers.development.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Portal test":
			for(node in serverConnections.PortalServers.test.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Portal production":
			for(node in serverConnections.PortalServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "SalesForce":
			sys.pruneNode("SalesForce");
			break;
		case "SalesForce database":
			for(node in serverConnections.SalesForceServers.database.nodes){
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


		case "Simphony":
			sys.pruneNode("Simphony");
			break;
		case "Simphony database":
			for(node in serverConnections.SimphonyServers.database.nodes){
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


		case "Vision":
			alert("Red nodes cannot be removed");
			break;
		case "Vision database":
			for(node in serverConnections.VisionServers.database.nodes){
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

//function which will expand all the applications with their connections
function generateAllApplications(){
	for(node in applicationNodes){
		expandApplicationNode(node);
		var nodeObj = sys.getNode(node);
		nodeObj.data.expanded = true;
	}
}

//function which will remove all but the base(red) applications and their connections.
function removeAllApplications(){
	generateAllApplications();//fixes unexpected behavior where system is not completely expanded yet
	for(node in applicationNodes){
		var nodeObj = sys.getNode(node);
		nodeObj.data.expanded = false;
		if(!nodeObj.data.base){
			sys.pruneNode(nodeObj);
		}
		if(nodeObj.data.base){
			clipNode(nodeObj);
		}
				
	}
}

//function which removes edges of a node but not the node itself.
function clipNode(nName1){
	sys.pruneNode(nName1);
    var temp = sys.addNode(nName1.name, {'color':nName1.data.color, 'shape':nName1.data.shape, 
    	'label':nName1.data.label, 'expanded':nName1.data.expanded,
        'parent':nName1.data.parent, 'base':nName1.data.base, 'description':nName1.data.description
    });
} 