require 'pry'

require_relative './car'
require_relative './passenger'
require_relative './ride'

# create the test data

car1 = Car.new('honda', 'civic', 'green', 1999, 318315)
car2 = Car.new('honda', 'accord', 'salmon', 2003, 4)
passenger1 = Passenger.new('dan')
passenger2 = Passenger.new('joe')

Ride.new(passenger1, car1, 53)
Ride.new(passenger1, car1, 52)
Ride.new(passenger1, car2, 51)
Ride.new(passenger1, car1, 50)
Ride.new(passenger2, car2, 1)
Ride.new(passenger2, car1, 0.002)

binding.pry
0