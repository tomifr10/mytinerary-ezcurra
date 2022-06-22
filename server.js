require('dotenv').config(); // para configurar las variables de entorno
require('./config/database') //si o si para conecetar a la base de datos

const express = require('express'); //requiero express => libreria con metodos para levantar un servidor
const cors = require ('cors') //permite el acceso a la base de datos
const Router = require('./routes/routes') //si o si para conectar con las rutas
const app = express(); //creo la aplicacion con el metodo express
const PORT = 4000;

app.set('port', PORT); //metodo de express => seteo una variable/parametro

app.get('/', (req,res) => {
    res.send('Servidor creado')
}); //metodo de express => obtengo algo/ mando algo con el metodo send(no es de express/es nativo)

//middlewaves: software que gestiona datos/puente entre el servidor y la base de datos
app.use(cors())
app.use(express.json()) //convierte todo a json
app.use('/api', Router) //permite usar las rutas que configure

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT) //escucha el puerto y levanta el servidor
});