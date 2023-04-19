import { DataTypes } from "sequelize";
import sequelize from "./config/data.js";

const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Veiculos = sequelize.define("veiculos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status:{
    type: DataTypes.STRING,
    allowNull: false
  },
});

// Sincroniza os modelos com o banco de dados, criando as tabelas se não existirem
sequelize
  .sync()
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao criar tabelas: ", error);
  });

  