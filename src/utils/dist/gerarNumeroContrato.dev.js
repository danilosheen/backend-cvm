"use strict";

var _require = require('../generated/prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

function gerarNumeroContrato() {
  var registro, novo, update, result;
  return regeneratorRuntime.async(function gerarNumeroContrato$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(prisma.numeroContrato.findFirst());

        case 2:
          registro = _context.sent;

          if (registro) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(prisma.numeroContrato.create({
            data: {
              numeroAtual: 1
            }
          }));

        case 6:
          novo = _context.sent;
          return _context.abrupt("return", novo.numeroAtual);

        case 8:
          update = prisma.numeroContrato.update({
            where: {
              id: registro.id
            },
            data: {
              numeroAtual: registro.numeroAtual + 1
            }
          });
          _context.next = 11;
          return regeneratorRuntime.awrap(prisma.$transaction([update]));

        case 11:
          result = _context.sent;
          return _context.abrupt("return", result[0].numeroAtual);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  gerarNumeroContrato: gerarNumeroContrato
};