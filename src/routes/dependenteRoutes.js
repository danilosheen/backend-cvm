// const express = require('express');
import express from "express";
const router = express.Router();
// const dependenteController = require('../controllers/dependentesController');
import { create, getAll, getOne, update, remove } from "../controllers/dependentesController.js";
// const authMiddleware = require("../middleware/authMiddleware");
import authMiddleware from "../middleware/authMiddleware.js";

router.get('/dependentes/:clienteId', authMiddleware, getAll);
router.post('/dependente', authMiddleware, create);
router.get('/dependente/:id', authMiddleware, getOne);
router.put('/dependente/:id', authMiddleware, update);
router.delete('/dependente/:id', authMiddleware, remove);

export default router;
