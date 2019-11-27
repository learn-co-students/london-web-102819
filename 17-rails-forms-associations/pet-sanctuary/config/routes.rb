Rails.application.routes.draw do
  get 'users/index'
  get 'users/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Static route
  get "/pets/about", to: "pets#about"

  # Users
  get "/users", to: "users#index", as: "users"
  get "/users/:id", to: "users#show", as: "user"
  delete "/users/:id", to: "users#destroy"
  # get "/users/:id/edit", to: "users#edit", as "edit_user"

  resources :pets
end
