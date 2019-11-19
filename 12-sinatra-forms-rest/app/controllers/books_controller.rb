class BooksController < ApplicationController

  get "/books" do
    @books = Book.all
    erb :"books/index"
  end

  # New - We put this above the show route, otherwise, the word new would take the place of the :id parameter and we'd end up getting the show route for a book with an id of new.
  get "/books/new" do
    # Create a new empty instance of book so we can put logic in our form to check whether it should post or patch depending on whether the instance of book is empty or if it has an id.
    @book = Book.new
    erb :"books/new"
  end

  get "/books/:id" do
    id = params[:id]
    @book = Book.find(id)
    erb :"books/show"
  end

  # Create - The ? at the end of the URL means this route will match a post request to either /books or /books/
  post "/books/?" do
    # Create a new instance of book with the params hash created based on the value of the input fields in the form the user submitted.
    @book = Book.create(params)

    # Redirect to the show page of the book we've just created by grabbing its id.
    redirect "/books/#{@book.id}"
  end

  # Edit
  get "/books/:id/edit" do
    # Find the specifc instance of book we need to edit by using the :id in the URL. We can then have logic in our form to send a patch request if the instance has an id and therefore, already exists in our database.
    id = params[:id]
    @book = Book.find(id)

    erb :"books/edit"
  end

  # Update
  patch "/books/:id" do
    id = params[:id]
    # Find the book we need to update by using the :id in the URL.
    @book = Book.find(id)
    # Change the book's properties to be whatever the user typed into the relevant input fields.
    @book.title = params[:title]
    @book.author = params[:author]
    @book.snippet = params[:snippet]
    # Save the book, updating the corresponding row in the database with its new values.
    @book.save

    # Redirect to the show page of the book we've just updated by grabbing its id.
    redirect "/books/#{@book.id}"
  end

  # Destroy
  delete "/books/:id" do
    # Find and delete the book we need to by using the :id in the URL.
    id = params[:id]
    Book.destroy(id)

    # Redirect to the index page.
    redirect "/books"
  end


end
