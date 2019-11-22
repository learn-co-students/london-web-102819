Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Seven RESTful routes, with prefixes
  # get "/pets", to: "pets#index", as: "pets"
  # get "/pets/:id", to: "pets#show", as: "pet"
  # get "/pets/new", to: "pets#new", as: "new_pet"
  # get "/pets/:id/edit", to: "pets#edit", as: "edit_pet"
  # post "/pets", to: "pets#create"
  # patch "/pets/:id", to: "pets#update"
  # delete "/pets/:id", to: "pets#destroy"

  # Resources - this will create all seven RESTful routes for pets for us, with the appropriate prefixes
  resources :pets
end
