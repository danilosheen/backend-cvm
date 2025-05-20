const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const puppeteerCore = require("puppeteer-core")
const chromium  = require("@sparticuz/chromium");
const { converteStringToFloat, converteFloatToString } = require("../utils/converteStringToFloat");
const { converteDataIsoToString } = require("../utils/dateFormated");
const { formatarParaBrl } = require("../utils/formatMoney");

async function createPDF(
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
) {
  try {
    const taxaPixNumber = parseFloat(taxaPix);
    
    const valorComDespesaPix = formatarParaBrl(valorComDespesa * (1+(taxaPixNumber/100)))
    const valorSemDespesaPix = formatarParaBrl(valorSemDespesa * (1+(taxaPixNumber/100)))
    const valorComNotaPix = formatarParaBrl( valorComNota * (1+(taxaPixNumber/100)))
  
    const data = {
      nomeCliente,
      telefoneContato,
      localSaida,
      destinoViagem,
      dataSaida: converteDataIsoToString(dataSaida),
      horaSaida,
      dataRetorno : converteDataIsoToString(dataRetorno),
      horaRetorno,
      valorComDespesa: formatarParaBrl(valorComDespesa),
      valorSemDespesa: formatarParaBrl(valorSemDespesa),
      valorComNota: formatarParaBrl(valorComNota),
      valorComDespesaPix,
      valorSemDespesaPix,
      valorComNotaPix,
      taxaPix: taxaPixNumber,
      modeloVan: modeloVan || "Van Mercedes minibus com 20 lugares, ar-condicionado, bancos reclinaveis e som",
      cortesiaKm: cortesiaKm || "30",
      valorAcrescimoKm: valorAcrescimoKm || "4,50",
      dataGeracao
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/orcamento.html"),
      "utf8"
    );
    const template = handlebars.compile(templateHtml);
    const html = template(data);

    let browser;
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER) {
      // const executablePath = await chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar')
            browser = await puppeteerCore.launch({
                executablePath: await chromium.executablePath(),
                args: chromium.args,
                headless: chromium.headless,
                defaultViewport: chromium.defaultViewport
            });
    } else {
      browser = await puppeteer.launch({
        args: ["--no-sandbox"],
        headless: true,
      });
    }

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

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

module.exports = { createPDF };
