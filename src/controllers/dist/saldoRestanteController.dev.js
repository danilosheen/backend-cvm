"use strict";

var _require = require('../generated/prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.create = function _callee(req, res) {
  var _req$body, saldoRestante, mes, ano, saldoCadastrado, novoSaldo;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, saldoRestante = _req$body.saldoRestante, mes = _req$body.mes, ano = _req$body.ano; //verifica se já existe um saldo daquele mês e ano

          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.saldoRestante.findFirst({
            where: {
              mes: mes,
              ano: ano
            }
          }));

        case 4:
          saldoCadastrado = _context.sent;

          if (!saldoCadastrado) {
            _context.next = 11;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(prisma.saldoRestante.update({
            data: {
              mes: mes,
              ano: ano,
              saldoRestante: saldoRestante
            }
          }));

        case 8:
          novoSaldo = _context.sent;
          _context.next = 14;
          break;

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(prisma.saldoRestante.create({
            data: {
              saldoRestante: saldoRestante,
              mes: mes,
              ano: ano
            }
          }));

        case 13:
          novoSaldo = _context.sent;

        case 14:
          res.status(201).json(novoSaldo);
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          res.status(500).json("Não foi possível cadastrar o saldo restante");

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
};

exports.read = function _callee2(req, res) {
  var _req$query, mes, ano, saldoRestante;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$query = req.query, mes = _req$query.mes, ano = _req$query.ano;
          _context2.next = 4;
          return regeneratorRuntime.awrap(prisma.saldoRestante.findUnique({
            where: {
              mes: mes,
              ano: ano
            }
          }));

        case 4:
          saldoRestante = _context2.sent;
          res.status(200).json(saldoRestante);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json("Não foi possível encontar um saldo nesse mês e ano");

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.update = function _callee3(req, res) {
  var _req$body2, mes, ano, saldoRestante, novoSaldo;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, mes = _req$body2.mes, ano = _req$body2.ano, saldoRestante = _req$body2.saldoRestante;
          _context3.next = 4;
          return regeneratorRuntime.awrap(prisma.saldoRestante.update({
            where: {
              id: req.params.id
            },
            data: {
              mes: mes,
              ano: ano,
              saldoRestante: saldoRestante
            }
          }));

        case 4:
          novoSaldo = _context3.sent;
          res.status(201).json(novoSaldo);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json("Não foi possível atualizar o saldo anterior");

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports["delete"] = function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(prisma.saldoRestante["delete"]({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.status(201).json("saldoAnterior removido com sucesso!");
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json("Erro ao remover o saldoAnterior");

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
};