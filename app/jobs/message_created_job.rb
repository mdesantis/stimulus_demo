class MessageCreatedJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast 'channel:message_created', message: MessagesController.render(message)
  end
end
