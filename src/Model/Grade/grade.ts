import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema(
  {

    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    title:{
      type:String
    },
    student:{
      school: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    },
    classname:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Class"
    },
    Section:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Section"
    },
    marks:{
     type:Number
    },
    grade:{
      type:String
    }
  },

  { timestamps: true }
);

const Grade = mongoose.models.Grade || mongoose.model("Grade", gradeSchema);


export default Grade;
