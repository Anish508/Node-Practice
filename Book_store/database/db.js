const mongoose = require('mongoose')

const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MONGODB is connected successfully");
    
  } catch (error) {
    console.log("MongoDB error:",error);
    process.exit()
  }
}

module.exports= connectDB;