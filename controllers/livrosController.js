const { Livro } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { titulo, descricao, anoPublicacao, AutorId } = req.body;
      const livro = await Livro.create({ titulo, descricao, anoPublicacao, AutorId });
      return res.status(201).json(livro);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const livros = await Livro.findAll();
      return res.status(200).json(livros);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const livro = await Livro.findByPk(id);
      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }
      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descricao, anoPublicacao, AutorId } = req.body;
      const livro = await Livro.findByPk(id);
      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }
      await livro.update({ titulo, descricao, anoPublicacao, AutorId });
      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const livro = await Livro.findByPk(id);
      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }
      await livro.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};