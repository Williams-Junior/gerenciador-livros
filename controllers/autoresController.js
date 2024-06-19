const { Autor } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { nome, email } = req.body;
      const autor = await Autor.create({ nome, email });
      return res.status(201).json(autor);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const autores = await Autor.findAll();
      return res.status(200).json(autores);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const autor = await Autor.findByPk(id);
      if (!autor) {
        return res.status(404).json({ error: 'Autor não encontrado' });
      }
      return res.status(200).json(autor);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      const autor = await Autor.findByPk(id);
      if (!autor) {
        return res.status(404).json({ error: 'Autor não encontrado' });
      }
      await autor.update({ nome, email });
      return res.status(200).json(autor);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const autor = await Autor.findByPk(id);
      if (!autor) {
        return res.status(404).json({ error: 'Autor não encontrado' });
      }
      await autor.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};