class ApplicationController < ActionController::Base
  default_form_builder StimulusDemo::FormBuilder

  include Authentication
end
