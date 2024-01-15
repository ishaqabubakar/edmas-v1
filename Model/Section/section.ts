import mongoose, { Document, Schema, model } from "mongoose";

const sectionSchema = new Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    name: { type: String },
    nickname: { type: String },
    teacher: {
      type: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
  },
  { timestamps: true }
);

const Section =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;
