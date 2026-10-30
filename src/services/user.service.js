// const bcrypt = require('bcryptjs');
import bcrypt from "bcryptjs";
// const userRepository = require('../repositories/usuario.repository');
import userRepository from "../repositories/usuario.repository.js";

export const criarUsuario = async ({ nome, email, senha }) => {
  const usuarioExistente = await userRepository.findByEmail(email);

  if (usuarioExistente) {
    const error = new Error('Usuário existente com o email informado!');
    error.status = 409;
    throw error;
  }

  const hash = await bcrypt.hash(senha, 10);

  const usuario = await userRepository.create({
    nome,
    email,
    senha: hash,
  });

  await userRepository.criarPermissoesPadrao(usuario.id);

  return userRepository.findByIdWithPermissoes(usuario.id);
};

export const listarUsuarios = async () => {
  const users = await userRepository.getAllUsers();
  
  if(!users){
    const error = new Error('Não existem usuários cadastrados');
    error.status = 404;
    throw error;
  }
  
  return users;
};

export const listarUsuarioPeloId = async (userId) => {
  const user = await userRepository.findById(userId);

  if(!user){
    const error = new Error('Usuário não encontrado');
    error.status = 404;
    throw error;
  }

};

export const deleteUserById = async (userId) => {

  const usuario = await userRepository.findById(userId);

  if (!usuario) {
    const error = new Error('O usuário não existe!');
    error.status = 404;
    throw error;
  }

  return userRepository.deleteById(userId);

};
  
export const changePassword = async (userId, newPass) => {
  return userRepository.changePassword(userId, newPass);
};

export default {
  criarUsuario,
  listarUsuarios,
  listarUsuarioPeloId,
  deleteUserById,
  changePassword
};
