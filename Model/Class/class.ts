import mongoose, { Schema, model } from "mongoose";

const classSchema = new mongoose.Schema(
  {
    school: {type: mongoose.Schema.ObjectId,ref: 'School'},
    classname: { type: String, required: true },
    classalias: { type: String },
    teacher: {
      type: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
    size: { type: String },
  },
  { timestamps: true }
);

const Class = mongoose.models.Class
  ? mongoose.model("Class")
  : mongoose.model("Class", classSchema);

export default Class;
