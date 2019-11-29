class User < ApplicationRecord
  has_many :pets, dependent: :destroy
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

  # Allows us to create secure passwords - when we create an instance of user and pass in a value for the password, this will hash it and store it in the instance's password_digest attribute.
  has_secure_password
end
