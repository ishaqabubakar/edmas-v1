import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  school: {type: mongoose.Schema.Types.ObjectId,ref: 'School'},
  title: {
    type: String,
   
  },
  description: { type: String },
  date: {
    type: Date,
   
  },
});
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
