"use strict";

var _require = require("../services/dateFormatedService"),
    getDateFormated = _require.getDateFormated;

var pdfOrcamentoService = require("../services/orcamentoService");

exports.generatePDF = function _callee(req, res) {
  var _req$body, nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan, valorAcrescimoKm, dataGeracao, pdfBuffer;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nomeCliente = _req$body.nomeCliente, telefoneContato = _req$body.telefoneContato, pacoteViagem = _req$body.pacoteViagem, localSaida = _req$body.localSaida, dataSaida = _req$body.dataSaida, horaSaida = _req$body.horaSaida, dataRetorno = _req$body.dataRetorno, horaRetorno = _req$body.horaRetorno, valor = _req$body.valor, modeloVan = _req$body.modeloVan, valorAcrescimoKm = _req$body.valorAcrescimoKm;
          dataGeracao = getDateFormated();
          _context.next = 5;
          return regeneratorRuntime.awrap(pdfOrcamentoService.createPDF(nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan, valorAcrescimoKm, dataGeracao));

        case 5:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"orcamento.pdf\""); // Envia o PDF para o cliente (frontend)

          res.end(pdfBuffer);
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          res.status(500).json({
            error: "Erro ao gerar PDF"
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};