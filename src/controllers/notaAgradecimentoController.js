const pdfNotaAgradecimentoService = require("../services/notaAgradecimentoService");

exports.generatePDF = async (req, res) => {
  try {
    const {
      nomeCliente,
      pdfName
    } = req.body;

    const pdfBuffer = await pdfNotaAgradecimentoService.createPDF(
      nomeCliente
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="ficha-excursao.pdf"`);
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
