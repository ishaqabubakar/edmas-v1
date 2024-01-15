import mongoose, { Document, Schema, model } from "mongoose";

const syllabusSchema = new mongoose.Schema(
  {
    classname: {
      type: [{ type: Schema.Types.ObjectId, ref: "Class" }],
      required: true,
    },
    subject: {
      type: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
      required: true,
    },
    title: { String, required: true },
    attachment: { type: String },
  },
  { timestamps: true }
);

const Syllabus =
  mongoose.models.Syllabus || mongoose.model("Syllabus", syllabusSchema);

export default Syllabus;
