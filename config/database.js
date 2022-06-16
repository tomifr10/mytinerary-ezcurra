const mongoose = require('mongoose'); //libreria para conectar y trabajar con mongodb

mongoose.connect(process.env.MONGO_URI, //metodo para conectarse
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(()=> console.log('Database connected'))
    .catch(err => console.error(err))