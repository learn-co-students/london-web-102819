class SessionsController < ApplicationController
  def new
  end

  def create
    # Try and find an instance of user in our database with the name the user submitted in the form.
    @user = User.find_by(username: params[:user][:username])
    # If we find a user, we set the value of the user_id key in the session hash to the id of that user.
    if @user
      session[:user_id] = @user.id
      redirect_to pets_path
    # If we can't find a user with the username they submitted, we redirect them back to the login page.
    else
      redirect_to new_session_path
    end
  end

  def destroy
    # Destroy all the keys in the session hash, removing the user_id of the currently logged in user and logging them out.
    session.destroy

    redirect_to new_session_path
  end
end
