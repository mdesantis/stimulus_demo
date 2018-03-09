class HomeController < ApplicationController
  def index
    redirect_to logged_in? ? channel_path : new_user_session_path
  end
end
