import mongoose, { Document, Schema, model } from "mongoose";

interface IAdmin extends Document {
  name: string;
  dob: string;
  email: string;
  password: string;
  address: string;
  phonenumber: string;
  gender: string;
  role: string;
}

const adminSchema = new Schema<IAdmin>(
  {
    name: { String, required: true },
    dob: { String, required: true },
    email: { String, required: true },
    password: { String, required: true },
    address: String,
    phonenumber: String,
    gender: String,
    role: String,
  },
  { timestamps: true }
);

const Admin = model<IAdmin>("Admin", adminSchema);

export default Admin;
