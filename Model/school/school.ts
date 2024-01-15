import mongoose  from 'mongoose'

const schoolSchema = new mongoose.Schema({


    name:{


const SchoolSchema = new mongoose.Schema({
   fullname:{

        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    }
 
})


const School = mongoose.model('School',schoolSchema)

const School =mongoose.models.School ||  mongoose.model('School',SchoolSchema)


export default School