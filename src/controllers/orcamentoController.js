exports.generatePDF = async (req, res) => {
  try {
      const { name, email, message } = req.body;
      const pdfBuffer = await pdfService.createPDF(name, email, message);

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=contract.pdf");
      res.send(pdfBuffer);
  } catch (error) {
      res.status(500).json({ error: "Erro ao gerar o PDF" });
  }
};
