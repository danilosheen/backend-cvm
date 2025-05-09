const express = require("express");
const router = express.Router();
const fluxoCaixaController = require("../controllers/fluxoCaixaController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/fluxo", authMiddleware, fluxoCaixaController.criarFluxo);
router.get("/fluxos", authMiddleware, fluxoCaixaController.listarFluxos);
router.get("/fluxos-mes", authMiddleware, fluxoCaixaController.listarFluxosPorMes);
router.get("/fluxos-interval", authMiddleware, fluxoCaixaController.listarFluxosPorIntervalo);
router.get("/fluxo/:id", authMiddleware, fluxoCaixaController.buscarFluxoPorId);
router.put("/fluxo/:id", authMiddleware, fluxoCaixaController.atualizarFluxo);
router.delete("/fluxo/:id", authMiddleware, fluxoCaixaController.deletarFluxo);

module.exports = router;