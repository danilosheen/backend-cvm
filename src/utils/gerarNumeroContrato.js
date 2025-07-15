const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();

async function gerarNumeroContrato() {
  const registro = await prisma.numeroContrato.findFirst();

  if (!registro) {
    const novo = await prisma.numeroContrato.create({
      data: { numeroAtual: 1 },
    });
    return novo.numeroAtual;
  }

  const update = prisma.numeroContrato.update({
    where: { id: registro.id },
    data: { numeroAtual: registro.numeroAtual + 1 },
  });

  const result = await prisma.$transaction([update]);

  return result[0].numeroAtual;
}

module.exports = {
  gerarNumeroContrato
};
