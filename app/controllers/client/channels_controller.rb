module Client
  class ChannelsController < ApplicationController
    layout 'client'

    before_action :require_sign_in

    def show
      @messages = Message.all.order(created_at: :asc)
    end
  end
end
