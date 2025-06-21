const Author = require('../models/author-model.js')
const Book = require('../models/book-model.js')

const careteAuthor = async(req, res)=>{
  try {
    const author = new Author(req.body)
    await author.save();
    res.status(500).json({
      success:true,
      message:"Author added successfully",
      data : author,
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"some error occured"
    })
  }
}

const createBook = async(req, res)=>{
  try {
    const book = new Book(req.body)
    await book.save();
    res.status(500).json({
      success:true,
      message:"book added successfully",
      data : book,
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"some error occured"
    })
  }
}

const getAuthorWithBook = async(req, res)=>{
  try {
    const book = await Book.findById(req.params.id).populate('author')
    
    if(!book){
      return res.status(404).json({
      success:false,
      message:"Book not found"
    })
    }
    res.status(200).json({
    success:true,
    message:"book object fetched with author",
    data:book,
    })
  } catch (error) {
    console.log(error);
    
    res.status(500).json({
      success:false,
      message:"some error occured"
    })
  }
}
module.exports = {careteAuthor,createBook, getAuthorWithBook }