require 'securerandom'

Trainer.delete_all
Pokemon.delete_all

trainers_name = [
  'Prince',
  'Dick',
  'Garry',
  'Jason',
  'Matt',
  'Noah',
  'Adam',
  'Arthur'
]

trainer_count = 0
team_count = 0

trainer_collection = []

trainers_name.each do |name|
  trainer_collection << Trainer.create(name: name)
  trainer_count += 1
end
puts 'Created Trainers'

trainer_collection.each do |trainer|
  team_size = (SecureRandom.random_number(6) + 1).floor

  (1..team_size).each do |poke|
    name = Faker::Name.first_name
    species = Faker::Games::Pokemon.name
    Pokemon.create(nickname: name, species: species, trainer_id: trainer.id)
  end
end
puts 'Created teams'