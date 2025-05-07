const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

exports.create = async (req, res) => {
  try {
    const { nome, typeDocumentSelected, documento, clienteId } = req.body;

    // Verifica se já existe um dependente com o mesmo documento para o cliente
    const existingDependente = await prisma.dependente.findFirst({
      where: {
        clienteId,
        documento,
      },
    });

    if (existingDependente) {
      return res.status(200).json(existingDependente);
    }

    if (!clienteId) {
      return res.status(202).json({ msg: "Não há cliente cadastrado para associar esse dependente" });
    }

    // Cria o dependente
    const novoDependente = await prisma.dependente.create({
      data: {
        nome,
        typeDocumentSelected,
        documento,
        clienteId
      }
    });

    // Verifica se já existe passageiro com mesmo documento
    const existingPassageiro = await prisma.passageiro.findUnique({
      where: {
        documento
      }
    });

    let passageiro;

    if (existingPassageiro) {
      // Atualiza passageiro existente com o novo dependenteId
      passageiro = await prisma.passageiro.update({
        where: {
          id: existingPassageiro.id
        },
        data: {
          dependenteId: novoDependente.id
        }
      });
    } else {
      // Cria passageiro novo
      passageiro = await prisma.passageiro.create({
        data: {
          nome,
          typeDocumentSelected: typeDocumentSelected ?? '',
          documento: documento ?? '',
          dependenteId: novoDependente.id
        }
      });
    }

    return res.status(201).json({ ...novoDependente, passageiro });

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

    // Verifica se o dependente existe e busca o passageiro relacionado
    const dependente = await prisma.dependente.findUnique({
      where: { id },
      include: {
        passageiro: true
      }
    });

    if (!dependente) {
      return res.status(404).json({ error: "Dependente não encontrado." });
    }

    // Se o passageiro existir e não estiver ligado a um cliente, remove também
    if (dependente.passageiro) {
      const passageiro = await prisma.passageiro.findUnique({
        where: { id: dependente.passageiro.id },
        select: { clienteId: true }
      });

      if (!passageiro?.clienteId) {
        await prisma.passageiro.delete({ where: { id: dependente.passageiro.id } });
      }
    }

    // Agora sim, remove o dependente
    await prisma.dependente.delete({ where: { id } });

    res.status(200).json({ message: "Dependente removido com sucesso." });
  } catch (err) {
    res.status(400).json({ error: "Erro ao excluir dependente", details: err });
  }
};

