const { getDateFormated } = require("../utils/dateFormated");
const pdfOrcamentoService = require("../services/orcamentoService");
const orcamentoHistoryService = require("../services/historyDocs/orcamentoHistoryService");
const emailService = require("../services/emailService");

exports.generatePDF = async (req, res) => {
  try {
    const {
      nomeCliente,
      telefoneContato,
      localSaida,
      destinoViagem,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      valorSemDespesa,
      valorComDespesa,
      valorComNota,
      taxaPix,
      sinal,
      modeloVan,
      cortesiaKm,
      valorAcrescimoKm,
    } = req.body.pdfData;

    const pdfName = req.body.pdfName;

    const dataGeracao = getDateFormated();

    const pdfBuffer = await pdfOrcamentoService.createPDF(
      nomeCliente,
      telefoneContato,
      localSaida,
      destinoViagem,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      valorSemDespesa,
      valorComDespesa,
      valorComNota,
      taxaPix,
      sinal,
      modeloVan,
      cortesiaKm,
      valorAcrescimoKm,
      dataGeracao
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="orcamento.pdf"`);
    
    // Adiciona o header CORS para permitir a origem desejada
    const allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
     res.setHeader("Access-Control-Allow-Origin", origin);
    }

    await emailService.enviarDocumentoGerado(pdfBuffer, `${process.env.EMAIL}`, 'Backup de orçamento gerado', pdfName);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
