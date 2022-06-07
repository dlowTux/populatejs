const {Schema, model} = require('mongoose');

const userSchema = Schema({
    nombre: {type: String},
    matricula: {type: Number},
    cali: {type: Number},
    carrera: {type: String}
});

module.exports = model('usuarios', userSchema);

