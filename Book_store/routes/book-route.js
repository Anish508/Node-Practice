const express = require('express');
const { getSingleBook, getAlBooks, updateSingleAlBook, addNewBook, DeleteBook } = require('../controllers/book-controller.js');

const router = express.Router(); // ✅ Corrected line

router.get('/get', getAlBooks);
router.get('/get/:id', getSingleBook);
router.post('/add', addNewBook);
router.put('/update/:id', updateSingleAlBook);
router.delete('/delete/:id', DeleteBook);

module.exports = router;
