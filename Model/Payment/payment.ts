import mongoose, { Schema, model } from "mongoose"

const PaymentSchema = new mongoose.Schema({
    class:{
        type: Schema.Types.ObjectId , ref: "Class",
        required:true
    },
    amount :{
        type: Number,
        required:true
    },
    title:{
        type: String,
        required:true
    },

    description:{
        type: String
    }

})

const Payment =  model('Payment',PaymentSchema)

export default Payment 