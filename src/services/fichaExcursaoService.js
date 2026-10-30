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
// const { formatServices, upperCase } = require("../utils/formatMoney");
import { formatServices, upperCase } from "../utils/formatMoney.js";
// const { converteDataIsoToString } = require("../utils/dateFormated");
import { converteDataIsoToString } from "../utils/dateFormated.js";
// const { formatarParaBrl } = require("../utils/formatMoney");
import { formatarParaBrl } from "../utils/formatMoney.js";
import {
  logo_word,
  icon_calendar,
  icon_clock,
  icon_person,
  icon_phone,
  icon_locale,
  icon_jesus
} from "../constantes/url.images.js";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      dataSaida: converteDataIsoToString(dataSaida),
      horaSaida,
      dataRetorno: converteDataIsoToString(dataRetorno),
      horaRetorno,
      cliente,
      servicosFormatado,
      tipoDeHospedagemFormatado,
      valorIntegralExcursao: formatarParaBrl(valorIntegralExcursao),
      entradaParcelamento: formatarParaBrl(entradaParcelamento),
      valorParcelas: formatarParaBrl(valorParcelas),
      qtdParcelas,
      dataPagamentoParcela,
      dependentes,
      dataGeracao,
      //Imagens
      logo_word,
      icon_calendar,
      icon_clock,
      icon_person,
      icon_phone,
      icon_locale,
      icon_jesus
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

export default { createPDF };
