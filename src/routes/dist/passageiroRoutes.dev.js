"use strict";

var express = require("express");

var router = express.Router();

var passageiroController = require("../controllers/passageiroController");

router.post("/", passageiroController.create);
router.get("/", passageiroController.findAll);
router.get("/:id", passageiroController.findById);
router.put("/:id", passageiroController.update);
router["delete"]("/:id", passageiroController.remove);
module.exports = router;