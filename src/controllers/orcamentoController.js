const { getDateFormated } = require("../utils/dateFormated");
const { getDataArquivo } = require("../utils/dateFormated");
const pdfOrcamentoService = require("../services/orcamentoService");
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
      localSaida,
      destinoViagem,
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

    const dataAtual = getDataArquivo();
    emailService.enviarDocumentoGerado(pdfBuffer, 'c.danilo.f.silva@gmail.com', 'Backup de documento gerado', `Orçamento_${dataAtual}`);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
