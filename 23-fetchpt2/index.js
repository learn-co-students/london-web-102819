const getBooksButton = document.querySelector("#get-books");
getBooksButton.addEventListener("click", getAllBooks);

function getAllBooks() {
  fetch("http://localhost:3000/books")
    .then(data => data.json())
    .then(console.table);
}

function createABook(book) {
  const li = document.createElement("li");
  li.innerText = book.title + "  𝐗";

  // li.addEventListener("click", function(event) {
  //   APIDeleteABook(book.id);
  //   li.remove();
  // });

  li.addEventListener("click", function(event) {
    const newTitle = document.querySelector("input").value;
    updateBookTitle(book.id, newTitle);
  });

  return li;
}

function createAllBooks(books) {
  const booksUl = document.querySelector("#books-list");
  booksUl.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    booksUl.append(createABook(books[i]));
  }
}

function updateBookTitle(id, newTitle) {
  const bookObject = {
    title: newTitle
  };
  fetch(`http://localhost:3000/books/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookObject)
  });
}

function APICreateABook(bookDataObject) {
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookDataObject)
  });
}

function APIDeleteABook(id) {
  fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE"
  });
}
