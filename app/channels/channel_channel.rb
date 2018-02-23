# Look at the name of this channel lol!
class ChannelChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # stream_from 'channel:message_created'
    stream_from 'channel:messages'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
