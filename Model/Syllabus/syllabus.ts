import mongoose from "mongoose";


const syllabusSchema = new mongoose.Schema(
  {
    classname: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
      required: true,
    },
    subject: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
      required: true,
    },
    title: { String, required: true },
    attachment: String,
  },
  { timestamps: true }
);

const Syllabus = mongoose.models.Syllabus
  ? mongoose.model("Syllabus")
  : mongoose.model("Syllabus", syllabusSchema);

export default Syllabus;
