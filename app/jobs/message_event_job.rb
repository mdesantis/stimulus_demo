class MessageEventJob < ApplicationJob
  queue_as :default

  def perform(message_id, event)
    send event, message_id
  end

  private

  def create(message_id)
    message = Channel::Message.find(message_id)

    ActionCable.server.broadcast(
      'client:messages',
      event: :create,
      detail: { message: Client::ChannelsController.render(message) }
    )
  end

  def destroy(message_id)
    ActionCable.server.broadcast(
      'client:messages',
      event: :destroy,
      detail: { messageId: message_id }
    )
  end
end
