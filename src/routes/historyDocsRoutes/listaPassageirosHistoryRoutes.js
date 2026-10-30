// const express = require("express");
import express from "express";
const router = express.Router();
// const listaPassageirosHistoryController = require("../../controllers/listaPassageirosHistoryController");
import { listaPassageirosHistoryController } from "../../controllers/listaPassageirosHistoryController.js";
// const authMiddleware = require("../../middleware/authMiddleware");
import authMiddleware from "../../middleware/authMiddleware.js";

router.post("/lista-passageiros-history", authMiddleware, listaPassageirosHistoryController.criarListaPassageirosHistory);
router.get("/lista-passageiros-history", authMiddleware, listaPassageirosHistoryController.listarListaPassageiros);
router.delete("/lista-passageiros-history/:id", authMiddleware, listaPassageirosHistoryController.removerListaPassageirosHistory);

export default router;