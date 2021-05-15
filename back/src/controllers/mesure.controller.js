const mesure = require('../models/mesure.model');
const Node = require('../models/node.model');



exports.findAll = function(req, res) {
    var Nodes
   Node.findAll(function(err, Nodesr) {
    console.log('mesure')
    if (err)
    console.log(err);
    
    Nodes =Nodesr
  });
    mesure.findAll(function(err, mesure) {
      console.log('mesure')
      if (err)
      res.send(err);
      mesure.map(e=> e.Node = Nodes.filter(el=> el.id ==e.Node)[0])
      res.send(mesure);
    });
  };


  exports.findById = function(req, res) {
    mesure.findById(req.params.id, function(err, Node) {
        if (err)
        res.send(err);
        res.json(Node);
    });
};

exports.create = function(req, res) {
  const new_Node = new mesure(req.body);

 console.log(req.body)
 if(req.body === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    mesure.create(new_Node, function(err, Node) {
          if (err)
          res.send(err );
          res.json({error:false,message:"mesure added successfully!",data:Node});
      });
  }
};
  