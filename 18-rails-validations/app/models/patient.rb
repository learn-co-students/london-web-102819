class Patient < ApplicationRecord
  has_many :appointments
  validates :name, presence: true
  validates :name, uniqueness: true 

end
