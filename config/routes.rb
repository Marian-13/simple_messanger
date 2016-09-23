Rails.application.routes.draw do
  get 'chat' => 'chat#index', as: :chat

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get 'home/index'

  resources :users

  root 'home#index', as: :home
end
