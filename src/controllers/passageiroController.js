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

    // Remove o passageiro
    await prisma.passageiro.delete({
      where: { id: req.params.id },
    });

    // Se for um passageiro que também é dependente, remova o dependente
    if (passageiro.dependenteId) {
      await prisma.dependente.delete({
        where: { id: passageiro.dependenteId },
      });
    }

    res.json({ message: "Passageiro e dependente (caso exista) removido com sucesso" });
  } catch (error) {
    res.status(400).json({ error: "Erro ao remover passageiro", details: error });
  }
};
