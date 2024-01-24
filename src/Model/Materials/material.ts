import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    materialname: {type: String},
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
    description: {type: String},
    attachment: {type: String},

  },  
  { timestamps: true }
);


export const Material = mongoose.models.Material || mongoose.model('Material', materialSchema)

export default Material

