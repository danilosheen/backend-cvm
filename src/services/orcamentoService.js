const PDFDocument = require("pdfkit");

exports.createPDF = async (name, email, message) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        let buffers = [];

        doc.on("data", buffers.push.bind(buffers));
        doc.on("end", () => {
            const pdfData = Buffer.concat(buffers);
            resolve(pdfData);
        });

        doc.fontSize(20).text("Contrato Gerado", { align: "center" });
        doc.moveDown();
        doc.fontSize(14).text(`Nome: ${name}`);
        doc.text(`Email: ${email}`);
        doc.text(`Mensagem: ${message}`);
        doc.end();
    });
};
