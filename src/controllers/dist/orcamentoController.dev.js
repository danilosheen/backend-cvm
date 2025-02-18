"use strict";

var pdfOrcamentoService = require("../services/orcamentoService");

exports.generatePDF = function _callee(req, res) {
  var _req$body, nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan, pdfPath;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nomeCliente = _req$body.nomeCliente, telefoneContato = _req$body.telefoneContato, pacoteViagem = _req$body.pacoteViagem, localSaida = _req$body.localSaida, dataSaida = _req$body.dataSaida, horaSaida = _req$body.horaSaida, dataRetorno = _req$body.dataRetorno, horaRetorno = _req$body.horaRetorno, valor = _req$body.valor, modeloVan = _req$body.modeloVan; // Chamar o serviço que gera o PDF, passando os novos parâmetros

          _context.next = 4;
          return regeneratorRuntime.awrap(pdfOrcamentoService.createPDF(nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan));

        case 4:
          pdfPath = _context.sent;
          // Enviar o arquivo gerado para download
          res.download(pdfPath, function () {
            pdfOrcamentoService.cleanupFile(pdfPath); // Remove o arquivo após o download
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar o PDF:", _context.t0);
          res.status(500).json({
            error: "Erro ao gerar o PDF"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};