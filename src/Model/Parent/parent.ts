import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    name: { type: String },
    email: { type: String },
    dob: { type: String },
    address: { type: String },
    phonenumber: { type: String },
    gender: { type: String },
    profession: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

const Parent = mongoose.models.Parent || mongoose.model("Parent", parentSchema);

export default Parent;
