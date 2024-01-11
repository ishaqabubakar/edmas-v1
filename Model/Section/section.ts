import mongoose, { Document, Schema, model } from "mongoose";

interface ISection extends Document {
  name: String;
  nickname: String;
  teacher: Array<{ type: Schema.Types.ObjectId; ref: "Teacher" }>;
}

const sectionSchema = new Schema<ISection>(
  {
    name: String,
    nickname: String,
    teacher: {
      type: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
  },
  { timestamps: true }
);

const Section = model("Section", sectionSchema);

export default Section;
