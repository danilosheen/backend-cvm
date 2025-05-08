const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

exports.create = async (req, res) => {
  try {
    const passageiro = await prisma.passageiro.create({
      data: req.body,
    });
    res.status(201).json(passageiro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar passageiro", details: error });
  }
};

exports.findAll = async (req, res) => {
  try {
    const passageiros = await prisma.passageiro.findMany({
      orderBy: {
        nome: 'asc'
      }
    });
    res.json(passageiros);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar passageiros", details: error });
  }
};

exports.findById = async (req, res) => {
  try {
    const passageiro = await prisma.passageiro.findUnique({
      where: { id: req.params.id },
    });

    if (!passageiro) {
      return res.status(404).json({ error: "Passageiro não encontrado" });
    }

    res.json(passageiro);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar passageiro", details: error });
  }
};

exports.update = async (req, res) => {
  try {
    const passageiro = await prisma.passageiro.update({
      where: { id: req.params.id },
      data: req.body,
    });

    // Se o passageiro estiver vinculado a um cliente, atualize também o cliente
    if (passageiro.clienteId) {
      await prisma.cliente.update({
        where: { id: passageiro.clienteId },
        data: {
          nome: req.body.nome,
          typeDocumentSelected: req.body.typeDocumentSelected,
          documento: req.body.documento,
        }
      });
    }

    if (passageiro.dependenteId){
      await prisma.dependente.update({
        where:{id: passageiro.dependenteId},
        data: {
          nome: req.body.nome,
          typeDocumentSelected: req.body.typeDocumentSelected,
          documento: req.body.documento,
        }
      });
    }

    res.json(passageiro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar passageiro", details: error });
  }
};


exports.remove = async (req, res) => {
  try {
    const passageiro = await prisma.passageiro.findUnique({
      where: { id: req.params.id },
    });

    if (!passageiro) {
      return res.status(404).json({ error: "Passageiro não encontrado" });
    }

    // Verifica se o passageiro está vinculado a um cliente ou dependente
    if (passageiro.clienteId || passageiro.dependenteId) {
      return res.status(400).json({
        error: "Não é permitido remover passageiro vinculado a cliente ou dependente",
      });
    }

    // Remove o passageiro
    await prisma.passageiro.delete({
      where: { id: req.params.id },
    });

    res.json({ message: "Passageiro removido com sucesso" });

  } catch (error) {
    res.status(400).json({ error: "Erro ao remover passageiro", details: error });
  }
};

