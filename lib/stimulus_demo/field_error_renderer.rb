require 'nokogiri'

module StimulusDemo
  class FieldErrorRenderer
    def initialize(html_tag, _instance = nil)
      @html_tag = html_tag
    end

    def render
      html_fragment.search(':first').add_class('field-with-errors').to_s.html_safe
    end

    private

    def html_fragment
      Nokogiri::HTML::DocumentFragment.parse @html_tag
    end
  end
end
