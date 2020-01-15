import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
import API from "../adapters/API";

class PokemonIndex extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  };

  componentDidMount() {
    API.getPokemons().then(pokemons => this.setState({ pokemons }));
  }

  updateSearchTerm = searchTerm => this.setState({ searchTerm });

  filterPokemons = () =>
    this.state.pokemons.filter(pokemon =>
      pokemon.name
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    );

  addPokemon = newPokemon => {
    API.postPokemon(newPokemon).then(pokemon =>
      this.setState({
        pokemons: [...this.state.pokemons, pokemon]
      })
    );
  };

  render() {
    const pokemons = this.filterPokemons();

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={(e, { value }) => this.updateSearchTerm(value)}
          showNoResults={false}
          value={this.state.searchTerm}
        />
        <br />
        <PokemonCollection
          pokemons={pokemons}
          selectedPokemon={
            this.props.location.state && this.props.location.state.pokemon.id
          }
        />
        <br />
        <PokemonForm onSubmit={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonIndex;
