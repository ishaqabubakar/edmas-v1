import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    
    school: {type: mongoose.Schema.ObjectId,ref: 'School'},
    name: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String },
    phonenumber: { type: String },
    gender: { type: String },
    role: { type: String },
    class: { type: String },
    section: { type: String },
    admissioncode: { type: String },
    parentname: { type: String },
  },
  { timestamps: true }
);

const Student = mongoose.models.Student
  ? mongoose.model("Student")
  : mongoose.model("Student", studentSchema);

export default Student;
