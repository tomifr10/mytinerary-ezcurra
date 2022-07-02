const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String},
    photo:{type:String, required:true},
    email:{type:String, required:true},
    country:{type:String},
    password:[{type:String, required:true}],
    from:{type:Array},
    uniqueString: {type:String, required:true},
    verification: {type:Boolean, required:true}
})

const User = mongoose.model('users', userSchema);
module.exports = User