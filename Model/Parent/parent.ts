import mongoose, { Document, Schema, model } from "mongoose";

interface IParent extends Document {
  name: string;
  dob: string;
  email: string;
  address: string;
  phonenumber: string;
  gender: string;
  profession: String;
}

const parentSchema = new Schema<IParent>(
  {
    name: { String, required: true },
    email: { String, required: true },
    dob: String,
    address: String,
    phonenumber: String,
    gender: String,
    profession: String,
  },
  { timestamps: true }
);

const Parent = model<IParent>("Parent", parentSchema);

export default Parent;
