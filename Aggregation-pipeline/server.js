require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const productRoutes = require('./Routes/product-routes.js')
const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected successfully'))
.catch((e)=>console.log("Conncetion error - mongodDB:", e))

app.use(express.json())
app.use("/products", productRoutes)
app.listen(process.env.PORT, ()=>{
  console.log(`Server is now running on port: ${process.env.PORT}`);
  
})