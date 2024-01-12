import mongoose from "mongoose";

const salariesSchema = new mongoose.Schema({
  
  school: {type: mongoose.Schema.ObjectId,ref: 'School'},
  amount: {
    type: Number,
    required: true,
  },

  stafftype: { type: String },

  transactiondate: {
    type: Date,
    required: true,
  },

  status: { type: String },
});

const Salaries = mongoose.models.Salaries
  ? mongoose.model("Salaries")
  : mongoose.model("Salaries", salariesSchema);

export default Salaries;
