// routes/autoresRoutes.js
const express = require('express');
const router = express.Router();
const autoresController = require('../controllers/autoresController');

router.post('/autor', autoresController.create);
router.get('/autores', autoresController.getAll);
router.get('/autor/:id', autoresController.getById);
router.put('/autor/:id', autoresController.update);
router.delete('/autor/:id', autoresController.delete);

module.exports = router;