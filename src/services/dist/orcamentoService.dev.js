"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium");

var _require = require("../utils/converteStringToFloat"),
    converteStringToFloat = _require.converteStringToFloat,
    converteFloatToString = _require.converteFloatToString;

var _require2 = require("../utils/dateFormated"),
    converteDataIsoToString = _require2.converteDataIsoToString;

var _require3 = require("../utils/formatMoney"),
    formatarParaBrl = _require3.formatarParaBrl;

function createPDF(nomeCliente, telefoneContato, localSaida, destinoViagem, dataSaida, horaSaida, dataRetorno, horaRetorno, valorComDespesa, valorSemDespesa, valorComNota, taxaPix, modeloVan, cortesiaKm, valorAcrescimoKm, dataGeracao) {
  var taxaPixNumber, valorComDespesaPix, valorSemDespesaPix, valorComNotaPix, data, templateHtml, template, html, browser, page, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          taxaPixNumber = parseFloat(taxaPix);
          valorComDespesaPix = formatarParaBrl(valorComDespesa * (1 + taxaPixNumber / 100));
          valorSemDespesaPix = formatarParaBrl(valorSemDespesa * (1 + taxaPixNumber / 100));
          valorComNotaPix = formatarParaBrl(valorComNota * (1 + taxaPixNumber / 100));
          data = {
            nomeCliente: nomeCliente,
            telefoneContato: telefoneContato,
            localSaida: localSaida,
            destinoViagem: destinoViagem,
            dataSaida: converteDataIsoToString(dataSaida),
            horaSaida: horaSaida,
            dataRetorno: converteDataIsoToString(dataRetorno),
            horaRetorno: horaRetorno,
            valorComDespesa: formatarParaBrl(valorComDespesa),
            valorSemDespesa: formatarParaBrl(valorSemDespesa),
            valorComNota: formatarParaBrl(valorComNota),
            valorComDespesaPix: valorComDespesaPix,
            valorSemDespesaPix: valorSemDespesaPix,
            valorComNotaPix: valorComNotaPix,
            taxaPix: taxaPixNumber,
            modeloVan: modeloVan || "Van Mercedes minibus com 20 lugares, ar-condicionado, bancos reclinaveis e som",
            cortesiaKm: cortesiaKm || "30",
            valorAcrescimoKm: valorAcrescimoKm || "4,50",
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/orcamento.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 25;
            break;
          }

          _context.t0 = regeneratorRuntime;
          _context.t1 = puppeteerCore;
          _context.next = 14;
          return regeneratorRuntime.awrap(chromium.executablePath());

        case 14:
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
          _context.next = 22;
          return _context.t0.awrap.call(_context.t0, _context.t7);

        case 22:
          browser = _context.sent;
          _context.next = 28;
          break;

        case 25:
          _context.next = 27;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 27:
          browser = _context.sent;

        case 28:
          _context.next = 30;
          return regeneratorRuntime.awrap(browser.newPage());

        case 30:
          page = _context.sent;
          _context.next = 33;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 33:
          _context.next = 35;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 35:
          pdfBuffer = _context.sent;
          _context.next = 38;
          return regeneratorRuntime.awrap(browser.close());

        case 38:
          return _context.abrupt("return", pdfBuffer);

        case 41:
          _context.prev = 41;
          _context.t8 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t8);
          throw _context.t8;

        case 45:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 41]]);
}

module.exports = {
  createPDF: createPDF
};