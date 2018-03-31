# Timeout expressed in seconds
Rack::Timeout.timeout = 20 if Rails.env.production?
