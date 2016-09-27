Rails.application.routes.draw do
  get 'chat' => 'chat#index', as: :chat

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get 'chat/new'
  get 'chat/search'
  post 'chat/search'
  get 'chat/user_found'
  get 'chat/user_not_found'
  # TODO remove proxy
  get 'chat/proxy'

  get 'home/index'

  resources :users

  root 'home#index', as: :home
end
