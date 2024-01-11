import mongoose, {Schema, model} from 'mongoose'

const salariesSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },

    description:{
        type:String,
        required : true
    },
    amount:{
        type: Number,
        required : true
    },
    method:{
        type: String,
        required: true
    },
    transactiondate:{
        type: Date,
        required: true
    }
})

const Salaries = model('Salaries',salariesSchema)

export default Salaries

