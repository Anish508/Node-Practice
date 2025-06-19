const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  instock : Boolean,
  tags : [String]
})

module.exports = mongoose.model("Product", productSchema)