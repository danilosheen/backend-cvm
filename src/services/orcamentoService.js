const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.createPDF = (name, email, message) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const filename = `generated-${Date.now()}.pdf`;
        const stream = fs.createWriteStream(filename);

        doc.pipe(stream);
        doc.fontSize(20).text("Contrato Gerado", { align: "center" });
        doc.moveDown();
        doc.fontSize(14).text(`Nome: ${name}`);
        doc.text(`Email: ${email}`);
        doc.text(`Mensagem: ${message}`);
        doc.end();

        stream.on("finish", () => resolve(filename));
        stream.on("error", reject);
    });
};

exports.cleanupFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) console.error("Erro ao deletar arquivo:", err);
    });
};
