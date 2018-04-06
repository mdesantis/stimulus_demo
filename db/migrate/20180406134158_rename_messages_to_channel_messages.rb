class RenameMessagesToChannelMessages < ActiveRecord::Migration[5.2]
  def change
    rename_table :messages, :channel_messages
  end
end
