import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String },
  date: {
    type: Date,
    required: true,
  },
});

const Event = mongoose.models.Event
  ? mongoose.model("Event")
  : mongoose.model("Event", eventSchema);

export default Event;
