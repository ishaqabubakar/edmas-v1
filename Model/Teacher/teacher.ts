import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String },
    phonenumber: { tpe: String },
    gender: { type: String },
    role: { type: String },
    class: { type: String },
  },
  { timestamps: true }
);

const Teacher = mongoose.models.Teacher
  ? mongoose.model("Teacher")
  : mongoose.model("Teacher", teacherSchema);

export default Teacher;
