"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium");

var _require = require("../utils/dateFormated"),
    converteDataIsoToString = _require.converteDataIsoToString;

var _require2 = require("../utils/formatMoney"),
    formatarParaBrl = _require2.formatarParaBrl;

function createPDF(fluxos, saldoAnterior, entradas, saidas, saldoRestante, mesAno, pdfName) {
  var data, templateHtml, template, html, browser, page, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fluxos.map(function (fluxo) {
            fluxo.data = converteDataIsoToString(fluxo.data);
            fluxo.valor = formatarParaBrl(fluxo.valor);
          }));

        case 3:
          saldoAnterior = formatarParaBrl(saldoAnterior);
          entradas = formatarParaBrl(entradas);
          saidas = formatarParaBrl(saidas);
          saldoRestante = formatarParaBrl(saldoRestante);
          data = {
            fluxos: fluxos,
            saldoAnterior: saldoAnterior,
            entradas: entradas,
            saidas: saidas,
            saldoRestante: saldoRestante,
            mesAno: mesAno,
            pdfName: pdfName
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/gerar-relatorio.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 27;
            break;
          }

          _context.t0 = regeneratorRuntime;
          _context.t1 = puppeteerCore;
          _context.next = 16;
          return regeneratorRuntime.awrap(chromium.executablePath());

        case 16:
          _context.t2 = _context.sent;
          _context.t3 = chromium.args;
          _context.t4 = chromium.headless;
          _context.t5 = chromium.defaultViewport;
          _context.t6 = {
            executablePath: _context.t2,
            args: _context.t3,
            headless: _context.t4,
            defaultViewport: _context.t5
          };
          _context.t7 = _context.t1.launch.call(_context.t1, _context.t6);
          _context.next = 24;
          return _context.t0.awrap.call(_context.t0, _context.t7);

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
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true,
            margin: {
              top: "2cm",
              right: "2cm",
              bottom: "2cm",
              left: "2cm"
            }
          }));

        case 37:
          pdfBuffer = _context.sent;
          _context.next = 40;
          return regeneratorRuntime.awrap(browser.close());

        case 40:
          return _context.abrupt("return", pdfBuffer);

        case 43:
          _context.prev = 43;
          _context.t8 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t8);
          throw _context.t8;

        case 47:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 43]]);
}

module.exports = {
  createPDF: createPDF
};