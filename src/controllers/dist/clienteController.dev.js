"use strict";

var _require = require("../generated/prisma/client"),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

exports.create = function _callee(req, res) {
  var clientData, cliente, existingPassageiro;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          clientData = req.body; // Cria o cliente sem criar passageiro ainda

          _context.next = 4;
          return regeneratorRuntime.awrap(prisma.cliente.create({
            data: {
              nome: clientData.nome,
              dataNascimento: clientData.dataNascimento,
              contato: clientData.contato,
              email: clientData.email,
              typeDocumentSelected: clientData.typeDocumentSelected,
              documento: clientData.documento,
              estado: clientData.estado,
              cidade: clientData.cidade,
              bairro: clientData.bairro,
              rua: clientData.rua,
              numero: clientData.numero
            }
          }));

        case 4:
          cliente = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(prisma.passageiro.findUnique({
            where: {
              documento: clientData.documento
            }
          }));

        case 7:
          existingPassageiro = _context.sent;

          if (!existingPassageiro) {
            _context.next = 13;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(prisma.passageiro.update({
            where: {
              id: existingPassageiro.id
            },
            data: {
              clienteId: cliente.id
            }
          }));

        case 11:
          _context.next = 15;
          break;

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(prisma.passageiro.create({
            data: {
              nome: clientData.nome,
              typeDocumentSelected: clientData.typeDocumentSelected,
              documento: clientData.documento,
              clienteId: cliente.id
            }
          }));

        case 15:
          res.status(201).json(cliente);
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(400).json({
            error: "Erro ao criar cliente",
            details: _context.t0
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

exports.findAll = function _callee2(req, res) {
  var clientes;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.cliente.findMany({
            orderBy: {
              nome: 'asc'
            }
          }));

        case 3:
          clientes = _context2.sent;
          res.json(clientes);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: "Erro ao buscar clientes",
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
  var cliente;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(prisma.cliente.findUnique({
            where: {
              id: req.params.id
            }
          }));

        case 2:
          cliente = _context3.sent;
          cliente ? res.json(cliente) : res.status(404).json({
            error: "Cliente não encontrado"
          });

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.update = function _callee4(req, res) {
  var _req$body, nome, typeDocumentSelected, documento, cliente, passageiro;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body = req.body, nome = _req$body.nome, typeDocumentSelected = _req$body.typeDocumentSelected, documento = _req$body.documento; // Atualiza o Cliente

          _context4.next = 4;
          return regeneratorRuntime.awrap(prisma.cliente.update({
            where: {
              id: req.params.id
            },
            data: req.body
          }));

        case 4:
          cliente = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(prisma.passageiro.findFirst({
            where: {
              clienteId: cliente.id
            }
          }));

        case 7:
          passageiro = _context4.sent;

          if (!passageiro) {
            _context4.next = 11;
            break;
          }

          _context4.next = 11;
          return regeneratorRuntime.awrap(prisma.passageiro.update({
            where: {
              id: passageiro.id
            },
            data: {
              nome: nome,
              typeDocumentSelected: typeDocumentSelected,
              documento: documento
            }
          }));

        case 11:
          res.json(cliente);
          _context4.next = 18;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          res.status(400).json({
            error: "Erro ao atualizar cliente",
            details: _context4.t0
          });

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

exports.remove = function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(prisma.cliente["delete"]({
            where: {
              id: req.params.id
            }
          }));

        case 3:
          res.json({
            message: "Cliente e dados relacionados removidos com sucesso"
          });
          _context5.next = 10;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          res.status(400).json({
            error: "Erro ao remover cliente",
            details: _context5.t0
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
};