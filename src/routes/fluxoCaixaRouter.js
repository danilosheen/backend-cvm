// const express = require("express");
import express from "express";
const router = express.Router();
// const fluxoCaixaController = require("../controllers/fluxoCaixaController");
import { criarFluxo, listarFluxos, listarFluxosPorMes, listarFluxosPorIntervalo, buscarFluxoPorId, atualizarFluxo, deletarFluxo } from "../controllers/fluxoCaixaController.js";
// const authMiddleware = require("../middleware/authMiddleware");
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/fluxo", authMiddleware, criarFluxo);
router.get("/fluxos", authMiddleware, listarFluxos);
router.get("/fluxos-mes", authMiddleware, listarFluxosPorMes);
router.get("/fluxos-interval", authMiddleware, listarFluxosPorIntervalo);
router.get("/fluxo/:id", authMiddleware, buscarFluxoPorId);
router.put("/fluxo/:id", authMiddleware, atualizarFluxo);
router.delete("/fluxo/:id", authMiddleware, deletarFluxo);

export default router;