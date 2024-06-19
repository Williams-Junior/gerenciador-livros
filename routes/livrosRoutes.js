const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

router.post('/livro', livrosController.create);
router.get('/livros', livrosController.getAll);
router.get('/livro/:id', livrosController.getById);
router.put('/livro/:id', livrosController.update);
router.delete('/livro/:id', livrosController.delete);

module.exports = router;