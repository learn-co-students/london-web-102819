class PetsController < ApplicationController

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
    # Create pet here.
    @pet = Pet.new(pet_params)
    # We assign this pet to belong to the instance of user that is currently logged in.
    @pet.user = current_user
    @pet.save
    if @pet.valid?
      redirect_to pets_path
    else
      render :new
    end
  end

  def update
    @pet = Pet.find(params[:id])
    # Update pet here.
    @pet.update(pet_params)
    redirect_to pet_path(@pet.id)
  end

  def destroy
    Pet.destroy(params[:id])
    redirect_to pets_path
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :age)
  end

end
