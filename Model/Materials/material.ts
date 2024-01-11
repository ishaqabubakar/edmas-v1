import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    materialname: { type: String },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    title: String,
    description: String,
    attachment: String,
  },
  { timestamps: true }
);

const Material = mongoose.models.Material
  ? mongoose.model("Material")
  : mongoose.model("Material", materialSchema);

export default Material;
