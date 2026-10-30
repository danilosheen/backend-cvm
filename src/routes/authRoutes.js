// const express = require("express");
import express from "express";
const router = express.Router();
// const authController = require("../controllers/authController")
import { login } from "../controllers/authController.js";

router.post("/login", login);

export default router;
