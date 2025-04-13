const bcrypt = require("bcryptjs");
const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

exports.alterarSenha = async (req, res) => {
  const { email, novaSenha } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const senhaHash = await bcrypt.hash(novaSenha, 10);

    await prisma.usuario.update({
      where: { email },
      data: {
        senha: senhaHash,
      },
    });

    res.json({ message: "Senha alterada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao alterar a senha" });
  }
};
