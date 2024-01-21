import mongoose from "mongoose";

const syllabusSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    classname: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
    },
    subject: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    },
    title: { type: String },
    attachment: { type: String },
  },
  { timestamps: true }
);

const Syllabus =
  mongoose.models.Syllabus || mongoose.model("Syllabus", syllabusSchema);

export default Syllabus;
