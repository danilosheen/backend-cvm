"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

function createPDF(nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan, valorAcrescimoKm) {
  var data, templateHtml, template, html, browser, page, pdfBuffer;
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
            modeloVan: modeloVan,
            valorAcrescimoKm: valorAcrescimoKm
          };
          data.modeloVan == "" ? data.modeloVan = "Van Mercedes minibus com 20 lugares, ar-condicionado, bancos reclinaveis e som" : data.modeloVan;
          data.valorAcrescimoKm == "" ? data.valorAcrescimoKm = "4,25" : data.valorAcrescimoKm; // Ler o template corretamente

          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/orcamento.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);
          _context.next = 9;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 9:
          browser = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(browser.newPage());

        case 12:
          page = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 17:
          pdfBuffer = _context.sent;
          _context.next = 20;
          return regeneratorRuntime.awrap(browser.close());

        case 20:
          return _context.abrupt("return", pdfBuffer);

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          throw _context.t0;

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 23]]);
} // ⚠️ Certifique-se de exportar corretamente a função


module.exports = {
  createPDF: createPDF
};