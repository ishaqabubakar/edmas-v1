import mongoose from "mongoose";

const noticeboardSchema = new mongoose.Schema({
  title: {
    type: {type: String},
    required: true,
  },
  description: String,
  date: {
    type: Date,
    required: true,
  },
});

const Noticeboard = mongoose.models.Noticeboard
  ? mongoose.model("Noticeboard")
  : mongoose.model("Noticeboard", noticeboardSchema);

export default Noticeboard;
