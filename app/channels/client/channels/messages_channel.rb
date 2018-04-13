module Client
  module Channels
    class MessagesChannel < ApplicationCable::Channel
      def subscribed
        # stream_from "some_channel"
      end

      def unsubscribed
        # Any cleanup needed when channel is unsubscribed
      end

      def create(data)
        # byebug
        Channel::Message.create! channel_message_params(data).merge(author: current_user)
      end

      def channel_message_params(data)
        data_to_parameters(data).require(:channel_message).permit(
          :channel_id,
          :text
        )
      end
    end
  end
end
