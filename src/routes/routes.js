const express = require("express");
const router = express.Router();
const pdfOrcamentoController = require("../controllers/orcamentoController");
const pdfReciboController = require("../controllers/reciboController");

router.post("/orcamento", pdfOrcamentoController.generatePDF);
router.post("/recibo", pdfReciboController.generatePDF);

module.exports = router;
