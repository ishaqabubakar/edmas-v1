import mongoose from "mongoose";



const materialSchema = new mongoose.Schema(
  {
    materialname: String,
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    subject: { type: Schema.Types.ObjectId, ref: "Subject" },
    title: String,
    description: String,
    attachment: String,

  },
  { timestamps: true }
);


export const Material = mongoose.models.Material || mongoose.model('Material', materialSchema)

export default Material

