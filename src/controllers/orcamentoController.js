const { getDateFormated } = require("../services/dateFormatedService");
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
      valor,
      modeloVan,
      valorAcrescimoKm,
      dataGeracao
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="orcamento.pdf"`);
    // Adiciona o header CORS para permitir a origem desejada
    res.setHeader("Access-Control-Allow-Origin", "https://cvm-docs.vercel.app");

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
