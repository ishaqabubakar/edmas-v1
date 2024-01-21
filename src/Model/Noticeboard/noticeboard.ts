import mongoose from "mongoose";

const noticeboardSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    title: {
      type: { type: String },
    },
    description: { type: String },
  },
  { timestamps: true }
);

const Noticeboard =
  mongoose.models.Noticeboard ||
  mongoose.model("Noticeboard", noticeboardSchema);

export default Noticeboard;
