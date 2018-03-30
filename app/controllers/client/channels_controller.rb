module Client
  class ChannelsController < ApplicationController
    layout 'client'

    before_action :require_sign_in

    def show
    end
  end
end
