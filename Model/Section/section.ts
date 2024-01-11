import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    name: String,
    nickname: String,
    teacher: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
  },
  { timestamps: true }
);

const Section = mongoose.models.Section
  ? mongoose.model("Section")
  : mongoose.model("Section", sectionSchema);

export default Section;
