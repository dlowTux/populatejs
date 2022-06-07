const express = require('express');
const {router} = require('express');
const model_user = require('../../modelos/users/user');
const app = express();
const model_depa = require("../../modelos/departamentos/app");
const model_escuela = require("../../modelos/escuelas/app")

//################## nuevo regisro
app.post('/nuevo/escuela/', (req, res) => {

    let body = req.body;

    let registroescuela = new model_escuela({

        nombre: body.nombre,
        carreras: body.carreras,
        direccion: body.direccion,
    });

    registroescuela.save();

    res.json({
        ok: true,
        registroescuela
    });

});


app.post('/nuevo/depa/', (req, res) => {

    let body = req.body;

    let registrodepa = new model_depa({
        nombre: body.nombre,
        semestre: body.semestre,
        edificio: body.edificio,
        piso: body.piso,
        usuario: body.usuario,
        escuela: body.escuela

    });

    registrodepa.save();

    res.json({
        ok: true,
        registrodepa
    });

});

app.post('/nuevo/usuario/', (req, res) => {

    let body = req.body;

    let registrouser = new model_user({
        nombre: body.nombre,
        matricula: body.matricula,
        cali: body.cali,

        carrera: body.carrera
    });

    registrouser.save();

    res.json({
        ok: true,
        registrouser
    });

});
app.get('/get/and/:nombre?/:carrera?', async (req, res) => {
    const nombre = req.params.nombre
    const carrera = req.params.carrera
    const result = await model_user.find({"$and": [{"nombre": nombre}, {"carrera": carrera}]})
    res.json({
        ok: true,
        data: result
    })

})
app.get('/get/disctic/', async (req, res) => {
    const result = await model_user.find().distinct("nombre")
    res.json({
        ok: true,
        data: result
    })

})


app.get('/get/depa/:id?', async (req, res) => {
    const id = req.params.id;

    const result = await model_depa.findById(id).
        populate("usuario")

    res.json({
        ok: true,
        data: result
    });
})

app.get('/get/depas/:id?', async (req, res) => {
    const id = req.params.id;

    const result = await model_depa.findById(id).
        populate("usuario").populate("escuela")
    res.json({
        ok: true,
        data: result
    });
})


module.exports = app;
