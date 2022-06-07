const {Schema, model} = require('mongoose');

const escuelaSchema = Schema({
    nombre: {type: String},
    carreras: {type: Array},
    direccion: {type: String},

});

module.exports = model('escuelas', escuelaSchema);

