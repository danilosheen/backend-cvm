const { getDateFormated } = require("../utils/dateFormated");
const pdfContratoService = require("../services/contratoService");
const emailService = require("../services/emailService")

exports.generatePDF = async (req, res) => {
  try {
    const {
      tipoContrato,
      nomeCliente,
      documento,
      endereco,
      placaVeiculo,
      descricaoVeiculo,
      dataInicial,
      horaInicial,
      dataFinal,
      horaFinal,
      origem,
      destino,
      detalhesLocacao,
    } = req.body.pdfData;

    const pdfName = req.body.pdfName;

    const dataGeracao = getDateFormated();
    const pdfBuffer = await pdfContratoService.createPDF(
      tipoContrato,
      nomeCliente,
      documento,
      endereco,
      placaVeiculo,
      descricaoVeiculo,
      dataInicial,
      horaInicial,
      dataFinal,
      horaFinal,
      origem,
      destino,
      detalhesLocacao,
      dataGeracao
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="contrato.pdf"`);
    // Adiciona o header CORS para permitir a origem desejada
    const allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
     res.setHeader("Access-Control-Allow-Origin", origin);
    }

    await emailService.enviarDocumentoGerado(pdfBuffer, `${process.env.EMAIL}`, 'Backup do contrato gerado', pdfName);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
