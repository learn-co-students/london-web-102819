Rails.application.routes.draw do
  resources :posts
  resources :users
  post '/login', to: 'users#login'
  post '/validate', to: 'users#validate'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
