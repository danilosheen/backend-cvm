const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const saldoAnteriorController = require("../controllers/saldoAnteriorController");

router.post("/saldo-anterior", authMiddleware, saldoAnteriorController.create);
router.get("/saldo-anterior", authMiddleware, saldoAnteriorController.read);
router.put("/saldo-anterior/:id", authMiddleware, saldoAnteriorController.update);
router.delete("/saldo-anterior/:id", authMiddleware, saldoAnteriorController.delete);

module.exports = router;