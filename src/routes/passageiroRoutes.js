const express = require("express");
const router = express.Router();
const passageiroController = require("../controllers/passageiroController");

router.post("/", passageiroController.create);
router.get("/", passageiroController.findAll);
router.get("/:id", passageiroController.findById);
router.put("/:id", passageiroController.update);
router.delete("/:id", passageiroController.remove);

module.exports = router;