import mongoose, { Schema, model } from "mongoose";

const classSchema = new mongoose.Schema(
  {
    classname: { String, required: true },
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
