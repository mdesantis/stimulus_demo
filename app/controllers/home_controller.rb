class HomeController < ApplicationController
  def index
    redirect_to signed_in? ? channel_path : new_user_session_path
  end
end
