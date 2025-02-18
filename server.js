const express = require("express");
const cors = require("cors");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const dotenv = require('dotenv');


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.post("/generate-pdf", (req, res) => {
    const { name, email, message } = req.body;

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

    stream.on("finish", () => {
        res.download(filename, () => {
            fs.unlinkSync(filename); // Remove o arquivo após o download
        });
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
