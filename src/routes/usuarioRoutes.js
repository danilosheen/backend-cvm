// const express = require("express");
import express from "express";
const router = express.Router();
// const usuarioController = require("../controllers/usuarioController");
import { criarUsuario, listarUsuarios, listarUsuarioPeloId, removerUsuarioPeloId, alterarSenha } from "../controllers/usuarioController.js";

router.post("/usuario", criarUsuario);
router.get("/usuarios", listarUsuarios);
router.get("/usuario/:id", listarUsuarioPeloId);
router.delete("/usuario/:id", removerUsuarioPeloId);

router.put("/alterar-senha", alterarSenha);

export default router;
