import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { String,required: true} ,
  dob: {String,required : true},
  email: {String,required: true},
  password: {String,required : true},
  address: String,
  phonenumber: String,
  gender: String,
  role: String,
  class: String,
}, { timestamps: true });

const Teacher = mongoose.models.Teacher|| mongoose.model("Teacher", teacherSchema);

export default Teacher;
