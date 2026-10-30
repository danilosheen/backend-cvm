
import express from "express";
import cors from "cors";

import pdfRoutes from "./routes/routes.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import passageiroRoutes from "./routes/passageiroRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import fluxoRoutes from "./routes/fluxoCaixaRouter.js";
import dependenteRoutes from "./routes/dependenteRoutes.js";
import saldoAnteriorRoutes from "./routes/saldoAnteriorRoutes.js";
import permissaoRoutes from "./routes/permissaoRoutes.js";

import orcamentoHistoryRoutes from "./routes/historyDocsRoutes/orcamentoHistoryRoutes.js";
import contratoHistoryRoutes from "./routes/historyDocsRoutes/contratoHistoryRoutes.js";
import listaPassageirosHistoryRoutes from "./routes/historyDocsRoutes/listaPassageirosHistoryRoutes.js";


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

export default app;

// npx vercel dev

