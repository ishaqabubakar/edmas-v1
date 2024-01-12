import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema(
  {
    gradename: { type: String, required: true },
    markrange: { type: String, required: true },
    gradepoint: String,
    comment: String,
  },
  { timestamps: true }
);

const Grade = mongoose.models.Grade || mongoose.model("Grade", gradeSchema);

export default Grade;
