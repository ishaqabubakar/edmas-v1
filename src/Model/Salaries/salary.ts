import mongoose from "mongoose";

const salariesSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    staffname: { type: String },
    title: {
      type: String,
    },

    description: {
      type: String,
    },

    amount: {
      type: Number,
    },

    stafftype: { type: String },

    transactiondate: {
      type: Date,
    },

    status: { type: String },
  },
  { timestamps: true }
);

const Salaries =
  mongoose.models.Salaries || mongoose.model("Salaries", salariesSchema);

export default Salaries;
