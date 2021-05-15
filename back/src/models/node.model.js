'Node strict';
var dbConn = require('../../config/db.config');


//Node object create
var Node = function (Node) {
    
    this.mac = Node.mac;
    this.type = Node.type;
    this.carte_ip =  Node.carte_ip
    this.created_at = new Date();
};
Node.create = function (newNode, result) {
    dbConn.query("INSERT INTO Nodes set ?", newNode, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Node.findById = function (id, result) {
    dbConn.query("Select * from Nodes where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Node.findAll = function (result) {
    dbConn.query("Select * from Nodes", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Nodes : ', res);
            result(null, res);
        }
    });
};
Node.update = function (id, Node, result) {
    console.log(id)
   // dbConn.query("UPDATE Node SET name= `"+ Node.name+ "`,lastname=`"+ Node.lastname+ "`,email=`"+ Node.email+ "`,password=`"+ Node.password+ " `,description= `"+ Node.description+ " ,WHERE id = "+ id 
    
   dbConn.query( "UPDATE `Node` SET `name` = '"+ Node.name+"', `lastname` = '"+ Node.lastname+ "', `email` = '"+Node.email+"', `password` = '"+ Node.password+"', `description` = '"+ Node.description+"' WHERE (`id` = '"+ id +"')", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Node.delete = function (id, result) {
    dbConn.query("DELETE FROM Nodes WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Node;