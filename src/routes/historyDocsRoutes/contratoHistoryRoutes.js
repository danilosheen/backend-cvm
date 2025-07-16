const express = require("express");
const router = express.Router();
const contratoHistoryController = require("../../controllers/contratoHistoryController");
const authMiddleware = require("../../middleware/authMiddleware");

router.post("/contrato-history", authMiddleware, contratoHistoryController.criarContratoHistory);
router.get("/contrato-history", authMiddleware, contratoHistoryController.listarContratos);
router.delete("/contrato-history/:id", authMiddleware, contratoHistoryController.removerContratoHistory);

module.exports = router;