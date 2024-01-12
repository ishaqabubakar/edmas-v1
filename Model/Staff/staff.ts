import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    school: {type: mongoose.Schema.ObjectId,ref: 'School'},
    
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
    },
    stafftype: {
      type: String,
    },
  },
  { timestamps: true }
);

const Staff = mongoose.models.Section
  ? mongoose.model("Staff")
  : mongoose.model("Staff", staffSchema);

export default Staff;
