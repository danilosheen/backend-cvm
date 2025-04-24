"use strict";

var enviarEmailService = require('../services/emailService');

exports.enviarEmail = function _callee(req, res) {
  var _req$body, nomeCliente, destinatario, assunto;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nomeCliente = _req$body.nomeCliente, destinatario = _req$body.destinatario, assunto = _req$body.assunto;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(enviarEmailService(nomeCliente, destinatario, assunto));

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