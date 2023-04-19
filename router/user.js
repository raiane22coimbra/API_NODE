import { Router } from "express";
import { DataTypes } from "sequelize";
import sequelize from "../config/data.js";
const userRouter = Router();

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  senha: DataTypes.STRING,
});

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found." });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201)
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found." });
    } else {
      res.status(204);
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const result = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (result === 0) {
      res.status(404).json({ message: "User not found." });
    } else {
      res.json({ message: "User deleted successfully." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default userRouter;
