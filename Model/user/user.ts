import mongoose from "mongoose";



const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
    },
    role:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type:Date
    },
    Address:{
        type:String,
    },
    Gender:{
        type:String
    },

})


  export const User =mongoose.models.User || mongoose.model('User', UserSchema)