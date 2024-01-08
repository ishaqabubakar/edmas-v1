import mongoose, { Document, Schema, model } from 'mongoose';

interface IAssignment extends Document{

    title: String ;
    class: Array<{type: Schema.Types.ObjectId, ref: 'Class'}>;
    assignedby: Array<{type: Schema.Types.ObjectId, ref: 'Teacher'}>
    description: String;
    attachment: String;
}

const assignmentSchema = new Schema<IAssignment>({

    title: { String, required: true },
    class: {type : [{type : Schema.Types.ObjectId, ref: 'Class' }], required: true},
    assignedby: {type: [{type : Schema.Types.ObjectId, ref: 'Teacher'}], required: true},
    description: String

},{timestamps : true})

const Assignment = model<IAssignment>('Assignment',assignmentSchema)

export default Assignment;