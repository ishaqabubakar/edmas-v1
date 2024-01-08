import mongoose, { Document, Schema, model } from "mongoose";

interface ISubject extends Document {
  subjectname: String;
  class: Array<{ type: Schema.Types.ObjectId; ref: "Class" }>;
  teacher: Array<{ type: Schema.Types.ObjectId; ref: "Teacher" }>;
}

const subjectSchema = new Schema<ISubject>(
  {
    subjectname: { String, required: true },
    class: {
      type: [{ type: Schema.Types.ObjectId, ref: "Class" }],
      required: true,
    },
    teacher: {
      type: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
  },
  { timestamps: true }
);

const Subject = model<ISubject>("Subject", subjectSchema);

export default Subject;
