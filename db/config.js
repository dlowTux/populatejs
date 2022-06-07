const mongoose = require('mongoose');
//const port = process.env.PORT || 3000;

const dbConnection = async() =>{

    try{
        await mongoose.connect( process.env.DB_CONEXION,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        //useFindAndModify: false
    });
    } catch (error){
        console.log(error);
        throw new Error ("ERROR AL CONECTAR LA BASE DE DATOS")
    }
}

module.exports ={
    dbConnection
}