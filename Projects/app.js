const express = require("express");
const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: "book1",
  },
  {
    id: 2,
    title: "book2",
  },
  {
    id: 3,
    title: "book3",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our book store api",
  });
});

app.get("/get", (req, res) => {
  res.json(books);
});

app.get("/get/:bookId", (req, res) => {
  const getBooks = books.find(
    (book) => book.id === parseInt(req.params.bookId)
  );

  console.log(getBooks);

  if (getBooks) {
    res.status(200).json(getBooks);
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `book ${books.length + 1}`,
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "Book added",
  });
});

app.put("/update/:bookId", (req, res) => {
  const bookEdit = books.find(
    (bookItem) => bookItem.id === parseInt(req.params.bookId)
  );
  if (bookEdit) {
    bookEdit.title = req.body.title || bookEdit.title;
    res.json({
      data: bookEdit,
      message: "Book modified",
    });
  } else {
    res.json({
      message: "cannot find the book",
    });
  }
});

app.delete("/delete/:id", (req, res) => {

  const findIndexOfCurrentBook = books.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (findIndexOfCurrentBook != -1) {
    const deleteBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).send({
      message: "Book deleted sucessfully",
      data: deleteBook,
    });
  }else{
    res.status(404).send({
      message: "Book not found",
    });
  }
});
const PORT = 3004;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
