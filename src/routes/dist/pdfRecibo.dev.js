"use strict";

var express = require("express");

var router = express.Router();

var pdfReciboController = require("../controllers/reciboController");

router.post("/recibo", pdfReciboController.generatePDF);
module.exports = router;