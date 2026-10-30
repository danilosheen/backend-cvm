// const express = require("express");
import express from "express";
const router = express.Router();
// const clienteController = require("../controllers/clienteController");
import { create, findAll, findById, update, remove } from "../controllers/clienteController.js";
// const authMiddleware = require("../middleware/authMiddleware");
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/cliente", authMiddleware, create);
router.get("/clientes", authMiddleware, findAll);
router.get("/cliente/:id", authMiddleware, findById);
router.put("/cliente/:id", authMiddleware, update);
router.delete("/cliente/:id", authMiddleware, remove);

export default router;