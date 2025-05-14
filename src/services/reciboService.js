const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const puppeteerCore = require("puppeteer-core")
const chromium = require("@sparticuz/chromium")

async function createPDF(
  nomeCliente,
  valor,
  valorPorExtenso,
  pacoteViagem,
  formaPagamento,
  dataGeracao
) {
  try {
    if(formaPagamento === 'Dinheiro'){
      formaPagamento = {prefix: 'em', sulfix: 'Dinheiro'};
    } else if (formaPagamento === 'Cartão de crédito'){
      formaPagamento = {prefix: 'no', sulfix: 'Cartão de crédito'};
    } else {
      formaPagamento = {prefix: 'mediante a uma transação bancária (PIX) com a seguinte chave:', sulfix: 'cvmturismojn@gmail.com'}
    }
    const data = {
      nomeCliente,
      valor,
      valorPorExtenso,
      pacoteViagem,
      formaPagamento,
      dataGeracao
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/recibo.html"),
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
        defaultViewport: chromium.defaultViewport,
        ignoreDefaultArgs: ["--disable-extensions"],
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
