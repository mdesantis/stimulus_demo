module Client
  class ChannelsController < ApplicationController
    layout 'client'

    before_action :require_sign_in

    def show
      @channel = Channel.find(params[:id])
      @messages = @channel.messages.order(created_at: :asc)
    end

    def primary
      redirect_to channel_path Channel.primary
    end
  end
end
