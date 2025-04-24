const express = require("express");
const router = express.Router();
const pdfOrcamentoController = require("../controllers/orcamentoController");
const pdfReciboController = require("../controllers/reciboController");
const pdfFichaExcursaoController = require("../controllers/fichaExcursaoController");
const pdflistaPassageirosController = require("../controllers/listaPassageirosController");
const pdfNotaAgradecimentoController = require("../controllers/notaAgradecimentoController");
const enviarEmailController = require('../controllers/enviarEmailController');

router.post("/orcamento", pdfOrcamentoController.generatePDF);
router.post("/recibo", pdfReciboController.generatePDF);
router.post("/ficha-excursao", pdfFichaExcursaoController.generatePDF);
router.post("/lista-passageiros", pdflistaPassageirosController.generatePDF);
router.post("/nota-agradecimento", pdfNotaAgradecimentoController.generatePDF);
router.post("/enviar-email", enviarEmailController.enviarEmail);

module.exports = router;
