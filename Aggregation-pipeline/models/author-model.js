const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: String,
  bio: String,
}, { timestamps: true }); // corrected key

module.exports = mongoose.model("Author", AuthorSchema);
