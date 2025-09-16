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
  porcentagemSinal,
  dataGeracao
) {

  return await mutex.runExclusive(async () => {

    const tipoPessoa = (tipoContrato == "CPF" || tipoContrato == 'RG') ? 'física' : 'jurídica';
   
    let valorSinal;
    
    if (detalhesLocacao) {
      if (detalhesLocacao.tipoContratoLocacao != "NORMAL") {
        valorSinal = formatarParaBrl((detalhesLocacao.valorTotal * detalhesLocacao.kmTotal) * (parseInt(porcentagemSinal)/100));
        detalhesLocacao.valorTotal = formatarParaBrl(detalhesLocacao.valorTotal);
        detalhesLocacao.valorTotal = `${detalhesLocacao.valorTotal} por Km percorrido.`;
      } else {
        valorSinal = formatarParaBrl(detalhesLocacao.valorTotal * (parseInt(porcentagemSinal)/100));
        detalhesLocacao.valorTotal = formatarParaBrl(detalhesLocacao.valorTotal) || '0,00'
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
        detalhesLocacao:{
          tipoContratoLocacao: detalhesLocacao.tipoContratoLocacao,
          valorTotal: detalhesLocacao.valorTotal,
          kmTotal: new Intl.NumberFormat('pt-BR').format(detalhesLocacao.kmTotal),
          valorKmExcedido: formatarParaBrl(detalhesLocacao.valorKmExcedido) || '0,00',
          kmCortesia: detalhesLocacao.kmCortesia || 0
        },
        porcentagemSinal,
        dataGeracao,
        valorSinal
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
