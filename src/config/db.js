const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const db = async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("conntected db");
};

module.exports = db;
