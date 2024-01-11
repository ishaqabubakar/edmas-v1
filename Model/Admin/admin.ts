import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
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

const Admin = mongoose.models.Admin
  ? mongoose.model("Admin")
  : mongoose.model("Admin", adminSchema);

export default Admin;
