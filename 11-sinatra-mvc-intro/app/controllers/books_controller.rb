class BooksController < ApplicationController

  # Build up the 7 RESTful routes by defining what this controller will do when it gets requests made up of certain HTTP verbs and URLs.

  # Index
  get "/books" do # The route, made up of a HTTP verb and URL - in this case, those are GET and /books.
    @books = Book.all # Make a call to the model to get all the books.
    erb :"books/index" # Render the view for the index page.
  end

  # Show
  get "/books/:id" do # A dynamic route, the :id parameter will soak up any arguments that come after /books/ in the URL e.g. /books/1 and an id key will be made in the params hash to match this.
    @book = Book.find(params[:id]) # Access the value of the id key in the params hash to find the book with the id from the URL.
    erb :"books/show"
  end

end
