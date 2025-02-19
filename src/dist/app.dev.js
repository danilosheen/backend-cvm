"use strict";

var express = require("express");

var cors = require("cors");

var app = express();

var pdfRoutes = require("./routes/pdfOrcamento");

app.use(cors());
app.use(express.json());
app.use("/api/pdf", pdfRoutes);
module.exports = app;