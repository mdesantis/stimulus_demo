module Client
  module Channels
    class MessagesController < ApplicationController
      before_action :require_sign_in, :find_channel

      def create
        @message = @channel.messages.build(message_params.merge(author: current_user))

        if @message.save
          head :created
        else
          render json: @message.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @channel.messages.find(params[:id]).destroy

        head :no_content
      end

      private

      def find_channel
        @channel = Channel.find(params[:channel_id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def message_params
        params.require(:channel_message).permit(:text)
      end
    end
  end
end
