module StimulusDemo
  class FormBuilder < ActionView::Helpers::FormBuilder
    def errors
      Errors.new(self)
    end
  end
end
