// db.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;