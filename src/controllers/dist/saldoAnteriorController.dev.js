"use strict";

var _require = require('../generated/prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.create = function _callee(req, res) {
  var _req$body, saldoAnterior, mes, ano, saldoCadastrado, novoSaldo;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, saldoAnterior = _req$body.saldoAnterior, mes = _req$body.mes, ano = _req$body.ano; //verifica se já existe um saldo daquele mês e ano

          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.saldoAnterior.findFirst({
            where: {
              mes: mes,
              ano: ano
            }
          }));

        case 4:
          saldoCadastrado = _context.sent;

          if (!saldoCadastrado) {
            _context.next = 12;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(prisma.saldoAnterior.update({
            where: {
              id: saldoCadastrado.id
            },
            data: {
              mes: mes,
              ano: ano,
              saldoAnterior: saldoAnterior
            }
          }));

        case 8:
          novoSaldo = _context.sent;
          return _context.abrupt("return", res.status(200).json(novoSaldo));

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(prisma.saldoAnterior.create({
            data: {
              saldoAnterior: saldoAnterior,
              mes: mes,
              ano: ano
            }
          }));

        case 14:
          novoSaldo = _context.sent;

        case 15:
          res.status(201).json(novoSaldo);
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          res.status(500).json("Não foi possível cadastrar o saldo restante");

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

exports.read = function _callee2(req, res) {
  var _req$query, mes, ano, saldoAnterior;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$query = req.query, mes = _req$query.mes, ano = _req$query.ano;
          _context2.next = 4;
          return regeneratorRuntime.awrap(prisma.saldoAnterior.findFirst({
            where: {
              mes: mes,
              ano: ano
            }
          }));

        case 4:
          saldoAnterior = _context2.sent;

          if (saldoAnterior) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json("Saldo não encontrado para o mês e ano informados"));

        case 7:
          res.status(200).json(saldoAnterior);
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json("Não foi possível encontrar um saldo nesse mês e ano");

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.update = function _callee3(req, res) {
  var _req$body2, mes, ano, saldoAnterior, novoSaldo;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, mes = _req$body2.mes, ano = _req$body2.ano, saldoAnterior = _req$body2.saldoAnterior;
          _context3.next = 4;
          return regeneratorRuntime.awrap(prisma.saldoAnterior.update({
            where: {
              id: req.params.id
            },
            data: {
              mes: mes,
              ano: ano,
              saldoAnterior: saldoAnterior
            }
          }));

        case 4:
          novoSaldo = _context3.sent;
          res.status(200).json(novoSaldo);
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
          return regeneratorRuntime.awrap(prisma.saldoAnterior["delete"]({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.status(200).json("saldoAnterior removido com sucesso!");
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