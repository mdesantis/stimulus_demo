class MessageEventJob < ApplicationJob
  queue_as :default

  def perform(message_id, event)
    send event, message_id
  end

  private

  def create(message_id)
    message = Channel::Message.find_by_id(message_id)

    # The message could have been deleted before the job started
    return unless message

    ActionCable.server.broadcast(
      'client:messages',
      event: :create,
      detail: {
        message: message,
        views: { message: Client::ChannelsController.render(message) }
      }
    )
  end

  def destroy(message_id)
    ActionCable.server.broadcast(
      'client:messages',
      event: :destroy,
      detail: { message: { id: message_id } }
    )
  end
end
