import mongoose, { Document, Schema, model } from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    subjectname: { String, required: true },
    class: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
      required: true,
    },
    teacher: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
  },
  { timestamps: true }
);

const Subject = mongoose.models.Subject
  ? mongoose.model("Subject")
  : mongoose.model("Subject", subjectSchema);

export default Subject;
