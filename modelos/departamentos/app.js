const {Schema, model} = require('mongoose');

const departamentoSchema = Schema({
    nombre: {type: String},
    semestre: {type: Number},
    edificio: {type: String},
    piso: {type: String},
    usuario: {type: Schema.Types.ObjectId, ref: "usuarios"},
    escuela: {type: Schema.Types.ObjectId, ref: "escuelas"}
}
);

module.exports = model('depa', departamentoSchema);
