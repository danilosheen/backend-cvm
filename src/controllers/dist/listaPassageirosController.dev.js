"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var pdfListaPassageirosService = require("../services/listaPassageirosService");

exports.generatePDF = function _callee(req, res) {
  var _req$body, numeroCarro, placa, motorista, origem, destino, dataSaida, horaSaida, dataRetorno, horaRetorno, extensaoRoteiroKm, passageiros, dataGeracao, qtdPassageiros, numeroCarroP1, numeroCarroP2, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, numeroCarro = _req$body.numeroCarro, placa = _req$body.placa, motorista = _req$body.motorista, origem = _req$body.origem, destino = _req$body.destino, dataSaida = _req$body.dataSaida, horaSaida = _req$body.horaSaida, dataRetorno = _req$body.dataRetorno, horaRetorno = _req$body.horaRetorno, extensaoRoteiroKm = _req$body.extensaoRoteiroKm, passageiros = _req$body.passageiros;
          dataGeracao = getDateFormated();
          qtdPassageiros = passageiros.length;
          numeroCarroP1 = numeroCarro.substring(0, 4);
          numeroCarroP2 = numeroCarro.substring(4, 8);
          _context.next = 8;
          return regeneratorRuntime.awrap(pdfListaPassageirosService.createPDF(numeroCarroP1, numeroCarroP2, placa, motorista, origem, destino, dataSaida, horaSaida, dataRetorno, horaRetorno, extensaoRoteiroKm, qtdPassageiros, passageiros, dataGeracao));

        case 8:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"ficha-excursao.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          } // Envia o PDF para o cliente (frontend)


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