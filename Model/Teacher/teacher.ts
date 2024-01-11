import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: { String, required: true },
    dob: { String, required: true },
    email: { String, required: true },
    password: { String, required: true },
    address: String,
    phonenumber: String,
    gender: String,
    role: {type: String},
    class: String,
  },
  { timestamps: true }
);

const Teacher = mongoose.models.Teacher
  ? mongoose.model("Teacher")
  : mongoose.model("Teacher", teacherSchema);

export default Teacher;
