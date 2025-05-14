"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var pdfFichaExcursaoService = require("../services/fichaExcursaoService");

var emailService = require("../services/emailService");

exports.generatePDF = function _callee(req, res) {
  var _req$body$pdfData, excursaoPara, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, cliente, servicos, tipoDeHospedagem, valorIntegralExcursao, entradaParcelamento, valorParcelas, qtdParcelas, dataPagamentoParcela, dependentes, pdfName, dataGeracao, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body$pdfData = req.body.pdfData, excursaoPara = _req$body$pdfData.excursaoPara, localSaida = _req$body$pdfData.localSaida, dataSaida = _req$body$pdfData.dataSaida, horaSaida = _req$body$pdfData.horaSaida, dataRetorno = _req$body$pdfData.dataRetorno, horaRetorno = _req$body$pdfData.horaRetorno, cliente = _req$body$pdfData.cliente, servicos = _req$body$pdfData.servicos, tipoDeHospedagem = _req$body$pdfData.tipoDeHospedagem, valorIntegralExcursao = _req$body$pdfData.valorIntegralExcursao, entradaParcelamento = _req$body$pdfData.entradaParcelamento, valorParcelas = _req$body$pdfData.valorParcelas, qtdParcelas = _req$body$pdfData.qtdParcelas, dataPagamentoParcela = _req$body$pdfData.dataPagamentoParcela, dependentes = _req$body$pdfData.dependentes;
          pdfName = req.body.pdfName;
          dataGeracao = getDateFormated();
          _context.next = 6;
          return regeneratorRuntime.awrap(pdfFichaExcursaoService.createPDF(excursaoPara, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, cliente, servicos, tipoDeHospedagem, valorIntegralExcursao, entradaParcelamento, valorParcelas, qtdParcelas, dataPagamentoParcela, dependentes, dataGeracao));

        case 6:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"ficha-excursao.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          }

          _context.next = 14;
          return regeneratorRuntime.awrap(emailService.enviarDocumentoGerado(pdfBuffer, 'c.danilo.f.silva@gmail.com', 'Backup da ficha de excursão gerada', pdfName));

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