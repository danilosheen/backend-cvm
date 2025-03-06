"use strict";

var express = require("express");

var router = express.Router();

var pdfOrcamentoController = require("../controllers/orcamentoController");

var pdfReciboController = require("../controllers/reciboController");

router.post("/orcamento", pdfOrcamentoController.generatePDF);
router.post("/recibo", pdfReciboController.generatePDF);
module.exports = router;