"use strict";

var express = require("express");

var router = express.Router();

var passageiroController = require("../controllers/passageiroController");

var authMiddleware = require("../middleware/authMiddleware"); // router.use(authMiddleware);


router.post("/passageiro", authMiddleware, passageiroController.create);
router.get("/passageiros", authMiddleware, passageiroController.findAll);
router.get("/passageiro/:id", authMiddleware, passageiroController.findById);
router.put("/passageiro/:id", authMiddleware, passageiroController.update);
router["delete"]("/passageiro/:id", authMiddleware, passageiroController.remove);
module.exports = router;