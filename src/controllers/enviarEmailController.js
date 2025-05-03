const enviarEmailService = require('../services/emailService');

exports.enviarEmailNotaAgradecimento = async (req, res) => {
  const { nomeCliente, destinatario, assunto } = req.body;

  try {
    await enviarEmailService.enviarEmailNotaAgradecimento(nomeCliente, destinatario, assunto);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar email" });
  }
}

exports.enviarEmailAniversario = async (req, res) => {
  const { nomeCliente, destinatario, assunto } = req.body;

  try {
    await enviarEmailService.enviarFelizAniversario(nomeCliente, destinatario, assunto);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar email" });
  }
}