const pdfService = require("../services/pdfService");

exports.generatePDF = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const pdfPath = await pdfService.createPDF(name, email, message);
        res.download(pdfPath, () => {
            pdfService.cleanupFile(pdfPath);
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao gerar o PDF" });
    }
};
