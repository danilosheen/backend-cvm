const express = require("express");
const cors = require("cors");
const pdfRoutes = require("./routes/routes");
const clienteRoutes = require("./routes/routes");
const passageiroRoutes = require("./routes/routes");

const app = express();
app.use(cors({
  origin: ['https://cvm-docs.vercel.app', 'http://localhost:4200']
}));
app.use(express.json());

app.use("/api/pdf", pdfRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/passageiros", passageiroRoutes);

module.exports = app;
