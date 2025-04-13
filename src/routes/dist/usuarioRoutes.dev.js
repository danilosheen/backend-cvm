"use strict";

var express = require("express");

var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.put("/alterar-senha", usuarioController.alterarSenha);
module.exports = router;