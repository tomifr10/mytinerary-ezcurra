const mongoose = require('mongoose'); //requiero mongoose para el metodo constructor de schema

const citySchema = new mongoose.Schema({
    name:{type:String, required:true},
    country:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String, required:true}
})

const City = mongoose.model('cities', citySchema); //metodo para crear un modelo de la coleccion city con la coleccion cities con esquema citySchema
module.exports = City; //exporto para requerirlo/usarlo