class RemoveAuthorIpFromMessage < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :author_ip, :cidr
  end
end
