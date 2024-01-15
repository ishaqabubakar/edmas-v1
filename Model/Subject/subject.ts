import mongoose, { Document, Schema, model } from "mongoose";


const subjectSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    subjectname: { String, required: true },
    class: {
      type: [{ type: Schema.Types.ObjectId, ref: "Class" }],
      required: true,
    },
    teacher: {
      type: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
  },
  { timestamps: true }
);

const Subject =mongoose.models.Subject || mongoose.model("Subject", subjectSchema);

export default Subject;
