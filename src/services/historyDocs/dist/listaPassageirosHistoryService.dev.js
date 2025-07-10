"use strict";

var _require = require("../../generated/prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.create = function _callee(listaPassageirosData) {
  var listaPassageiros, qtdListaPassageiros, maisAntigo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(prisma.listaPassageirosHistory.create({
            data: {
              numeroCarro: listaPassageirosData.numeroCarro,
              placa: listaPassageirosData.placa,
              motorista: listaPassageirosData.motorista,
              origem: listaPassageirosData.origem,
              destino: listaPassageirosData.destino,
              dataSaida: listaPassageirosData.dataSaida,
              horaSaida: listaPassageirosData.horaSaida,
              dataRetorno: listaPassageirosData.dataRetorno,
              horaRetorno: listaPassageirosData.horaRetorno,
              extensaoRoteiroKm: listaPassageirosData.extensaoRoteiroKm,
              passageiros: listaPassageirosData.passageiros
            }
          }));

        case 3:
          listaPassageiros = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(prisma.listaPassageirosHistory.count());

        case 6:
          qtdListaPassageiros = _context.sent;

          if (!(qtdListaPassageiros > 10)) {
            _context.next = 15;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(prisma.listaPassageirosHistory.findFirst({
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
          return regeneratorRuntime.awrap(prisma.listaPassageirosHistory["delete"]({
            where: {
              id: maisAntigo.id
            }
          }));

        case 14:
          return _context.abrupt("return", {
            listaPassageiros: listaPassageiros,
            msg: "Lista de passageiros mais antiga removido com sucesso"
          });

        case 15:
          return _context.abrupt("return", listaPassageiros);

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
  var listasPassageiros;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.listaPassageirosHistory.findMany({
            orderBy: {
              createdAt: 'desc'
            }
          }));

        case 3:
          listasPassageiros = _context2.sent;
          return _context2.abrupt("return", listasPassageiros);

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
          return regeneratorRuntime.awrap(prisma.listaPassageirosHistory["delete"]({
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