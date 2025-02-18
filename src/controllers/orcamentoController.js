const pdfOrcamentoService = require("../services/orcamentoService");

exports.generatePDF = async (req, res) => {
    try {
        const {
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
        } = req.body;

        // Chamar o serviço que gera o PDF, passando os novos parâmetros
        const pdfPath = await pdfOrcamentoService.createPDF(
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
        );

        // Enviar o arquivo gerado para download
        res.download(pdfPath, () => {
            pdfOrcamentoService.cleanupFile(pdfPath); // Remove o arquivo após o download
        });

    } catch (error) {
        console.error("Erro ao gerar o PDF:", error);
        res.status(500).json({ error: "Erro ao gerar o PDF" });
    }
};
