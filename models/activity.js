const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activityName:{type:String, required:true},
    activityPhoto:{type:String, required:true},
    itinerary:{type:mongoose.Types.ObjectId, ref:'itineraries'}
}) 
const Activity = mongoose.model('activities', activitySchema); //metodo para crear un modelo de la coleccion city con la coleccion cities con esquema citySchema
module.exports = Activity; //exporto para requerirlo/usarlo