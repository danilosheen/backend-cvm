"use strict";

var nodemailer = require('nodemailer');

var fs = require("fs");

var path = require("path");

var handlebars = require("handlebars");

require('dotenv').config(); // Configurar o transporte


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    // Seu e-mail
    pass: process.env.PASS // Senha de App do Gmail

  }
}); // Função para enviar e-mail

function enviarEmail(nomeCliente, destinatario, assunto) {
  var data, templateHtml, template, html, info;
  return regeneratorRuntime.async(function enviarEmail$(_context) {
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
          console.log("📨 Email enviado: ", info.messageId);
          return _context.abrupt("return", info);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error("❌ Erro ao enviar email: ", _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function enviarDocumento(documentoBuffer, destinatario, assunto, tipoDocumento) {
  var info;
  return regeneratorRuntime.async(function enviarDocumento$(_context2) {
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
          console.log("📨 Email enviado: ", info.messageId);
          return _context2.abrupt("return", info);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error("❌ Erro ao enviar email: ", _context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

module.exports = {
  enviarEmail: enviarEmail,
  enviarDocumento: enviarDocumento
};