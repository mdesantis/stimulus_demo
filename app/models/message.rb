class Message < ApplicationRecord
  belongs_to :author, class_name: 'User'

  delegate :username, to: :author, prefix: true

  validates_presence_of :text

  after_commit :perform_message_created_job, on: :create
  after_commit :perform_message_destroyed_job, on: :destroy

  private

  def perform_message_created_job
    MessageCreatedJob.perform_later(self)
  end

  def perform_message_destroyed_job
    MessageDestroyedJob.perform_now(self)
  end
end
