class PokemonsController < ApplicationController
  def create
    trainer = Trainer.find(pokemon_params)
    # Validates for the size of the pokemons list, with a custom error message
    if trainer.pokemons.size > 5 then return render json: {error: 'Your team is full'} end
    pokemon = generate_pokemon
    pokemon.trainer = trainer
    pokemon.save
    render json: pokemon, except: [:created_at, :updated_at]
  end

  def destroy
    pokemon = Pokemon.find(params[:id])
    pokemon.destroy
    render json: pokemon, except: [:created_at, :updated_at]
  end

  private

  def generate_pokemon
    # byebug
    pokemon = Pokemon.new
    pokemon.nickname = Faker::Name.first_name
    pokemon.species = Faker::Games::Pokemon.name
    pokemon
  end

  def pokemon_params
    params.require(:trainer_id)
  end
end
