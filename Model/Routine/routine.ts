import mongoose from "mongoose";

const routineSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.ObjectId, ref: "School" },
    class: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
    ],
    section: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Section", required: true },
    ],
    subject: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    ],
    day: { type: String },
    begintime: { type: Date },
    endtime: { type: Date },
  },
  { timestamps: true }
);

const Routine =
  mongoose.models.Routine || mongoose.model("Routine", routineSchema);

export default Routine;
