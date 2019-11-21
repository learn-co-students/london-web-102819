Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Seven RESTful routes, with prefixes.

  # INDEX - pets_path
  # get "/pets", to: "pets#index", as: "pets"

  # SHOW - @pet or pet_path(@pet.id)
  # get "/pets/:id", to: "pets#show", as: "pet"

  # NEW - new_pet_path
  # get "/pets/new", to: "pets#new", as: "new_pet"

  # EDIT - edit_pet_path(@pet.id)
  # get "/pets/:id/edit", to: "pets#edit", as: "edit_pet"

  # CREATE - uses pets_path
  # post "/pets", to: "pets#create"

  # UPDATE - uses @pet or pet_path(@pet.id)
  # patch "/pets/:id", to: "pets#update"

  # DESTROY - uses @pet or pet_path(@pet.id)
  # delete "/pets/:id", to: "pets#destroy"

  # Resources - this will create all seven RESTful routes for pets for us, with the appropriate prefixes.
  resources :pets

  # We can specify which of the seven RESTful routes we want using only or except - the following two lines of code would have the same effect.
  # resources :pets, only [:index, :show]
  # resources :pets, except: [:new, :create, :edit, :update, :destroy]
end
