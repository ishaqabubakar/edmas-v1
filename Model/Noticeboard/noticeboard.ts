import mongoose from "mongoose";

const noticeboardSchema = new mongoose.Schema({
  
  school: {type: mongoose.Schema.ObjectId,ref: 'School'},
  title: {
    type: { type: String },
    required: true,
  },
  description: { type: String },
  date: {
    type: { type: Date },
    required: true,
  },
});

const Noticeboard = mongoose.models.Noticeboard
  ? mongoose.model("Noticeboard")
  : mongoose.model("Noticeboard", noticeboardSchema);

export default Noticeboard;
