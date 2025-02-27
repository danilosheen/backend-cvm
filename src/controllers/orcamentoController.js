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
      valor,
      modeloVan,
      valorAcrescimoKm
    } = req.body;

    const pdfBuffer = await pdfOrcamentoService.createPDF(
      nomeCliente,
      telefoneContato,
      pacoteViagem,
      localSaida,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      valor,
      modeloVan,
      valorAcrescimoKm
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="orcamento.pdf"`);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
