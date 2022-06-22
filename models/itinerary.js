const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    name:{type:String, required:true},
    managerName:{type:String, required:true},
    managerPhoto:{type:String, required:true},
    price:{type:Number, required:true},
    duration:{type:String, required:true},
    hashtags:{type:Array, required:true},
    likes:{type:Array, required:true},
    city:{type:mongoose.Types.ObjectId, ref:'cities'}
    // activities:{}
}) 
const Itinerary = mongoose.model('itineraries', itinerarySchema); //metodo para crear un modelo de la coleccion city con la coleccion cities con esquema citySchema
module.exports = Itinerary; //exporto para requerirlo/usarlo