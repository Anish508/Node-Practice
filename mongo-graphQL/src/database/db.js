const mongoose = require('mongoose')
const Product = require('../models/product.js')

const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected successfully");
    
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

module.exports = connectDB