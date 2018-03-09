class User < ApplicationRecord
  EMAIL_FORMAT_REGEXP = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  has_secure_password

  validates_presence_of   :email
  validates_format_of     :email, with: EMAIL_FORMAT_REGEXP, allow_nil: true, allow_blank: true
  validates_uniqueness_of :username, :email, case_sensitive: false
  # validates_presence_of   :password
  validates_length_of     :password,
                          minimum: 4, allow_nil: true, allow_blank: true, if: -> { new_record? || password_changed? }
end
