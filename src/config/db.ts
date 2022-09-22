import mongoose from 'mongoose'
const MONGO_URI = process.env.MONGO_URI;

const db = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("conntected db");
};

module.exports = db;
