const listMoedas = require("../models/moedas.json");

const MoedasController = {
  getHome(req, res) {
    res.send("<h1>Teste html</h1>");
  },
  listarMoedas(req, res) {
    res.json(listMoedas);
  },
};

module.exports = MoedasController;
