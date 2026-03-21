"use strict";

var _require = require('../generated/prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();

var bcrypt = require("bcryptjs");

exports.getAllUsers = function () {
  return prisma.usuario.findMany({
    where: {
      role: 'guest'
    },
    orderBy: {
      nome: 'asc'
    },
    include: {
      permissoes: {
        orderBy: {
          modulo: 'asc'
        }
      }
    }
  });
};

exports.findByEmail = function (email) {
  return prisma.usuario.findFirst({
    where: {
      email: email
    }
  });
};

exports.findById = function (userId) {
  return prisma.usuario.findFirst({
    where: {
      id: userId
    }
  });
};

exports.create = function (data) {
  return prisma.usuario.create({
    data: data
  });
};

exports.findByIdWithPermissoes = function (id) {
  return prisma.usuario.findUnique({
    where: {
      id: id
    },
    include: {
      permissoes: true
    }
  });
};

exports.changePassword = function _callee(userId, newPass) {
  var passHash;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(bcrypt.hash(newPass, 10));

        case 2:
          passHash = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(prisma.usuario.update({
            where: {
              id: userId
            },
            data: {
              senha: passHash
            }
          }));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.deleteById = function (userId) {
  return prisma.usuario["delete"]({
    where: {
      id: userId
    }
  });
};

exports.criarPermissoesPadrao = function (usuarioId) {
  var modulos = ['calculadora', 'orcamento', 'orcamento-history', 'clientes', 'controle-contas', 'lista-passageiros', 'lista-passageiros-history', 'contrato', 'contrato-history', 'recibo', 'ficha-excursao', 'passageiros', 'utilitarios'];
  return Promise.all(modulos.map(function (modulo) {
    return prisma.permissao.create({
      data: {
        usuarioId: usuarioId,
        modulo: modulo,
        permitido: false
      }
    });
  }));
};