import { prisma } from "../lib/prisma.js";
// const bcrypt = require("bcryptjs");
import bcrypt from "bcryptjs";

export const getAllUsers = () => {
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

export const findByEmail = (email) => {
  return prisma.usuario.findFirst({ where: { email } });
};

export const findById = (userId) => {
  return prisma.usuario.findFirst({ where: { id: userId } });
}

export const create = (data) => {
  return prisma.usuario.create({ data });
};

export const findByIdWithPermissoes = (id) => {
  return prisma.usuario.findUnique({
    where: { id },
    include: { permissoes: true },
  });
};

export const changePassword = async (userId, newPass) => {

  const passHash = await bcrypt.hash(newPass, 10);

  await prisma.usuario.update({
    where: { id: userId },
    data: {
      senha: passHash,
    }
  })
};

export const deleteById = (userId) => {
  return prisma.usuario.delete({ where: { id: userId } });
}

export const criarPermissoesPadrao = (usuarioId) => {
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
