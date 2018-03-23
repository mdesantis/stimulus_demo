class AddAuthorToMessage < ActiveRecord::Migration[5.2]
  def change
    add_reference :messages, :author, foreign_key: { to_table: :users }
  end
end
