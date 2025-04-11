"use strict";

var express = require("express");

var router = express.Router();

var clienteController = require("../controllers/clienteController");

router.post("/cliente", clienteController.create);
router.get("/clientes", clienteController.findAll);
router.get("/cliente/:id", clienteController.findById);
router.put("/cliente/:id", clienteController.update);
router["delete"]("/cliente/:id", clienteController.remove);
module.exports = router;