const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema = Schema({
    username:{type: String,required:true},
    email : {type: String,required:true, unique: true},
    password : {type: String,required:true, minlength:5},
    displayName: { type: String },
});
var user = mongoose.model("user",userSchema);
module.exports = user;

