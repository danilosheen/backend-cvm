// const express = require("express");
import express from "express";
const router = express.Router();
// const contratoHistoryController = require("../../controllers/contratoHistoryController");
import { contratoHistoryController } from "../../controllers/contratoHistoryController.js";
// const authMiddleware = require("../../middleware/authMiddleware");
import authMiddleware from "../../middleware/authMiddleware.js";

router.post("/contrato-history", authMiddleware, contratoHistoryController.criarContratoHistory);
router.get("/contrato-history", authMiddleware, contratoHistoryController.listarContratos);
router.delete("/contrato-history/:id", authMiddleware, contratoHistoryController.removerContratoHistory);

export default router;