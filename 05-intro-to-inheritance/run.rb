require 'pry'

class LivingCreature
  @@count = 0
  def initialize(name)
    @name = name
    @@count += 1
  end

  def self.count
    @@count
  end

  def to_s
    "#{self.class.name}, #{@name}"
  end

  def breathe
    '*breathing noises*'
  end
end

module Walkable
  def walk
    "i am #{self.class.name.downcase}-walking"
  end
end

class Cat < LivingCreature
  include Walkable
  attr_reader :name
end

class Fish < LivingCreature
  attr_reader :name
end

class Dog < LivingCreature
  include Walkable
  attr_reader :name, :collar_colour

  def initialize(name, collar_colour)
    super(name)
    @collar_colour = collar_colour
    @@count += 3
  end

  def health_check
    if count_fleas > 500
      puts 'yikes'
    else
      puts 'yeah im fine'
    end
  end

  private

  def count_fleas
    (rand * 1000).round
  end
end

class Hamster < LivingCreature
  include Walkable
  attr_reader :name
end


fido = Dog.new('fido', 'red')
kitty = Cat.new('kitty')
hamster_351 = Hamster.new('hamster_351')

binding.pry
