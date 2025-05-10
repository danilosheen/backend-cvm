"use strict";

var express = require("express");

var router = express.Router();

var authMiddleware = require("../middleware/authMiddleware");

var saldoRestanteController = require("../controllers/saldoRestanteController");

router.post("/saldo-restante", authMiddleware, saldoRestanteController.create);
router.get("/fluxo/:id", authMiddleware, saldoRestanteController.read);
router.put("/fluxo/:id", authMiddleware, saldoRestanteController.update);
router["delete"]("/fluxo/:id", authMiddleware, saldoRestanteController["delete"]);
module.exports = router;