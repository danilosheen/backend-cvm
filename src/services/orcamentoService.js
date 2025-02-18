const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.createPDF = (
    nomeCliente,
    telefoneContato,
    pacoteViagem,
    localSaida,
    dataSaida,
    horaSaida,
    dataRetorno,
    horaRetorno,
    valor,
    modeloVan
) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const filename = `orcamento-${Date.now()}.pdf`;
        const stream = fs.createWriteStream(filename);

        doc.pipe(stream);
        
        // Título do PDF
        doc.fontSize(20).text("Orçamento de Viagem", { align: "center" });
        doc.moveDown();

        // Informações do Cliente
        doc.fontSize(14).text(`Nome do Cliente: ${nomeCliente}`);
        doc.text(`Telefone: ${telefoneContato}`);
        doc.moveDown();

        // Informações da Viagem
        doc.text(`Pacote de Viagem: ${pacoteViagem}`);
        doc.text(`Local de Saída: ${localSaida}`);
        doc.text(`Data de Saída: ${dataSaida} às ${horaSaida}`);
        doc.text(`Data de Retorno: ${dataRetorno} às ${horaRetorno}`);
        doc.moveDown();

        // 💰 Valores e Modelo do Transporte
        doc.text(`Valor: R$ ${valor}`);
        doc.text(`Modelo da Van: ${modeloVan}`);
        
        doc.end();

        // Resolver a Promise quando o arquivo for gerado
        stream.on("finish", () => resolve(filename));
        stream.on("error", reject);
    });
};

exports.cleanupFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) console.error("Erro ao deletar arquivo:", err);
    });
};
