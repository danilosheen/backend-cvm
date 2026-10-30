// const fs = require("fs");
import fs from "fs";
// const path = require("path");
import path from "path";
// const puppeteer = require("puppeteer");
import puppeteer from "puppeteer";
// const handlebars = require("handlebars");
import handlebars from "handlebars";
// const puppeteerCore = require("puppeteer-core");
import puppeteerCore from "puppeteer-core";
// const chromium  = require("@sparticuz/chromium");
import chromium from "@sparticuz/chromium";
// const { logo_word, logo_cvm } = require("../constantes/url.images");
import { logo_word, logo_cvm } from "../constantes/url.images.js";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createPDF(
  nomeCliente,
) {
  try {
    const data = {
      nomeCliente,
      
      // Imagens
      logo_word,
      logo_cvm
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/nota-agradecimento.html"),
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

export default { createPDF };
