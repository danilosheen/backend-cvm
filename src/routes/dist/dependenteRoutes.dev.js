"use strict";

var express = require('express');

var router = express.Router();

var dependenteController = require('../controllers/dependentesController');

var authMiddleware = require("../middleware/authMiddleware");

router.get('/dependentes/:clienteId', authMiddleware, dependenteController.getAll);
router.post('/dependente', authMiddleware, dependenteController.create);
router.get('/dependente/:id', authMiddleware, dependenteController.getOne);
router.put('/dependente/:id', authMiddleware, dependenteController.update);
router["delete"]('/dependente/:id', authMiddleware, dependenteController.remove);
module.exports = router;