class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.citext :email,           null: false, index: { unique: true }
      t.citext :username,                     index: { unique: true }
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
