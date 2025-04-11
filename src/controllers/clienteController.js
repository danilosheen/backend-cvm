const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

exports.create = async (req, res) => {
  try {
    const cliente = await prisma.cliente.create({ data: req.body });
    res.status(201).json(cliente);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar cliente", details: err });
  }
};

exports.findAll = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany({
      orderBy: {
        nome: 'asc'
      }
    });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar clientes", details: error });
  }
};

exports.findById = async (req, res) => {
  const cliente = await prisma.cliente.findUnique({ where: { id: req.params.id } });
  cliente ? res.json(cliente) : res.status(404).json({ error: "Cliente não encontrado" });
};

exports.update = async (req, res) => {
  try {
    const cliente = await prisma.cliente.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(cliente);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar cliente", details: err });
  }
};

exports.remove = async (req, res) => {
  try {
    await prisma.cliente.delete({ where: { id: req.params.id } });
    res.json({ message: "Cliente removido com sucesso" });
  } catch (err) {
    res.status(400).json({ error: "Erro ao remover cliente", details: err });
  }
};
