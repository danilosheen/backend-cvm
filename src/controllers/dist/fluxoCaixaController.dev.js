"use strict";

var _require = require('../generated/prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.criarFluxo = function _callee(req, res) {
  var _req$body, tipo, valor, data, formaPagamento, descricao, fluxo;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, tipo = _req$body.tipo, valor = _req$body.valor, data = _req$body.data, formaPagamento = _req$body.formaPagamento, descricao = _req$body.descricao;
          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.create({
            data: {
              tipo: tipo,
              valor: valor,
              data: data,
              formaPagamento: formaPagamento,
              descricao: descricao
            }
          }));

        case 4:
          fluxo = _context.sent;
          res.status(201).json(fluxo);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            error: 'Erro ao criar fluxo de caixa.'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
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

exports.listarFluxosPorMes = function _callee3(req, res) {
  var _req$query, mes, ano, mesNum, anoNum, inicio, fim, fluxos;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$query = req.query, mes = _req$query.mes, ano = _req$query.ano;

          if (!(!mes || !ano)) {
            _context3.next = 4;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            error: 'Mês e ano são obrigatórios.'
          }));

        case 4:
          mesNum = parseInt(mes, 10) - 1; // JS começa no 0

          anoNum = parseInt(ano, 10); // Criando datas em UTC correto

          inicio = new Date(Date.UTC(anoNum, mesNum, 1, 0, 0, 0, 0));
          fim = new Date(Date.UTC(anoNum, mesNum + 1, 0, 23, 59, 59, 999));
          _context3.next = 10;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.findMany({
            where: {
              data: {
                gte: inicio,
                lte: fim
              }
            },
            orderBy: {
              data: 'asc'
            }
          }));

        case 10:
          fluxos = _context3.sent;
          res.json(fluxos);
          _context3.next = 18;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            error: 'Erro ao listar fluxos por mês.'
          });

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

exports.listarFluxosPorIntervalo = function _callee4(req, res) {
  var _req$query2, dataInicio, dataFim, inicio, fim, fluxos;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$query2 = req.query, dataInicio = _req$query2.dataInicio, dataFim = _req$query2.dataFim;

          if (!(!dataInicio || !dataFim)) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            error: 'Data inicial e final são obrigatórias.'
          }));

        case 4:
          inicio = new Date(dataInicio);
          fim = new Date(dataFim);
          fim.setHours(23, 59, 59, 999); // Para incluir o dia final completo

          _context4.next = 9;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.findMany({
            where: {
              data: {
                gte: inicio,
                lte: fim
              }
            },
            orderBy: {
              data: 'asc'
            }
          }));

        case 9:
          fluxos = _context4.sent;
          res.json(fluxos);
          _context4.next = 17;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.status(500).json({
            error: 'Erro ao listar fluxos por intervalo.'
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.buscarFluxoPorId = function _callee5(req, res) {
  var id, fluxo;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.findUnique({
            where: {
              id: id
            }
          }));

        case 4:
          fluxo = _context5.sent;

          if (fluxo) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            error: 'Fluxo não encontrado.'
          }));

        case 7:
          res.json(fluxo);
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            error: 'Erro ao buscar fluxo de caixa.'
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.atualizarFluxo = function _callee6(req, res) {
  var id, _req$body2, tipo, valor, data, formaPagamento, descricao, fluxo;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, tipo = _req$body2.tipo, valor = _req$body2.valor, data = _req$body2.data, formaPagamento = _req$body2.formaPagamento, descricao = _req$body2.descricao;
          _context6.next = 5;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa.update({
            where: {
              id: id
            },
            data: {
              tipo: tipo,
              valor: valor,
              data: data,
              formaPagamento: formaPagamento,
              descricao: descricao
            }
          }));

        case 5:
          fluxo = _context6.sent;
          res.json(fluxo);
          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            error: 'Erro ao atualizar fluxo de caixa.'
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.deletarFluxo = function _callee7(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return regeneratorRuntime.awrap(prisma.fluxoCaixa["delete"]({
            where: {
              id: id
            }
          }));

        case 4:
          res.status(201).json({
            success: 'Fluxo removido com sucesso!'
          });
          _context7.next = 10;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json({
            error: 'Erro ao deletar fluxo de caixa.'
          });

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
};