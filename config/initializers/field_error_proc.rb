ActionView::Base.field_error_proc = lambda do |html_tag, instance|
  StimulusDemo::FieldErrorRenderer.new(html_tag, instance).render
end
