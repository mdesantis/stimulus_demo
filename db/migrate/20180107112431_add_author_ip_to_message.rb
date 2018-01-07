class AddAuthorIpToMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :author_ip, :cidr
  end
end
