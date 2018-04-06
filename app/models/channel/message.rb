class Channel < ApplicationRecord
  class Message < ApplicationRecord
    belongs_to :author, class_name: 'User'
    belongs_to :channel

    delegate :username, to: :author, prefix: true

    validates_presence_of :text

    after_create_commit  { trigger_event 'create' }
    after_destroy_commit { trigger_event 'destroy' }

    private

    def trigger_event(event)
      MessageEventJob.perform_later id, event
    end
  end
end
