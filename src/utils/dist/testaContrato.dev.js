"use strict";

var _require = require('@prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

(function _callee() {
  var contrato;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Modelos disponíveis:", Object.keys(prisma));
          _context.next = 3;
          return regeneratorRuntime.awrap(prisma.numeroContrato.findFirst());

        case 3:
          contrato = _context.sent;
          console.log(contrato);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
})();