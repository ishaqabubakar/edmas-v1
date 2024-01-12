import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({
    
    school: {type: mongoose.Schema.ObjectId,ref: 'School'},
    class:{
        type: mongoose.Schema.Types.ObjectId , ref: "Class",
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
    },
    status:{
        type: String,
        required: true
    },
    section: {type: mongoose.Schema.Types.ObjectId, ref: 'Section' },
    transactiondate:{
        type: Date,
        required: true
    }

})

const Payment = mongoose.models.Payment 
  ? mongoose.model("Payment")
  : mongoose.model("Payment ", paymentSchema);

export default Payment 