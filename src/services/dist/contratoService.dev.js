"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium");

var _require = require("../utils/formatMoney"),
    formatarParaBrl = _require.formatarParaBrl;

var _require2 = require("../utils/converteUrlToBase64"),
    urlToBase64 = _require2.urlToBase64;

var _require3 = require("../utils/gerarNumeroContrato"),
    gerarNumeroContrato = _require3.gerarNumeroContrato;

function createPDF(tipoContrato, nomeCliente, documento, endereco, placaVeiculo, descricaoVeiculo, dataInicial, horaInicial, dataFinal, horaFinal, origem, destino, detalhesLocacao, dataGeracao) {
  var tipoPessoa, numeroContrato, data, templateHtml, template, html, browser, page, logoWordBase64, logoPrefeituraBase64, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          tipoPessoa = tipoContrato == "CPF" ? 'física' : 'jurídica';

          if (detalhesLocacao) {
            if (detalhesLocacao.valorTotal) {
              detalhesLocacao.valorTotal = formatarParaBrl(detalhesLocacao.valorTotal);
            }

            if (detalhesLocacao.valorPorKm) {
              detalhesLocacao.valorPorKm = formatarParaBrl(detalhesLocacao.valorPorKm);
            }

            if (detalhesLocacao.valorKmExcedido) {
              detalhesLocacao.valorKmExcedido = formatarParaBrl(detalhesLocacao.valorKmExcedido);
            }
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(gerarNumeroContrato());

        case 4:
          numeroContrato = _context.sent;
          _context.prev = 5;
          data = {
            numeroContrato: String(numeroContrato).padStart(6, '0'),
            tipoContrato: tipoContrato,
            tipoPessoa: tipoPessoa,
            nomeCliente: String(nomeCliente).toUpperCase(),
            documento: documento,
            endereco: endereco,
            placaVeiculo: placaVeiculo,
            descricaoVeiculo: descricaoVeiculo,
            dataInicial: dataInicial,
            horaInicial: horaInicial,
            dataFinal: dataFinal,
            horaFinal: horaFinal,
            origem: origem,
            destino: destino,
            detalhesLocacao: detalhesLocacao,
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/contrato.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 27;
            break;
          }

          _context.t0 = regeneratorRuntime;
          _context.t1 = puppeteerCore;
          _context.next = 15;
          return regeneratorRuntime.awrap(chromium.executablePath());

        case 15:
          _context.t2 = _context.sent;
          _context.t3 = chromium.args;
          _context.t4 = chromium.headless;
          _context.t5 = chromium.defaultViewport;
          _context.t6 = ["--disable-extensions"];
          _context.t7 = {
            executablePath: _context.t2,
            args: _context.t3,
            headless: _context.t4,
            defaultViewport: _context.t5,
            ignoreDefaultArgs: _context.t6
          };
          _context.t8 = _context.t1.launch.call(_context.t1, _context.t7);
          _context.next = 24;
          return _context.t0.awrap.call(_context.t0, _context.t8);

        case 24:
          browser = _context.sent;
          _context.next = 30;
          break;

        case 27:
          _context.next = 29;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 29:
          browser = _context.sent;

        case 30:
          _context.next = 32;
          return regeneratorRuntime.awrap(browser.newPage());

        case 32:
          page = _context.sent;
          _context.next = 35;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 35:
          _context.next = 37;
          return regeneratorRuntime.awrap(urlToBase64('https://i.ibb.co/gFrYDkdZ/logo-word.png'));

        case 37:
          logoWordBase64 = _context.sent;
          _context.next = 40;
          return regeneratorRuntime.awrap(urlToBase64('https://i.ibb.co/R42NPJTN/link179.png'));

        case 40:
          logoPrefeituraBase64 = _context.sent;
          _context.next = 43;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true,
            displayHeaderFooter: true,
            margin: {
              top: '135px',
              // aumenta para caber o header
              bottom: '100px' // aumenta para caber o footer

            },
            headerTemplate: "\n        <div style=\"width: 100%; padding: 0px; margin: 0px; margin-top: -20px\">\n          <img style=\"width: 100%\" src=\"".concat(logoWordBase64, "\" alt=\"img-info\">\n        </div>\n      "),
            footerTemplate: "\n        <div style=\"width: 100%; padding: 5px 20px; text-align: center;\">\n          <img style=\"width: 100px\" src=\"".concat(logoPrefeituraBase64, "\">\n        </div>\n      ")
          }));

        case 43:
          pdfBuffer = _context.sent;
          _context.next = 46;
          return regeneratorRuntime.awrap(browser.close());

        case 46:
          return _context.abrupt("return", pdfBuffer);

        case 49:
          _context.prev = 49;
          _context.t9 = _context["catch"](5);
          console.error("Erro ao gerar PDF:", _context.t9);
          throw _context.t9;

        case 53:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 49]]);
}

module.exports = {
  createPDF: createPDF
};