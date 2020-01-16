class PostsController < ApplicationController

    before_action :protected_action


    def create
        post = Post.create(post_params)
        post.update(user: @current_user)

        if post.valid?
            render json: post
        else
            render json: { errors: post.errors.full_messages }, status: :not_acceptable
        end
    end

    private

    def protected_action
        if !logged_in?
            render json: { errors: 'you must be logged in'}, status: :unauthorized
        end
    end

    def post_params
        params.require(:post).permit(:title, :content)
    end
end
