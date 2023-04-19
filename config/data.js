import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/apiBD.sqlite' // caminho para o arquivo do banco de dados
});

export default sequelize;