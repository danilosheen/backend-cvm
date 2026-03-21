const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/usuario.repository');

exports.createUser = async ({ nome, email, senha }) => {
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

exports.listUsers = async () => {
  const users = await userRepository.getAllUsers();
  
  if(!users){
    const error = new Error('Não existem usuários cadastrados');
    error.status = 404;
    throw error;
  }
  
  return users;
};

exports.listUserById = async (userId) => {
  const user = await userRepository.findById(userId);

  if(!user){
    const error = new Error('Usuário não encontrado');
    error.status = 404;
    throw error;
  }

};

exports.deleteUserById = async (userId) => {

  const usuario = await userRepository.findById(userId);

  if (!usuario) {
    const error = new Error('O usuário não existe!');
    error.status = 404;
    throw error;
  }

  return userRepository.deleteById(userId);

};
  
exports.changePassword = async (userId, newPass) => {
  return userRepository.changePassword(userId, newPass);
};
