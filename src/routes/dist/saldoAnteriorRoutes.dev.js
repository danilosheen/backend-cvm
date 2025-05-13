"use strict";

var express = require("express");

var router = express.Router();

var authMiddleware = require("../middleware/authMiddleware");

var saldoAnteriorController = require("../controllers/saldoAnteriorController");

router.post("/saldo-anterior", authMiddleware, saldoAnteriorController.create);
router.get("/saldo-anterior", authMiddleware, saldoAnteriorController.read);
router.put("/saldo-anterior/:id", authMiddleware, saldoAnteriorController.update);
router["delete"]("/saldo-anterior/:id", authMiddleware, saldoAnteriorController["delete"]);
module.exports = router;