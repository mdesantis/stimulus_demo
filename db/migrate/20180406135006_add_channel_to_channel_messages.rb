class AddChannelToChannelMessages < ActiveRecord::Migration[5.2]
  def change
    add_reference :channel_messages, :channel, foreign_key: true

    reversible do |direction|
      direction.up do
        Channel.first_or_create_primary!

        Channel::Message.where(channel_id: nil).update_all channel_id: Channel.primary.id
      end
    end
  end
end
