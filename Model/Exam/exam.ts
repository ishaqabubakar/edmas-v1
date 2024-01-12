import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
  {
    examname: { type: String, required: true },
    subject: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
      required: true,
    },
    examdate: { type: Date },
    status: { type: String },
  },
  { timestamps: true }
);

const Exam = mongoose.models.Exam
  ? mongoose.model("Exam")
  : mongoose.model("Exam", examSchema);

export default Exam;
