'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Livro.belongsTo(models.Autor, { foreignKey: 'AutorId' });
    }
  }
  Livro.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    anoPublicacao: DataTypes.INTEGER,
    AutorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};