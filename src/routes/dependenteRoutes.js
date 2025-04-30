const express = require('express');
const router = express.Router();
const dependenteController = require('../controllers/dependentesController');
const authMiddleware = require("../middleware/authMiddleware");

router.get('/dependentes/:clienteId', authMiddleware, dependenteController.getAll);
router.post('/dependente', authMiddleware, dependenteController.create);
router.get('/dependente/:id', authMiddleware, dependenteController.getOne);
router.put('/dependente/:id', authMiddleware, dependenteController.update);
router.delete('/dependente/:id', authMiddleware, dependenteController.remove);

module.exports = router;
