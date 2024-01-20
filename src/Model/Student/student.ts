import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
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
    parent: {
      fullname: {
        type: String,
      },
      proffession: {
        type: String,
      },
      phone: {
        type: String,
      },
      parentemail: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
