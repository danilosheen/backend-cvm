const { PrismaClient } = require("../../generated/prisma/client");
const prisma = new PrismaClient();

exports.create = async (listaPassageirosData) => {
  try {
    const listaPassageiros = await prisma.listaPassageirosHistory.create({
      data:{
        numeroCarro: listaPassageirosData.numeroCarro,
        placa: listaPassageirosData.placa,
        motorista: listaPassageirosData.motorista,
        origem: listaPassageirosData.origem,
        destino: listaPassageirosData.destino,
        dataSaida: listaPassageirosData.dataSaida,
        horaSaida: listaPassageirosData.horaSaida,
        dataRetorno: listaPassageirosData.dataRetorno,
        horaRetorno: listaPassageirosData.horaRetorno,
        extensaoRoteiroKm: listaPassageirosData.extensaoRoteiroKm,
        passageiros: listaPassageirosData.passageiros,
      }
    });

    const qtdListaPassageiros = await prisma.listaPassageirosHistory.count();

    // Se houver mais de 10, remove o mais antigo
    if (qtdListaPassageiros > 10) {
      const maisAntigo = await prisma.listaPassageirosHistory.findFirst({
        orderBy: {
          createdAt: 'asc',
        },
      });

      if (maisAntigo) {
        await prisma.listaPassageirosHistory.delete({
          where: {
            id: maisAntigo.id,
          },
        });
        return {listaPassageiros: listaPassageiros, msg: "Lista de passageiros mais antiga removido com sucesso"}
      }
    }

    return listaPassageiros;

  } catch (error) {
    return error;
  }
}

exports.findMany = async () => {
  try {
    const listasPassageiros = await prisma.listaPassageirosHistory.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    });
  
    return listasPassageiros;

  } catch (error) {
    return error
  }
}

exports.delete = async (id) => {
  await prisma.listaPassageirosHistory.delete({
    where:{
      id: id
    }
  });
};