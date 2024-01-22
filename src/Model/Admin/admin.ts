import mongoose from "mongoose";

const managerSchema = new mongoose.Schema(
  {

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
     
    },
    name: {type: String },
    dob: { type:String },
    email: { type: String },
    password: {type: String },
    address: {
      type:String
    },
    phonenumber:{
      type:String
    },
    gender: {
      type:String
    },
    role: {
      type:String,
      
    },
    
  },
  { timestamps: true }
);

const Manager = mongoose.models.Manager || mongoose.model("Manager", managerSchema);


export default Manager;
