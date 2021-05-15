const express = require('express')
const router = express.Router()
const NodeController = require('../controllers/node.controller');

// Retrieve all Nodes
router.get('/', NodeController.findAll);

// Create a new Node
router.post('/', NodeController.create);

// Retrieve a single Node with id
router.get('/:id', NodeController.findById);

// Update a Node with id
router.put('/:id', NodeController.update);

// Delete a Node with id
router.delete('/:id', NodeController.delete);

module.exports = router