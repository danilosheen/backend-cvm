"use strict";

var _require = require("../utils/dateFormated"),
    getDateFormated = _require.getDateFormated;

var _require2 = require("../utils/dateFormated"),
    getDataArquivo = _require2.getDataArquivo;

var pdfListaPassageirosService = require("../services/listaPassageirosService");

var emailService = require("../services/emailService");

var _require3 = require("../generated/prisma/client"),
    PrismaClient = _require3.PrismaClient;

var prisma = new PrismaClient();

exports.generatePDF = function _callee(req, res) {
  var _req$body, numeroCarro, placa, motorista, origem, destino, dataSaida, horaSaida, dataRetorno, horaRetorno, extensaoRoteiroKm, passageiros, dataGeracao, qtdPassageiros, numeroCarroP1, numeroCarroP2, dataAtual, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, passageiro, documento, passageiroEncontrado, pdfBuffer, allowedOrigins, origin, dataHoje;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, numeroCarro = _req$body.numeroCarro, placa = _req$body.placa, motorista = _req$body.motorista, origem = _req$body.origem, destino = _req$body.destino, dataSaida = _req$body.dataSaida, horaSaida = _req$body.horaSaida, dataRetorno = _req$body.dataRetorno, horaRetorno = _req$body.horaRetorno, extensaoRoteiroKm = _req$body.extensaoRoteiroKm, passageiros = _req$body.passageiros;
          dataGeracao = getDateFormated();
          qtdPassageiros = passageiros.length;
          numeroCarroP1 = numeroCarro.substring(0, 4);
          numeroCarroP2 = numeroCarro.substring(4, 8); // buscar clientes e atualizar campo de última viagem

          dataAtual = new Date();
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 10;
          _iterator = passageiros[Symbol.iterator]();

        case 12:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 26;
            break;
          }

          passageiro = _step.value;
          documento = passageiro.documento;

          if (documento) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("continue", 23);

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(prisma.passageiro.findFirst({
            where: {
              documento: documento
            }
          }));

        case 19:
          passageiroEncontrado = _context.sent;

          if (!(passageiroEncontrado && passageiroEncontrado.clienteId)) {
            _context.next = 23;
            break;
          }

          _context.next = 23;
          return regeneratorRuntime.awrap(prisma.cliente.update({
            where: {
              id: passageiroEncontrado.clienteId
            },
            data: {
              ultimaViagem: dataAtual
            }
          }));

        case 23:
          _iteratorNormalCompletion = true;
          _context.next = 12;
          break;

        case 26:
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](10);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 32:
          _context.prev = 32;
          _context.prev = 33;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 35:
          _context.prev = 35;

          if (!_didIteratorError) {
            _context.next = 38;
            break;
          }

          throw _iteratorError;

        case 38:
          return _context.finish(35);

        case 39:
          return _context.finish(32);

        case 40:
          _context.next = 42;
          return regeneratorRuntime.awrap(pdfListaPassageirosService.createPDF(numeroCarroP1, numeroCarroP2, placa, motorista, origem, destino, dataSaida, horaSaida, dataRetorno, horaRetorno, extensaoRoteiroKm, qtdPassageiros, passageiros, dataGeracao));

        case 42:
          pdfBuffer = _context.sent;
          // Configura os headers para o navegador reconhecer o arquivo como PDF
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", "attachment; filename=\"ficha-excursao.pdf\""); // Adiciona o header CORS para permitir a origem desejada

          allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
          origin = req.headers.origin;

          if (allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
          }

          dataHoje = getDataArquivo();
          emailService.enviarDocumento(pdfBuffer, 'c.danilo.f.silva@gmail.com', 'Backup de documento gerado', "Lista de passageiros_".concat(dataHoje)); // Envia o PDF para o cliente (frontend)

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
  }, null, null, [[0, 53], [10, 28, 32, 40], [33,, 35, 39]]);
};