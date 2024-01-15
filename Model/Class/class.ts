import mongoose, { Schema, model } from "mongoose";

const classSchema = new mongoose.Schema(
  {
    classname: { type: String, required: true },
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    classalias: { type: String },
    teacher: {
      type: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
    size: String,
  },

  { timestamps: true }
);

const Class = mongoose.models.Class
  ? mongoose.model("Class")
  : mongoose.model("Class", classSchema);

export default Class;
