class ApplicationController < ActionController::Base
  default_form_builder StimulusDemo::FormBuilder

  include Authentication

  def after_sign_in_path
    channel_path
  end
end
