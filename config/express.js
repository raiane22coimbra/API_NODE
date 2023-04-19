import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Analisa o corpo das requisições POST
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(bodyParser.json());
app.use(cors());

export default app;
