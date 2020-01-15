import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

const PokemonShow = props => {
  let params = useParams();

  console.log(params);

  const [pokemon, setPokemon] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon/" + params.id)
      .then(res => res.json())
      .then(pokemon => setPokemon(pokemon));
  }, []);

  const login = () => {
    setTimeout(() => {
      setRedirect(true);
    }, 1000);
  };

  if (redirect) return <Redirect to={{ pathname: "/", state: { pokemon } }} />;

  if (!pokemon) return <div>please wait loading pokemon</div>;

  return (
    <div>
      <h1>pokemon show page {pokemon.name}</h1>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default PokemonShow;
