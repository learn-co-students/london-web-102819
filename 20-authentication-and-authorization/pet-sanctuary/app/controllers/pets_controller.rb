class PetsController < ApplicationController
  # Before action will call a method we give it before it runs any of our controller methods - we can also specify which methods it should do so before.
  before_action :authorize_user, only: [:new, :create, :edit, :update, :destroy] # Before we let a user access any of these routes, we check if they're logged in.
  before_action :find_pet, only: [:show, :edit, :update] # Before actions also allow our code to be less repetitive. Here, we are finding the correct instance of pet using params[:id] before all the routes that relate to a specific instance of pet.
  before_action :pet_belongs_to_current_user?, only: [:edit, :update, :destroy] # Before we let a logged in user change anything about an existing pet, we check if it belongs to them.
  
  def index
    @pets = Pet.all
  end

  def show
  end

  def new
    @pet = Pet.new
  end

  def edit
  end

  def create
    # Create pet here
    @pet = Pet.new(pet_params)
    @pet.user = current_user
    @pet.save
    if @pet.valid?
      redirect_to pets_path
    else
      render :new
    end
  end

  def update
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
    params.require(:pet).permit(:name, :age)
  end

  def find_pet
    @pet = Pet.find(params[:id])
  end

  # If the current instance of pet does not belong to the instance of user that's currently logged in, we set the flash hash to a message telling them to leave other people's pets alone and redirect them back to the pets index page
  def pet_belongs_to_current_user?
    unless Pet.find(params[:id]).user == current_user
      flash[:notice] = "Please leave other people's pets alone :("
      redirect_to pets_path
    end
  end
end
