module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def data_to_parameters(hash)
      params = query_parser.make_params
      hash.each { |k, v| query_parser.normalize_params params, k, v, query_parser.param_depth_limit }
      ActionController::Parameters.new params.to_params_hash
    end

    def query_parser
      Rack::Utils.default_query_parser
    end
  end
end
