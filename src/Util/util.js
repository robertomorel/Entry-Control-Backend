// -- Json Web Token
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const generateToken = (params = {}) => {

    /*
        Params do sign
            1: Identificação única do usuário "user._id"
            2: Hash único
            3: Tempo de expiração de 1 dia
    */

    return jwt.sign(
        params,
        authConfig.secret,
        { expiresIn: 86400 }
    );

}

module.exports = { generateToken };