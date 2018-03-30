class MessageDestroyedJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      'client:messages',
      event: :destroy,
      detail: { messageId: message.id }
    )
  end
end
