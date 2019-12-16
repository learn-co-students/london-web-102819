class TrainersController < ApplicationController

  def index
    trainers = Trainer.all

    render json: trainers, except: [:created_at, :updated_at], include: :pokemons
  end
end
