require 'pry'

class Car
  attr_accessor :make, :model, :colour, :year, :mileage

  def initialize(make, model, colour, year, mileage)
    @make = make
    @model = model
    @colour = colour
    @year = year
    @mileage = mileage
  end

  def paint(desired_colour)
    @colour = desired_colour
  end

  def promo_message(customer_name)
    "Hi, #{customer_name.capitalize}, our #{@model}, year #{@year} is on sale!"
  end
end

my_civic = Car.new('honda', 'civic', 'green', 1999, 7_657_837)

binding.pry

p my_civic

