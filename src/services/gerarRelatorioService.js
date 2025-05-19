const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const puppeteerCore = require("puppeteer-core");
const chromium  = require("@sparticuz/chromium");
const { converteDataIsoToString } = require("../utils/dateFormated");
const { formatarParaBrl } = require("../utils/formatMoney");

async function createPDF(
  fluxos,
  saldoAnterior,
  entradas,
  saidas,
  saldoRestante,
  mesAno,
  pdfName
) {
  try {

    await fluxos.map(fluxo=>{
      fluxo.data = converteDataIsoToString(fluxo.data);
      fluxo.valor = formatarParaBrl(fluxo.valor);
    })

    saldoAnterior = formatarParaBrl(saldoAnterior);
    entradas = formatarParaBrl(entradas);
    saidas = formatarParaBrl(saidas);
    saldoRestante = formatarParaBrl(saldoRestante);

    const data = {
      fluxos,
      saldoAnterior,
      entradas,
      saidas,
      saldoRestante,
      mesAno,
      pdfName
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/gerar-relatorio.html"),
      "utf8"
    );
    const template = handlebars.compile(templateHtml);
    const html = template(data);

    let browser;
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER) {
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
      margin: {
        top: "2cm",
        right: "2cm",
        bottom: "2cm",
        left: "2cm"
      }
    });

    await browser.close();
    return pdfBuffer;
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    throw error;
  }
}

module.exports = { createPDF };
