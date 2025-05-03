"use strict";

var enviarEmailService = require('../services/emailService');

exports.enviarEmailNotaAgradecimento = function _callee(req, res) {
  var _req$body, nomeCliente, destinatario, assunto;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nomeCliente = _req$body.nomeCliente, destinatario = _req$body.destinatario, assunto = _req$body.assunto;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(enviarEmailService.enviarEmailNotaAgradecimento(nomeCliente, destinatario, assunto));

        case 4:
          res.status(200).json({
            message: "Email enviado com sucesso!"
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            error: "Erro ao enviar email"
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.enviarEmailAniversario = function _callee2(req, res) {
  var _req$body2, nomeCliente, destinatario, assunto;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, nomeCliente = _req$body2.nomeCliente, destinatario = _req$body2.destinatario, assunto = _req$body2.assunto;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(enviarEmailService.enviarFelizAniversario(nomeCliente, destinatario, assunto));

        case 4:
          res.status(200).json({
            message: "Email enviado com sucesso!"
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            error: "Erro ao enviar email"
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 7]]);
};