"use strict";

var fs = require("fs");

var path = require("path");

var ejs = require("ejs");

var chromium = require("chrome-aws-lambda");

exports.createPDF = function _callee(nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan) {
  var browser, page, templatePath, htmlContent, filename, filePath;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.t0 = regeneratorRuntime;
          _context.t1 = chromium.puppeteer;
          _context.t2 = chromium.args;
          _context.next = 6;
          return regeneratorRuntime.awrap(chromium.executablePath);

        case 6:
          _context.t3 = _context.sent;

          if (_context.t3) {
            _context.next = 9;
            break;
          }

          _context.t3 = null;

        case 9:
          _context.t4 = _context.t3;
          _context.t5 = {
            args: _context.t2,
            executablePath: _context.t4,
            headless: true
          };
          _context.t6 = _context.t1.launch.call(_context.t1, _context.t5);
          _context.next = 14;
          return _context.t0.awrap.call(_context.t0, _context.t6);

        case 14:
          browser = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(browser.newPage());

        case 17:
          page = _context.sent;
          // Caminho do template EJS
          templatePath = path.join(__dirname, "../templates/orcamento.ejs"); // Renderiza o HTML usando o template EJS

          _context.next = 21;
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

        case 21:
          htmlContent = _context.sent;
          _context.next = 24;
          return regeneratorRuntime.awrap(page.setContent(htmlContent, {
            waitUntil: "load"
          }));

        case 24:
          filename = "orcamento-".concat(Date.now(), ".pdf");
          filePath = path.join("/tmp", filename);
          _context.next = 28;
          return regeneratorRuntime.awrap(page.pdf({
            path: filePath,
            format: "A4"
          }));

        case 28:
          _context.next = 30;
          return regeneratorRuntime.awrap(browser.close());

        case 30:
          return _context.abrupt("return", filePath);

        case 33:
          _context.prev = 33;
          _context.t7 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t7);
          throw _context.t7;

        case 37:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 33]]);
}; // Função para deletar o arquivo após o uso


exports.cleanupFile = function (filePath) {
  fs.unlink(filePath, function (err) {
    if (err) console.error("Erro ao deletar arquivo:", err);
  });
};