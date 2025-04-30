const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

exports.create = async (req, res) => {
  try {
    const clientData = req.body;

    const data = {
      nome: clientData.nome,
      dataNascimento: clientData.dataNascimento,
      contato: clientData.contato,
      email: clientData.email,
      typeDocumentSelected: clientData.typeDocumentSelected,
      documento: clientData.documento,
      cidade: clientData.cidade,
      bairro: clientData.bairro,
      rua: clientData.rua,
      numero: clientData.numero,
      passageiro: {
        create: {
          nome: clientData.nome,
          typeDocumentSelected: clientData.typeDocumentSelected,
          documento: clientData.documento
        }
      }
    };

    const cliente = await prisma.cliente.create({ data });
    res.status(201).json(cliente);

  } catch (err) {
    console.error(err);  // sempre bom logar o erro no servidor
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
    const { nome, typeDocumentSelected, documento } = req.body;

    // Atualiza o Cliente
    const cliente = await prisma.cliente.update({
      where: { id: req.params.id },
      data: req.body,
    });

    // Procura um passageiro associado a esse cliente
    const passageiro = await prisma.passageiro.findFirst({
      where: {
        clienteId: cliente.id,
      },
    });

    // Se existir passageiro, atualiza ele também
    if (passageiro) {
      await prisma.passageiro.update({
        where: {
          id: passageiro.id,
        },
        data: {
          nome: nome,
          typeDocumentSelected: typeDocumentSelected,
          documento: documento,
        },
      });
    }

    res.json(cliente);

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Erro ao atualizar cliente", details: err });
  }
};


exports.remove = async (req, res) => {
  try {
    // Primeiro, procura o cliente associado ao passageiro e aos dependentes
    const cliente = await prisma.cliente.findUnique({
      where: { id: req.params.id },
      include: {
        passageiro: true,  // Inclui o passageiro
        dependentes: true, // Inclui os dependentes
      },
    });

    // Se o cliente existir
    if (cliente) {
      // Se tiver um passageiro, exclui
      if (cliente.passageiro) {
        await prisma.passageiro.delete({
          where: { id: cliente.passageiro.id },
        });
      }

      // Se tiver dependentes, exclui todos
      if (cliente.dependentes && cliente.dependentes.length > 0) {
        const dependenteIds = cliente.dependentes.map(dep => dep.id);
        await prisma.dependente.deleteMany({
          where: { id: { in: dependenteIds } },
        });
      }
    }

    // Agora, exclui o cliente
    await prisma.cliente.delete({
      where: { id: req.params.id },
    });

    res.json({ message: "Cliente, passageiro e dependentes removidos com sucesso" });

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Erro ao remover cliente", details: err });
  }
};

