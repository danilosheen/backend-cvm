"use strict";

var nodemailer = require('nodemailer');

var fs = require("fs");

var path = require("path");

var handlebars = require("handlebars");

require('dotenv').config();

var formatarNome = require("../utils/formatNomeCliente"); // Configurar o transporte


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000
}); // Função para enviar e-mail

function enviarEmailNotaAgradecimento(nomeCliente, destinatario, assunto) {
  var data, templateHtml, template, html, info;
  return regeneratorRuntime.async(function enviarEmailNotaAgradecimento$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = {
            nomeCliente: nomeCliente,
            destinatario: destinatario,
            assunto: assunto
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/nota-agradecimento-email.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);
          _context.next = 7;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "\"CVM Turismo\" <".concat(process.env.EMAIL, ">"),
            to: destinatario,
            subject: assunto,
            html: "".concat(html) // Formato HTML

          }));

        case 7:
          info = _context.sent;
          return _context.abrupt("return", info);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("❌ Erro ao enviar email: ", _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

function enviarDocumentoGerado(documentoBuffer, destinatario, assunto, tipoDocumento) {
  var info;
  return regeneratorRuntime.async(function enviarDocumentoGerado$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "\"CVM Turismo - ".concat(tipoDocumento, "\" <").concat(process.env.EMAIL, ">"),
            to: destinatario,
            subject: assunto,
            text: 'Segue a cópia do documento gerado em anexo.',
            attachments: [{
              filename: "".concat(tipoDocumento, ".pdf"),
              content: documentoBuffer,
              contentType: 'application/pdf'
            }]
          }));

        case 3:
          info = _context2.sent;
          return _context2.abrupt("return", info);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("❌ Erro ao enviar email: ", _context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function enviarFelizAniversario(nomeCliente, destinatario, assunto) {
  var nomeClienteFormatado, data, templateHtml, template, html, info;
  return regeneratorRuntime.async(function enviarFelizAniversario$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          nomeClienteFormatado = formatarNome.formatarNome(nomeCliente);
          data = {
            nomeClienteFormatado: nomeClienteFormatado,
            destinatario: destinatario,
            assunto: assunto
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/feliz-aniversario.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);
          _context3.next = 8;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "\"CVM Turismo\" <".concat(process.env.EMAIL, ">"),
            to: destinatario,
            subject: assunto,
            html: "".concat(html) // Formato HTML

          }));

        case 8:
          info = _context3.sent;
          return _context3.abrupt("return", info);

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error("❌ Erro ao enviar email: ", _context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

module.exports = {
  enviarEmailNotaAgradecimento: enviarEmailNotaAgradecimento,
  enviarDocumentoGerado: enviarDocumentoGerado,
  enviarFelizAniversario: enviarFelizAniversario
};