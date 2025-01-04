const mongoose = require("mongoose")
const MainSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    task:{
        type:Array,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
})

let mainAdmin = mongoose.model("MainData",MainSchema)
module.exports = mainAdmin