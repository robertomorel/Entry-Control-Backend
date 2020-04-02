// -- Auxilia principalmente na criação das rotas da aplicação
// -- É um "microframework"
const express = require('express');
// -- Biblioteca de conexão com o MongoDB Atlas
const mongoose = require('mongoose');
// -- Importando o módulo de rotas
const routes = require('./routes');

const cors = require('cors');

// -- Função para formatar o erro que vem da validação do Joi pelo celebrate 
const { errors } = require('celebrate');

// -- Criando a aplicação 
const app = express();

// -- Conectando ao banco de dados XPTOComp do Mongo BD (não relacional)
// -- Feito o login pelo google game.developer.br@gmail.com
mongoose.connect('mongodb+srv://robertomorel:robertomorel@cluster0-e3ktb.mongodb.net/xptocomp?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// -- Todas as rotas da aplicação vão entender requisições que têm no corpo o formato json
// -- Importante deve vir antes das rotas. Script interpretado
app.use(express.json());

/*
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept'); // add remove headers according to your needs
    next()
})
*/

app.use(cors());

app.use(routes);

app.use(errors());

// -- Porta de acesso ao servidor
app.listen(8080, () => {
    console.log("Listening at 8080");
});