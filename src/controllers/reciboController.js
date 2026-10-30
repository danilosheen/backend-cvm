// const { getDateFormated } = require("../utils/dateFormated");
import { getDateFormated } from "../utils/dateFormated.js";
// const porExtensoFormatado = require("../utils/porExtenso");
import porExtensoFormatado from "../utils/porExtenso.js";
// const pdfReciboService = require("../services/reciboService");
import pdfReciboService from "../services/reciboService.js";
// const emailService = require("../services/emailService")
import emailService from "../services/emailService.js";
// const extenso = require('extenso');
import extenso from "extenso";

export const generatePDF = async (req, res) => {
  try {
    const {
      nomeCliente,
      valor,
      pacoteViagem,
      formaPagamento
    } = req.body.pdfData;

    const pdfName = req.body.pdfName;

    const dataGeracao = getDateFormated();
    const valorPorExtenso = porExtensoFormatado(extenso(valor, {mode: 'currency', currency: { code: 'BRL' }}));
    const pdfBuffer = await pdfReciboService.createPDF(
      nomeCliente,
      valor,
      valorPorExtenso,
      pacoteViagem,
      formaPagamento,
      dataGeracao
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="recibo.pdf"`);
    // Adiciona o header CORS para permitir a origem desejada
    const allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
     res.setHeader("Access-Control-Allow-Origin", origin);
    }

    await emailService.enviarDocumentoGerado(pdfBuffer, `${process.env.EMAIL}`, 'Backup do recibo gerado', pdfName);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
