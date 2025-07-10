"use strict";

var express = require("express");

var router = express.Router();

var listaPassageirosHistoryController = require("../../controllers/listaPassageirosHistoryController");

var authMiddleware = require("../../middleware/authMiddleware");

router.post("/lista-passageiros-history", authMiddleware, listaPassageirosHistoryController.criarListaPassageirosHistory);
router.get("/lista-passageiros-history", authMiddleware, listaPassageirosHistoryController.listarListaPassageiros);
router["delete"]("/lista-passageiros-history/:id", authMiddleware, listaPassageirosHistoryController.removerListaPassageirosHistory);
module.exports = router;