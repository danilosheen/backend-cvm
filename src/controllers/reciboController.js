const { getDateFormated } = require("../services/dateFormatedService");
const porExtensoFormatado = require("../services/porExtenso");
const pdfReciboService = require("../services/reciboService");
const extenso = require('extenso');

exports.generatePDF = async (req, res) => {
  try {
    const {
      nomeCliente,
      valor,
      pacoteViagem,
      formaPagamento
    } = req.body;

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

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
