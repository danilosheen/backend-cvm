const pdfGerarRelatorioService = require("../services/gerarRelatorioService");
const emailService = require("../services/emailService");

exports.generatePDF = async (req, res) => {
  try {
    const {
      fluxos,
      saldoAnterior,
      entradas,
      saidas,
      saldoRestante,
      mesAno,
      pdfName
    } = req.body;

    const pdfBuffer = await pdfGerarRelatorioService.createPDF(
      fluxos,
      saldoAnterior,
      entradas,
      saidas,
      saldoRestante,
      mesAno,
      pdfName
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="relatorio-mensal.pdf"`);
    // Adiciona o header CORS para permitir a origem desejada
    const allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
     res.setHeader("Access-Control-Allow-Origin", origin);
    }

    await emailService.enviarDocumentoGerado(pdfBuffer, 'c.danilo.f.silva@gmail.com', 'Backup de relatório gerado', pdfName);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
}