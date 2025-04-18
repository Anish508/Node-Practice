const Book = require("../models/book-model.js");

const getAlBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    if (allBooks?.length > 0) {
      res.status(201).json({
        success: true,
        message: "Book listed successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went  wrong! please try again",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;

    const bookDetailsFindByID = await Book.findById(getCurrentBookId);

    if (!bookDetailsFindByID) {
      return res.status(404).json({
        success: false,
        message: "Book with the current ID not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Single book fetched successfully",
      data: bookDetailsFindByID,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newBook = await Book.create(newBookFormData);
    if (newBook) {
      res.status(201).json({
        success: true,
        message: "Book added successully",
        data: newBook,
      });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      success: false,
      message: "something went  wrong! please try again",
    });
  }
};

const updateSingleAlBook = async (req, res) => {
  try {
    const updateBookFormData = req.body;
    const updateBook = await Book.findByIdAndUpdate(
      req.params.id,
      updateBookFormData,
      {
        new: true,
      }
    );

    if (!updateBook) {
      res.status(404).json({
        success: false,
        message: "Book id not found",
      });
    }

    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data: updateBook,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      success: false,
      message: "something went  wrong! please try again",
    });
  }
};

const DeleteBook = async (req, res) => {
  try {
    const getDeleteBookID = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(getDeleteBookID);

    if (!deleteBook) {
      res.status(201).json({
        success: false,
        message: "Book id not found",
      });
    }

    res.status(201).json({
      success: true,
      message: "Book deleted successfully",
      data: deleteBook,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "something went  wrong! please try again",
    });
  }
};

module.exports = {
  getAlBooks,
  getSingleBook,
  updateSingleAlBook,
  addNewBook,
  DeleteBook,
};
