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
		case "AX production":
			sys.graft(serverConnections.AXServers.production);
			break;
		case "Odyssey production":
			sys.graft(serverConnections.OdysseyServers.production);
			break;
		case "Simphony production":
			sys.graft(serverConnections.SimphonyServers.production);
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
		case "AX production":
			for(node in serverConnections.AXServers.production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Odyssey production":
			for(node in serverConnections.OdysseyServers.production.nodes){
				sys.pruneNode(node);
			}
			break;
		case "Simphony production":
			for(node in serverConnections.SimphonyServers.production.nodes){
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