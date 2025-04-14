"use strict";

var express = require("express");

var router = express.Router();

var clienteController = require("../controllers/clienteController");

var authMiddleware = require("../middleware/authMiddleware");

router.post("/cliente", authMiddleware, clienteController.create);
router.get("/clientes", authMiddleware, clienteController.findAll);
router.get("/cliente/:id", authMiddleware, clienteController.findById);
router.put("/cliente/:id", authMiddleware, clienteController.update);
router["delete"]("/cliente/:id", authMiddleware, clienteController.remove);
module.exports = router;