class UsersController < ApplicationController
  def index
    redirect_to new_user_path
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params

    if @user.save
      auto_sign_in @user
      redirect_to channel_path
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :username,
      :password,
      :password_confirmation
    )
  end
end
