"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium");

var _require = require("../utils/dateFormated"),
    converteDataIsoToString = _require.converteDataIsoToString;

function createPDF(numeroCarroP1, numeroCarroP2, placa, motorista, origem, destino, dataSaida, horaSaida, dataRetorno, horaRetorno, extensaoRoteiroKm, qtdPassageiros, passageiros, dataGeracao) {
  var data, templateHtml, template, html, browser, page, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          handlebars.registerHelper('addOne', function (index) {
            return index + 1;
          });
          data = {
            numeroCarroP1: numeroCarroP1,
            numeroCarroP2: numeroCarroP2,
            placa: placa,
            motorista: motorista,
            origem: origem,
            destino: destino,
            dataSaida: converteDataIsoToString(dataSaida),
            horaSaida: horaSaida,
            dataRetorno: converteDataIsoToString(dataRetorno),
            horaRetorno: horaRetorno,
            extensaoRoteiroKm: extensaoRoteiroKm,
            qtdPassageiros: qtdPassageiros,
            passageiros: passageiros,
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/lista-passageiros.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 22;
            break;
          }

          _context.t0 = regeneratorRuntime;
          _context.t1 = puppeteerCore;
          _context.next = 11;
          return regeneratorRuntime.awrap(chromium.executablePath());

        case 11:
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
          _context.next = 19;
          return _context.t0.awrap.call(_context.t0, _context.t7);

        case 19:
          browser = _context.sent;
          _context.next = 25;
          break;

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 24:
          browser = _context.sent;

        case 25:
          _context.next = 27;
          return regeneratorRuntime.awrap(browser.newPage());

        case 27:
          page = _context.sent;
          _context.next = 30;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 30:
          _context.next = 32;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 32:
          pdfBuffer = _context.sent;
          _context.next = 35;
          return regeneratorRuntime.awrap(browser.close());

        case 35:
          return _context.abrupt("return", pdfBuffer);

        case 38:
          _context.prev = 38;
          _context.t8 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t8);
          throw _context.t8;

        case 42:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 38]]);
}

module.exports = {
  createPDF: createPDF
};