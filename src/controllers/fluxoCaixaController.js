const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();

exports.criarFluxo = async (req, res) => {
  try {
    const { tipo, valor, data, formaPagamento, descricao } = req.body;

    const dataString = data;

    // Quebra a string em partes: [dia, mês, ano]
    const [dia, mes, ano] = dataString.split('/');

    // Cria um objeto Date
    const dataOrdenada = new Date(ano, mes - 1, dia);

    // Converte para ISO 8601
    const isoString = dataOrdenada.toISOString();

    const fluxo = await prisma.fluxoCaixa.create({
      data: {
        tipo,
        valor,
        data: isoString,
        formaPagamento,
        descricao
      }
    });

    res.status(201).json(fluxo);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Erro ao criar fluxo de caixa.' });
  }
};

exports.listarFluxos = async (req, res) => {
  try {
    const fluxos = await prisma.fluxoCaixa.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(fluxos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar fluxos de caixa.' });
  }
};

exports.listarFluxosPorMes = async (req, res) => {
  try {
    const { mes, ano } = req.query;

    if (!mes || !ano) {
      return res.status(400).json({ error: 'Mês e ano são obrigatórios.' });
    }

    const mesNum = parseInt(mes, 10) - 1; // JS começa no 0
    const anoNum = parseInt(ano, 10);

    // Criando datas em UTC correto
    const inicio = new Date(Date.UTC(anoNum, mesNum, 1, 0, 0, 0, 0));
    const fim = new Date(Date.UTC(anoNum, mesNum + 1, 0, 23, 59, 59, 999));

    const fluxos = await prisma.fluxoCaixa.findMany({
      where: {
        data: {
          gte: inicio,
          lte: fim,
        }
      },
      orderBy: {
        data: 'asc'
      }
    });

    res.json(fluxos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar fluxos por mês.' });
  }
};


exports.listarFluxosPorIntervalo = async (req, res) => {
  try {
    const { dataInicio, dataFim } = req.query;

    if (!dataInicio || !dataFim) {
      return res.status(400).json({ error: 'Data inicial e final são obrigatórias.' });
    }

    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    fim.setHours(23, 59, 59, 999); // Para incluir o dia final completo

    const fluxos = await prisma.fluxoCaixa.findMany({
      where: {
        data: {
          gte: inicio,
          lte: fim,
        }
      },
      orderBy: {
        data: 'asc'
      }
    });

    res.json(fluxos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar fluxos por intervalo.' });
  }
};



exports.buscarFluxoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const fluxo = await prisma.fluxoCaixa.findUnique({ where: { id } });

    if (!fluxo) {
      return res.status(404).json({ error: 'Fluxo não encontrado.' });
    }

    res.json(fluxo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar fluxo de caixa.' });
  }
};

exports.atualizarFluxo = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo, valor, data, formaPagamento, descricao } = req.body;
    
    const [dia, mes, ano] = data.split("/").map(Number);
    const dateIso = new Date(ano, mes - 1, dia);

    const fluxo = await prisma.fluxoCaixa.update({
      where: { id },
      data: {
        tipo,
        valor,
        data: dateIso,
        formaPagamento,
        descricao
      }
    });

    res.json(fluxo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar fluxo de caixa.' });
  }
};

exports.deletarFluxo = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.fluxoCaixa.delete({ where: { id } });
    res.status(201).json({success: 'Fluxo removido com sucesso!'});
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar fluxo de caixa.' });
  }
};
