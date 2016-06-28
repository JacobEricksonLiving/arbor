/*
Contains functions which are called throughout the entire Application Diagram Program
*/

//switch case for which applicationNode connections should be graphed
function expandApplicationNode(nName){
	switch(nName){
		case "AX":
			sys.addNode('AX', applicationNodes.AX);
			applicationNodes.AX.expanded = true;
			sys.graft(applicationConnections.AXConnections);
			break;
		case "BizTalk":
			sys.addNode('BizTalk', applicationNodes.BizTalk);
			applicationNodes.BizTalk.expanded = true;
			sys.graft(applicationConnections.BizTalkConnections);
			break;
		case "BizTalk360":
			sys.addNode('BizTalk360', applicationNodes.BizTalk360);
			applicationNodes.BizTalk360.expanded = true;
			sys.graft(applicationConnections.BizTalk360Connections);
			break;
		case "Centricity":
			sys.addNode('Centricity', applicationNodes.Centricity);
			applicationNodes.Centricity.expanded = true;
			sys.graft(applicationConnections.CentricityConnections);
			break;
		case "Cofax":
			sys.addNode('Cofax', applicationNodes.Cofax);
			applicationNodes.Cofax.expanded = true;
			sys.graft(applicationConnections.CofaxConnections);
			break;
		case "CorePoint":
			sys.addNode('CorePoint', applicationNodes.CorePoint);
			applicationNodes.CorePoint.expanded = true;
			sys.graft(applicationConnections.CorePointConnections);
			break;  
		case "DocuTrack":
			sys.addNode('DocuTrack', applicationNodes.DocuTrack);
			applicationNodes.DocuTrack.expanded = true;
			sys.graft(applicationConnections.DocuTrackConnections);
			break; 
		case "GSMS":
			sys.addNode('GSMS', applicationNodes.GSMS);
			applicationNodes.GSMS.expanded = true;
			sys.graft(applicationConnections.GSMSConnections);
			break;
		case "Hyperion":
			sys.addNode('Hyperion', applicationNodes.Hyperion);
			applicationNodes.Hyperion.expanded = true;
			sys.graft(applicationConnections.HyperionConnections);
			break;
		case "MedicalManager":
			sys.addNode('MedicalManager', applicationNodes.MedicalManager);
			applicationNodes.MedicalManager.expanded = true;
			sys.graft(applicationConnections.MedicalManagerConnections);
			break;
		case "NetMenu":
			sys.addNode('NetMenu', applicationNodes.NetMenu);
			applicationNodes.NetMenu.expanded = true;
			sys.graft(applicationConnections.NetMenuConnections);
			break;
		case "Odyssey":
			sys.addNode('Odyssey', applicationNodes.Odyssey);
			applicationNodes.Odyssey.expanded = true;
			sys.graft(applicationConnections.OdysseyConnections);
			break;
		case "PeopleSoft":
			sys.addNode('PeopleSoft', applicationNodes.PeopleSoft);
			applicationNodes.PeopleSoft.expanded = true;
			sys.graft(applicationConnections.PeopleSoftConnections);
			break; 
		case "Portal":
			sys.addNode('Portal', applicationNodes.Portal);
			applicationNodes.Portal.expanded = true;
			sys.graft(applicationConnections.PortalConnections);
			break; 
		case "SalesForce":
			sys.addNode('SalesForce', applicationNodes.SalesForce);
			applicationNodes.SalesForce.expanded = true;
			sys.graft(applicationConnections.SalesForceConnections);
			break;
		case "Simphony":
			sys.addNode('Simphony', applicationNodes.Simphony);
			applicationNodes.Simphony.expanded = true;
			sys.graft(applicationConnections.SimphonyConnections);
			break;   
		case "Vision":
			sys.addNode('Vision', applicationNodes.Vision);
			applicationNodes.Vision.expanded = true;
			sys.graft(applicationConnections.VisionConnections);
			break;
	}
}//end expandApplicationNode

//switch case for different commands when clicking the Generate button
function generateNodes(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){

		case "AX":
			expandApplicationNode("AX");
			break;
		case "AX pre-production":
			sys.graft(serverConnections.AXServers.pre-production);
			break;
		case "AX production":
			sys.graft(serverConnections.AXServers.production);
			break;


		case "BizTalk":
			expandApplicationNode("BizTalk");
			break;
		case "BizTalk pre-production":
			sys.graft(serverConnections.BizTalkServers.pre_production);
			break;
		case "BizTalk production":
			sys.graft(serverConnections.BizTalkServers.production);
			break;


		case "BizTalk360":
			expandApplicationNode("BizTalk360");
			break;
		case "BizTalk360 pre-production":
			sys.graft(serverConnections.BizTalk360Servers.pre_production);
			break;
		case "BizTalk360 production":
			sys.graft(serverConnections.BizTalk360Servers.production);
			break;


		case "Centricity":
			expandApplicationNode("Centricity");
			break;
		case "Centricity pre-production":
			sys.graft(serverConnections.CentricityServers.pre_production);
			break;
		case "Centricity production":
			sys.graft(serverConnections.CentricityServers.production);
			break;


		case "Cofax":
			expandApplicationNode("Cofax");
			break;
		case "Cofax pre-production":
			sys.graft(serverConnections.CofaxServers.pre_production);
			break;
		case "Cofax production":
			sys.graft(serverConnections.CofaxServers.production);
			break;


		case "CorePoint":
			expandApplicationNode("CorePoint");
			break;
		case "CorePoint pre-production":
			sys.graft(serverConnections.CorePointServers.pre_production);
			break;
		case "CorePoint production":
			sys.graft(serverConnections.CorePointServers.production);
			break;


		case "DocuTrack":
			expandApplicationNode("DocuTrack");
			break;
		case "DocuTrack pre-production":
			sys.graft(serverConnections.DocuTrackServers.pre_production);
			break;
		case "DocuTrack production":
			sys.graft(serverConnections.DocuTrackServers.production);
			break;


		case "GSMS":
			expandApplicationNode("GSMS");
			break;
		case "GSMS pre-production":
			sys.graft(serverConnections.GSMSServers.pre_production);
			break;
		case "GSMS production":
			sys.graft(serverConnections.GSMSServers.production);
			break;


		case "Hyperion":
			expandApplicationNode("Hyperion");
			break;
		case "Hyperion pre-production":
			sys.graft(serverConnections.HyperionServers.pre_production);
			break;
		case "Hyperion production":
			sys.graft(serverConnections.HyperionServers.production);
			break;


		case "MedicalManager":
			expandApplicationNode("MedicalManager");
			break;
		case "MedicalManager pre-production":
			sys.graft(serverConnections.MedicalManagerServers.pre_production);
			break;
		case "MedicalManager production":
			sys.graft(serverConnections.MedicalManagerServers.production);
			break;


		case "NetMenu":
			expandApplicationNode("NetMenu");
			break;
		case "NetMenu pre-production":
			sys.graft(serverConnections.NetMenuServers.pre_production);
			break;
		case "NetMenu production":
			sys.graft(serverConnections.NetMenuServers.production);
			break;


		case "Odyssey":
			expandApplicationNode("Odyssey");
			break;
		case "Odyssey pre-production":
			sys.graft(serverConnections.OdysseyServers.pre_production);
			break;
		case "Odyssey production":
			sys.graft(serverConnections.OdysseyServers.production);
			break;


		case "PeopleSoft":
			expandApplicationNode("PeopleSoft");
			break;
		case "PeopleSoft pre-production":
			sys.graft(serverConnections.PeopleSoftServers.pre_production);
			break;
		case "PeopleSoft production":
			sys.graft(serverConnections.PeopleSoftServers.production);
			break;


		case "Portal":
			expandApplicationNode("Portal");
			break;
		case "Portal pre-production":
			sys.graft(serverConnections.PortalServers.pre_production);
			break;
		case "Portal production":
			sys.graft(serverConnections.PortalServers.production);
			break;


		case "SalesForce":
			expandApplicationNode("SalesForce");
			break;
		case "SalesForce pre-production":
			sys.graft(serverConnections.SalesForceServers.pre_production);
			break;
		case "SalesForce production":
			sys.graft(serverConnections.SalesForceServers.production);
			break;


		case "Simphony":
			expandApplicationNode("Simphony");
			break;
		case "Simphony pre-production":
			sys.graft(serverConnections.SimphonyServers.pre_production);
			break;
		case "Simphony production":
			sys.graft(serverConnections.SimphonyServers.production);
			break;


		case "Vision":
			expandApplicationNode("Vision");
			break;
		case "Vision pre-production":
			sys.graft(serverConnections.VisionServers.pre_production);
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
function removeNodes(){
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
			applicationNodes.BizTalk.expanded = false;
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
			applicationNodes.BizTalk360.expanded = false;
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
			applicationNodes.Centricity.expanded = false;
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
			applicationNodes.Cofax.expanded = false;
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
			alert("Red nodes cannot be removed");
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
			applicationNodes.DocuTrack.expanded = false;
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
			applicationNodes.GSMS.expanded = false;
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
			applicationNodes.Hyperion.expanded = false;
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
			applicationNodes.MedicalManager.expanded = false;
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
			applicationNodes.NetMenu.expanded = false;
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
			applicationNodes.Odyssey.expanded = false;
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
			applicationNodes.PeopleSoft.expanded = false;
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
			applicationNodes.Portal.expanded = false;
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
			applicationNodes.SalesForce.expanded = false;
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
			applicationNodes.Simphony.expanded = false;
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
	}
}

//function which will remove all but the base(red) applications and their connections.
function removeAllApplications(){
	generateAllApplications();//fixes unexpected behavior where system is not completely expanded yet
	for(node in applicationNodes){
		var nodeObj = sys.getNode(node);
		nodeObj.data.expanded = false;
		if(!nodeObj.data.base){
			sys.pruneNode(node);
		} else {
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