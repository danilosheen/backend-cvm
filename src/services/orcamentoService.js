const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

exports.createPDF = async (
  nomeCliente,
  telefoneContato,
  pacoteViagem,
  localSaida,
  dataSaida,
  horaSaida,
  dataRetorno,
  horaRetorno,
  valor,
  modeloVan
) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Caminho do template EJS
    const templatePath = path.join(__dirname, "../templates/orcamento.ejs");

    // Renderiza o HTML usando o template EJS
    const htmlContent = await ejs.renderFile(templatePath, {
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
    });

    await page.setContent(htmlContent, { waitUntil: "load" });

    const filename = `orcamento-${Date.now()}.pdf`;
    const filePath = path.join(__dirname, filename);

    await page.pdf({ path: filePath, format: "A4" });

    await browser.close();

    return filePath;
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    throw error;
  }
};

// Função para deletar o arquivo após o uso
exports.cleanupFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) console.error("Erro ao deletar arquivo:", err);
  });
};
