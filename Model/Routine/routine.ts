import mongoose, { Document, Schema, model } from "mongoose";

const routineSchema = new Schema(
  {
    class: [{ type: Schema.Types.ObjectId, ref: "Class", required: true }],
    section: [{ type: Schema.Types.ObjectId, ref: "Section", required: true }],
    subject: [{ type: Schema.Types.ObjectId, ref: "Subject", required: true }],
    schoolId:{ type:Schema.Types.ObjectId, ref:'School'},
    day: { type: String },
    starttime: { type: Date },
    endtime: { type: Date },
  },
  { timestamps: true }
);

const Routine =
  mongoose.models.Routine || mongoose.model("Routine", routineSchema);

export default Routine;
