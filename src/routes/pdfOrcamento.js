const express = require("express");
const router = express.Router();
const pdfOrcamentoController = require("../controllers/orcamentoController");

router.post("/orcamento", pdfOrcamentoController.generatePDF);

module.exports = router;
