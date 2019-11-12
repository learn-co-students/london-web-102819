class BedBug < ActiveRecord::Base
  has_many :infestations
  has_many :beds, through: :infestations
end