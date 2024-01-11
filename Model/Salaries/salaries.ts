import mongoose from "mongoose";

const salariesSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },

  stafftype: String,

  transactiondate: {
    type: Date,
    required: true,
  },
  status: String,
  
});

const Salaries = mongoose.models.Salaries
  ? mongoose.model("Salaries")
  : mongoose.model("Salaries", salariesSchema);

export default Salaries;
