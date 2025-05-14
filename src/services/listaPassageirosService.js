const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const puppeteerCore = require("puppeteer-core")
const chromium  = require("@sparticuz/chromium");

async function createPDF(
  numeroCarroP1,
  numeroCarroP2,
  placa,
  motorista,
  origem,
  destino,
  dataSaida,
  horaSaida,
  dataRetorno,
  horaRetorno,
  extensaoRoteiroKm,
  qtdPassageiros,
  passageiros,
  dataGeracao
) {
  try {
    
    handlebars.registerHelper('addOne', function(index) {
      return index + 1;
    });

    const data = {
      numeroCarroP1,
      numeroCarroP2,
      placa,
      motorista,
      origem,
      destino,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      extensaoRoteiroKm,
      qtdPassageiros,
      passageiros,
      dataGeracao
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/lista-passageiros.html"),
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
