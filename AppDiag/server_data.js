/*
server_data.js

Holds the information on each serverNode in the system as well as their connections
Also contains method used to expand specific serverNodes
*/

//List of all the serverNodes in the system
var serverNodes ={
	AX_a :{'color':'green', 'label':'a'}
}

//List of the connections for each serverNode in the system.
var serverConnections = {
	AXServers : {
		nodes:{
			AX_a:serverNodes.AX_a
		},
		edges:{
			AX:{ AX_a:{weight:2}}
		}
	}
}//end serverConnections