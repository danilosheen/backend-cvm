"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var pdfContratoService = require("../services/contratoService");

var emailService = require("../services/emailService");

exports.generatePDF = function _callee(req, res) {
  var _req$body$pdfData, tipoContrato, nomeCliente, documento, endereco, placaVeiculo, descricaoVeiculo, dataInicial, horaInicial, dataFinal, horaFinal, origem, destino, detalhesLocacao, pdfName, dataGeracao, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body$pdfData = req.body.pdfData, tipoContrato = _req$body$pdfData.tipoContrato, nomeCliente = _req$body$pdfData.nomeCliente, documento = _req$body$pdfData.documento, endereco = _req$body$pdfData.endereco, placaVeiculo = _req$body$pdfData.placaVeiculo, descricaoVeiculo = _req$body$pdfData.descricaoVeiculo, dataInicial = _req$body$pdfData.dataInicial, horaInicial = _req$body$pdfData.horaInicial, dataFinal = _req$body$pdfData.dataFinal, horaFinal = _req$body$pdfData.horaFinal, origem = _req$body$pdfData.origem, destino = _req$body$pdfData.destino, detalhesLocacao = _req$body$pdfData.detalhesLocacao;
          pdfName = req.body.pdfName;
          dataGeracao = getDateFormated();
          _context.next = 6;
          return regeneratorRuntime.awrap(pdfContratoService.createPDF(tipoContrato, nomeCliente, documento, endereco, placaVeiculo, descricaoVeiculo, dataInicial, horaInicial, dataFinal, horaFinal, origem, destino, detalhesLocacao, dataGeracao));

        case 6:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"contrato.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          }

          _context.next = 14;
          return regeneratorRuntime.awrap(emailService.enviarDocumentoGerado(pdfBuffer, "".concat(process.env.EMAIL), 'Backup do contrato gerado', pdfName));

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