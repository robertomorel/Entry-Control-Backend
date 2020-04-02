/*
Script para consolidação das rotas do backend
*/

// -- Importando o módulo de roteamento do express
const { Router } = require('express');

// -- Rotas ----------------
const UserController = require('./controllers/UserController');
const FileController = require('./controllers/FileController');
const authMiddleware = require('./middlewares/auth');

// -- Validations ----------
const {
    userStoreValidate,
    userIndexValidade
} = require('./valitations/user');
const {
    fileShowByUserValidade,
    fileDestroyValidade,
    fileStoreValidate,
    fileUpdateValidade
} = require('./valitations/file');

const routes = Router();

/*
*Query params
*Route params
*Body params
*/

routes.get('/users', userIndexValidade, UserController.index);
routes.post('/users', userStoreValidate, UserController.store);

routes.use(authMiddleware).get('/file', FileController.index);
routes.use(authMiddleware).get('/file/:id', FileController.show);
routes.use(authMiddleware).get('/fileByUser', fileShowByUserValidade, FileController.showByUser);
routes.use(authMiddleware).post('/file', fileStoreValidate, FileController.store);
routes.use(authMiddleware).put('/file/:id', /*fileUpdateValidade,*/ FileController.update);
routes.use(authMiddleware).delete('/file/:id', fileDestroyValidade, FileController.destroy);

module.exports = routes;