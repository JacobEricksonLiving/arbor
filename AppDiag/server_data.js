var serverNodes ={
	AX_a :{'color':'green', 'label':'a'}
}


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