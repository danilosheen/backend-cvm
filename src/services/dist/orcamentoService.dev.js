"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium-min");

function createPDF(nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan, cortesiaKm, valorAcrescimoKm, dataGeracao) {
  var data, templateHtml, template, html, browser, executablePath, page, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = {
            nomeCliente: nomeCliente,
            telefoneContato: telefoneContato,
            pacoteViagem: pacoteViagem,
            localSaida: localSaida,
            dataSaida: dataSaida,
            horaSaida: horaSaida,
            dataRetorno: dataRetorno,
            horaRetorno: horaRetorno,
            valor: valor,
            modeloVan: modeloVan || "Van Mercedes minibus com 20 lugares, ar-condicionado, bancos reclinaveis e som",
            cortesiaKm: cortesiaKm || "30",
            valorAcrescimoKm: valorAcrescimoKm || "4,50",
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/orcamento.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 14;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar'));

        case 8:
          executablePath = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(puppeteerCore.launch({
            executablePath: executablePath,
            args: chromium.args,
            headless: chromium.headless,
            defaultViewport: chromium.defaultViewport
          }));

        case 11:
          browser = _context.sent;
          _context.next = 17;
          break;

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 16:
          browser = _context.sent;

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(browser.newPage());

        case 19:
          page = _context.sent;
          _context.next = 22;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 24:
          pdfBuffer = _context.sent;
          _context.next = 27;
          return regeneratorRuntime.awrap(browser.close());

        case 27:
          return _context.abrupt("return", pdfBuffer);

        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          throw _context.t0;

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 30]]);
}

module.exports = {
  createPDF: createPDF
};