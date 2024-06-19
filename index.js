const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const {sequelize} = require('./models');
const livrosRoutes = require('./routes/livrosRoutes');
const autoresRoutes = require('./routes/autoresRoutes');


dotenv.config();

const app = express();
app.use(express.json());

app.use('/', livrosRoutes);
app.use('/', autoresRoutes);

app.listen(process.env.PORT, async () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
});