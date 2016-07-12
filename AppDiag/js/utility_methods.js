/*
Contains functions which are called throughout the entire Application Diagram Program
*/

//switch case for which applicationNode connections should be graphed
function expandApplicationNode(nName){
	switch(nName){
		case "ActiveDirectory":
			sys.addNode('ActiveDirectory', applicationNodes.ActiveDirectory);
			applicationNodes.ActiveDirectory.expanded = true;
			sys.graft(applicationConnections.ActiveDirectoryConnections);
			break;
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
		case "CoFax":
			sys.addNode('CoFax', applicationNodes.CoFax);
			applicationNodes.CoFax.expanded = true;
			sys.graft(applicationConnections.CoFaxConnections);
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
		case "EricksonAdvantage":
			sys.addNode('EricksonAdvantage', applicationNodes.EricksonAdvantage);
			applicationNodes.EricksonAdvantage.expanded = true;
			sys.graft(applicationConnections.EricksonAdvantageConnections);
			break; 
		case "GSMS":
			sys.addNode('GSMS', applicationNodes.GSMS);
			applicationNodes.GSMS.expanded = true;
			sys.graft(applicationConnections.GSMSConnections);
			break;
		case "Luminate":
			sys.addNode('Luminate', applicationNodes.Luminate);
			applicationNodes.Luminate.expanded = true;
			sys.graft(applicationConnections.LuminateConnections);
			break;
		case "Hyperion":
			sys.addNode('Hyperion', applicationNodes.Hyperion);
			applicationNodes.Hyperion.expanded = true;
			sys.graft(applicationConnections.HyperionConnections);
			break;
		case "JDE":
			sys.addNode('JDE', applicationNodes.JDE);
			applicationNodes.JDE.expanded = true;
			sys.graft(applicationConnections.JDEConnections);
			break;
		case "Kronos":
			sys.addNode('Kronos', applicationNodes.Kronos);
			applicationNodes.Kronos.expanded = true;
			sys.graft(applicationConnections.KronosConnections);
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
		case "RemedyForce":
			sys.addNode('RemedyForce', applicationNodes.RemedyForce);
			applicationNodes.RemedyForce.expanded = true;
			sys.graft(applicationConnections.RemedyForceConnections);
			break; 
		case "Riskonnect":
			sys.addNode('Riskonnect', applicationNodes.Riskonnect);
			applicationNodes.Riskonnect.expanded = true;
			sys.graft(applicationConnections.RiskonnectConnections);
			break; 
		case "SalesForce":
			sys.addNode('SalesForce', applicationNodes.SalesForce);
			applicationNodes.SalesForce.expanded = true;
			sys.graft(applicationConnections.SalesForceConnections);
			expandApplicationNode("SalesForceApps");
			break; 
		case "SalesForceApps":
			sys.addNode('SalesForceApps', applicationNodes.SalesForceApps);
			applicationNodes.SalesForceApps.expanded = true;
			sys.graft(applicationConnections.SalesForceAppsConnections);
			break; 
		case "SalesMarketing":
			sys.addNode('SalesMarketing', applicationNodes.SalesMarketing);
			applicationNodes.SalesMarketing.expanded = true;
			sys.graft(applicationConnections.SalesMarketingConnections);
			break;
		case "ServiceMax":
			sys.addNode('ServiceMax', applicationNodes.ServiceMax);
			applicationNodes.ServiceMax.expanded = true;
			sys.graft(applicationConnections.ServiceMaxConnections);
			break;
		case "Simphony":
			sys.addNode('Simphony', applicationNodes.Simphony);
			applicationNodes.Simphony.expanded = true;
			sys.graft(applicationConnections.SimphonyConnections);
			break;   
		case "Taleo":
			sys.addNode('Taleo', applicationNodes.Taleo);
			applicationNodes.Taleo.expanded = true;
			sys.graft(applicationConnections.TaleoConnections);
			break;
		case "Vision":
			sys.addNode('Vision', applicationNodes.Vision);
			applicationNodes.Vision.expanded = true;
			sys.graft(applicationConnections.VisionConnections);
			break;
	}
}//end expandApplicationNode

//switch case for which label to display when mousing over and edge
function generateEdgeLabel(eName){
	switch(eName){
		case "ActiveDirectory_PeopleSoft":
			return "To ActiveDirectory:Updated access info. To PeopleSoft: Username/Password";
		case "AX_Hyperion":
			return "Extract Financial Data";
			break;

		case "BizTalk_BizTalk360":
			return "Interfaces";
		case "BizTalk_CorePoint":
			return "Reconfigue Data";
		case "BizTalk_Odyssey":
			return "Reconfig. Demographic Data from Vision";

		case "Centricity_MedicalManager":
			return "Demographic Data";
		case "Centricity_Portal":
			return "ERM Data";

		case "CoFax_AX":
			return "Document Images";
		case "CoFax_PeopleSoft":
			return "Document Images";

		case "CorePoint_BizTalk":
			return "Reconfigure Data";
		case "CorePoint_MedicalManager":
			return "Reconfig. Demographic Data to/from Vision";
		case "CorePoint_NetMenu":
			return "";
		case "CorePoint_Vision":
			return "Demographic Data";

		case "DocuTrack_Centricity":
			return "Scanned Documents";

		case "GSMS_AX":
			return "Corprate Housing/Maintance fees";
		case "GSMS_Vision":
			return "To GSMS:resident data, To Vision:resident billing";

		case "JDE_Hyperion":
			return "Extraxt Financial Data";

		case "Kronos_PeopleSoft":
			return "To Kronos:changes in Employee info. To PeopleSoft:payroll data.";

		case "MedicalManager_Centricity":
			return "Demographic Data";
		case "MedicalManager_CorePoint":
			return "Reconfig. Demographic Data to/from Vision";

		case "NetMenu_Simphony":
			return "Menu Items";

		case "Odyssey_Vision":
			return "Accounts receivable";

		case "PeopleSoft_ActiveDirectory":
			return "To ActiveDirectory:Updated access info. To PeopleSoft: Username/Password";
		case "PeopleSoft_AX":
			return "Wage Fee Files";
		case "PeopleSoft_GSMS":
			return "Employee name/department/id for ticket";
		case "PeopleSoft_Kronos":
			return "To Kronos:changes in Employee info. To PeopleSoft:payroll data.";
		case "PeopleSoft_SalesForce":
			return "Employee Demographic Information";
		case "PeopleSoft_Taleo":
			return "To Taleo: Demographic Data. To PeopleSoft: New Hire Data";

		case "SalesForce_AX":
			return "Corprate Maintance Fees";
		case "SalesForce_SalesForceApps":
			return "Apps Built on SalesForce";
		case "SalesForce_Vision":
			return "To SalesForce:resident data, to Vision:resident billing";

		case "SalesForceApps_EricksonAdvantage":
			return "Resident Info from Vision";
		case "SalesForceApps_Luminate":
			return "Demographic Info from PeopleSoft/Vision";
		case "SalesForceApps_RemedyForce":
			return "Demographic data from PeopleSoft/Vision. Sends Financial data to Vision/AX";
		case "SalesForceApps_Riskonnect":
			return "Demographic Info from PeopleSoft/Vision";
		case "SalesForceApps_SalesMarketing":
			return "Sends Demographic data to Vision";
		case "SalesForceApps_ServiceMax":
			return "Demographic data from PeopleSoft/Vision. Sends Financial data to Vision/AX";

		case "Simphony_AX":
			return "Dinning Revenue";
		case "Simphony_NetMenu":
			return "Menu Items";

		case "Taleo_PeopleSoft":
			return "To Taleo: Demographic Data. To PeopleSoft: New Hire Data";

		case "Vision_AX":
			return "Billing from Residents";
		case "Vision_CorePoint":
			return "Demographic Data";
		case "Vision_GSMS":
			return "To GSMS:resident data, To Vision:resident billing";
		case "Vision_Portal":
			return "ERM Data";
		case "Vision_SalesForce":
			return "To SalesForce:resident data, To Vision:resident billing";
	}//end switch case
}//end generateEdgeLabel

//switch case for different commands when clicking the Generate button
function generate(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){

		//node section
		case "ActiveDirectory":
			expandApplicationNode("ActiveDirectory");
			break;
		case "ActiveDirectory non-production":
			sys.graft(serverConnections.ActiveDirectoryServers.non_production);
			break;
		case "ActiveDirectory production":
			sys.graft(serverConnections.ActiveDirectoryServers.production);
			break;

		case "AX":
			expandApplicationNode("AX");
			break;
		case "AX non-production":
			sys.graft(serverConnections.AXServers.non_production);
			break;
		case "AX production":
			sys.graft(serverConnections.AXServers.production);
			break;


		case "BizTalk":
			expandApplicationNode("BizTalk");
			break;
		case "BizTalk non-production":
			sys.graft(serverConnections.BizTalkServers.non_production);
			break;
		case "BizTalk production":
			sys.graft(serverConnections.BizTalkServers.production);
			break;


		case "BizTalk360":
			expandApplicationNode("BizTalk360");
			break;
		case "BizTalk360 non-production":
			sys.graft(serverConnections.BizTalk360Servers.non_production);
			break;
		case "BizTalk360 production":
			sys.graft(serverConnections.BizTalk360Servers.production);
			break;


		case "Centricity":
			expandApplicationNode("Centricity");
			break;
		case "Centricity non-production":
			sys.graft(serverConnections.CentricityServers.non_production);
			break;
		case "Centricity production":
			sys.graft(serverConnections.CentricityServers.production);
			break;


		case "CoFax":
			expandApplicationNode("CoFax");
			break;
		case "CoFax non-production":
			sys.graft(serverConnections.CoFaxServers.non_production);
			break;
		case "CoFax production":
			sys.graft(serverConnections.CoFaxServers.production);
			break;


		case "CorePoint":
			expandApplicationNode("CorePoint");
			break;
		case "CorePoint non-production":
			sys.graft(serverConnections.CorePointServers.non_production);
			break;
		case "CorePoint production":
			sys.graft(serverConnections.CorePointServers.production);
			break;


		case "DocuTrack":
			expandApplicationNode("DocuTrack");
			break;
		case "DocuTrack non-production":
			sys.graft(serverConnections.DocuTrackServers.non_production);
			break;
		case "DocuTrack production":
			sys.graft(serverConnections.DocuTrackServers.production);
			break;


		case "EricksonAdvantage":
			expandApplicationNode("EricksonAdvantage");
			break;
		case "EricksonAdvantage non-production":
			sys.graft(serverConnections.EricksonAdvantageServers.non_production);
			break;
		case "EricksonAdvantage production":
			sys.graft(serverConnections.EricksonAdvantageServers.production);
			break;


		case "GSMS":
			expandApplicationNode("GSMS");
			break;
		case "GSMS non-production":
			sys.graft(serverConnections.GSMSServers.non_production);
			break;
		case "GSMS production":
			sys.graft(serverConnections.GSMSServers.production);
			break;


		case "Luminate":
			expandApplicationNode("Luminate");
			break;
		case "Luminate non-production":
			sys.graft(serverConnections.LuminateServers.non_production);
			break;
		case "Luminate production":
			sys.graft(serverConnections.LuminateServers.production);
			break;


		case "Hyperion":
			expandApplicationNode("Hyperion");
			break;
		case "Hyperion non-production":
			sys.graft(serverConnections.HyperionServers.non_production);
			break;
		case "Hyperion production":
			sys.graft(serverConnections.HyperionServers.production);
			break;


		case "JDE":
			expandApplicationNode("JDE");
			break;
		case "JDE non-production":
			sys.graft(serverConnections.JDEServers.non_production);
			break;
		case "JDE production":
			sys.graft(serverConnections.JDEServers.production);
			break;


		case "Kronos":
			expandApplicationNode("Kronos");
			break;
		case "Kronos non-production":
			sys.graft(serverConnections.KronosServers.non_production);
			break;
		case "Kronos production":
			sys.graft(serverConnections.KronosServers.production);
			break;


		case "MedicalManager":
			expandApplicationNode("MedicalManager");
			break;
		case "MedicalManager non-production":
			sys.graft(serverConnections.MedicalManagerServers.non_production);
			break;
		case "MedicalManager production":
			sys.graft(serverConnections.MedicalManagerServers.production);
			break;


		case "NetMenu":
			expandApplicationNode("NetMenu");
			break;
		case "NetMenu non-production":
			sys.graft(serverConnections.NetMenuServers.non_production);
			break;
		case "NetMenu production":
			sys.graft(serverConnections.NetMenuServers.production);
			break;


		case "Odyssey":
			expandApplicationNode("Odyssey");
			break;
		case "Odyssey non-production":
			sys.graft(serverConnections.OdysseyServers.non_production);
			break;
		case "Odyssey production":
			sys.graft(serverConnections.OdysseyServers.production);
			break;


		case "PeopleSoft":
			expandApplicationNode("PeopleSoft");
			break;
		case "PeopleSoft non-production":
			sys.graft(serverConnections.PeopleSoftServers.non_production);
			break;
		case "PeopleSoft production":
			sys.graft(serverConnections.PeopleSoftServers.production);
			break;


		case "Portal":
			expandApplicationNode("Portal");
			break;
		case "Portal non-production":
			sys.graft(serverConnections.PortalServers.non_production);
			break;
		case "Portal production":
			sys.graft(serverConnections.PortalServers.production);
			break;


		case "RemedyForce":
			expandApplicationNode("RemedyForce");
			break;
		case "RemedyForce non-production":
			sys.graft(serverConnections.RemedyForceServers.non_production);
			break;
		case "RemedyForce production":
			sys.graft(serverConnections.RemedyForceServers.production);
			break;


		case "Riskonnect":
			expandApplicationNode("Riskonnect");
			break;
		case "Riskonnect non-production":
			sys.graft(serverConnections.RiskonnectServers.non_production);
			break;
		case "Riskonnect production":
			sys.graft(serverConnections.RiskonnectServers.production);
			break;


		case "SalesForce":
			expandApplicationNode("SalesForce");
			break;
		case "SalesForce non-production":
			sys.graft(serverConnections.SalesForceServers.non_production);
			break;
		case "SalesForce production":
			sys.graft(serverConnections.SalesForceServers.production);
			break;


		case "SalesForceApps":
			expandApplicationNode("SalesForceApps");
			break;
		case "SalesForceApps non-production":
			sys.graft(serverConnections.SalesForceAppsServers.non_production);
			break;
		case "SalesForceApps production":
			sys.graft(serverConnections.SalesForceAppsServers.production);
			break;


		case "SalesMarketing":
			expandApplicationNode("SalesMarketing");
			break;
		case "SalesMarketing non-production":
			sys.graft(serverConnections.SalesMarketingServers.non_production);
			break;
		case "SalesMarketing production":
			sys.graft(serverConnections.SalesMarketingServers.production);
			break;


		case "ServiceMax":
			expandApplicationNode("ServiceMax");
			break;
		case "ServiceMax non-production":
			sys.graft(serverConnections.ServiceMaxServers.non_production);
			break;
		case "ServiceMax production":
			sys.graft(serverConnections.ServiceMaxServers.production);
			break;


		case "Simphony":
			expandApplicationNode("Simphony");
			break;
		case "Simphony non-production":
			sys.graft(serverConnections.SimphonyServers.non_production);
			break;
		case "Simphony production":
			sys.graft(serverConnections.SimphonyServers.production);
			break;


		case "Taleo":
			expandApplicationNode("Taleo");
			break;
		case "Taleo non-production":
			sys.graft(serverConnections.TaleoServers.non_production);
			break;
		case "Taleo production":
			sys.graft(serverConnections.TaleoServers.production);
			break;


		case "Vision":
			expandApplicationNode("Vision");
			break;
		case "Vision non-production":
			sys.graft(serverConnections.VisionServers.non_production);
			break;
		case "Vision production":
			sys.graft(serverConnections.VisionServers.production);
			break;
		//end node section


		//edgeLabel section
		case "ActiveDirectory-->PeopleSoft":
			applicationEdges.ActiveDirectory_PeopleSoft.label = generateEdgeLabel("ActiveDirectory_PeopleSoft");
			break;

		case "AX-->Hyperion":
			applicationEdges.AX_Hyperion.label = generateEdgeLabel("AX_Hyperion");
			break;

		case "BizTalk-->BizTalk360":
			applicationEdges.BizTalk_BizTalk360.label = generateEdgeLabel("BizTalk_BizTalk360");
			break;
		case "BizTalk-->CorePoint":
			applicationEdges.BizTalk_CorePoint.label = generateEdgeLabel("BizTalk_CorePoint");
			break;
		case "BizTalk-->Odyssey":
			applicationEdges.BizTalk_Odyssey.label = generateEdgeLabel("BizTalk_Odyssey");
			break;

		case "Centricity-->MedicalManager":
			applicationEdges.Centricity_MedicalManager.label = generateEdgeLabel("Centricity_MedicalManager");
			break;
		case "Centricity-->Portal":
			applicationEdges.Centricity_Portal.label = generateEdgeLabel("Centricity_Portal");
			break;

		case "CoFax-->AX":
			applicationEdges.CoFax_AX.label = generateEdgeLabel("CoFax_AX");
			break;
		case "CoFax-->PeopleSoft":
			applicationEdges.CoFax_PeopleSoft.label = generateEdgeLabel("CoFax_PeopleSoft");
			break;

		case "CorePoint-->BizTalk":
			applicationEdges.CorePoint_BizTalk.label = generateEdgeLabel("CorePoint_BizTalk");
			break;
		case "CorePoint-->MedicalManager":
			applicationEdges.CorePoint_MedicalManager.label = generateEdgeLabel("CorePoint_MedicalManager");
			break;
		case "CorePoint-->NetMenu":
			applicationEdges.CorePoint_NetMenu.label = generateEdgeLabel("CorePoint_NetMenu");
			break;
		case "CorePoint-->Vision":
			applicationEdges.CorePoint_Vision.label = generateEdgeLabel("CorePoint_Vision");
			break;

		case "DocuTrack-->Centricity":
			applicationEdges.DocuTrack_Centricity.label = generateEdgeLabel("DocuTrack_Centricity");
			break;

		case "GSMS-->AX":
			applicationEdges.GSMS_AX.label = generateEdgeLabel("GSMS_AX");
			break;
		case "GSMS-->Vision":
			applicationEdges.GSMS_Vision.label = generateEdgeLabel("GSMS_Vision");
			break;

		case "JDE-->Hyperion":
			applicationEdges.JDE_Hyperion.label = generateEdgeLabel("JDE_Hyperion");
			break;

		case "Kronos-->PeopleSoft":
			applicationEdges.Kronos_PeopleSoft.label = generateEdgeLabel("Kronos_PeopleSoft");
			break;

		case "MedicalManager-->Centricity":
			applicationEdges.MedicalManager_Centricity.label = generateEdgeLabel("MedicalManager_Centricity");
			break;
		case "MedicalManager-->CorePoint":
			applicationEdges.MedicalManager_CorePoint.label = generateEdgeLabel("MedicalManager_CorePoint");
			break;

		case "NetMenu-->Simphony":
			applicationEdges.NetMenu_Simphony.label = generateEdgeLabel("NetMenu_Simphony");
			break;

		case "Odyssey-->Vision":
			applicationEdges.Odyssey_Vision.label = generateEdgeLabel("Odyssey_Vision");
			break;

		case "PeopleSoft-->ActiveDirectory":
			applicationEdges.PeopleSoft_ActiveDirectory.label = generateEdgeLabel("PeopleSoft_ActiveDirectory");
			break;
		case "PeopleSoft-->AX":
			applicationEdges.PeopleSoft_AX.label = generateEdgeLabel("PeopleSoft_AX");
			break;
		case "PeopleSoft-->GSMS":
			applicationEdges.PeopleSoft_GSMS.label = generateEdgeLabel("PeopleSoft_GSMS");
			break;
		case "PeopleSoft-->Kronos":
			applicationEdges.PeopleSoft_Kronos.label = generateEdgeLabel("PeopleSoft_Kronos");
			break;
		case "PeopleSoft-->SalesForce":
			applicationEdges.PeopleSoft_SalesForce.label = generateEdgeLabel("PeopleSoft_SalesForce");
			break;
		case "PeopleSoft-->Taleo":
			applicationEdges.PeopleSoft_Taleo.label = generateEdgeLabel("PeopleSoft_Taleo");
			break;

		case "SalesForce-->AX":
			applicationEdges.SalesForce_AX.label = generateEdgeLabel("SalesForce_AX");
			break;
		case "SalesForce-->Vision":
			applicationEdges.SalesForce_Vision.label = generateEdgeLabel("SalesForce_Vision");
			break;

		case "SalesForceApps-->EricksonAdvantage":
			applicationEdges.SalesForceApps_EricksonAdvantage.label = generateEdgeLabel("SalesForceApps_EricksonAdvantage");
			break;
		case "SalesForceApps-->Luminate":
			applicationEdges.SalesForceApps_Luminate.label = generateEdgeLabel("SalesForceApps_Luminate");
			break;
		case "SalesForceApps-->RemedyForce":
			applicationEdges.SalesForceApps_RemedyForce.label = generateEdgeLabel("SalesForceApps_RemedyForce");
			break;
		case "SalesForceApps-->Riskonnect":
			applicationEdges.SalesForceApps_Riskonnect.label = generateEdgeLabel("SalesForceApps_Riskonnect");
			break;
		case "SalesForceApps-->SalesMarketing":
			applicationEdges.SalesForceApps_SalesMarketing.label = generateEdgeLabel("SalesForceApps_SalesMarketing");
			break;
		case "SalesForceApps-->ServiceMax":
			applicationEdges.SalesForceApps_ServiceMax.label = generateEdgeLabel("SalesForceApps_ServiceMax");
			break;

		case "Simphony-->AX":
			applicationEdges.Simphony_AX.label = generateEdgeLabel("Simphony_AX");
			break;
		case "Simphony-->NetMenu":
			applicationEdges.Simphony_NetMenu.label = generateEdgeLabel("Simphony_NetMenu");
			break;

		case "Taleo_PeopleSoft":
			applicationEdges.Taleo_PeopleSoft.label = generateEdgeLabel("Taleo_PeopleSoft");
			break;

		case "Vision-->AX":
			applicationEdges.Vision_AX.label = generateEdgeLabel("Vision_AX");
			break;
		case "Vision-->CorePoint":
			applicationEdges.Vision_CorePoint.label = generateEdgeLabel("Vision_CorePoint");
			break;
		case "Vision-->GSMS":
			applicationEdges.Vision_GSMS.label = generateEdgeLabel("Vision_GSMS");
			break;
		case "Vision-->Portal":
			applicationEdges.Vision_Portal.label = generateEdgeLabel("Vision_Portal");
			break;
		case "Vision-->SalesForce":
			applicationEdges.Vision_SalesForce.label = generateEdgeLabel("Vision_SalesForce");
			break;
		//end edgeLabel section


		//extra cases
		case "generate all applications":
			generateAllApplications();
			break;
		case "generate all edge labels":
			generateAllEdgeLabels();
			break;
		default:
			alert("Please enter correct command");
	}
}  

//switch case for different commands when clicking the Remove button
function removed(){
	var inputText = document.getElementById("input");
	var nName = inputText.value;
	switch(nName){

		case "ActiveDirectory":
			applicationNodes.ActiveDirectory.expanded = false;
			sys.pruneNode("ActiveDirectory");
			break;
		case "ActiveDirectory non-production":
			for(node in serverConnections.ActiveDirectoryServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "ActiveDirectory production":
			for(node in serverConnections.ActiveDirectoryServers.production.nodes){
				sys.pruneNode(node);
			}
			break;

		case "AX":
			alert("Red nodes cannot be removed");
			break;
		case "AX non-production":
			for(node in serverConnections.AXServers.non_production.nodes){
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
		case "BizTalk non-production":
			for(node in serverConnections.BizTalkServers.non_production.nodes){
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
		case "BizTalk360 non-production":
			for(node in serverConnections.BizTalk360Servers.non_production.nodes){
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
		case "Centricity non-production":
			for(node in serverConnections.CentricityServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Centricity production":
			for(node in serverConnections.CentricityServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "CoFax":
			applicationNodes.CoFax.expanded = false;
			sys.pruneNode("CoFax");
			break;
		case "CoFax non-production":
			for(node in serverConnections.CoFaxServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "CoFax production":
			for(node in serverConnections.CoFaxServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "CorePoint":
			alert("Red nodes cannot be removed");
			break;
		case "CorePoint non-production":
			for(node in serverConnections.CorePointServers.non_production.nodes){
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
		case "DocuTrack non-production":
			for(node in serverConnections.DocuTrackServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "DocuTrack production":
			for(node in serverConnections.DocuTrackServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "EricksonAdvantage":
			applicationNodes.EricksonAdvantage.expanded = false;
			sys.pruneNode("EricksonAdvantage");
			break;
		case "EricksonAdvantage non-production":
			for(node in serverConnections.EricksonAdvantageServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "EricksonAdvantage production":
			for(node in serverConnections.EricksonAdvantageServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "GSMS":
			applicationNodes.GSMS.expanded = false;
			sys.pruneNode("GSMS");
			break;
		case "GSMS non-production":
			for(node in serverConnections.GSMSServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "GSMS production":
			for(node in serverConnections.GSMSServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "Luminate":
			applicationNodes.Luminate.expanded = false;
			sys.pruneNode("Luminate");
			break;
		case "Luminate non-production":
			for(node in serverConnections.LuminateServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Luminate production":
			for(node in serverConnections.LuminateServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "Hyperion":
			applicationNodes.Hyperion.expanded = false;
			sys.pruneNode("Hyperion");
			break;
		case "Hyperion non-production":
			for(node in serverConnections.HyperionServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Hyperion production":
			for(node in serverConnections.HyperionServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "JDE":
			applicationNodes.JDE.expanded = false;
			sys.pruneNode("JDE");
			break;
		case "JDE non-production":
			for(node in serverConnections.JDEServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "JDE production":
			for(node in serverConnections.JDEServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "Kronos":
			applicationNodes.Kronos.expanded = false;
			sys.pruneNode("Kronos");
			break;
		case "Kronos non-production":
			for(node in serverConnections.KronosServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Kronos production":
			for(node in serverConnections.KronosServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "MedicalManager":
			applicationNodes.MedicalManager.expanded = false;
			sys.pruneNode("MedicalManager");
			break;
		case "MedicalManager non-production":
			for(node in serverConnections.MedicalManagerServers.non_production.nodes){
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
		case "NetMenu non-production":
			for(node in serverConnections.NetMenuServers.non_production.nodes){
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
		case "Odyssey non-production":
			for(node in serverConnections.OdysseyServers.non_production.nodes){
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
		case "PeopleSoft non-production":
			for(node in serverConnections.PeopleSoftServers.non_production.nodes){
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
		case "Portal non-production":
			for(node in serverConnections.PortalServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Portal production":
			for(node in serverConnections.PortalServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "RemedyForce":
			applicationNodes.RemedyForce.expanded = false;
			sys.pruneNode("RemedyForce");
			break;
		case "RemedyForce non-production":
			for(node in serverConnections.RemedyForceServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "RemedyForce production":
			for(node in serverConnections.RemedyForceServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "Riskonnect":
			applicationNodes.Riskonnect.expanded = false;
			sys.pruneNode("Riskonnect");
			break;
		case "Riskonnect non-production":
			for(node in serverConnections.RiskonnectServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Riskonnect production":
			for(node in serverConnections.RiskonnectServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "SalesForce":
			applicationNodes.SalesForce.expanded = false;
			sys.pruneNode("SalesForceApps");
			for(node in applicationConnections.SalesForceAppsConnections.nodes){
				sys.pruneNode(node);
			}
			break;
		case "SalesForce non-production":
			for(node in serverConnections.SalesForceServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "SalesForce production":
			for(node in serverConnections.SalesForceServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "SalesForceApps":
			applicationNodes.SalesForceApps.expanded = false;
			sys.pruneNode("SalesForceApps");
			break;
		case "SalesForceApps non-production":
			for(node in serverConnections.SalesForceAppsServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "SalesForceApps production":
			for(node in serverConnections.SalesForceAppsServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "SalesMarketing":
			applicationNodes.SalesMarketing.expanded = false;
			sys.pruneNode("SalesMarketing");
			break;
		case "SalesMarketing non-production":
			for(node in serverConnections.SalesMarketingServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "SalesMarketing production":
			for(node in serverConnections.SalesMarketingServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "ServiceMax":
			applicationNodes.ServiceMax.expanded = false;
			sys.pruneNode("ServiceMax");
			break;
		case "ServiceMax non-production":
			for(node in serverConnections.ServiceMaxServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "ServiceMax production":
			for(node in serverConnections.ServiceMaxServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "Simphony":
			applicationNodes.Simphony.expanded = false;
			sys.pruneNode("Simphony");
			break;
		case "Simphony non-production":
			for(node in serverConnections.SimphonyServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Simphony production":
			for(node in serverConnections.SimphonyServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "Taleo":
			applicationNodes.Taleo.expanded = false;
			sys.pruneNode("Taleo");
			break;
		case "Taleo non-production":
			for(node in serverConnections.TaleoServers.non_production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Taleo production":
			for(node in serverConnections.TaleoServers.production.nodes){
				sys.pruneNode(node);
			}
			break;


		case "Vision":
			alert("Red nodes cannot be removed");
			break;
		case "Vision non-production":
			for(node in serverConnections.VisionServers.non_production.nodes){
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
		case "remove all edge labels":
			removeAllEdgeLabels();
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

//function that generaets all the labels for edges
function generateAllEdgeLabels(){
	sys.eachEdge(function(edge, pt1, pt1){
		edge.data.label = generateEdgeLabel(edge.data.name);//set label field = to the correct label
	});
}

//function that removes all the labels from edges
function removeAllEdgeLabels(){
	sys.eachEdge(function(edge, pt1, pt2){
		if(edge.data.label!==''){
			edge.data.label = '';
		}
	});
}

//function which removes edges of a node but not the node itself.
function clipNode(nName1){
	sys.pruneNode(nName1);
    var temp = sys.addNode(nName1.name, {'color':nName1.data.color, 'shape':nName1.data.shape, 
    	'label':nName1.data.label, 'expanded':nName1.data.expanded,
        'parent':nName1.data.parent, 'base':nName1.data.base, 'description':nName1.data.description
    });
} 