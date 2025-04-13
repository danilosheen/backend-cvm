"use strict";

var express = require("express");

var cors = require("cors");

var pdfRoutes = require("./routes/routes");

var clienteRoutes = require("./routes/clienteRoutes");

var passageiroRoutes = require("./routes/passageiroRoutes");

var usuarioRoutes = require("./routes/usuarioRoutes");

var authRoutes = require("./routes/authRoutes");

var app = express();
app.use(cors({
  origin: ['https://cvm-docs.vercel.app', 'http://localhost:4200']
}));
app.use(express.json());
app.use("/api/pdf", pdfRoutes);
app.use("/api", clienteRoutes);
app.use("/api", passageiroRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api", authRoutes);
module.exports = app; // npx vercel dev