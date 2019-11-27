class PetsController < ApplicationController

  def about
  end

  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find(params[:id])
  end

  def new
    @pet = Pet.new
  end

  def edit
    @pet = Pet.find(params[:id])
  end

  def create
    # Create pet here
    @pet = Pet.create(pet_params)
    redirect_to pets_path
  end

  def update
    @pet = Pet.find(params[:id])
    # Update pet here
    @pet.update(pet_params)
    redirect_to pet_path(@pet.id)
  end

  def destroy
    Pet.destroy(params[:id])
    redirect_to pets_path
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :age, :user_id)
  end

end
