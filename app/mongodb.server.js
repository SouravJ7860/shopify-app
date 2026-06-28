import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  try {
    console.log("URI:", process.env.MONGODB_URI);

    if (isConnected) return;

    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error(error);
    throw error;
  }
};