import mongoose, { Document, Schema, model } from 'mongoose';

interface IGrade extends Document{

    gradename: String;
    gradepoint: String;
    markrange: String;
    comment: String;
}

const gradeSchema = new Schema<IGrade>({

    gradename: {String, required: true},
    markrange: {String, required: true},
    gradepoint: String,
    comment: String


}, {timestamps : true})

const Grade = model<IGrade>('Grade', gradeSchema)

export default Grade;