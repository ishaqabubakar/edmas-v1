import mongoose, { Schema, model } from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    class: {
      type: Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    student: String,
    amount: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
    transactiondate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
