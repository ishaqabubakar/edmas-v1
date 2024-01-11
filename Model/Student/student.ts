import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { String, required: true },
    dob: { String, required: true },
    email: { String, required: true },
    password: { String, required: true },
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

const Student = mongoose.models.Student
  ? mongoose.model("Student")
  : mongoose.model("Student", studentSchema);

export default Student;
