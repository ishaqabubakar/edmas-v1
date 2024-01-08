import mongoose, { Document, Schema, model } from 'mongoose';

interface IExam extends Document{

    examname : String;
    subject : Array<{type : Schema.Types.ObjectId, ref: 'Subject'}>;
    examdate: Date;
    status: String;


}

const examSchema = new Schema<IExam>({
    examname : { String, required: true },
    subject : {type: [{type: Schema.Types.ObjectId, ref: 'Subject' }], required: true},
    examdate: Date,
    status: String
},{timestamps : true})

const Exam = model<IExam>('Exam', examSchema)

export default Exam;