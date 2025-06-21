"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var pdfOrcamentoService = require("../services/orcamentoService");

var orcamentoHistoryService = require("../services/historyDocs/orcamentoHistoryService");

var emailService = require("../services/emailService");

exports.generatePDF = function _callee(req, res) {
  var _req$body$pdfData, nomeCliente, telefoneContato, localSaida, destinoViagem, dataSaida, horaSaida, dataRetorno, horaRetorno, valorComDespesa, valorSemDespesa, valorComNota, taxaPix, modeloVan, cortesiaKm, valorAcrescimoKm, pdfName, dataGeracao, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body$pdfData = req.body.pdfData, nomeCliente = _req$body$pdfData.nomeCliente, telefoneContato = _req$body$pdfData.telefoneContato, localSaida = _req$body$pdfData.localSaida, destinoViagem = _req$body$pdfData.destinoViagem, dataSaida = _req$body$pdfData.dataSaida, horaSaida = _req$body$pdfData.horaSaida, dataRetorno = _req$body$pdfData.dataRetorno, horaRetorno = _req$body$pdfData.horaRetorno, valorComDespesa = _req$body$pdfData.valorComDespesa, valorSemDespesa = _req$body$pdfData.valorSemDespesa, valorComNota = _req$body$pdfData.valorComNota, taxaPix = _req$body$pdfData.taxaPix, modeloVan = _req$body$pdfData.modeloVan, cortesiaKm = _req$body$pdfData.cortesiaKm, valorAcrescimoKm = _req$body$pdfData.valorAcrescimoKm;
          pdfName = req.body.pdfName;
          dataGeracao = getDateFormated();
          _context.next = 6;
          return regeneratorRuntime.awrap(pdfOrcamentoService.createPDF(nomeCliente, telefoneContato, localSaida, destinoViagem, dataSaida, horaSaida, dataRetorno, horaRetorno, valorComDespesa, valorSemDespesa, valorComNota, taxaPix, modeloVan, cortesiaKm, valorAcrescimoKm, dataGeracao));

        case 6:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"orcamento.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          }

          _context.next = 14;
          return regeneratorRuntime.awrap(emailService.enviarDocumentoGerado(pdfBuffer, "".concat(process.env.EMAIL), 'Backup de orçamento gerado', pdfName));

        case 14:
          // Envia o PDF para o cliente (frontend)
          res.end(pdfBuffer);
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          res.status(500).json({
            error: "Erro ao gerar PDF"
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
};