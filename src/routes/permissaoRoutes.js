// const express = require("express");
import express from "express";
const router = express.Router();
// const permissaoController = require("../controllers/permissaoController");
import { buscarPermissoes, buscarPermissoesById, atualizarPermissaoIndividual } from "../controllers/permissaoController.js";
// const autenticarToken = require("../middleware/authMiddleware");
import autenticarToken from "../middleware/authMiddleware.js";

router.get("/permissoes", autenticarToken, buscarPermissoes);
router.get("/permissoesById", autenticarToken, buscarPermissoesById);
router.put("/permissoes/:id", autenticarToken, atualizarPermissaoIndividual);

export default router;
