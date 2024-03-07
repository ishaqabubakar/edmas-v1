import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    classname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    amount: {
      type: String,
    },

    narration: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Fees = mongoose.models.Fees || mongoose.model("Fees", feeSchema);

export default Fees;
