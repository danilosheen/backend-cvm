const { getDateFormated } = require("../services/dateFormatedService");
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
    const valorPorExtenso = extenso(valor, {mode: 'currency'}).replace(/(^\w{1})|(\s+\w{1})/g, letra => 
      letra.toUpperCase() === 'E' ? 'e' : letra.toUpperCase());

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
