import mongoose, { Schema, model } from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    classname: {
      type: Schema.Types.ObjectId,
      ref: "Class",
     
    },
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    student: {type: mongoose.Schema.Types.ObjectId, ref: "Student"},
    amount: {
      type: Number,
    
    },
    title: {
      type: String,
    
    },

    description: {
      type: String,
    },
    status: {
      type: String,
    
    },
    section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
    transactiondate: {
      type: Date,
    
    },
  },
  { timestamps: true }
);

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
