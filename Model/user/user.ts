import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
   
  },
  password: {
    type: String,
   
  },
  role: {
    type: String,
   
  },
  name:{
    type:String
  }
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
