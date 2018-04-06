class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name,        null: false,                 index: { unique: true }
      t.boolean :is_primary, null: false, default: false, index: { unique: true, where: '(is_primary IS TRUE)' }

      t.timestamps
    end
  end
end
