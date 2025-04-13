"use strict";

var express = require("express");

var router = express.Router();

var passageiroController = require("../controllers/passageiroController");

var authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);
router.post("/passageiro", passageiroController.create);
router.get("/passageiros", passageiroController.findAll);
router.get("/passageiro/:id", passageiroController.findById);
router.put("/passageiro/:id", passageiroController.update);
router["delete"]("passageiro/:id", passageiroController.remove);
module.exports = router;