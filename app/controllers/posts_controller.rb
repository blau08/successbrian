class PostsController < ApplicationController
  respond_to :json

  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    post = Post.new(post_params)
    post.save!
    render json: @posts
  end

private

  def post_params
    params.require(:post).permit(:title, :story)
  end
end
