import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
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

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);


export default Admin;
