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
// const chromium = require("@sparticuz/chromium");
import chromium from "@sparticuz/chromium";
// const { formatarParaBrl } = require("../utils/formatMoney");
import { formatarParaBrl } from "../utils/formatMoney.js";
// const { logo_word, logo_cvm, assinatura, icon_jesus } = require("../constantes/url.images");
import { logo_word, logo_cvm, assinatura, icon_jesus } from "../constantes/url.images.js";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      valor: formatarParaBrl(valor),
      valorPorExtenso,
      pacoteViagem,
      formaPagamento,
      dataGeracao,

      // Imagens
      logo_word,
      logo_cvm,
      assinatura,
      icon_jesus
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

export default { createPDF };
