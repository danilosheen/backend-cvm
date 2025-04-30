"use strict";

var _require = require("../generated/prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.create = function _callee(req, res) {
  var _req$body, nome, typeDocumentSelected, documento, clienteId, existingDependente, dependente;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nome = _req$body.nome, typeDocumentSelected = _req$body.typeDocumentSelected, documento = _req$body.documento, clienteId = _req$body.clienteId; // Verifica se já existe um dependente com o mesmo documento para o cliente

          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.dependente.findFirst({
            where: {
              clienteId: clienteId,
              documento: documento
            }
          }));

        case 4:
          existingDependente = _context.sent;

          if (!existingDependente) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(200).json(existingDependente));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(prisma.dependente.create({
            data: {
              nome: nome,
              typeDocumentSelected: typeDocumentSelected,
              documento: documento,
              clienteId: clienteId
            }
          }));

        case 9:
          dependente = _context.sent;
          res.status(201).json(dependente);
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(400).json({
            error: "Erro ao criar dependente",
            details: _context.t0.message || _context.t0
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.getAll = function _callee2(req, res) {
  var clienteId, dependentes;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          clienteId = req.params.clienteId; // Obtém todos os dependentes de um cliente

          _context2.next = 4;
          return regeneratorRuntime.awrap(prisma.dependente.findMany({
            where: {
              clienteId: clienteId
            }
          }));

        case 4:
          dependentes = _context2.sent;

          if (dependentes.length) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: "Nenhum dependente encontrado para este cliente."
          }));

        case 7:
          res.status(200).json(dependentes);
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json({
            error: "Erro ao obter dependentes",
            details: _context2.t0
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getOne = function _callee3(req, res) {
  var id, dependente;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id; // Obtém um dependente específico pelo ID

          _context3.next = 4;
          return regeneratorRuntime.awrap(prisma.dependente.findUnique({
            where: {
              id: id
            }
          }));

        case 4:
          dependente = _context3.sent;

          if (dependente) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: "Dependente não encontrado."
          }));

        case 7:
          res.status(200).json(dependente);
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(400).json({
            error: "Erro ao obter dependente",
            details: _context3.t0
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.update = function _callee4(req, res) {
  var id, _req$body2, nome, typeDocumentSelected, documento, clienteId, existingDependente, dependente;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, nome = _req$body2.nome, typeDocumentSelected = _req$body2.typeDocumentSelected, documento = _req$body2.documento, clienteId = _req$body2.clienteId; // Verifica se o documento já está sendo utilizado para outro dependente do mesmo cliente

          _context4.next = 5;
          return regeneratorRuntime.awrap(prisma.dependente.findFirst({
            where: {
              clienteId: clienteId,
              documento: documento,
              NOT: {
                id: id // Ignora o dependente atual

              }
            }
          }));

        case 5:
          existingDependente = _context4.sent;

          if (!existingDependente) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            error: "Dependente com este documento já existe para outro dependente do cliente."
          }));

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(prisma.dependente.update({
            where: {
              id: id
            },
            data: {
              nome: nome,
              typeDocumentSelected: typeDocumentSelected,
              documento: documento
            }
          }));

        case 10:
          dependente = _context4.sent;
          res.status(200).json(dependente);
          _context4.next = 17;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json({
            error: "Erro ao atualizar dependente",
            details: _context4.t0
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

exports.remove = function _callee5(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id; // Exclui o dependente pelo ID

          _context5.next = 4;
          return regeneratorRuntime.awrap(prisma.dependente["delete"]({
            where: {
              id: id
            }
          }));

        case 4:
          res.status(200).json({
            message: "Dependente removido com sucesso."
          });
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(400).json({
            error: "Erro ao excluir dependente",
            details: _context5.t0
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};