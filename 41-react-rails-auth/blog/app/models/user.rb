class User < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: true

    def token
        JWT.encode({ user_id: self.id }, ENV['RAILS_SECRET'])
    end
end
