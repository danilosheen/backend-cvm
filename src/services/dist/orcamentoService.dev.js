"use strict";

var puppeteer = require("puppeteer");

var fs = require("fs");

var path = require("path");

var ejs = require("ejs");

exports.createPDF = function _callee(nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan) {
  var browser, page, templatePath, htmlContent, filename, filePath;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(puppeteer.launch());

        case 3:
          browser = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(browser.newPage());

        case 6:
          page = _context.sent;
          // Caminho do template EJS
          templatePath = path.join(__dirname, "../templates/orcamento.ejs"); // Renderiza o HTML usando o template EJS

          _context.next = 10;
          return regeneratorRuntime.awrap(ejs.renderFile(templatePath, {
            nomeCliente: nomeCliente,
            telefoneContato: telefoneContato,
            pacoteViagem: pacoteViagem,
            localSaida: localSaida,
            dataSaida: dataSaida,
            horaSaida: horaSaida,
            dataRetorno: dataRetorno,
            horaRetorno: horaRetorno,
            valor: valor,
            modeloVan: modeloVan
          }));

        case 10:
          htmlContent = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(page.setContent(htmlContent, {
            waitUntil: "load"
          }));

        case 13:
          filename = "orcamento-".concat(Date.now(), ".pdf");
          filePath = path.join(__dirname, filename);
          _context.next = 17;
          return regeneratorRuntime.awrap(page.pdf({
            path: filePath,
            format: "A4"
          }));

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(browser.close());

        case 19:
          return _context.abrupt("return", filePath);

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          throw _context.t0;

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 22]]);
}; // Função para deletar o arquivo após o uso


exports.cleanupFile = function (filePath) {
  fs.unlink(filePath, function (err) {
    if (err) console.error("Erro ao deletar arquivo:", err);
  });
};