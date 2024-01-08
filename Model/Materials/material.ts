import mongoose, { Document, Schema } from "mongoose";

interface IMaterial extends Document {
  materialname: String;
  subject: { type: Schema.Types.ObjectId; ref: "Subject" };
  title: String;
  description: String;
  attachment: String;
}

const materialSchema = new Schema<IMaterial>(
  {
    materialname: String,
    subject: { type: Schema.Types.ObjectId, ref: "Subject" },
    title: String,
    description: String,
    attachment: String,
  },
  { timestamps: true }
);
