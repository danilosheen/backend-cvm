const express = require("express");
const router = express.Router();
const pdfOrcamentoController = require("../controllers/orcamentoController");
const pdfReciboController = require("../controllers/reciboController");
const pdfFichaExcursaoController = require("../controllers/fichaExcursaoController");
const pdflistaPassageirosController = require("../controllers/listaPassageirosController");

router.post("/orcamento", pdfOrcamentoController.generatePDF);
router.post("/recibo", pdfReciboController.generatePDF);
router.post("/ficha-excursao", pdfFichaExcursaoController.generatePDF);
router.post("/lista-passageiros", pdflistaPassageirosController.generatePDF);

module.exports = router;
