import mongoose, { Schema, model } from "mongoose";
import { StringDecoder } from "string_decoder";

const classSchema = new mongoose.Schema(
  {

    classname: { type: String },
    school: [{ type: mongoose.Schema.Types.ObjectId, ref: "School" }],

    classalias: { type: String },
    teacher: {
      type: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
      
    },
    size: { type: String },
  },

  { timestamps: true, toJSON: {virtuals: true }}
);

const Class = mongoose.models.Class || mongoose.model("Class", classSchema);

export default Class;
