const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    name:{type:String, required:true},
    itineraryPhoto:{type:String, required:true},
    description:{type:String, required:true},
    managerName:{type:String, required:true},
    managerPhoto:{type:String, required:true},
    price:{type:Number, required:true},
    duration:{type:String, required:true},
    hashtags:{type:Array, required:true},
    likes:{type:Array, required:true},
    comments: [{
        comment: {type: String},
        userId: {type:mongoose.Types.ObjectId, ref:'users'}
    }],
    city:{type:mongoose.Types.ObjectId, ref:'cities'}
}) 
const Itinerary = mongoose.model('itineraries', itinerarySchema); //metodo para crear un modelo de la coleccion city con la coleccion cities con esquema citySchema
module.exports = Itinerary; //exporto para requerirlo/usarlo