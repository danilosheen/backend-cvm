"use strict";

var _require = require("@prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.create = function _callee(req, res) {
  var passageiro;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(prisma.passageiro.create({
            data: req.body
          }));

        case 3:
          passageiro = _context.sent;
          res.status(201).json(passageiro);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).json({
            error: "Erro ao criar passageiro",
            details: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.findAll = function _callee2(req, res) {
  var passageiros;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.passageiro.findMany());

        case 3:
          passageiros = _context2.sent;
          res.json(passageiros);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: "Erro ao buscar passageiros",
            details: _context2.t0
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.findById = function _callee3(req, res) {
  var passageiro;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(prisma.passageiro.findUnique({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          passageiro = _context3.sent;

          if (passageiro) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: "Passageiro não encontrado"
          }));

        case 6:
          res.json(passageiro);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: "Erro ao buscar passageiro",
            details: _context3.t0
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.update = function _callee4(req, res) {
  var passageiro;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(prisma.passageiro.update({
            where: {
              id: req.params.id
            },
            data: req.body
          }));

        case 3:
          passageiro = _context4.sent;
          res.json(passageiro);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json({
            error: "Erro ao atualizar passageiro",
            details: _context4.t0
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.remove = function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(prisma.passageiro["delete"]({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.json({
            message: "Passageiro removido com sucesso"
          });
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          res.status(400).json({
            error: "Erro ao remover passageiro",
            details: _context5.t0
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
};