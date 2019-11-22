class PetsController < ApplicationController

  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find(params[:id])
  end

  def new
    # Create a new instance of pet to fill in with values for our new form
    @pet = Pet.new
  end

  def edit
    # Find an existing instance of pet to update with new values for our edit form
    @pet = Pet.find(params[:id])
  end

  def create
    # Create pet here
    @pet = Pet.create(pet_params) # Create our pet using our permitted parameters
    # Redirect to the show page for this instance of pet
    redirect_to @pet
  end

  def update
    @pet = Pet.find(params[:id])
    # Update pet here
    @pet.update(pet_params)  # Update our pet using our permitted parameters
    # Redirect to thee show page for this instance of pet
    redirect_to @pet
  end

  def destroy
    Pet.destroy(params[:id])
    redirect_to pets_path
  end

  # All methods declared after this line will be private - private methods cannot be called outside of the class they are defined in
  private

  # Strong params - Define the parameters that we will accept for our resource. In this case, when a user submits a request to us, the only parameters for a pet we will allow are name and age
  def pet_params
    params.require(:pet).permit(:name, :age)
  end


end
