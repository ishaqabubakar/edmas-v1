import mongoose, { Document, Schema, model } from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: { type: String },
    dob: { type: String },
    email: { type: String },
    password: { type: String },
    address: { type: String },
    phonenumber: { type: String },
    gender: {
      type: String,
    },
    role: {
      ttype: String,
    },
    class: {
      type: String,
    },
    section: {
      type: String,
    },
    admissioncode: {
      type: String,
    },
    parentname: {
      type: String,
    },
  },
  { timestamps: true }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
export default Student;
