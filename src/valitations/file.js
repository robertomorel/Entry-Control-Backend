/*
Script para validações de rotas para a entidade File
*/
const { celebrate, Segments, Joi } = require('celebrate');

// -- Validação para a rota Store
const fileStoreValidate = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        desc: Joi.string(),
        iniHour: Joi.date().required(),
        date: Joi.string().required()
    })
});

// -- Validação para a rota Update
const fileUpdateValidade = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    }),
    [Segments.BODY]: Joi.object().keys({
        desc: Joi.string(),
        endHour: Joi.date(),
        lunchIniHour: Joi.date(),
        lunchEndHour: Joi.date()
    })
});

// -- Validação para a rota Index-ShowByUser
const fileShowByUserValidade = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
});

// -- Validação para a rota Delete
const fileDestroyValidade = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    })
});

module.exports = { fileShowByUserValidade, fileDestroyValidade, fileStoreValidate, fileUpdateValidade };