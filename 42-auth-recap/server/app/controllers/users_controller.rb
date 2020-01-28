class UsersController < ApplicationController
  def signin
    user = User.find_by(username: params[:username])
    if user and user.authenticate(params[:password])
      render json: { token: issue_token({ id: user.id }) }
    else
      render json: { error: "Username/password combo invalid." }, status: 401
    end
  end

  def signup
    user = User.new(username: params[:username], password: params[:password])

    if user.save
      render json: user
    else
      render json: { error: user.errors.full_messages }, status: 403
    end
  end

  def validate
    user = get_current_user
    if user
      render json: {message:'YAY'}
    else
      render json: {message:'NAY'}, status: 418
    end
  end

  def get_my_characters
    user = get_current_user
    if user
      render json: user.characters
    else
      render json: {error:'WRONG!'}, status: 403
    end
  end
end
