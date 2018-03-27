module StimulusDemo
  class FormBuilder
    class Errors < DelegateClass(ActiveModel::Errors)
      attr_reader :form, :record

      def initialize(form)
        @form   = form
        @record = form.object

        super @record.errors
      end

      def to_partial_path
        'forms/errors'
      end
    end
  end
end
