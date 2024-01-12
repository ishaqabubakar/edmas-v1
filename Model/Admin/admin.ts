import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: { String, required: true },
    dob: { String, required: true },
    email: { String, required: true },
    password: { String, required: true },
    address: { type: String },
    phonenumber: { type: String },
    gender: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

const Admin = mongoose.models.Admin
  ? mongoose.model("Admin")
  : mongoose.model("Admin", adminSchema);

export default Admin;
