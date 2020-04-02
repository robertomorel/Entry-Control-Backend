/*
Script utilizado para uso de um middleware para autenticação
prévia do usuário à manipulação de quaisquer outras entidades
relacionadas à ele. 
*/

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    //console.log(`authHeader: ${authHeader}`);

    // -- 1. O token existe?
    if (!authHeader) {
        // -- Erro 401: autorização
        return res.status(401).send({ error: 'No token provided!!!' });
    }

    // -- 2. O token está no formato correto? (Bearer + token)
    const parts = authHeader.split(' ');

    //console.log(parts);

    if (!parts.length === 2)
        return res.status(401).send({ error: 'Invalid token!!!' });

    // Desestrutura em bearer e token
    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malformatted!!!' });

    // -- 3. O token é do usuário logado?
    jwt.verify(
        token,
        authConfig.secret,
        (err, decoded) => {

            if (err) return res.status(401).send({ error: 'Invalid token!!!' });
            // -- Adiciona à requisição o id do usuário autenticado
            req.userId = decoded.id;

            return next();

        }
    )

}