const express = require("express");
const router = express.Router();
const listaPassageirosHistoryController = require("../../controllers/listaPassageirosHistoryController");
const authMiddleware = require("../../middleware/authMiddleware");

router.post("/lista-passageiros-history", authMiddleware, listaPassageirosHistoryController.criarListaPassageirosHistory);
router.get("/lista-passageiros-history", authMiddleware, listaPassageirosHistoryController.listarListaPassageiros);
router.delete("/lista-passageiros-history/:id", authMiddleware, listaPassageirosHistoryController.removerListaPassageirosHistory);

module.exports = router;