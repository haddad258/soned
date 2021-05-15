'use strict';

const Node = require('../models/node.model');

exports.findAll = function(req, res) {
  Node.findAll(function(err, Node) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', Node);
    res.send(Node);
  });
};


exports.create = function(req, res) {
    const new_Node = new Node(req.body);

   console.log(req.body)
   if(req.body === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Node.create(new_Node, function(err, Node) {
            if (err)
            res.send(err );
            res.json({error:false,message:"Node added successfully!",data:Node});
        });
    }
};


exports.findById = function(req, res) {
    Node.findById(req.params.id, function(err, Node) {
        if (err)
        res.send(err);
        res.json(Node);
    });
};


exports.update = function(req, res) {
    console.log(req.body)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Node.update(req.params.id, new Node(req.body), function(err, Node) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Node successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Node.delete( req.params.id, function(err, Node) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Node successfully deleted' });
  });
};