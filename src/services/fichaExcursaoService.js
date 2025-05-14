const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const puppeteerCore = require("puppeteer-core")
const chromium  = require("@sparticuz/chromium");
const { formatServices, upperCase } = require("../utils/formatMoney");

async function createPDF(
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
) {
  try {
    const servicosFormatado = formatServices(servicos);
    const tipoDeHospedagemFormatado = upperCase(tipoDeHospedagem);
    const data = {
      excursaoPara,
      localSaida,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      cliente,
      servicosFormatado,
      tipoDeHospedagemFormatado,
      valorIntegralExcursao,
      entradaParcelamento,
      valorParcelas,
      qtdParcelas,
      dataPagamentoParcela,
      dependentes,
      dataGeracao
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/ficha-excursao.html"),
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
    });

    await browser.close();
    return pdfBuffer;
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    throw error;
  }
}

module.exports = { createPDF };
