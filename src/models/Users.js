const mongoose = require('mongoose');
const Bcrypt = require("bcryptjs");

/*
Schema para entidade Usuário
Esta entidade representa um profissional da empresa XPTO
*/
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        select: false // -- Quando buscarmos um usuário, não queremos que venha junto este campo.
    },
    name: {
        type: String,
        trim: false,
        required: false,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    position: {
        type: String,
        trim: true,
        required: false,
    },
    level: {
        type: String,
        trim: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hash User password antes de salvar no banco de dados.
UserSchema.pre("save", function (next) {

    /*
    if (!this.isModified("password")) {
        return next();
    }
    */
    this.password = Bcrypt.hashSync(this.password, 10);
    next();

});

/*
UserSchema.methods.comparePassword = function (plaintext, callback) {
    console.log(`plaintext: ${plaintext}`);
    console.log(`this.password: ${this.password}`);
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};
*/

module.exports = mongoose.model('User', UserSchema);