class User < ApplicationRecord
  # If an instance of user is destroyed, also destroy every instance of pet that belongs to them
  has_many :pets, dependent: :destroy
end
