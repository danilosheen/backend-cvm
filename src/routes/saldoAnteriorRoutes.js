// const express = require("express");
import express from "express";
const router = express.Router();
// const authMiddleware = require("../middleware/authMiddleware");
import authMiddleware from "../middleware/authMiddleware.js";
// const saldoAnteriorController = require("../controllers/saldoAnteriorController");
import { create, read, update, deleteItem } from "../controllers/saldoAnteriorController.js";

router.post("/saldo-anterior", authMiddleware, create);
router.get("/saldo-anterior", authMiddleware, read);
router.put("/saldo-anterior/:id", authMiddleware, update);
router.delete("/saldo-anterior/:id", authMiddleware, deleteItem);

export default router;