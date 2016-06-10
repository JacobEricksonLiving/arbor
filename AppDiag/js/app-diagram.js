var sys = arbor.ParticleSystem(500, 500, 1);
            sys.parameters({gravity:true});
            sys.renderer = Renderer("#viewport");
            var data = {
                nodes:{
                    AX:{fixed:true, 'color':'red','shape':'dot', 'label':'AX'},
                    Cofax:{'color':'blue', 'shape':'dot', 'label':'Cofax'},
                    Peoplesoft:{'color':'blue', 'shape':'dot', 'label':'Peoplesoft'},
                    GSMS:{'color':'blue', 'shape':'dot', 'label':'GSMS'},
                    Vision:{'color':'blue', 'shape':'dot', 'label':'Vision'},
                    Symphony:{'color':'blue', 'shape':'dot', 'label':'Symphony'}
                },//end nodes
                edges:{
                    AX:{Cofax:{directed:true, weight:5}, Peoplesoft:{directed:true, weight:5},
                        GSMS:{directed:true, weight:5}, Vision:{directed:true, weight:5},
                        Symphony:{directed:true, weight:5}
                    }//animal is parent of what is inside {}

                }//end edges
            };//end data JSON
            sys.graft(data);


            setTimeout(function(){
                var postLoadData = {
                    nodes:{
                        Hyperion:{'color':'blue', 'shape':'dot', 'label':'Hyperion'}
                    },//end nodes
                    edges:{
                        Hyperion:{AX:{directed:true, weight:5}}
                    }//end edges
                };//end postLoadData
                sys.graft(postLoadData);
                },1000);