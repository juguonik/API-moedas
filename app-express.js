const express = require ('express');
const cors = require ('cors');
const listMoedas = require ('./moedas.json');

const app = express(); //é como o http.createServer

app.use(cors()); //para ão criar setHeader em toda rota

// Ao invés de criar uma função para rota, usa o express com o recurso, como o get
app.get('/', (req,res)=> {
    res.send('Olá');

});

app.get('/moedas', (req,res)=> {
    // res.send(JSON.stringify(listMoedas));
    res.json(listMoedas);
});

app.listen(4000, ()=> console.log('Servidor rodando na porta 4000'));