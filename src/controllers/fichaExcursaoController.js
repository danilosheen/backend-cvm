const { getDateFormated } = require("../utils/dateFormated");
const { getDataArquivo } = require("../utils/dateFormated");
const pdfFichaExcursaoService = require("../services/fichaExcursaoService");
const emailService = require("../services/emailService");

exports.generatePDF = async (req, res) => {
  try {
    const {
      excursaoPara,
      localSaida,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      cliente,
      servicos,
      tipoDeHospedagem,
      valorIntegralExcursao,
      entradaParcelamento,
      valorParcelas,
      qtdParcelas,
      dataPagamentoParcela,
      dependentes
    } = req.body;

    const dataGeracao = getDateFormated();

    const pdfBuffer = await pdfFichaExcursaoService.createPDF(
      excursaoPara,
      localSaida,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      cliente,
      servicos,
      tipoDeHospedagem,
      valorIntegralExcursao,
      entradaParcelamento,
      valorParcelas,
      qtdParcelas,
      dataPagamentoParcela,
      dependentes,
      dataGeracao
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

    const dataAtual = getDataArquivo();
    emailService.enviarDocumentoGerado(pdfBuffer, 'c.danilo.f.silva@gmail.com', 'Backup de documento gerado', `Ficha de excursão_${dataAtual}`);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
