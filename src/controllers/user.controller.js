const userService = require('../services/user.service');

exports.createUser = async (req, res) => {
  try {
    const usuario = await userService.criarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const usuarios = await userService.listarUsuarios();  
    res.status(200).json(usuarios);
  } catch (error){
    res.status(error.status || 500).json({message: error.message});
  }
};

exports.listUserById = async (req, res) => {

  try {
    const usuario = await userService.listarUsuarioPeloId(req.body);
    return res.status(200).json(usuario);
  } catch(error){
    res.status(error.status || 500).json({message: error.message});
  }
};

exports.deleteUserById = async (req, res) => {}

exports.changePassword = async (req, res) => {}