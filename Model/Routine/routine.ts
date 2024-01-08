import mongoose, { Document, Schema, model } from "mongoose";

interface IRoutine extends Document {
  class: Array<{ type: Schema.Types.ObjectId; ref: "Class" }>;
  section: Array<{ type: Schema.Types.ObjectId; ref: "Section" }>;
  subject: Array<{ type: Schema.Types.ObjectId; ref: "Subject" }>;
  day: String;
  begintime: Date;
  endtime: Date;
}

const routineSchema = new Schema<IRoutine>(
  {
    class: [{ type: Schema.Types.ObjectId, ref: "Class", required: true }],
    section: [{ type: Schema.Types.ObjectId, ref: "Section", required: true }],
    subject: [{ type: Schema.Types.ObjectId, ref: "Subject", required: true }],
    day: String,
    begintime: Date,
    endtime: Date,
  },
  { timestamps: true }
);

const Routine = model<IRoutine>("Routine", routineSchema);

export default Routine;
