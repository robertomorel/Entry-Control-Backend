/*
Controller que armazenará os principais métodos de controle
da entidade User.
*/

const User = require('../models/Users');
const Bcrypt = require("bcryptjs");
const Util = require('../Util/util');

/**
 * Método para busca e autenticação de um usuário
 * 
 * @example 
 *   none
 * 
 * @param   req {JSON} obrigatorio
 * @returns { user, token } {JSON}
 */
const index = async (req, res) => {

    try {

        console.log(req.query);

        const { username, password } = req.query;

        /*
        A prinpípio, o password não deve vir junto com a lista de campos, mas ele é necessário 
        para a autenticação. Para adicionar aos campos, dá ".select('+password')"
        */
        const user = await User.findOne({
            username
        }).select('+password');

        if (!user) {
            return res.status(400).send({ message: "User does not exists!!!" });
        }

        if (!Bcrypt.compareSync(password, user.password)) {
            //console.log("Chegou aqui!!!");
            return res.json({ status: "error", message: "Invalid password!!!", data: null });
        }

        user.password = undefined;

        const token = Util.generateToken({ id: user._id });

        /*
        Cada vez que esse método rodar, o token muda, pq ele é baseado no time stamp
        */
        //return res.json({ status: "success", message: "user found!!!", data: { user, token } });
        return res.json({ user, token });

    } catch (error) {
        res.status(500).send(error);
    }

}

/**
 * Método para gravação de um usuário
 * 
 * @example 
 *   none
 * 
 * @param   req {JSON} obrigatorio
 * @returns { user, token } {JSON}
 */
const store = async (req, res) => {

    console.log(req.body);

    const { username, password, name = username, email, position = "Developer", level = "1" } = req.body

    let user = await User.findOne({ username });

    if (!user) {
        try {

            user = await User.create({
                username,
                password,
                name,
                email,
                position,
                level
            });

        } catch (error) {

            //res.status(500).send(error);
            return res.json({ status: "error", message: "Registration failed!!!", data: null });

        }
    } else {
        return res.status(400).send({ error: "User already exists!!!" });
    }

    // -- Para evitar mostrar a informação ao usuário
    user.password = undefined;

    const token = Util.generateToken({ id: user._id });

    //return res.json({ status: "success", message: "User created!!!", data: { user, token } });
    return res.json({ user, token });

}

module.exports = { store, index };