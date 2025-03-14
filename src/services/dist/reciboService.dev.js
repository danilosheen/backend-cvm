"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium-min");

function createPDF(nomeCliente, valor, valorPorExtenso, pacoteViagem, formaPagamento, dataGeracao) {
  var data, templateHtml, template, html, browser, executablePath, page, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (formaPagamento === 'Dinheiro') {
            formaPagamento = {
              prefix: 'em',
              sulfix: 'Dinheiro'
            };
          } else if (formaPagamento === 'Cartão de crédito') {
            formaPagamento = {
              prefix: 'no',
              sulfix: 'Cartão de crédito'
            };
          } else {
            formaPagamento = {
              prefix: 'mediante a uma transação bancária (PIX) com a seguinte chave:',
              sulfix: 'cvmturismojn@gmail.com'
            };
          }

          data = {
            nomeCliente: nomeCliente,
            valor: valor,
            valorPorExtenso: valorPorExtenso,
            pacoteViagem: pacoteViagem,
            formaPagamento: formaPagamento,
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/recibo.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 15;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar'));

        case 9:
          executablePath = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(puppeteerCore.launch({
            executablePath: executablePath,
            args: chromium.args,
            headless: chromium.headless,
            defaultViewport: chromium.defaultViewport
          }));

        case 12:
          browser = _context.sent;
          _context.next = 18;
          break;

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 17:
          browser = _context.sent;

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(browser.newPage());

        case 20:
          page = _context.sent;
          _context.next = 23;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 23:
          _context.next = 25;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 25:
          pdfBuffer = _context.sent;
          _context.next = 28;
          return regeneratorRuntime.awrap(browser.close());

        case 28:
          return _context.abrupt("return", pdfBuffer);

        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          throw _context.t0;

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 31]]);
}

module.exports = {
  createPDF: createPDF
};