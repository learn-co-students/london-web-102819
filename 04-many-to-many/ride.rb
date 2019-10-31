class Ride
  attr_reader :passenger, :car, :distance
  @@all = []

  def initialize(passenger, car, distance)
    @car = car
    @passenger = passenger
    @distance = distance
    @@all << self
  end

  def self.all
    @@all
  end
end
