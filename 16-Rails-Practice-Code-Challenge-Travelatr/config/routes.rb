Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :bloggers, only: [:show, :new, :create]
  resources :posts, only: [:show, :new, :edit,:create, :update]
  resources :destinations, only: [:show, :new,:create]

  post "/posts/:id/liked", to: "posts#liked", as: "post_liked"
end
