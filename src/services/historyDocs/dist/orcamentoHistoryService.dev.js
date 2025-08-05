"use strict";

var _require = require("../../generated/prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.create = function _callee(orcamentoData) {
  var orcamento, qtdOrcamentos, maisAntigo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(prisma.orcamentoHistory.create({
            data: {
              nomeCliente: orcamentoData.nomeCliente,
              telefoneContato: orcamentoData.telefoneContato,
              localSaida: orcamentoData.localSaida,
              destinoViagem: orcamentoData.destinoViagem,
              dataSaida: orcamentoData.dataSaida,
              horaSaida: orcamentoData.horaSaida,
              dataRetorno: orcamentoData.dataRetorno,
              horaRetorno: orcamentoData.horaRetorno,
              valorComDespesa: orcamentoData.valorComDespesa,
              valorSemDespesa: orcamentoData.valorSemDespesa,
              valorComNota: orcamentoData.valorComNota,
              taxaPix: orcamentoData.taxaPix,
              sinal: orcamentoData.sinal,
              modeloVan: orcamentoData.modeloVan,
              cortesiaKm: orcamentoData.cortesiaKm,
              valorAcrescimoKm: orcamentoData.valorAcrescimoKm
            }
          }));

        case 3:
          orcamento = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(prisma.orcamentoHistory.count());

        case 6:
          qtdOrcamentos = _context.sent;

          if (!(qtdOrcamentos > 10)) {
            _context.next = 15;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(prisma.orcamentoHistory.findFirst({
            orderBy: {
              createdAt: 'asc'
            }
          }));

        case 10:
          maisAntigo = _context.sent;

          if (!maisAntigo) {
            _context.next = 15;
            break;
          }

          _context.next = 14;
          return regeneratorRuntime.awrap(prisma.orcamentoHistory["delete"]({
            where: {
              id: maisAntigo.id
            }
          }));

        case 14:
          return _context.abrupt("return", {
            orcamento: orcamento,
            msg: "Orçamento mais antigo removido com sucesso"
          });

        case 15:
          return _context.abrupt("return", orcamento);

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

exports.findMany = function _callee2() {
  var orcamentos;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.orcamentoHistory.findMany({
            orderBy: {
              createdAt: 'desc'
            }
          }));

        case 3:
          orcamentos = _context2.sent;
          return _context2.abrupt("return", orcamentos);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports["delete"] = function _callee3(id) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(prisma.orcamentoHistory["delete"]({
            where: {
              id: id
            }
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
};