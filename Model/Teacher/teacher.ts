import mongoose, { Document, Schema , model} from 'mongoose';

interface ITeacher extends Document {
  name: string;
  dob: string;
  email: string;
  password: string;
  address: string;
  phonenumber: string;
  gender: string;
  role: string;
  class: string;
}

const teacherSchema = new Schema<ITeacher>({
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

const Teacher = model<ITeacher>("Teacher", teacherSchema);

export default Teacher;
