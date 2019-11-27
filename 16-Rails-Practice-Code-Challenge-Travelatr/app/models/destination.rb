class Destination < ApplicationRecord
    has_many :posts

    def uniq_age_avg
        unique_authors = self.posts.map{|post| post.blogger}.uniq
        total_age = unique_authors.reduce(0) do |curr,acc|
            curr + acc.age
        end
        total_age / unique_authors.length
    end

    def featured_post
        self.posts.max_by{|post| post.likes}
    end

    def most_recent_5
        self.posts.reverse[0..4]
      end
end
