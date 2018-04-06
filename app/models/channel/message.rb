class Channel < ApplicationRecord
  class Message < ApplicationRecord
    PARTIAL_PATH = 'channels/messages/message'.freeze

    belongs_to :author, class_name: 'User'
    belongs_to :channel

    delegate :username, to: :author, prefix: true

    validates_presence_of :text

    after_create_commit  { trigger_event 'create' }
    after_destroy_commit { trigger_event 'destroy' }

    def to_partial_path
      PARTIAL_PATH
    end

    private

    def trigger_event(event)
      MessageEventJob.perform_later id, event
    end
  end
end
