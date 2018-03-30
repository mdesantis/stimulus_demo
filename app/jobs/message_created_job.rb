class MessageCreatedJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      'client:messages',
      event: :create,
      detail: { message: Client::MessagesController.render(message) }
    )
  end
end
