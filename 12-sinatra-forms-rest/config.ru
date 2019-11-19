require_relative './config/environment'
# When a user sends a request to our server, Rack::MethodOverride will check it. If the params hash the request comes with has a key called _method, Rack::MethodOverride will change the HTTP verb of the request to the value of the _method key. It will then send the request on to the appropriate controller.
use Rack::MethodOverride

run ApplicationController
use BooksController
