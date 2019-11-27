class PostsController < ApplicationController

    def show
        @post = Post.find_by(id: params[:id])
    end

    def new
        @post = Post.new
    end

    def edit
        @post = Post.find_by(id: params[:id])
    end

    def create
        post = Post.new(post_params)

        if post.save
            redirect_to post
        else
            redirect_to new_post
        end
    end

    def update
        post = Post.find(params[:id])

        if post.update(post_params)
            redirect_to post
        else
            redirect_to edit_post
        end
    end


    def liked
        post = Post.find_by(id: params[:id])
        if !post.likes
            post.likes = 1
            post.save
        else
            post.likes += 1
            post.save

        end
        redirect_to post
    end

    private

    def post_params
        params.require(:post).permit(:title,:content,:blogger_id, :destination_id)
    end
    
end