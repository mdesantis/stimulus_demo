class Message < ApplicationRecord
  validates_presence_of :text

  after_commit { MessageCreatedJob.perform_later(self) }
end
