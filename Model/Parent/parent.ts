import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    name: { String, required: true },
    email: { String, required: true },
    dob: String,
    address: String,
    phonenumber: String,
    gender: String,
    profession: String,
  },
  { timestamps: true }
);

const Parent = mongoose.models.Parent
  ? mongoose.model("Parent")
  : mongoose.model("Parent", parentSchema);

export default Parent;
