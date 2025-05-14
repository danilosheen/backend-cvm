"use strict";

var pdfGerarRelatorioService = require("../services/gerarRelatorioService");

exports.generatePDF = function _callee(req, res) {
  var _req$body, fluxos, saldoAnterior, entradas, saidas, saldoRestante, mesAno, pdfName, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, fluxos = _req$body.fluxos, saldoAnterior = _req$body.saldoAnterior, entradas = _req$body.entradas, saidas = _req$body.saidas, saldoRestante = _req$body.saldoRestante, mesAno = _req$body.mesAno, pdfName = _req$body.pdfName;
          _context.next = 4;
          return regeneratorRuntime.awrap(pdfGerarRelatorioService.createPDF(fluxos, saldoAnterior, entradas, saidas, saldoRestante, mesAno, pdfName));

        case 4:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"relatorio-mensal.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          } // Envia o PDF para o cliente (frontend)


          res.end(pdfBuffer);
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          res.status(500).json({
            error: "Erro ao gerar PDF"
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};