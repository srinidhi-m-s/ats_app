const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['applicant','admin','bot'],
        default:'applicant'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model('User',userSchema);