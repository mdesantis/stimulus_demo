class User < ApplicationRecord
  has_secure_password

  validates_presence_of   :email
  validates_uniqueness_of :username, :email, case_sensitive: false
  validates_length_of     :password, minimum: 8, if: -> { new_record? || password_changed? }
end
