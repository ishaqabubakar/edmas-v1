import mongoose from "mongoose";

const GradebookSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    grades: [{ type: mongoose.Schema.Types.Mixed, required: true }],
    term: { type: String, required: true },
    year: { type: String, required: true },
    comments: { type: String },
  },
  { timestamps: true }
);

const Gradebook =
  mongoose.models.Gradebook || mongoose.model("Gradebook", GradebookSchema);

export default Gradebook;
