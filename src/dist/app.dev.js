"use strict";

var express = require("express");

var cors = require("cors");

var pdfRoutes = require("./routes/routes");

var clienteRoutes = require("./routes/routes");

var passageiroRoutes = require("./routes/routes");

var app = express();
app.use(cors({
  origin: ['https://cvm-docs.vercel.app', 'http://localhost:4200']
}));
app.use(express.json());
app.use("/api/pdf", pdfRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/passageiros", passageiroRoutes);
module.exports = app;