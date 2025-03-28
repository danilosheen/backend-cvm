"use strict";

var _require = require("../services/dateFormatedService"),
    getDateFormated = _require.getDateFormated;

var pdfFichaExcursaoService = require("../services/fichaExcursaoService");

exports.generatePDF = function _callee(req, res) {
  var _req$body, excursaoPara, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, cliente, servicos, tipoDeHospedagem, valorIntegralExcursao, entradaParcelamento, valorParcelas, qtdParcelas, dataPagamentoParcela, dependentes, dataGeracao, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, excursaoPara = _req$body.excursaoPara, localSaida = _req$body.localSaida, dataSaida = _req$body.dataSaida, horaSaida = _req$body.horaSaida, dataRetorno = _req$body.dataRetorno, horaRetorno = _req$body.horaRetorno, cliente = _req$body.cliente, servicos = _req$body.servicos, tipoDeHospedagem = _req$body.tipoDeHospedagem, valorIntegralExcursao = _req$body.valorIntegralExcursao, entradaParcelamento = _req$body.entradaParcelamento, valorParcelas = _req$body.valorParcelas, qtdParcelas = _req$body.qtdParcelas, dataPagamentoParcela = _req$body.dataPagamentoParcela, dependentes = _req$body.dependentes;
          dataGeracao = getDateFormated();
          _context.next = 5;
          return regeneratorRuntime.awrap(pdfFichaExcursaoService.createPDF(excursaoPara, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, cliente, servicos, tipoDeHospedagem, valorIntegralExcursao, entradaParcelamento, valorParcelas, qtdParcelas, dataPagamentoParcela, dependentes, dataGeracao));

        case 5:
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
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          res.status(500).json({
            error: "Erro ao gerar PDF"
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
};