const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURL = process.env.MONGO_URL;
  return await mongoose.connect(mongoURL);
};

module.exports = connectDB;
