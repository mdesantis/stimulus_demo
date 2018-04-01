class MessageEventJob < ApplicationJob
  queue_as :default

  def perform(message, event)
    send event, message
  end

  private

  def create(message)
    ActionCable.server.broadcast(
      'client:messages',
      event: :create,
      detail: { message: Client::MessagesController.render(message) }
    )
  end

  def destroy(message)
    ActionCable.server.broadcast(
      'client:messages',
      event: :destroy,
      detail: { messageId: message.id }
    )
  end
end
