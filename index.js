const { dbConnection } = require('./db/config')
const express = require ('express')
const cors = require('cors');
require('dotenv').config();
const app = express();
//##################### crear servidor
app.use(express.json());

//##################### uso de cors
app.use(cors());

//##################### conexion a mongo
dbConnection();

// #################### ruta home
app.get('/',(req,res) => {
    res.json({
        ok: true,
        message:"Bienvenido Back-end NoSQL"
    })
})

// #################### exportar ruta index_rutas.js
app.use(require("./routes/indexrutas"));

app.listen(process.env.PORT,() => {

    console.log("SERVIDOR CORRIENDO PUERTO " + process.env.PORT);

})

