"use strict";

var express = require("express");

var cors = require("cors");

var pdfRoutes = require("./routes/pdfOrcamento");

var app = express();
app.use(cors());
app.use(express.json());
app.use("/api/pdf", pdfRoutes);
module.exports = app;