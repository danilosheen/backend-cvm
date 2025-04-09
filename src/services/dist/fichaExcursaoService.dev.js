"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium-min");

var _require = require("../utils/formatMoney"),
    formatServices = _require.formatServices,
    upperCase = _require.upperCase;

function createPDF(excursaoPara, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, cliente, servicos, tipoDeHospedagem, valorIntegralExcursao, entradaParcelamento, valorParcelas, qtdParcelas, dataPagamentoParcela, dependentes, dataGeracao) {
  var servicosFormatado, tipoDeHospedagemFormatado, data, templateHtml, template, html, browser, executablePath, page, pdfBuffer;
  return regeneratorRuntime.async(function createPDF$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          servicosFormatado = formatServices(servicos);
          tipoDeHospedagemFormatado = upperCase(tipoDeHospedagem);
          data = {
            excursaoPara: excursaoPara,
            localSaida: localSaida,
            dataSaida: dataSaida,
            horaSaida: horaSaida,
            dataRetorno: dataRetorno,
            horaRetorno: horaRetorno,
            cliente: cliente,
            servicosFormatado: servicosFormatado,
            tipoDeHospedagemFormatado: tipoDeHospedagemFormatado,
            valorIntegralExcursao: valorIntegralExcursao,
            entradaParcelamento: entradaParcelamento,
            valorParcelas: valorParcelas,
            qtdParcelas: qtdParcelas,
            dataPagamentoParcela: dataPagamentoParcela,
            dependentes: dependentes,
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/ficha-excursao.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 16;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar'));

        case 10:
          executablePath = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(puppeteerCore.launch({
            executablePath: executablePath,
            args: chromium.args,
            headless: chromium.headless,
            defaultViewport: chromium.defaultViewport
          }));

        case 13:
          browser = _context.sent;
          _context.next = 19;
          break;

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox"],
            headless: true
          }));

        case 18:
          browser = _context.sent;

        case 19:
          _context.next = 21;
          return regeneratorRuntime.awrap(browser.newPage());

        case 21:
          page = _context.sent;
          _context.next = 24;
          return regeneratorRuntime.awrap(page.setContent(html, {
            waitUntil: "networkidle0"
          }));

        case 24:
          _context.next = 26;
          return regeneratorRuntime.awrap(page.pdf({
            format: "A4",
            printBackground: true
          }));

        case 26:
          pdfBuffer = _context.sent;
          _context.next = 29;
          return regeneratorRuntime.awrap(browser.close());

        case 29:
          return _context.abrupt("return", pdfBuffer);

        case 32:
          _context.prev = 32;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t0);
          throw _context.t0;

        case 36:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 32]]);
}

module.exports = {
  createPDF: createPDF
};