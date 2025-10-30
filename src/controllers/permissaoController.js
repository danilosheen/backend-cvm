const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

// Buscar todas as permissões do usuário logado
exports.buscarPermissoes = async (req, res) => {
  try {
    const permissoes = await prisma.permissao.findMany({
      where: { usuarioId: req.user.userId },
    });

    res.status(200).json(permissoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar permissões" });
  }
};

exports.buscarPermissoesById = async (req, res) => {
  try {
    const permissoes = await prisma.permissao.findMany({
      where: { usuarioId: req.body.id },
    });

    res.status(200).json(permissoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar permissões" });
  }
};

// Atualizar uma permissão individual (toggle)
exports.atualizarPermissaoIndividual = async (req, res) => {

  const idPermissao = req.params.id;
  const { permitido } = req.body;

  if (typeof permitido !== "boolean") {
    return res.status(400).json({ error: "Campo 'permitido' deve ser booleano (true/false)" });
  }

  try {
    const permissaoAtualizada = await prisma.permissao.update({
      where: {id: idPermissao},
      data: { permitido: permitido },
    });

    res.status(200).json({
      message: `Permissão do módulo '${permissaoAtualizada.modulo}' atualizada para ${permissaoAtualizada.permitido ? "permitido" : "negado"}.`,
      permissao: permissaoAtualizada,
    });
  } catch (error) {
    console.error("Erro ao atualizar permissão individual:", error);
    res.status(500).json({ error: "Erro ao atualizar permissão" });
  }
};
