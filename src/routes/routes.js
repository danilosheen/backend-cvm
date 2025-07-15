const express = require("express");
const router = express.Router();
const pdfOrcamentoController = require("../controllers/orcamentoController");
const pdfReciboController = require("../controllers/reciboController");
const pdfFichaExcursaoController = require("../controllers/fichaExcursaoController");
const pdflistaPassageirosController = require("../controllers/listaPassageirosController");
const pdfContratoController = require("../controllers/contratoController");
const pdfNotaAgradecimentoController = require("../controllers/notaAgradecimentoController");
const pdfGerarRelatorioController = require('../controllers/gerarRelatorioController');
const enviarEmailController = require('../controllers/enviarEmailController');

router.post("/orcamento", pdfOrcamentoController.generatePDF);
router.post("/recibo", pdfReciboController.generatePDF);
router.post("/ficha-excursao", pdfFichaExcursaoController.generatePDF);
router.post("/lista-passageiros", pdflistaPassageirosController.generatePDF);
router.post("/contrato", pdfContratoController.generatePDF);
router.post("/nota-agradecimento", pdfNotaAgradecimentoController.generatePDF);
router.post("/enviar-nota-agradecimento", enviarEmailController.enviarEmailNotaAgradecimento);
router.post("/feliz-aniversario", enviarEmailController.enviarEmailAniversario);
router.post("/gerar-relatorio", pdfGerarRelatorioController.generatePDF);

module.exports = router;
