const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const saldoAnteriorController = require("../controllers/saldoAnteriorController");

router.post("/saldo-restante", authMiddleware, saldoAnteriorController.create);
router.get("/saldo-restante", authMiddleware, saldoAnteriorController.read);
router.put("/saldo-restante/:id", authMiddleware, saldoAnteriorController.update);
router.delete("/saldo-restante/:id", authMiddleware, saldoAnteriorController.delete);

module.exports = router;