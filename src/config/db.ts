import mongoose from 'mongoose'
const MONGO_URI = process.env.MONGO_URI;

export const DatabaseConnection = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("conntected db");
};
