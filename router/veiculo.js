import { Router } from 'express';
import { DataTypes } from "sequelize";
import sequelize from '../config/data.js';
const veiculoRouter = Router();


const Veiculo = sequelize.define('Veiculo', {
  placa: DataTypes.STRING,
  marca: DataTypes.STRING,
  modelo: DataTypes.STRING,
  nome: DataTypes.STRING,
  contato: DataTypes.STRING,
  status: DataTypes.STRING
});

veiculoRouter.get('/', async (req, res) => {
  try {
    const veiculosAll = await Veiculo.findAll();
    res.json(veiculosAll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

veiculoRouter.get('/:id', async (req, res) => {
  try {
    const veiculoById = await Veiculo.findByPk(req.params.id);
    if (!veiculoById) {
      res.status(404).json({ message: 'Veículo não encontrado.' });
    } else {
      res.json(veiculoById);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

veiculoRouter.post('/', async (req, res) => {
  try {
    const veiculoRegister = await Veiculo.create(req.body);
    res.status(201)
    res.json(veiculoRegister);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

veiculoRouter.put('/:id', async (req, res) => {
  try {
    await Veiculo.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    const veiculoUpdate = await Veiculo.findByPk(req.params.id);
    if(!veiculoUpdate){
        res.status(404).json({message: "Veículo não encontrado."})
    }else{
        res.status(204)
        res.json(veiculoUpdate);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

veiculoRouter.delete('/:id', async (req, res) => {
  try {
    const rowsDeleted = await Veiculo.destroy({
      where: {
        id: req.params.id
      }
    });
    if (rowsDeleted === 0) {
      res.status(404).json({ message: 'Veículo não encontrado.' });
    } else {
      res.json({ message: 'Veículo deletado com sucesso.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

export default veiculoRouter;
