class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    User.destroy(params[:id])

    redirect_to pets_path
  end
end
