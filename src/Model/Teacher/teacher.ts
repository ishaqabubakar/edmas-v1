import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
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
    dob: { type: String  },
    email: { type: String},
    password: { type: String},
    address: { type: String },
    phone: { type: String },
    gender: { type: String },
    role: { type: String },
    class: { type: String },
  },
  { timestamps: true }
);

const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);

export default Teacher;
