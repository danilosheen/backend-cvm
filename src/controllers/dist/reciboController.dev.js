"use strict";

var _require = require("../services/dateFormatedService"),
    getDateFormated = _require.getDateFormated;

var porExtensoFormatado = require("../services/porExtenso");

var pdfReciboService = require("../services/reciboService");

var extenso = require('extenso');

exports.generatePDF = function _callee(req, res) {
  var _req$body, nomeCliente, valor, pacoteViagem, dataGeracao, valorPorExtenso, pdfBuffer;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nomeCliente = _req$body.nomeCliente, valor = _req$body.valor, pacoteViagem = _req$body.pacoteViagem;
          dataGeracao = getDateFormated(); //regex coloca as primeiras letras em maiúsculo

          valorPorExtenso = porExtensoFormatado(extenso(valor, {
            mode: 'currency',
            currency: {
              code: 'BRL'
            }
          }));
          _context.next = 6;
          return regeneratorRuntime.awrap(pdfReciboService.createPDF(nomeCliente, valor, valorPorExtenso, pacoteViagem, dataGeracao));

        case 6:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"recibo.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          res.setHeader("Access-Control-Allow-Origin", "https://cvm-docs.vercel.app"); // Envia o PDF para o cliente (frontend)

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