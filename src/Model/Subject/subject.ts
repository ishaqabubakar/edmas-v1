import mongoose, { Document, Schema, model } from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    subjectname: {type: String},

    class: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
    
    },
    teacher: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
    
    },
  },
  { timestamps: true }
);

const Subject =
  mongoose.models.Subject || mongoose.model("Subject", subjectSchema);

export default Subject;
