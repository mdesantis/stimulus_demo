class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      # Rubocop issue: https://github.com/bbatsov/rubocop/issues/5657
      t.citext :email,           null: false, index: { unique: true } # rubocop:disable Layout/ExtraSpacing
      t.citext :username,                     index: { unique: true }
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
