import mongoose from "mongoose";

const syllabusSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    classname: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
      required: true,
    },
    subject: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
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
