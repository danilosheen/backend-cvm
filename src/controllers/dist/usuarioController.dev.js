"use strict";

var bcrypt = require("bcryptjs");

var _require = require("../generated/prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.alterarSenha = function _callee(req, res) {
  var _req$body, email, novaSenha, usuario, senhaHash;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, novaSenha = _req$body.novaSenha;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.usuario.findUnique({
            where: {
              email: email
            }
          }));

        case 4:
          usuario = _context.sent;

          if (usuario) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            error: "Usuário não encontrado"
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(bcrypt.hash(novaSenha, 10));

        case 9:
          senhaHash = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(prisma.usuario.update({
            where: {
              email: email
            },
            data: {
              senha: senhaHash
            }
          }));

        case 12:
          res.json({
            message: "Senha alterada com sucesso"
          });
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          res.status(500).json({
            error: "Erro ao alterar a senha"
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 15]]);
};