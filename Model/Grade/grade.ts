import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema(
  {
    gradename: { type: String, required: true },
    markrange: { type: String, required: true },
    gradepoint: { type: String },
    comment: { type: String },
  },
  { timestamps: true }
);

const Grade = mongoose.models.Grade
  ? mongoose.model("Grade")
  : mongoose.model("Grade", gradeSchema);

export default Grade;
