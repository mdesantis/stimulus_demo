# Simple authentication module. API ispired by Sorcery: https://github.com/Sorcery/sorcery#core
module Authentication
  extend ActiveSupport::Concern

  included do
    helper_method :current_user, :logged_in?
  end

  def current_user
    defined?(@current_user) || @current_user = User.find_by(id: session[:user_id])

    @current_user
  end

  def logged_in?
    current_user.present?
  end

  def auto_login(user)
    session[:user_id] = user.id.to_s
    @current_user = user
  end

  def require_login
    not_authenticated unless logged_in?
  end

  def not_authenticated
    redirect_to new_user_session_path
  end
end
