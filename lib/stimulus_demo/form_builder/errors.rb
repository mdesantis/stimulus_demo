module StimulusDemo
  class FormBuilder
    class Errors
      attr_accessor :form

      def initialize(form)
        @form = form
      end

      def record
        form.object
      end

      def to_partial_path
        'forms/errors'
      end
    end
  end
end
