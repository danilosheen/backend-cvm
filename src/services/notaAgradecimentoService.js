const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const puppeteerCore = require("puppeteer-core")
const chromium  = require("@sparticuz/chromium-min");

async function createPDF(
  nomeCliente,
) {
  try {
    const data = {
      nomeCliente,
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/nota-agradecimento.html"),
      "utf8"
    );
    const template = handlebars.compile(templateHtml);
    const html = template(data);

    let browser;
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER) {
      const executablePath = await chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar')
            browser = await puppeteerCore.launch({
                executablePath,
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
