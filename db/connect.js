const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_CONNECTION_STRING;

const connectDB = async() => {
  try {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("Error connecting to MongoDB:", err);
  process.exit(1);
}
}

module.exports = connectDB
