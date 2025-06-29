const mongoose = require('mongoose')

const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MONGODB Connected Successfully");
    
  } catch (error) {
    console.log("Mongo DB connection error", error);
    process.exit(1)
  }
};

module.exports = connectDB