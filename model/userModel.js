const mongoose = require('mongoose');


const userShema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true,
        match: [/^\+?[1-9]\d{1,14}$/, 'Please provide a valid phone number'],
    }
  
})



const users = mongoose.model("users",userShema)
module.exports = users