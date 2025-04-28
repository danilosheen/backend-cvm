"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('../generated/prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.criarFluxo = function _callee(req, res) {
  var _req$body, tipo, valor, data, formaPagamento, descricao, dataString, _dataString$split, _dataString$split2, dia, mes, ano, dataOrdenada, isoString, valorNumerico, fluxo;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, tipo = _req$body.tipo, valor = _req$body.valor, data = _req$body.data, formaPagamento = _req$body.formaPagamento, descricao = _req$body.descricao;
          dataString = data; // Quebra a string em partes: [dia, mês, ano]

          _dataString$split = dataString.split('/'), _dataString$split2 = _slicedToArray(_dataString$split, 3), dia = _dataString$split2[0], mes = _dataString$split2[1], ano = _dataString$split2[2]; // Cria um objeto Date

          dataOrdenada = new Date(ano, mes - 1, dia); // Converte para ISO 8601

          isoString = dataOrdenada.toISOString();
          valorNumerico = parseFloat(valor.replace(',', '.'));
          _context.next = 9;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.create({
            data: {
              tipo: tipo,
              valor: valorNumerico,
              data: isoString,
              formaPagamento: formaPagamento,
              descricao: descricao
            }
          }));

        case 9:
          fluxo = _context.sent;
          res.status(201).json(fluxo);
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            error: 'Erro ao criar fluxo de caixa.'
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.listarFluxos = function _callee2(req, res) {
  var fluxos;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.findMany({
            orderBy: {
              createdAt: 'desc'
            }
          }));

        case 3:
          fluxos = _context2.sent;
          res.json(fluxos);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: 'Erro ao listar fluxos de caixa.'
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.buscarFluxoPorId = function _callee3(req, res) {
  var id, fluxo;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.findUnique({
            where: {
              id: id
            }
          }));

        case 4:
          fluxo = _context3.sent;

          if (fluxo) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: 'Fluxo não encontrado.'
          }));

        case 7:
          res.json(fluxo);
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: 'Erro ao buscar fluxo de caixa.'
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.atualizarFluxo = function _callee4(req, res) {
  var id, _req$body2, tipo, valor, data, formaPagamento, descricao, fluxo;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, tipo = _req$body2.tipo, valor = _req$body2.valor, data = _req$body2.data, formaPagamento = _req$body2.formaPagamento, descricao = _req$body2.descricao;
          _context4.next = 5;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.update({
            where: {
              id: id
            },
            data: {
              tipo: tipo,
              valor: valor,
              data: new Date(data),
              formaPagamento: formaPagamento,
              descricao: descricao
            }
          }));

        case 5:
          fluxo = _context4.sent;
          res.json(fluxo);
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            error: 'Erro ao atualizar fluxo de caixa.'
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.deletarFluxo = function _callee5(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa["delete"]({
            where: {
              id: id
            }
          }));

        case 4:
          res.status(201).json({
            success: 'Fluxo removido com sucesso!'
          });
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            error: 'Erro ao deletar fluxo de caixa.'
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};