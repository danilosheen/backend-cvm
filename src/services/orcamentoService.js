const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");

async function createPDF(
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
) {
  try {
    const data = {
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
    };

    data.modeloVan == "" ? data.modeloVan = "Van Mercedes minibus com 20 lugares, ar-condicionado, bancos reclinaveis e som" : data.modeloVan;
    data.valorAcrescimoKm == "" ? data.valorAcrescimoKm = "4,25" : data.valorAcrescimoKm;
    

    // Ler o template corretamente
    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/orcamento.html"),
      "utf8"
    );
    const template = handlebars.compile(templateHtml);
    const html = template(data);

    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    // Gerar PDF diretamente no buffer
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    return pdfBuffer;
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    throw error;
  }
}

// ⚠️ Certifique-se de exportar corretamente a função
module.exports = { createPDF };
