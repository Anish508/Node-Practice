const express = require('express');
const connectDB = require('./database/db.js')
const env = require('dotenv').config()
const bookRoute = require('./routes/book-route.js')

const app = express();
const PORT = process.env.PORT || 3001


connectDB();

app.use(express.json())

app.use('/api/books', bookRoute)

app.listen(PORT , ()=>{
  console.log("App listening on port:",PORT);
  
})