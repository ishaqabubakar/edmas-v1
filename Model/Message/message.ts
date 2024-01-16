import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    school: {type: mongoose.Schema.Types.ObjectId,ref: 'School'},
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Message = mongoose.models.Material
  ? mongoose.model("Message")
  : mongoose.model("Message", messageSchema);

export default Message;
