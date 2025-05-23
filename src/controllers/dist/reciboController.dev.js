"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var porExtensoFormatado = require("../utils/porExtenso");

var pdfReciboService = require("../services/reciboService");

var emailService = require("../services/emailService");

var extenso = require('extenso');

exports.generatePDF = function _callee(req, res) {
  var _req$body$pdfData, nomeCliente, valor, pacoteViagem, formaPagamento, pdfName, dataGeracao, valorPorExtenso, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body$pdfData = req.body.pdfData, nomeCliente = _req$body$pdfData.nomeCliente, valor = _req$body$pdfData.valor, pacoteViagem = _req$body$pdfData.pacoteViagem, formaPagamento = _req$body$pdfData.formaPagamento;
          pdfName = req.body.pdfName;
          dataGeracao = getDateFormated();
          valorPorExtenso = porExtensoFormatado(extenso(valor, {
            mode: 'currency',
            currency: {
              code: 'BRL'
            }
          }));
          _context.next = 7;
          return regeneratorRuntime.awrap(pdfReciboService.createPDF(nomeCliente, valor, valorPorExtenso, pacoteViagem, formaPagamento, dataGeracao));

        case 7:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"recibo.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          }

          _context.next = 15;
          return regeneratorRuntime.awrap(emailService.enviarDocumentoGerado(pdfBuffer, "".concat(process.env.EMAIL), 'Backup do recibo gerado', pdfName));

        case 15:
          // Envia o PDF para o cliente (frontend)
          res.end(pdfBuffer);
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          res.status(500).json({
            error: "Erro ao gerar PDF"
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};