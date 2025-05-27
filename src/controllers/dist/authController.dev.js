"use strict";

var jwt = require("jsonwebtoken");

var bcrypt = require("bcryptjs");

var _require = require("../generated/prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();
var SECRET = process.env.JWT_SECRET;

exports.login = function _callee(req, res) {
  var _req$body, email, senha, user, senhaValida, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, senha = _req$body.senha;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.usuario.findUnique({
            where: {
              email: email
            }
          }));

        case 4:
          user = _context.sent;

          if (user) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            error: "Usuário não encontrado"
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(senha, user.senha));

        case 9:
          senhaValida = _context.sent;

          if (senhaValida) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            error: "Senha inválida"
          }));

        case 12:
          token = jwt.sign({
            userId: user.id
          }, SECRET, {
            expiresIn: "31d"
          });
          res.json({
            token: token
          });
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            error: "Erro no login",
            details: _context.t0.message
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 16]]);
};