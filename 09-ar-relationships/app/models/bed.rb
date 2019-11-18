class Bed < ActiveRecord::Base
  belongs_to :place
  has_many :infestations
  has_many :bed_bugs, through: :infestations
end