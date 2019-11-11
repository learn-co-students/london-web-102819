require 'pry'
require 'rest-client'
require 'json'

api_endpoint = 'https://swapi.co/api/people/1/'

response = RestClient.get(api_endpoint)

binding.pry