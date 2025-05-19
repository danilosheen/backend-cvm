"use strict";

var fs = require("fs");

var path = require("path");

var puppeteer = require("puppeteer");

var handlebars = require("handlebars");

var puppeteerCore = require("puppeteer-core");

var chromium = require("@sparticuz/chromium");

var _require = require("../utils/formatMoney"),
    formatServices = _require.formatServices,
    upperCase = _require.upperCase;

var _require2 = require("../utils/dateFormated"),
    converteDataIsoToString = _require2.converteDataIsoToString;

var _require3 = require("../utils/formatMoney"),
    formatarParaBrl = _require3.formatarParaBrl;

function createPDF(excursaoPara, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, cliente, servicos, tipoDeHospedagem, valorIntegralExcursao, entradaParcelamento, valorParcelas, qtdParcelas, dataPagamentoParcela, dependentes, dataGeracao) {
  var servicosFormatado, tipoDeHospedagemFormatado, data, templateHtml, template, html, browser, page, pdfBuffer;
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
            dataSaida: converteDataIsoToString(dataSaida),
            horaSaida: horaSaida,
            dataRetorno: converteDataIsoToString(dataRetorno),
            horaRetorno: horaRetorno,
            cliente: cliente,
            servicosFormatado: servicosFormatado,
            tipoDeHospedagemFormatado: tipoDeHospedagemFormatado,
            valorIntegralExcursao: formatarParaBrl(valorIntegralExcursao),
            entradaParcelamento: formatarParaBrl(entradaParcelamento),
            valorParcelas: formatarParaBrl(valorParcelas),
            qtdParcelas: qtdParcelas,
            dataPagamentoParcela: dataPagamentoParcela,
            dependentes: dependentes,
            dataGeracao: dataGeracao
          };
          templateHtml = fs.readFileSync(path.join(__dirname, "../templates/ficha-excursao.html"), "utf8");
          template = handlebars.compile(templateHtml);
          html = template(data);

          if (!(process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL || process.env.RENDER)) {
            _context.next = 23;
            break;
          }

          _context.t0 = regeneratorRuntime;
          _context.t1 = puppeteerCore;
          _context.next = 12;
          return regeneratorRuntime.awrap(chromium.executablePath());

        case 12:
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
          _context.next = 20;
          return _context.t0.awrap.call(_context.t0, _context.t7);

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
          _context.t8 = _context["catch"](0);
          console.error("Erro ao gerar PDF:", _context.t8);
          throw _context.t8;

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