"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium-min");

var _require = require("../utils/converteStringToFloat"),
    converteStringToFloat = _require.converteStringToFloat,
    converteFloatToString = _require.converteFloatToString;

function createPDF(nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valorComDespesa, valorSemDespesa, valorComNota, taxaPix, modeloVan, cortesiaKm, valorAcrescimoKm, dataGeracao) {
  var taxaPixNumber, valorComDespesaPix, valorSemDespesaPix, valorComNotaPix, data, templateHtml, template, html, browser, executablePath, page, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          taxaPixNumber = parseFloat(taxaPix);
          valorComDespesaPix = converteFloatToString(converteStringToFloat(valorComDespesa) * (1 + taxaPixNumber / 100));
          valorSemDespesaPix = converteFloatToString(converteStringToFloat(valorSemDespesa) * (1 + taxaPixNumber / 100));
          valorComNotaPix = converteFloatToString(converteStringToFloat(valorComNota) * (1 + taxaPixNumber / 100));
          data = {
            nomeCliente: nomeCliente,
            telefoneContato: telefoneContato,
            pacoteViagem: pacoteViagem,
            localSaida: localSaida,
            dataSaida: dataSaida,
            horaSaida: horaSaida,
            dataRetorno: dataRetorno,
            horaRetorno: horaRetorno,
            valorComDespesa: valorComDespesa,
            valorSemDespesa: valorSemDespesa,
            valorComNota: valorComNota,
            valorComDespesaPix: valorComDespesaPix,
            valorSemDespesaPix: valorSemDespesaPix,
            valorComNotaPix: valorComNotaPix,
            modeloVan: modeloVan || "Van Mercedes minibus com 20 lugares, ar-condicionado, bancos reclinaveis e som",
            cortesiaKm: cortesiaKm || "30",
            valorAcrescimoKm: valorAcrescimoKm || "4,50",
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/orcamento.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 18;
            break;
          }

          _context.next = 12;
          return regeneratorRuntime.awrap(chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar'));

        case 12:
          executablePath = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(puppeteerCore.launch({
            executablePath: executablePath,
            args: chromium.args,
            headless: chromium.headless,
            defaultViewport: chromium.defaultViewport
          }));

        case 15:
          browser = _context.sent;
          _context.next = 21;
          break;

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 20:
          browser = _context.sent;

        case 21:
          _context.next = 23;
          return regeneratorRuntime.awrap(browser.newPage());

        case 23:
          page = _context.sent;
          _context.next = 26;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 26:
          _context.next = 28;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 28:
          pdfBuffer = _context.sent;
          _context.next = 31;
          return regeneratorRuntime.awrap(browser.close());

        case 31:
          return _context.abrupt("return", pdfBuffer);

        case 34:
          _context.prev = 34;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          throw _context.t0;

        case 38:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 34]]);
}

module.exports = {
  createPDF: createPDF
};