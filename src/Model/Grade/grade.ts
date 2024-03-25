import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    },
    classname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    subject:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
    marks: {     
      type: Number,
    },
    term:{
      type:String
    },
    grade: {
      type: String,
    },        
  },
  { timestamps: true }
);

const Grade = mongoose.models.Grade || mongoose.model("Grade", gradeSchema);

export default Grade;
