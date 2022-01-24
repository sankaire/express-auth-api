const mongoose = require("mongoose")

//schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        max:255
    },
    password:{
        type:String,
        required:true,
        max:1024
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

//export schema
module.exports = mongoose.model("User", userSchema)
