import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",

    },
    name: { type: String },
    dob: { type: String },
    email: { type: String },
    password: { type: String },
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
