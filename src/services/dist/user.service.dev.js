"use strict";

var bcrypt = require('bcryptjs');

var userRepository = require('../repositories/usuario.repository');

exports.createUser = function _callee(_ref) {
  var nome, email, senha, usuarioExistente, error, hash, usuario;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nome = _ref.nome, email = _ref.email, senha = _ref.senha;
          _context.next = 3;
          return regeneratorRuntime.awrap(userRepository.findByEmail(email));

        case 3:
          usuarioExistente = _context.sent;

          if (!usuarioExistente) {
            _context.next = 8;
            break;
          }

          error = new Error('Usuário existente com o email informado!');
          error.status = 409;
          throw error;

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(bcrypt.hash(senha, 10));

        case 10:
          hash = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(userRepository.create({
            nome: nome,
            email: email,
            senha: hash
          }));

        case 13:
          usuario = _context.sent;
          _context.next = 16;
          return regeneratorRuntime.awrap(userRepository.criarPermissoesPadrao(usuario.id));

        case 16:
          return _context.abrupt("return", userRepository.findByIdWithPermissoes(usuario.id));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.listUsers = function _callee2() {
  var users, error;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(userRepository.getAllUsers());

        case 2:
          users = _context2.sent;

          if (users) {
            _context2.next = 7;
            break;
          }

          error = new Error('Não existem usuários cadastrados');
          error.status = 404;
          throw error;

        case 7:
          return _context2.abrupt("return", users);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.listUserById = function _callee3(userId) {
  var user, error;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(userRepository.findById(userId));

        case 2:
          user = _context3.sent;

          if (user) {
            _context3.next = 7;
            break;
          }

          error = new Error('Usuário não encontrado');
          error.status = 404;
          throw error;

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.deleteUserById = function _callee4(userId) {
  var usuario, error;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(userRepository.findById(userId));

        case 2:
          usuario = _context4.sent;

          if (usuario) {
            _context4.next = 7;
            break;
          }

          error = new Error('O usuário não existe!');
          error.status = 404;
          throw error;

        case 7:
          return _context4.abrupt("return", userRepository.deleteById(userId));

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.changePassword = function _callee5(userId, newPass) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", userRepository.changePassword(userId, newPass));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
};