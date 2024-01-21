import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    location: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const School = mongoose.models.School || mongoose.model("School", schoolSchema);

export default School;
