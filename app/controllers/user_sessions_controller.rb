class UserSessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    if sign_in sign_in_params[:email], sign_in_params[:password]
      redirect_to channel_path
    else
      @user = User.new sign_in_params
      flash.now.alert = 'Email o password errate. Ritenta'
      render :new
    end
  end

  def show
    redirect_to action: :new
  end

  def destroy
    sign_out
    redirect_to root_path, notice: 'Ti sei sloggato'
  end

  private

  def sign_in_params
    params.require(:user).permit(
      :email,
      :password
    )
  end
end
