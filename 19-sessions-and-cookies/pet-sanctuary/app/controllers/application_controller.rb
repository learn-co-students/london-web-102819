class ApplicationController < ActionController::Base
  # This makes the current_user method available to any of our other controllers.
  helper_method :current_user

  # If there is a value in the user_id key in the session hash, we use it to find that instance of user and return them i.e. this method returns the user who is currently logged in.
  def current_user
    if session[:user_id]
      User.find(session[:user_id])
    end
  end
end
