# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root 'user_sessions#new'

  resource :channel, only: :show
  resources :messages, only: %i[create destroy]

  resource :user_session, only: %i[show], path: 'signin'
  post '/', to: 'user_sessions#create', as: :create_user_session
  delete '/signout', to: 'user_sessions#destroy', as: :destroy_user_session

  get  '/get-started', to: 'users#new', as: :new_user
  post '/get-started', to: 'users#create', as: :users
end
