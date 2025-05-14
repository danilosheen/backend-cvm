const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();

exports.create = async (req, res) => {
  try {
    const {
      saldoAnterior,
      mes,
      ano
    } = req.body

    //verifica se já existe um saldo daquele mês e ano
    const saldoCadastrado = await prisma.saldoAnterior.findFirst({
      where: {mes: mes, ano: ano}
    });

    let novoSaldo;

    //se já existir, apenas atualiza
    if(saldoCadastrado){
      novoSaldo = await prisma.saldoAnterior.update({
        where:{id: saldoCadastrado.id},
        data:{
          mes: mes,
          ano: ano,
          saldoAnterior: saldoAnterior
        }
      })
      return res.status(200).json(novoSaldo);
    } else {
      novoSaldo = await prisma.saldoAnterior.create({
        data: {
          saldoAnterior: saldoAnterior,
          mes: mes,
          ano: ano
        }
      })
    }
    res.status(201).json(novoSaldo);
  } catch (error) {
    res.status(500).json("Não foi possível cadastrar o saldo restante")
  }
}

exports.read = async (req, res) => {
  try {
    const { mes, ano } = req.query;

    const saldoAnterior = await prisma.saldoAnterior.findFirst({
      where: { mes, ano },
    });

    if (!saldoAnterior) {
      return res.status(200).json({saldoAnterior: 0});
    }

    res.status(200).json(saldoAnterior);
  } catch (error) {
    console.error(error);
    res.status(500).json("Não foi possível encontrar um saldo nesse mês e ano");
  }
};


exports.update = async (req, res) => {
  try {
    const {mes, ano, saldoAnterior} = req.body;
    const novoSaldo = await prisma.saldoAnterior.update({
      where:{id: req.params.id},
      data:{mes: mes, ano: ano, saldoAnterior: saldoAnterior}
    })
    res.status(200).json(novoSaldo);
    
  } catch (error) {
    res.status(500).json("Não foi possível atualizar o saldo anterior")
  }
}

exports.delete = async(req, res) => {
  try {
    await prisma.saldoAnterior.delete({
      where:{id: req.params.id}
    })
    res.status(200).json("saldoAnterior removido com sucesso!");
  } catch (error) {
    res.status(500).json("Erro ao remover o saldoAnterior");
  }
}
