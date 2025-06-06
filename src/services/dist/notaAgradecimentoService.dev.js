"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium");

function createPDF(nomeCliente) {
  var data, templateHtml, template, html, browser, page, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = {
            nomeCliente: nomeCliente
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/nota-agradecimento.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 21;
            break;
          }

          _context.t0 = regeneratorRuntime;
          _context.t1 = puppeteerCore;
          _context.next = 10;
          return regeneratorRuntime.awrap(chromium.executablePath());

        case 10:
          _context.t2 = _context.sent;
          _context.t3 = chromium.args;
          _context.t4 = chromium.headless;
          _context.t5 = chromium.defaultViewport;
          _context.t6 = {
            executablePath: _context.t2,
            args: _context.t3,
            headless: _context.t4,
            defaultViewport: _context.t5
          };
          _context.t7 = _context.t1.launch.call(_context.t1, _context.t6);
          _context.next = 18;
          return _context.t0.awrap.call(_context.t0, _context.t7);

        case 18:
          browser = _context.sent;
          _context.next = 24;
          break;

        case 21:
          _context.next = 23;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 23:
          browser = _context.sent;

        case 24:
          _context.next = 26;
          return regeneratorRuntime.awrap(browser.newPage());

        case 26:
          page = _context.sent;
          _context.next = 29;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 29:
          _context.next = 31;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 31:
          pdfBuffer = _context.sent;
          _context.next = 34;
          return regeneratorRuntime.awrap(browser.close());

        case 34:
          return _context.abrupt("return", pdfBuffer);

        case 37:
          _context.prev = 37;
          _context.t8 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t8);
          throw _context.t8;

        case 41:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 37]]);
}

module.exports = {
  createPDF: createPDF
};