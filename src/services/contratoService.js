const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const puppeteerCore = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");
const { converteDataIsoToString } = require("../utils/dateFormated");
const { formatarParaBrl } = require("../utils/formatMoney");
const { urlToBase64 } = require("../utils/converteUrlToBase64");
const { gerarNumeroContrato } = require("../utils/gerarNumeroContrato");
const { Mutex } = require('async-mutex');
const mutex = new Mutex();

async function createPDF(
  tipoContrato,
  nomeCliente,
  documento,
  endereco,
  placaVeiculo,
  descricaoVeiculo,
  dataInicial,
  horaInicial,
  dataFinal,
  horaFinal,
  origem,
  destino,
  detalhesLocacao,
  dataGeracao
) {

  return await mutex.runExclusive(async () => {

    const tipoPessoa = (tipoContrato == "CPF" || tipoContrato == 'RG') ? 'física' : 'jurídica';


    if (detalhesLocacao) {

      detalhesLocacao.kmTotal = new Intl.NumberFormat('pt-BR').format(detalhesLocacao.kmTotal);

      if (detalhesLocacao.valorTotal) {
        detalhesLocacao.valorTotal = formatarParaBrl(detalhesLocacao.valorTotal);
      } else {
        detalhesLocacao.valorTotal = formatarParaBrl(0);
      }

      if (detalhesLocacao.valorKmExcedido) {
        detalhesLocacao.valorKmExcedido = formatarParaBrl(detalhesLocacao.valorKmExcedido);
      } else {
        detalhesLocacao.valorKmExcedido = formatarParaBrl(0);
      }

      if (!detalhesLocacao.kmCortesia) {
        detalhesLocacao.kmCortesia = 0;
      }

      if (detalhesLocacao.tipoContratoLocacao != "NORMAL") {
        detalhesLocacao.valorTotal = `${detalhesLocacao.valorTotal} por Km percorrido.`
      }
    }

    const numeroContrato = await gerarNumeroContrato();

    try {
      const data = {
        numeroContrato: String(numeroContrato).padStart(6, '0'),
        tipoContrato,
        tipoPessoa,
        nomeCliente: String(nomeCliente).toUpperCase(),
        documento,
        endereco,
        placaVeiculo,
        descricaoVeiculo,
        dataInicial: converteDataIsoToString(dataInicial),
        horaInicial,
        dataFinal: converteDataIsoToString(dataFinal),
        horaFinal,
        origem,
        destino,
        detalhesLocacao,
        dataGeracao
      };

      const templateHtml = fs.readFileSync(
        path.join(__dirname, "../templates/contrato.html"),
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
      const logoWordBase64 = await urlToBase64('https://i.ibb.co/gFrYDkdZ/logo-word.png');
      const logoPrefeituraBase64 = await urlToBase64('https://i.ibb.co/R42NPJTN/link179.png');

      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        displayHeaderFooter: true,
        margin: {
          top: '135px',       // aumenta para caber o header
          bottom: '100px',    // aumenta para caber o footer
        },
        headerTemplate: `
        <div style="width: 100%; padding: 0px; margin: 0px; margin-top: -20px">
          <img style="width: 100%" src="${logoWordBase64}" alt="img-info">
        </div>
      `,
        footerTemplate: `
        <div style="width: 100%; padding: 5px 20px; text-align: center;">
          <img style="width: 100px" src="${logoPrefeituraBase64}">
        </div>
      `
      });

      await browser.close();
      return pdfBuffer;
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      throw error;
    }
  });
}

module.exports = { createPDF };
