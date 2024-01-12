import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    school: {type: mongoose.Schema.ObjectId,ref: 'School'},
    name: { String, required: true },
    email: { String, required: true },
    dob: { type: String },
    address: { type: String },
    phonenumber: { type: String },
    gender: { ype: String },
    profession: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

const Parent = mongoose.models.Parent
  ? mongoose.model("Parent")
  : mongoose.model("Parent", parentSchema);

export default Parent;
