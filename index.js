const express = require('express');
const userRouter = require('./src/router/user-router');
const connection = require('./src/model/connection');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(userRouter);

connection.sequelize.authenticate().sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Rodando servidor na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Não foi possível conectar ao banco de dados: ${error}`);
  });
