// const express = require("express");
import express from "express";
const router = express.Router();
// const passageiroController = require("../controllers/passageiroController");
import { create, findAll, findById, update, remove } from "../controllers/passageiroController.js";
// const authMiddleware = require("../middleware/authMiddleware");
import authMiddleware from "../middleware/authMiddleware.js";

// router.use(authMiddleware);

router.post("/passageiro", authMiddleware, create);
router.get("/passageiros", authMiddleware, findAll);
router.get("/passageiro/:id", authMiddleware, findById);
router.put("/passageiro/:id", authMiddleware, update);
router.delete("/passageiro/:id", authMiddleware, remove);

export default router;