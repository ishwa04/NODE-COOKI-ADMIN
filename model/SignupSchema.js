const mongoose = require("mongoose")
const SignupSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

let SignupAdmin = mongoose.model("SignupData",SignupSchema)
module.exports = SignupAdmin