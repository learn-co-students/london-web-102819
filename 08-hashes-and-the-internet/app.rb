require 'pry'
require 'rest-client'
require 'json'

puts "give me a caharcter name"
char_name_search_term = gets.chomp

api_endpoint = "https://swapi.co/api/people/?search=#{char_name_search_term}"

puts 'Loading pease wait'
response = RestClient.get(api_endpoint)

hash = JSON.parse(response.body)

def pretty_print_character_details(character_hash)
    puts "Name: #{character_hash["name"]}"
    puts "Mass: #{character_hash["mass"]} units???"
    puts "Birth year: #{character_hash["birth_year"]}"
end

pretty_print_character_details(hash["results"][0])
