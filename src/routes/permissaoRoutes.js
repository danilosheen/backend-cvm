const express = require("express");
const router = express.Router();
const permissaoController = require("../controllers/permissaoController");
const autenticarToken = require("../middleware/authMiddleware");

router.get("/permissoes", autenticarToken, permissaoController.buscarPermissoes);
router.get("/permissoesById", autenticarToken, permissaoController.buscarPermissoesById);
router.put("/permissoes/:id", autenticarToken, permissaoController.atualizarPermissaoIndividual);

module.exports = router;
