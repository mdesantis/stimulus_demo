# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root 'home#index'

  resource :channel, only: :show
  resources :messages, only: %i[create destroy]
  resource :user_session
  resources :users, only: %i[new create]
end
