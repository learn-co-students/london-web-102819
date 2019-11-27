class Blogger < ApplicationRecord
    has_many :posts

    def total_likes
        self.posts.sum(:likes)
    end

    def most_liked
        self.posts.max_by{|post| post.likes}
    end
end
