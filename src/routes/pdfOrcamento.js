const express = require("express");
const router = express.Router();
const pdfController = require("../controllers/orcamentoController");

router.post("/orcamento", pdfController.generatePDF);

module.exports = router;
