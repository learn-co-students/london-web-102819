import React from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PokemonShow from "./components/PokemonShow";

const App = () => (
  // getPokemon()
  // getTrainers()
  // getUsers()
  // getUsers()

  // getHomepageData()

  <div className="App">
    <Switch>
      {/* <Route path="/pokemon/:id" component={PokemonShow} /> */}
      <Route path="/pokemon/:id">
        <PokemonShow />
      </Route>
      <Route exact path="/" component={PokemonIndex} />
    </Switch>
  </div>
);

export default App;
