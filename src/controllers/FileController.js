/*
    Este controller é para requisições que exigem que o usuário
    já esteja autenticado

    Para isso, será utilizado um Middleware.
    Um Middleware intercepta a requisição entre o controller e a rota. 
    Quando a requisição vai pro servidor, antes dela cheegar no método do controller,
    o middleware é chamado.
    Verifica se o req. e o res. são válidos para poder receber a resposta do controller.

    Lá na requisição, precisaremos ter um reader com um token de autenditação. 

*/
const File = require('../models/File');

/**
 * Método para busca de todos os arquivos de folha
 * 
 * @example 
 *   none
 * 
 * @param   
 * @returns { file } {JSON}
 */
const index = async (req, res) => {

    try {

        //console.log(req.query);

        const file = await File.find();
        return res.json(file);

    } catch (error) {
        res.status(500).send(error);
    }

}

/**
 * Método para busca de um arquivo específico de folha
 * 
 * @example 
 *   none
 * 
 * @param   req.params.id {String} obrigatorio
 * @returns { file } {JSON}
 */
const show = async (req, res) => {

    try {

        console.log(req.query);

        const file = await File.findById(req.params.id);
        return res.json(file);

    } catch (error) {
        res.status(500).send(error);
    }

}

/**
 * Método para busca de um arquivo específico de folha por User
 * 
 * @example 
 *   none
 * 
 * @param   req.userId {String} obrigatorio
 * @returns { file } {JSON}
 */
const showByUser = async (req, res) => {

    try {

        //console.log(req.query);

        //const { userId } = req.query;

        const file = await File.find({
            user: {
                //$eq: userId
                $eq: req.userId
            }
        });

        return res.json(file);

    } catch (error) {
        res.status(500).send(error);
    }

}

/**
 * Método para gravação de um arquivo de folha
 * Terá inicialmente apenas desc (não obrigatório), data e hora de entrada
 * 
 * @example 
 *   none
 * 
 * @param   req.body {JSON} obrigatorio
 * @returns { file } {JSON}
 */
const store = async (req, res) => {

    try {

        //console.log(req.userId);
        //req.body.user = req.userId;
        console.log(req.body, req.userId);

        const { desc, iniHour, date = new Date() } = req.body;

        //const file = await File.create(req.body);
        const file = await File.create({
            user: req.userId,
            desc,
            iniHour,
            date
        });

        return res.json(file);

    } catch (error) {
        res.status(500).send(error);
    }

}

/**
 * Método para atualização de um arquivo de folha
 * 
 * @example 
 *   none
 * 
 * @param   req.params.id {JSON} obrigatorio; req.body {JSON} obrigatorio
 * @returns { file } {JSON}
 */
const update = async (req, res) => {

    try {

        console.log(req.body);

        const file = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(file);

    } catch (error) {
        res.status(500).send(error);
    }

}

/**
 * Método para deleção de um arquivo de folha
 * 
 * @example 
 *   none
 * 
 * @param   req.params.id {String} obrigatorio
 * @returns { Msg } {String}
 */
const destroy = async (req, res) => {

    try {

        console.log(req.params.id);

        await File.findByIdAndDelete(req.params.id);
        return res.send('File deleted!!!');

    } catch (error) {
        res.status(500).send(error);
    }

}

module.exports = { index, show, showByUser, store, update, destroy };