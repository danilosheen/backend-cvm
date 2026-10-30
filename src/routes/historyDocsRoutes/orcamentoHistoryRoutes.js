// const express = require("express");
import express from "express";
const router = express.Router();
// const orcamentoHistoryController = require("../../controllers/orcamentoHistoryController");
import { orcamentoHistoryController } from "../../controllers/orcamentoHistoryController.js";
// const authMiddleware = require("../../middleware/authMiddleware");
import authMiddleware from "../../middleware/authMiddleware.js";

router.post("/orcamento-history", authMiddleware, orcamentoHistoryController.criarOrcamentoHistory);
router.get("/orcamento-history", authMiddleware, orcamentoHistoryController.listarOrcamentos);
router.delete("/orcamento-history/:id", authMiddleware, orcamentoHistoryController.removerOrcamentoHistory);

export default router;