"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var pdfListaPassageirosService = require("../services/listaPassageirosService");

var emailService = require("../services/emailService");

var _require2 = require("../generated/prisma/client"),
    PrismaClient = _require2.PrismaClient;

var prisma = new PrismaClient();

exports.generatePDF = function _callee(req, res) {
  var _req$body$pdfData, numeroCarro, placa, motorista, origem, destino, dataSaida, horaSaida, dataRetorno, horaRetorno, extensaoRoteiroKm, passageiros, pdfName, dataGeracao, qtdPassageiros, numeroCarroP1, numeroCarroP2, dataAtual, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, passageiro, documento, passageiroEncontrado, pdfBuffer, allowedOrigins, origin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body$pdfData = req.body.pdfData, numeroCarro = _req$body$pdfData.numeroCarro, placa = _req$body$pdfData.placa, motorista = _req$body$pdfData.motorista, origem = _req$body$pdfData.origem, destino = _req$body$pdfData.destino, dataSaida = _req$body$pdfData.dataSaida, horaSaida = _req$body$pdfData.horaSaida, dataRetorno = _req$body$pdfData.dataRetorno, horaRetorno = _req$body$pdfData.horaRetorno, extensaoRoteiroKm = _req$body$pdfData.extensaoRoteiroKm, passageiros = _req$body$pdfData.passageiros;
          pdfName = req.body.pdfName;
          dataGeracao = getDateFormated();
          qtdPassageiros = passageiros.length;
          numeroCarroP1 = numeroCarro.substring(0, 4);
          numeroCarroP2 = numeroCarro.substring(4, 8); // buscar clientes e atualizar campo de última viagem

          dataAtual = new Date();
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 11;
          _iterator = passageiros[Symbol.iterator]();

        case 13:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 27;
            break;
          }

          passageiro = _step.value;
          documento = passageiro.documento;

          if (documento) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("continue", 24);

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(prisma.passageiro.findFirst({
            where: {
              documento: documento
            }
          }));

        case 20:
          passageiroEncontrado = _context.sent;

          if (!(passageiroEncontrado && passageiroEncontrado.clienteId)) {
            _context.next = 24;
            break;
          }

          _context.next = 24;
          return regeneratorRuntime.awrap(prisma.cliente.update({
            where: {
              id: passageiroEncontrado.clienteId
            },
            data: {
              ultimaViagem: dataAtual
            }
          }));

        case 24:
          _iteratorNormalCompletion = true;
          _context.next = 13;
          break;

        case 27:
          _context.next = 33;
          break;

        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](11);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 33:
          _context.prev = 33;
          _context.prev = 34;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 36:
          _context.prev = 36;

          if (!_didIteratorError) {
            _context.next = 39;
            break;
          }

          throw _iteratorError;

        case 39:
          return _context.finish(36);

        case 40:
          return _context.finish(33);

        case 41:
          _context.next = 43;
          return regeneratorRuntime.awrap(pdfListaPassageirosService.createPDF(numeroCarroP1, numeroCarroP2, placa, motorista, origem, destino, dataSaida, horaSaida, dataRetorno, horaRetorno, extensaoRoteiroKm, qtdPassageiros, passageiros, dataGeracao));

        case 43:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"ficha-excursao.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          }

          emailService.enviarDocumentoGerado(pdfBuffer, 'c.danilo.f.silva@gmail.com', 'Backup da lista de passageiros gerada', pdfName); // Envia o PDF para o cliente (frontend)

          res.end(pdfBuffer);
          _context.next = 57;
          break;

        case 53:
          _context.prev = 53;
          _context.t1 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t1);
          res.status(500).json({
            error: "Erro ao gerar PDF"
          });

        case 57:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 53], [11, 29, 33, 41], [34,, 36, 40]]);
};