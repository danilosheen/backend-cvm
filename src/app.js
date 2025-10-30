const express = require("express");
const cors = require("cors");
const pdfRoutes = require("./routes/routes");
const clienteRoutes = require("./routes/clienteRoutes");
const passageiroRoutes = require("./routes/passageiroRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const authRoutes = require("./routes/authRoutes");
const fluxoRoutes = require("./routes/fluxoCaixaRouter");
const dependenteRoutes = require("./routes/dependenteRoutes");
const saldoAnteriorRoutes = require("./routes/saldoAnteriorRoutes");
const permissaoRoutes = require("./routes/permissaoRoutes");
const orcamentoHistoryRoutes = require("./routes/historyDocsRoutes/orcamentoHistoryRoutes");
const contratoHistoryRoutes = require("./routes/historyDocsRoutes/contratoHistoryRoutes");
const listaPassageirosHistoryRoutes = require("./routes/historyDocsRoutes/listaPassageirosHistoryRoutes");

const app = express();
app.use(cors({
  origin: ['https://cvm-docs.vercel.app', 'http://localhost:4200', 'https://cvm-docs-ja7dttrcq-danilosheens-projects.vercel.app']
}));
app.use(express.json());

app.use("/api/pdf", pdfRoutes);
app.use("/api", clienteRoutes);
app.use("/api", passageiroRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", authRoutes);
app.use('/api/fluxo-caixa', fluxoRoutes);
app.use('/api', dependenteRoutes);
app.use('/api', saldoAnteriorRoutes);
app.use('/api', permissaoRoutes);
// history
app.use('/api', orcamentoHistoryRoutes);
app.use('/api', listaPassageirosHistoryRoutes);
app.use('/api', contratoHistoryRoutes);

module.exports = app;

// npx vercel dev

