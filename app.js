import app from "./config/express.js";
import express from "express";
import userRouter from "./router/user.js";
import veiculoRouter from "./router/veiculo.js";

const port = 5000;
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ Ola: "mundowwwww" });
});

// Usa as rotas dos arquivos user.js e veiculo.js
app.use('/users', userRouter);
app.use('/veiculos', veiculoRouter)

app.use("/", router);
app.use((err, req, res, next) => {
  res.status(500).json({
    Mensagem: "Deu ruim, bb!",
  });
});
app.listen(port, () => console.log("Servidor Funcionando"));
