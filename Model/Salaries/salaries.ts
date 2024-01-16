import mongoose from "mongoose";

const salariesSchema = new mongoose.Schema({
  school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
  staff: { type: String },
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

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

const Salaries =
  mongoose.models.Salaries || mongoose.model("Salaries", salariesSchema);

export default Salaries;
