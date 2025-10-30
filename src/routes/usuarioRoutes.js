const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/usuario", usuarioController.criarUsuario);
router.get("/usuarios", usuarioController.listarUsuarios);
router.get("/usuario/:id", usuarioController.listarUsuarioPeloId);
router.delete("/usuario/:id", usuarioController.removerUsuarioPeloId);

router.put("/alterar-senha", usuarioController.alterarSenha);

module.exports = router;
