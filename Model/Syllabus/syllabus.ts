import mongoose, { Document, Schema, model } from "mongoose";

interface ISyllabus extends Document {
  classname: Array<{ type: Schema.Types.ObjectId; ref: "Class" }>;
  subject: Array<{ type: Schema.Types.ObjectId; ref: "Subject" }>;
  title: String;
  description: String;
  attachment: String;
}

const syllabusSchema = new Schema<ISyllabus>(
  {
    classname: {
      type: [{ type: Schema.Types.ObjectId, ref: "Class" }],
      required: true,
    },
    subject: {
      type: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
      required: true,
    },
    title: { String, required: true },
    attachment: String,
  },
  { timestamps: true }
);

const Syllabus = model<ISyllabus>("Syllabus", syllabusSchema);

export default Syllabus;
