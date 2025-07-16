"use strict";

var express = require("express");

var router = express.Router();

var contratoHistoryController = require("../../controllers/contratoHistoryController");

var authMiddleware = require("../../middleware/authMiddleware");

router.post("/contrato-history", authMiddleware, contratoHistoryController.criarContratoHistory);
router.get("/contrato-history", authMiddleware, contratoHistoryController.listarContratos);
router["delete"]("/contrato-history/:id", authMiddleware, contratoHistoryController.removerContratoHistory);
module.exports = router;