"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium");

var _require = require("../utils/formatMoney"),
    formatarParaBrl = _require.formatarParaBrl;

function createPDF(nomeCliente, valor, valorPorExtenso, pacoteViagem, formaPagamento, dataGeracao) {
  var data, templateHtml, template, html, browser, page, pdfBuffer;
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
            valor: formatarParaBrl(valor),
            valorPorExtenso: valorPorExtenso,
            pacoteViagem: pacoteViagem,
            formaPagamento: formaPagamento,
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/recibo.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 23;
            break;
          }

          _context.t0 = regeneratorRuntime;
          _context.t1 = puppeteerCore;
          _context.next = 11;
          return regeneratorRuntime.awrap(chromium.executablePath());

        case 11:
          _context.t2 = _context.sent;
          _context.t3 = chromium.args;
          _context.t4 = chromium.headless;
          _context.t5 = chromium.defaultViewport;
          _context.t6 = ["--disable-extensions"];
          _context.t7 = {
            executablePath: _context.t2,
            args: _context.t3,
            headless: _context.t4,
            defaultViewport: _context.t5,
            ignoreDefaultArgs: _context.t6
          };
          _context.t8 = _context.t1.launch.call(_context.t1, _context.t7);
          _context.next = 20;
          return _context.t0.awrap.call(_context.t0, _context.t8);

        case 20:
          browser = _context.sent;
          _context.next = 26;
          break;

        case 23:
          _context.next = 25;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 25:
          browser = _context.sent;

        case 26:
          _context.next = 28;
          return regeneratorRuntime.awrap(browser.newPage());

        case 28:
          page = _context.sent;
          _context.next = 31;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 31:
          _context.next = 33;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 33:
          pdfBuffer = _context.sent;
          _context.next = 36;
          return regeneratorRuntime.awrap(browser.close());

        case 36:
          return _context.abrupt("return", pdfBuffer);

        case 39:
          _context.prev = 39;
          _context.t9 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t9);
          throw _context.t9;

        case 43:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 39]]);
}

module.exports = {
  createPDF: createPDF
};