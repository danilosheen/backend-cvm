"use strict";

var express = require("express");

var router = express.Router();

var fluxoCaixaController = require("../controllers/fluxoCaixaController");

var authMiddleware = require("../middleware/authMiddleware");

router.post("/fluxo", authMiddleware, fluxoCaixaController.criarFluxo);
router.get("/fluxos", authMiddleware, fluxoCaixaController.listarFluxos);
router.get("/fluxo/:id", authMiddleware, fluxoCaixaController.buscarFluxoPorId);
router.put("/fluxo/:id", authMiddleware, fluxoCaixaController.atualizarFluxo);
router["delete"]("/fluxo/:id", authMiddleware, fluxoCaixaController.deletarFluxo);
module.exports = router;