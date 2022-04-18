const express = require("express");
const moedasController = require('../controllers/moedas.controller');

const routes = express.Router(); // lista de rotas

routes.get("/", moedasController.getHome);
routes.get("/moedas", moedasController.listarMoedas);

module.exports = routes; // exportando a lista completa de rotas
