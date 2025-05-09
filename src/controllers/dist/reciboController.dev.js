"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var porExtensoFormatado = require("../utils/porExtenso");

var pdfReciboService = require("../services/reciboService");

var extenso = require('extenso');

exports.generatePDF = function _callee(req, res) {
  var _req$body, nomeCliente, valor, pacoteViagem, formaPagamento, dataGeracao, valorPorExtenso, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nomeCliente = _req$body.nomeCliente, valor = _req$body.valor, pacoteViagem = _req$body.pacoteViagem, formaPagamento = _req$body.formaPagamento;
          dataGeracao = getDateFormated();
          valorPorExtenso = porExtensoFormatado(extenso(valor, {
            mode: 'currency',
            currency: {
              code: 'BRL'
            }
          }));
          _context.next = 6;
          return regeneratorRuntime.awrap(pdfReciboService.createPDF(nomeCliente, valor, valorPorExtenso, pacoteViagem, formaPagamento, dataGeracao));

        case 6:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"recibo.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          } // Envia o PDF para o cliente (frontend)


          res.end(pdfBuffer);
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          res.status(500).json({
            error: "Erro ao gerar PDF"
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
};