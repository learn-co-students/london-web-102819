Bed.destroy_all
BedBug.destroy_all
Place.destroy_all
Infestation.destroy_all

places = [
  {
    address: '1 long road',
    available: true,
    name: 'long house'
  },
  {
    address: '2 long road',
    available: true,
    name: 'long house number 2'
  },
  {
    address: '111 short road',
    available: false,
    name: 'bedbug house'
  }
]

Place.create places

puts "created all places"

place_ids = Place.all.map { |place| place.id }

beds = [
  {
    sheet_colour: 'red',
    place_id: place_ids.sample
  },
  {
    sheet_colour: 'green',
    place_id: place_ids.sample
  },
  {
    sheet_colour: 'maroon',
    place_id: place_ids.sample
  },
  {
    sheet_colour: 'salmon',
    place_id: place_ids.sample
  },
  {
    sheet_colour: 'of the wind',
    place_id: place_ids.sample
  },
  {
    sheet_colour: 'sick',
    place_id: place_ids.sample
  },
  {
    sheet_colour: 'bread',
    place_id: place_ids.sample
  },
  {
    sheet_colour: 'red',
    place_id: place_ids.sample
  },
  {
    sheet_colour: 'tomorrow',
    place_id: place_ids.sample
  },
] 

Bed.create beds

puts "created all beds"


bed_bugs = [
  {
    name: 'darlene',
    size_in_mm: 12
  },
  {
    name: 'elliot',
    size_in_mm: 7
  },
  {
    name: 'mobley',
    size_in_mm: 14
  },
  {
    name: 'tyrell',
    size_in_mm: 18
  },
  {
    name: 'mr robot',
    size_in_mm: 7
  },
  {
    name: 'whiterose',
    size_in_mm: 6
  }
]

BedBug.create bed_bugs

puts "created all bed bugs"

bed_bug_ids = BedBug.all.map { |bed_bug| bed_bug.id }
bed_ids = Bed.all.map { |bed| bed.id }

535.times do
  infestation = Infestation.create bed_id: bed_ids.sample, bed_bug_id: BedBug.where("name = ?", 'elliot')[0].id
  puts "Created infestation, #{infestation.id}"
end