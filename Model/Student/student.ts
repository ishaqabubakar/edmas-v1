import mongoose, { Document, Schema, model } from "mongoose";

interface IStudent extends Document {
  name: string;
  dob: string;
  email: string;
  password: string;
  address: string;
  phonenumber: string;
  gender: string;
  role: string;
  class: string;
  section: string;
  admissioncode: string;
  parentname: String;
}

const studentSchema = new Schema<IStudent>(
  {
    name: { String,required: true },
    dob: { String, required:true},
    email: {String, required: true},
    password: { String, required: true},
    address: String,
    phonenumber: String,
    gender: String,
    role: String,
    class: String,
    section: String,
    admissioncode: String,
    parentname: String,
  },
  { timestamps: true }
);

const Student = model<IStudent>("Student", studentSchema);
export default Student;
