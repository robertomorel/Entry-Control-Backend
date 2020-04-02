// -- Celebrate
/*
Utiliza por debaixo dos panos a biblioteca JOI, que é uma biblioteca de validação
Documentação do JOI: "https://hapi.dev/module/joi/api/?v=17.1.1"
O Celebrate integra o JOI com o Express
*/
/*
Script para validações de rotas para a entidade User
*/
const { celebrate, Segments, Joi } = require('celebrate');

// -- Validação para a rota Store
const userStoreValidate = celebrate({
    // -- Joi.object para garantir que o que está sendo enviado para a requisição é um objeto do JS
    // -- "username","password","name","email","position","level"
    [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string(),
        email: Joi.string().required().email(), // -- Verifica se tem formato de email
        position: Joi.string(),
        level: Joi.string().length(1)
    })
});

// -- Validação para a rota Index
const userIndexValidade = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
});

module.exports = { userStoreValidate, userIndexValidade };