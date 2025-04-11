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
    const passageiros = await prisma.passageiro.findMany();
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
    await prisma.passageiro.delete({
      where: { id: req.params.id },
    });
    res.json({ message: "Passageiro removido com sucesso" });
  } catch (error) {
    res.status(400).json({ error: "Erro ao remover passageiro", details: error });
  }
};
