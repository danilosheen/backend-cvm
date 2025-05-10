"use strict";

var express = require("express");

var router = express.Router();

var authMiddleware = require("../middleware/authMiddleware");

var saldoAnteriorController = require("../controllers/saldoAnteriorController");

router.post("/saldo-restante", authMiddleware, saldoAnteriorController.create);
router.get("/saldo-restante", authMiddleware, saldoAnteriorController.read);
router.put("/saldo-restante/:id", authMiddleware, saldoAnteriorController.update);
router["delete"]("/saldo-restante/:id", authMiddleware, saldoAnteriorController["delete"]);
module.exports = router;