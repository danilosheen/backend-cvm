const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.post("/cliente", clienteController.create);
router.get("/clientes", clienteController.findAll);
router.get("/cliente/:id", clienteController.findById);
router.put("/cliente/:id", clienteController.update);
router.delete("/cliente/:id", clienteController.remove);

module.exports = router;