class MessageCreatedJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      'channel:messages',
      event: :create,
      detail: { message: MessagesController.render(message) }
    )
  end
end
