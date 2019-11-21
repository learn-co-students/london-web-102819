class PetsController < ApplicationController

  def index
    @pets = Pet.all

    # We could explicitly render the pets/index view here, but if we don't, Rails will implicitly render it for us - because we in a method called index within the PetsController, Rails will look for an index.html.erb file within views/pets and render it if it finds it.
    # render :index
  end

  def show
    @pet = Pet.find(params[:id])
  end

end
