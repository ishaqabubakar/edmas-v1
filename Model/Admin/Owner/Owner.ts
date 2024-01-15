import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String },
    dob: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    gender: {
      type: String,
    },
    role: {
      type: String,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
    },
  },
  { timestamps: true }
);

const Owner = mongoose.models.Owner || mongoose.model("Owner", OwnerSchema);

export default Owner;
