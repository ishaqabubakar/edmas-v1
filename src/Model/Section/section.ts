import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },

    name: { type: String },
    nickname: { type: String },
    teacher: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
    
    },
  },
  { timestamps: true }
);

const Section =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;
