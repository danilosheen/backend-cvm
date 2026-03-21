const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

exports.getAllUsers = () => {
  return prisma.usuario.findMany({
    where: { role: 'guest' },
    orderBy: { nome: 'asc' },
    include: { 
      permissoes: {
        orderBy: {modulo: 'asc'}
      }
     }
  });
};

exports.findByEmail = (email) => {
  return prisma.usuario.findFirst({ where: { email } });
};

exports.findById = (userId) => {
  return prisma.usuario.findFirst({ where: { id: userId } });
}

exports.create = (data) => {
  return prisma.usuario.create({ data });
};

exports.findByIdWithPermissoes = (id) => {
  return prisma.usuario.findUnique({
    where: { id },
    include: { permissoes: true },
  });
};

exports.changePassword = async (userId, newPass) => {

  const passHash = await bcrypt.hash(newPass, 10);

  await prisma.usuario.update({
    where: { id: userId },
    data: {
      senha: passHash,
    }
  })
};

exports.deleteById = (userId) => {
  return prisma.usuario.delete({ where: { id: userId } });
}

exports.criarPermissoesPadrao = (usuarioId) => {
  const modulos = [
    'calculadora',
    'orcamento',
    'orcamento-history',
    'clientes',
    'controle-contas',
    'lista-passageiros',
    'lista-passageiros-history',
    'contrato',
    'contrato-history',
    'recibo',
    'ficha-excursao',
    'passageiros',
    'utilitarios',
  ];

  return Promise.all(
    modulos.map((modulo) =>
      prisma.permissao.create({
        data: {
          usuarioId,
          modulo,
          permitido: false,
        },
      })
    )
  );
};
