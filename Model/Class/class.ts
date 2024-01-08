import mongoose, { Document, Schema, model } from 'mongoose';

interface IClass extends Document {

    classname: String;
    classalias: String;
    teacher: Array<{ type: Schema.Types.ObjectId, ref: 'Teacher' }>;
    size: String;
}

const classSchema = new Schema<IClass>({

    classname : { String, required: true },
    classalias : String,
    teacher :  {type :[{ type: Schema.Types.ObjectId, ref: 'Teacher'}], required: true},
    size : String


},  { timestamps: true })

const Class = model<IClass>("Class", classSchema);

export default Class;
