"use strict";

var express = require("express");

var router = express.Router();

var pdfOrcamentoController = require("../controllers/orcamentoController");

var pdfReciboController = require("../controllers/reciboController");

var pdfFichaExcursaoController = require("../controllers/fichaExcursaoController");

var pdflistaPassageirosController = require("../controllers/listaPassageirosController");

var pdfNotaAgradecimentoController = require("../controllers/notaAgradecimentoController");

var enviarEmailController = require('../controllers/enviarEmailController');

router.post("/orcamento", pdfOrcamentoController.generatePDF);
router.post("/recibo", pdfReciboController.generatePDF);
router.post("/ficha-excursao", pdfFichaExcursaoController.generatePDF);
router.post("/lista-passageiros", pdflistaPassageirosController.generatePDF);
router.post("/nota-agradecimento", pdfNotaAgradecimentoController.generatePDF);
router.post("/enviar-nota-agradecimento", enviarEmailController.enviarEmailNotaAgradecimento);
router.post("/feliz-aniversario", enviarEmailController.enviarEmailAniversario);
module.exports = router;