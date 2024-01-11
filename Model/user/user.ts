import mongoose from "mongoose";
import bcrypt from 'bcrypt'


const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
    },
    role:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type:Date
    },
    Address:{
        type:String,
    },
    Gender:{
        type:String
    },

})

UserSchema.pre("save", async function () {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(this.password as string, salt);
      this.password = hashedPassword;
    
    } catch (error) {
      return (error as any);
    }
  });
  
  //Matching user hash password
  UserSchema.methods.matchPassword = async function (enteredPassword: string) {
    try {
      const match = await bcrypt.compare(enteredPassword, this.password);
      return match;
    } catch (error) {
      throw error;
    }
  };

  const User =mongoose.model('User') || mongoose.model('User', UserSchema)