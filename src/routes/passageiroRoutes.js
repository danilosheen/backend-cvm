const express = require("express");
const router = express.Router();
const passageiroController = require("../controllers/passageiroController");

router.post("/passageiro", passageiroController.create);
router.get("/passageiros", passageiroController.findAll);
router.get("/passageiro/:id", passageiroController.findById);
router.put("/passageiro/:id", passageiroController.update);
router.delete("passageiro/:id", passageiroController.remove);

module.exports = router;