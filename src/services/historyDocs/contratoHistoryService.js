const { PrismaClient } = require("../../generated/prisma/client");
const prisma = new PrismaClient();

exports.create = async (contratoData) => {
  try {
    const contrato = await prisma.contratoHistory.create({
      data:{
        tipoContrato: contratoData.tipoContrato,
        nomeCliente: contratoData.nomeCliente,
        documento: contratoData.documento,
        endereco: {
          rua: contratoData.endereco.rua,
          numero: contratoData.endereco.numero,
          bairro: contratoData.endereco.bairro,
          cidade: contratoData.endereco.cidade,
          estado: contratoData.endereco.estado
        },
        placaVeiculo: contratoData.placaVeiculo,
        descricaoVeiculo: contratoData.descricaoVeiculo,
        dataInicial: contratoData.dataInicial,
        horaInicial: contratoData.horaInicial,
        dataFinal: contratoData.dataFinal,
        horaFinal: contratoData.horaFinal,
        origem: contratoData.origem,
        destino: contratoData.destino,
        detalhesLocacao: {
          tipoContratoLocacao: contratoData.detalhesLocacao.tipoContratoLocacao,
          valorTotal: contratoData.detalhesLocacao.valorTotal,
          kmTotal: contratoData.detalhesLocacao.kmTotal,
          valorKmExcedido: contratoData.detalhesLocacao.valorKmExcedido,
          kmCortesia: contratoData.detalhesLocacao.kmCortesia
        }
      }
    });

    const qtdContratos = await prisma.contratoHistory.count();

    // Se houver mais de 10, remove o mais antigo
    if (qtdContratos > 10) {
      const maisAntigo = await prisma.contratoHistory.findFirst({
        orderBy: {
          createdAt: 'asc',
        },
      });

      if (maisAntigo) {
        await prisma.contratoHistory.delete({
          where: {
            id: maisAntigo.id,
          },
        });
        return {contrato: contrato, msg: "Contrato mais antigo removido com sucesso"}
      }
    }

    return contrato;

  } catch (error) {
    return error;
  }
}

exports.findMany = async () => {
  try {
    const contratos = await prisma.contratoHistory.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    })
  
    return contratos

  } catch (error) {
    return error
  }
}

exports.delete = async (id) => {
  await prisma.contratoHistory.delete({
    where:{
      id: id
    }
  });
};