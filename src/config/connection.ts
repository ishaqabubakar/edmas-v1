// db.ts
import mongoose from 'mongoose';

 const NEXT_PUBLIC_MONGODB_URI =process.env.NEXT_PUBLIC_MONGODB_URI as any
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sms:sw0riwegfaOKHjNh@sms.objcnmd.mongodb.net/sms?retryWrites=true&w=majority");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;