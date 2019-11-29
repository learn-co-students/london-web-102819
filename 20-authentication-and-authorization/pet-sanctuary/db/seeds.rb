# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
  {
    username: "RobbStark",
    email: "kinginnorth@winterfell.com",
    password: "16_and_king"
  },
  {
    username: "SansaStark",
    email: "littlebird@theeyrie.com",
    password: "jonquil_77"
  },
  {
    username: "AryaStark",
    email: "noone@nowhere.com",
    password: "stupid_password"
  },
  {
    username: "BrandonStark",
    email: "3eyedcrow@beyondthewall.com",
    password: "bran_the_broken000"
  },
  {
    username: "RickonStark",
    email: "annoying@whocares.com",
    password: "rickons_password:)"
  },
  {
    username: "JonSnow",
    email: "lordsnow@thewall.com",
    password: "ygritte123!"
  }
])

Pet.create([
  {
    name: "Grey Wind",
    age: 2,
    user_id: 1
  },
  {
    name: "Lady",
    age: 1,
    user_id: 2
  },
  {
    name: "Nymeria",
    age: 3,
    user_id: 3
  },
  {
    name: "Summer",
    age: 3,
    user_id: 4
  },
  {
    name: "Shaggydog",
    age: 3,
    user_id: 5
  },
  {
    name: "Ghost",
    age: 3,
    user_id: 6
  }
])
