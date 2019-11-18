# Rack config file, defines the configuration of our server.

require_relative './config/environment'

# Runs the ApplicationController, but includes the BooksController as well. When a client makes a request to our server, it hits this file first and Rack will send the request on to whichever controller contains the route which matches their request.
run ApplicationController
use BooksController
