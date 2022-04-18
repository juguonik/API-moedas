const express = require("express");
const cors = require("cors");
const fs = require("fs");
const routes = require("./routes");
const app = express(); //http.createServer

app.use(cors()); // liberando cors
app.use(routes);

app.listen(4000, () => console.log("Servidor Rodando na porta 4000"));

// ponto de entrada = rotas
// Controller
// Model
