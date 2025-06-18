"use strict";

var express = require("express");

var router = express.Router();

var orcamentoHistoryController = require("../../controllers/orcamentoHistoryController");

var authMiddleware = require("../../middleware/authMiddleware");

router.post("/orcamento-history", authMiddleware, orcamentoHistoryController.criarOrcamentoHistory);
router.get("/orcamento-history", authMiddleware, orcamentoHistoryController.listarOrcamentos);
router["delete"]("/orcamento-history/:id", authMiddleware, orcamentoHistoryController.removerOrcamentoHistory);
module.exports = router;