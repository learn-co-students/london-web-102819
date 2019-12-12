const getBooksButton = document.querySelector("#get-books");
getBooksButton.addEventListener("click", getAllBooks);

function getAllBooks() {
  fetch("http://localhost:3000/books")
    .then(data => data.json())
    .then(createAllBooks);
}

function createABook(book) {
  const li = document.createElement("li");
  li.innerText = book.title;
  return li;
}

function createAllBooks(books) {
  const booksUl = document.querySelector("#books-list");
  for (let i = 0; i < books.length; i++) {
    booksUl.append(createABook(books[i]));
  }
}

function APICreateABook(bookData) {
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookData)
  });
}
