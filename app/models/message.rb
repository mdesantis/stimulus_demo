class Message < ApplicationRecord
  validates_presence_of :text

  after_commit :perform_message_created_job, on: :create

  private

  def perform_message_created_job
    MessageCreatedJob.perform_later(self)
  end
end
