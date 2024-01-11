import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema(
  {
    gradename: { String, required: true },
    markrange: { String, required: true },
    gradepoint: String,
    comment: String,
  },
  { timestamps: true }
);

const Grade = mongoose.models.Grade
  ? mongoose.model("Grade")
  : mongoose.model("Grade", gradeSchema);

export default Grade;
