class ClientChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # stream_from 'channel:message_created'
    stream_from 'client:messages'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
