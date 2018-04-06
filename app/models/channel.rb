class Channel < ApplicationRecord
  DEFAULT_PRIMARY_CHANNEL_NAME = 'general'.freeze

  alias_attribute :primary, :is_primary

  validates_presence_of :name
  validates_uniqueness_of :name, allow_nil: true
  validates_uniqueness_of :primary, conditions: -> { primary }

  before_validation :set_primary_channel_default_name, on: :create

  scope :primary, -> { where(primary: true) }

  private

  def set_primary_channel_default_name
    return if !primary? || !name.nil?

    self.name = DEFAULT_PRIMARY_CHANNEL_NAME
  end
end
