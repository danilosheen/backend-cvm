const { getDateFormated } = require("../services/dateFormatedService");
const porExtensoFormatado = require("../services/porExtenso");
const pdfReciboService = require("../services/reciboService");
const extenso = require('extenso');

exports.generatePDF = async (req, res) => {
  try {
    const {
      nomeCliente,
      valor,
      pacoteViagem
    } = req.body;

    const dataGeracao = getDateFormated();
    //regex coloca as primeiras letras em maiúsculo
    const valorPorExtenso = porExtensoFormatado(extenso(valor, {mode: 'currency'}));
    const pdfBuffer = await pdfReciboService.createPDF(
      nomeCliente,
      valor,
      valorPorExtenso,
      pacoteViagem,
      dataGeracao
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="recibo.pdf"`);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
