"use strict";

var listaPassageirosService = require('../services/historyDocs/listaPassageirosHistoryService');

exports.criarListaPassageirosHistory = function _callee(req, res) {
  var orcamentoData, orcamento;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          orcamentoData = req.body;
          _context.next = 4;
          return regeneratorRuntime.awrap(listaPassageirosService.create(orcamentoData));

        case 4:
          orcamento = _context.sent;
          res.status(200).json(orcamento);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            error: "Erro ao salvar Lista de passageiros no histórico"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.listarListaPassageiros = function _callee2(req, res) {
  var listasPassageiros;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(listaPassageirosService.findMany());

        case 3:
          listasPassageiros = _context2.sent;
          res.status(200).json({
            listasPassageiros: listasPassageiros
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json("Erro ao listar passageiros");

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.removerListaPassageirosHistory = function _callee3(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(listaPassageirosService["delete"](id));

        case 4:
          res.status(200).json({
            msg: "Lista de passageiros removida do histórico com sucesso"
          });
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            msg: "Erro ao remover Lista de passageiros do histórico"
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};