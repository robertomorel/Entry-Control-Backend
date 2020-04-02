const mongoose = require('mongoose');

/*
Schema para entidade File
Esta entidade representa um arquivo de folha de ponto por profissional
*/
const FileSchema = new mongoose.Schema({
    user: {             //-- User resp. pela criação do file
        type: mongoose.Schema.Types.ObjectId, // -- Id gerado pelo banco
        ref: "User"                           // -- Referência do model
    },
    desc: String,
    iniHour: Date,
    endHour: Date,
    lunchIniHour: Date,
    lunchEndHour: Date,
    date: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('File', FileSchema);