"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var _require2 = require("../utils/dateFormated"),
    getDataArquivo = _require2.getDataArquivo;

var pdfOrcamentoService = require("../services/orcamentoService");

var emailService = require("../services/emailService");

exports.generatePDF = function _callee(req, res) {
  var _req$body, nomeCliente, telefoneContato, localSaida, destinoViagem, dataSaida, horaSaida, dataRetorno, horaRetorno, valorComDespesa, valorSemDespesa, valorComNota, taxaPix, modeloVan, cortesiaKm, valorAcrescimoKm, dataGeracao, pdfBuffer, allowedOrigins, origin, dataAtual;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nomeCliente = _req$body.nomeCliente, telefoneContato = _req$body.telefoneContato, localSaida = _req$body.localSaida, destinoViagem = _req$body.destinoViagem, dataSaida = _req$body.dataSaida, horaSaida = _req$body.horaSaida, dataRetorno = _req$body.dataRetorno, horaRetorno = _req$body.horaRetorno, valorComDespesa = _req$body.valorComDespesa, valorSemDespesa = _req$body.valorSemDespesa, valorComNota = _req$body.valorComNota, taxaPix = _req$body.taxaPix, modeloVan = _req$body.modeloVan, cortesiaKm = _req$body.cortesiaKm, valorAcrescimoKm = _req$body.valorAcrescimoKm;
          dataGeracao = getDateFormated();
          _context.next = 5;
          return regeneratorRuntime.awrap(pdfOrcamentoService.createPDF(nomeCliente, telefoneContato, localSaida, destinoViagem, dataSaida, horaSaida, dataRetorno, horaRetorno, valorComDespesa, valorSemDespesa, valorComNota, taxaPix, modeloVan, cortesiaKm, valorAcrescimoKm, dataGeracao));

        case 5:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"orcamento.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          }

          dataAtual = getDataArquivo();
          emailService.enviarDocumento(pdfBuffer, 'c.danilo.f.silva@gmail.com', 'Backup de documento gerado', "Or\xE7amento_".concat(dataAtual)); // Envia o PDF para o cliente (frontend)

          res.end(pdfBuffer);
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          res.status(500).json({
            error: "Erro ao gerar PDF"
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
};