# Simple authentication module. API ispired by Sorcery: https://github.com/Sorcery/sorcery#core
module Authentication
  extend ActiveSupport::Concern

  included do
    helper_method :current_user, :signed_in?
  end

  def current_user
    defined?(@current_user) || @current_user = User.find_by_id(session[:user_id])

    @current_user
  end

  def signed_in?
    current_user.present?
  end

  def sign_in(email, password)
    reset_session

    user = User.find_by_email(email)&.authenticate password

    if user
      prevent_session_fixation_attack
      auto_sign_in user
    end

    user
  end

  def sign_out
    return unless signed_in?

    ActionCable.server.disconnect current_user: @current_user
    @current_user = nil
    reset_session
  end

  def auto_sign_in(user)
    session[:user_id] = user.id.to_s
    @current_user = user
  end

  def require_sign_in
    not_authenticated unless signed_in?
  end

  def not_authenticated
    redirect_to user_session_path
  end

  def redirect_if_signed_in
    redirect_to after_sign_in_path if signed_in?
  end

  private

  # When authenticating we need to reset session id in order to prevent session fixation attacks
  def prevent_session_fixation_attack
    old_session = session.dup.to_hash
    reset_session
    old_session.each_pair do |k, v|
      session[k.to_sym] = v
    end
  end
end
