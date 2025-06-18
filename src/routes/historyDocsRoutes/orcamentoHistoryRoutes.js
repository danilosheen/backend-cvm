const express = require("express");
const router = express.Router();
const orcamentoHistoryController = require("../../controllers/orcamentoHistoryController");
const authMiddleware = require("../../middleware/authMiddleware");

router.post("/orcamento-history", authMiddleware, orcamentoHistoryController.criarOrcamentoHistory);
router.get("/orcamento-history", authMiddleware, orcamentoHistoryController.listarOrcamentos);
router.delete("/orcamento-history/:id", authMiddleware, orcamentoHistoryController.removerOrcamentoHistory);

module.exports = router;