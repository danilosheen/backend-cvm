const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.post("/", clienteController.create);
router.get("/", clienteController.findAll);
router.get("/:id", clienteController.findById);
router.put("/:id", clienteController.update);
router.delete("/:id", clienteController.remove);

module.exports = router;