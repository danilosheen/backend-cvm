const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

exports.create = async (req, res) => {
  try {
    const { nome, typeDocumentSelected, documento, clienteId } = req.body;

    // Verifica se já existe um dependente com o mesmo documento para o cliente
    const existingDependente = await prisma.dependente.findFirst({
      where: {
        clienteId: clienteId,
        documento: documento,
      },
    });

    if (existingDependente) {
      // Se já existe, apenas retorna o dependente existente
      return res.status(200).json(existingDependente);
    }

    // Se não existe, cria um novo dependente
    const dependente = await prisma.dependente.create({
      data: {
        nome,
        typeDocumentSelected,
        documento,
        clienteId,
      },
    });

    res.status(201).json(dependente);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Erro ao criar dependente", details: err.message || err });
  }
};

exports.getAll = async (req, res) => {
  try {
    const { clienteId } = req.params;

    // Obtém todos os dependentes de um cliente
    const dependentes = await prisma.dependente.findMany({
      where: {
        clienteId: clienteId,
      },
    });

    if (!dependentes.length) {
      return res.status(404).json({ message: "Nenhum dependente encontrado para este cliente." });
    }

    res.status(200).json(dependentes);
  } catch (err) {
    res.status(400).json({ error: "Erro ao obter dependentes", details: err });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;

    // Obtém um dependente específico pelo ID
    const dependente = await prisma.dependente.findUnique({
      where: { id },
    });

    if (!dependente) {
      return res.status(404).json({ message: "Dependente não encontrado." });
    }

    res.status(200).json(dependente);
  } catch (err) {
    res.status(400).json({ error: "Erro ao obter dependente", details: err });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, typeDocumentSelected, documento, clienteId } = req.body;

    // Verifica se o documento já está sendo utilizado para outro dependente do mesmo cliente
    const existingDependente = await prisma.dependente.findFirst({
      where: {
        clienteId: clienteId,
        documento: documento,
        NOT: {
          id: id, // Ignora o dependente atual
        },
      },
    });

    if (existingDependente) {
      return res.status(400).json({ error: "Dependente com este documento já existe para outro dependente do cliente." });
    }

    // Atualiza os dados do dependente
    const dependente = await prisma.dependente.update({
      where: { id },
      data: {
        nome,
        typeDocumentSelected,
        documento,
      },
    });

    res.status(200).json(dependente);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar dependente", details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    // Exclui o dependente pelo ID
    await prisma.dependente.delete({
      where: { id },
    });

    res.status(200).json({ message: "Dependente removido com sucesso." });
  } catch (err) {
    res.status(400).json({ error: "Erro ao excluir dependente", details: err });
  }
};
