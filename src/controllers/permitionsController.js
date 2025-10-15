const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

exports.definirPermissao = async (req, res) => {
  const { usuarioId, modulo, permitido } = req.body;

  try {
    const permissao = await prisma.permissao.upsert({
      where: { usuarioId_modulo: { usuarioId, modulo } },
      update: { permitido },
      create: { usuarioId, modulo, permitido },
    });

    res.json(permissao);
  } catch (error) {
    res.status(500).json({ error: "Erro ao definir permissão", details: error.message });
  }
};
