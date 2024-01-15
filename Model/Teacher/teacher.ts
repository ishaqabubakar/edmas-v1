import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {

    
    school: {type: mongoose.Schema.ObjectId,ref: 'School'},
    name: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String },
    phonenumber: { tpe: String },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    name: {type: String, required: true },
    dob: {type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    address: { type: String },
    phonenumber: { type: String },

    gender: { type: String },
    role: { type: String },
    class: { type: String },
  },
  { timestamps: true }
);


const Teacher = mongoose.models.Teacher
  ? mongoose.model("Teacher")
  : mongoose.model("Teacher", teacherSchema);

const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);


export default Teacher;
