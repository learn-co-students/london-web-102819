fetch("http://localhost:3000/books")
  // .json() reads the JSON body
  // of the promise return value
  // and makes a JS OBJECT out of it
  .then(data => data.json())
  // every method you pass in as an argument
  // to .then() implicitly receives the resolved
  // value of the previous promise
  .then(createAllBooks);
// is equivalent to:
// .then(books => createAllBooks(books));

fetch("http://localhost:3000/books")
  .then(function(data) {
    return data.json();
  })
  .then(function(books) {
    createAllBooks(books);
  });

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
