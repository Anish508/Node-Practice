const mongoose  = require('mongoose');


const bookShema = mongoose.Schema({
 title: String,
 author:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Author',
 },
}, {timestamps:true})

module.exports = mongoose.model("Book", bookShema)