const { getDateFormated } = require("../utils/dateFormated");
const pdfOrcamentoService = require("../services/orcamentoService");

exports.generatePDF = async (req, res) => {
  try {
    const {
      nomeCliente,
      telefoneContato,
      pacoteViagem,
      localSaida,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      valorComDespesa,
      valorSemDespesa,
      valorComNota,
      taxaPix,
      modeloVan,
      cortesiaKm,
      valorAcrescimoKm
    } = req.body;

    const dataGeracao = getDateFormated();

    const pdfBuffer = await pdfOrcamentoService.createPDF(
      nomeCliente,
      telefoneContato,
      pacoteViagem,
      localSaida,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      valorComDespesa,
      valorSemDespesa,
      valorComNota,
      taxaPix,
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

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
