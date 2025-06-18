const { PrismaClient } = require("../../generated/prisma/client");
const prisma = new PrismaClient();

exports.create = async (orcamentoData) => {
  try {
    const orcamento = await prisma.orcamentoHistory.create({
      data:{
        nomeCliente: orcamentoData.nomeCliente,
        telefoneContato: orcamentoData.telefoneContato,
        localSaida: orcamentoData.localSaida,
        destinoViagem: orcamentoData.destinoViagem,
        dataSaida: orcamentoData.dataSaida,
        horaSaida: orcamentoData.horaSaida,
        dataRetorno: orcamentoData.dataRetorno,
        horaRetorno: orcamentoData.horaRetorno,
        valorComDespesa: orcamentoData.valorComDespesa,
        valorSemDespesa: orcamentoData.valorSemDespesa,
        valorComNota: orcamentoData.valorComNota,
        taxaPix: orcamentoData.taxaPix,
        modeloVan: orcamentoData.modeloVan,
        cortesiaKm: orcamentoData.cortesiaKm,
        valorAcrescimoKm: orcamentoData.valorAcrescimoKm
      }
    });

    const qtdOrcamentos = await prisma.orcamentoHistory.count();

    // Se houver mais de 10, remove o mais antigo
    if (qtdOrcamentos > 10) {
      const maisAntigo = await prisma.orcamentoHistory.findFirst({
        orderBy: {
          createdAt: 'asc',
        },
      });

      if (maisAntigo) {
        await prisma.orcamentoHistory.delete({
          where: {
            id: maisAntigo.id,
          },
        });
        return {orcamento: orcamento, msg: "Orçamento mais antigo removido com sucesso"}
      }
    }

    return orcamento;

  } catch (error) {
    return error;
  }
}

exports.findMany = async () => {
  try {
    const orcamentos = await prisma.orcamentoHistory.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    })
  
    return orcamentos

  } catch (error) {
    return error
  }
}

exports.delete = async (id) => {
  await prisma.orcamentoHistory.delete({
    where:{
      id: id
    }
  });
};