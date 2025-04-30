const express = require("express");
const cors = require("cors");
const pdfRoutes = require("./routes/routes");
const clienteRoutes = require("./routes/clienteRoutes");
const passageiroRoutes = require("./routes/passageiroRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const authRoutes = require("./routes/authRoutes");
const fluxoRoutes = require("./routes/fluxoCaixaRouter");
const dependenteRoutes = require("./routes/dependenteRoutes")

const app = express();
app.use(cors({
  origin: ['https://cvm-docs.vercel.app', 'http://localhost:4200']
}));
app.use(express.json());

app.use("/api/pdf", pdfRoutes);
app.use("/api", clienteRoutes);
app.use("/api", passageiroRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api", authRoutes);
app.use('/api/fluxo-caixa', fluxoRoutes);
app.use('/api', dependenteRoutes);

module.exports = app;

// npx vercel dev

