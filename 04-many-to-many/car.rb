class Car
  attr_accessor :make, :model, :colour, :year, :mileage
  @@all = []

  def initialize(make, model, colour, year, mileage)
    @make = make
    @model = model
    @colour = colour
    @year = year
    @mileage = mileage
    @@all << self
  end

  def paint(desired_colour)
    @colour = desired_colour
  end

  def rides
    Ride.all.select { |ride| ride.car == self }
  end

  def total_distance
    total_miles_driven = 0
    rides.each do |ride|
      total_miles_driven += ride.distance
    end
    total_miles_driven
  end

  def average_ride_distance
    total_distance / rides.size
  end

  def passengers
    rides.map { |ride| ride.passenger }.uniq
  end

  def self.all
    @@all
  end
end

