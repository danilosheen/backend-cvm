// const userService = require('../services/user.service');
import userService from "../services/user.service.js";

export const createUser = async (req, res) => {
  try {
    const usuario = await userService.criarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const listUsers = async (req, res) => {
  try {
    const usuarios = await userService.listarUsuarios();  
    res.status(200).json(usuarios);
  } catch (error){
    res.status(error.status || 500).json({message: error.message});
  }
};

export const listUserById = async (req, res) => {

  try {
    const usuario = await userService.listarUsuarioPeloId(req.body);
    return res.status(200).json(usuario);
  } catch(error){
    res.status(error.status || 500).json({message: error.message});
  }
};

export const deleteUserById = async (req, res) => {}

export const changePassword = async (req, res) => {}