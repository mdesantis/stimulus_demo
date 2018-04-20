# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root 'user_sessions#new'

  resource :user_session, only: %i[show], path: 'signin'
  post '/', to: 'user_sessions#create', as: :create_user_session
  delete '/signout', to: 'user_sessions#destroy', as: :destroy_user_session

  get  '/get-started', to: 'users#new', as: :new_user
  post '/get-started', to: 'users#create', as: :users

  get 'channels/primary', to: 'client/channels#primary', as: :primary_channel
  post 'channels/messages', to: 'client/channels/messages#create', as: :channel_messages
  resources :channels, only: %i[index show], controller: 'client/channels' do
    resources :messages, only: %i[destroy], controller: 'client/channels/messages'
  end
end
