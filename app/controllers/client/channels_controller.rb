module Client
  class ChannelsController < ApplicationController
    layout 'client'

    before_action :require_sign_in, :primary_channel_redirect

    def show
      @channel = Channel.find(params[:id])
      @messages = @channel.messages.order(created_at: :asc)
    end

    private

    def primary_channel_redirect
      redirect_to channel_path Channel.primary if params[:id] == 'primary'
    end
  end
end
