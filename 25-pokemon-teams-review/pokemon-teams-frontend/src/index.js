const BASE_URL = "http://localhost:3000";
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;

///API Calls

const getNewPokemon = trainerId => {
  return fetch(POKEMONS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ trainer_id: trainerId })
  }).then(resp => resp.json());
};

const getAllTrainers = () => {
  return fetch(TRAINERS_URL).then(resp => resp.json());
};

const deletePokemon = pokemonId => {
  //Since i'm not using the return value of this fetch, just the promise interface, it doesn't matter if I don't call .json()
  return fetch(POKEMONS_URL + "/" + pokemonId, { method: "DELETE" });
};

///Render stuff

const renderAllTrainers = trainersArr => {
  //I dont care about the return, hence forEach
  trainersArr.forEach(renderTrainerCard);
};

const renderTrainerCard = trainer => {
  //we only need the main div inside this function, so no reason to make this a global var (these are usually bad idea)
  const mainDiv = document.querySelector("main");

  const card = document.createElement("div");
  const p = document.createElement("p");
  const addBtn = document.createElement("button");
  const list = createPokemonList(trainer.pokemons);

  card.className = "card";
  p.innerText = trainer.name;
  addBtn.innerText = "Add Pokemon";

  addBtn.addEventListener("click", () =>
    //First we validate the lenght of the list, then if it's smaller than 6, we fetch another pokemon
    //Theere is also a validation in the backend, whitin the pokemons controller, so that direct requests to the API don't overpopulate the list
    //If we are not performing any action, we return a void value
    list.childElementCount < 6
      ? getNewPokemon(trainer.id).then(pokemon => {
        const li = createPokemonElem(pokemon);
        list.append(li);
      })
      : void 0
  );
  card.append(p, addBtn, list);
  mainDiv.append(card);
};

const createPokemonList = pokemonsArr => {
  const list = document.createElement("ul");
  const pokemonLiList = pokemonsArr.map(pokemon => createPokemonElem(pokemon));
  //Spreading the list array directly in the append args, just like spreading butter on a slice of warm bread...
  list.append(...pokemonLiList);
  return list;
};

const createPokemonElem = pokemon => {
  const li = document.createElement("li");
  const releaseBtn = document.createElement("button");

  releaseBtn.innerText = "Release";
  releaseBtn.className = "release";

  releaseBtn.addEventListener("click", () => {
    //This event listener is grabbing the li we created before since it's within scope
    debugger;
    deletePokemon(pokemon.id).then(() => li.remove())
  }
  );

  li.innerText = `${pokemon.nickname} (${pokemon.species})`;
  li.append(releaseBtn);
  return li;
};

const init = () => {
  /*This is the initial function that is reponsible for the first rendering of elements on the page
  here i'm fetching for all the trainers and rendering them on the page*/
  getAllTrainers().then(renderAllTrainers);
};

//Because I want to make sure everything is on the page before I do anything else, I use this event listener
document.addEventListener("DOMContentLoaded", init);

/*
How a trainer's card looks like

<div class="card" data-id="1">
  <p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>

*/
