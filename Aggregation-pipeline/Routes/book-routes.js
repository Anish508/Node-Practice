const express = require('express');
const { careteAuthor, createBook, getAuthorWithBook} = require('../controllers/book-controller.js');


const router = express.Router();

router.post("/author", careteAuthor)
router.post("/book", createBook) 
router.get("/book/:id", getAuthorWithBook)

module.exports = router