class Passenger
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def rides
    Ride.all.select { |ride| ride.passenger == self }
  end

  def cars
    rides.map { |ride| ride.car }.uniq
  end

  def self.all
    @@all
  end
end