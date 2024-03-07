import mongoose from "mongoose";
const ResultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    exam: { type: mongoose.Schema.Types.Mixed, required: true },
    score: { type: mongoose.Schema.Types.Mixed, required: true },
    subject: { type: String, required: true },
    date: { type: String, required: true },
    comments: { type: String },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Result = mongoose.models.Result || mongoose.model("Result", ResultSchema);

export default Result;
