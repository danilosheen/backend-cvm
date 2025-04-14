const express = require("express");
const router = express.Router();
const passageiroController = require("../controllers/passageiroController");
const authMiddleware = require("../middleware/authMiddleware");

// router.use(authMiddleware);

router.post("/passageiro", authMiddleware, passageiroController.create);
router.get("/passageiros", authMiddleware, passageiroController.findAll);
router.get("/passageiro/:id", authMiddleware, passageiroController.findById);
router.put("/passageiro/:id", authMiddleware, passageiroController.update);
router.delete("passageiro/:id", authMiddleware, passageiroController.remove);

module.exports = router;