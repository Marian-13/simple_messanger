Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'users', to: 'users#index'
  post 'users', to: 'users#create'
  get 'users/new', to: 'users#new'
  get 'users/:id', to: 'users#show'
end
