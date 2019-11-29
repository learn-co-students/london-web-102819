class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:user][:username])
    # If we call authenticate on an instance of user and pass in a string, it will check if a hashed version of the password would match the user's password digest. If it does, we log the user in...
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to pets_path
    # ...otherwise, we set the flash hash to an ambigious authentication error message and redirect them back to the login page.
    else
      flash[:notice] = "Sorry, we can't find a user with that username and password"
      redirect_to new_session_path
    end
  end

  def destroy
    session.destroy
    redirect_to new_session_path
  end
end
