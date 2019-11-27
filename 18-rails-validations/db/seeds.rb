# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

specialisms = Specialism.create([
    { name: 'face' },
    { name: 'ear' },
    { name: 'chest' },
    { name: 'leg' },
    { name: 'arm' },
    { name: 'foot' }
])

Doctor.create([
    { name: 'sam', specialism: specialisms[0]},
    { name: 'jo', specialism: specialisms[1]},
    { name: 'sarah', specialism: specialisms[2]},
    { name: 'sofia', specialism: specialisms[3]},
    { name: 'joe', specialism: specialisms[4]}
])