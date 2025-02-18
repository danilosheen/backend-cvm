"use strict";

var PDFDocument = require("pdfkit");

var fs = require("fs");

exports.createPDF = function (nomeCliente, telefoneContato, pacoteViagem, localSaida, dataSaida, horaSaida, dataRetorno, horaRetorno, valor, modeloVan) {
  return new Promise(function (resolve, reject) {
    var doc = new PDFDocument();
    var filename = "orcamento-".concat(Date.now(), ".pdf");
    var stream = fs.createWriteStream(filename);
    doc.pipe(stream); // Título do PDF

    doc.fontSize(20).text("Orçamento de Viagem", {
      align: "center"
    });
    doc.moveDown(); // Informações do Cliente

    doc.fontSize(14).text("Nome do Cliente: ".concat(nomeCliente));
    doc.text("Telefone: ".concat(telefoneContato));
    doc.moveDown(); // Informações da Viagem

    doc.text("Pacote de Viagem: ".concat(pacoteViagem));
    doc.text("Local de Sa\xEDda: ".concat(localSaida));
    doc.text("Data de Sa\xEDda: ".concat(dataSaida, " \xE0s ").concat(horaSaida));
    doc.text("Data de Retorno: ".concat(dataRetorno, " \xE0s ").concat(horaRetorno));
    doc.moveDown(); // 💰 Valores e Modelo do Transporte

    doc.text("Valor: R$ ".concat(valor));
    doc.text("Modelo da Van: ".concat(modeloVan));
    doc.end(); // Resolver a Promise quando o arquivo for gerado

    stream.on("finish", function () {
      return resolve(filename);
    });
    stream.on("error", reject);
  });
};

exports.cleanupFile = function (filePath) {
  fs.unlink(filePath, function (err) {
    if (err) console.error("Erro ao deletar arquivo:", err);
  });
};