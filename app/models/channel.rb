class Channel < ApplicationRecord
  DEFAULT_PRIMARY_CHANNEL_NAME = 'general'.freeze

  alias_attribute :primary, :is_primary

  has_many :messages

  validates_presence_of :name
  validates_uniqueness_of :name, allow_nil: true
  validates_uniqueness_of :primary, conditions: -> { primaries }

  before_validation :set_primary_channel_default_name, on: :create

  scope :primaries, -> { where(primary: true) }

  def self.primary
    primaries.first
  end

  def self.first_or_create_primary!
    primaries.first_or_create!
  end

  private

  def set_primary_channel_default_name
    return if !primary? || !name.nil?

    self.name = DEFAULT_PRIMARY_CHANNEL_NAME
  end
end
