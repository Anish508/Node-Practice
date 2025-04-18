const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, 'Book is required'],
    trim : true,
    maxLength :[100, 'Book title can not bt more than 100 char']
  },
  author:{
    type: String,
    required: [true, 'Author name is required'],
    trim : true,
    maxLength :[100, 'Book title can not bt more than 100 char']
  },
  year:{
    type:Number,
    required:[true, 'year is required'],
    min:[1000, 'year must be atleast 1000'],
    max:[new Date().getFullYear(), 'year cannot be in the future'],
  },
},{timestamps:true})

module.exports = mongoose.model('Book', bookSchema)