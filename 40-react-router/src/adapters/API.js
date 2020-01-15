const apiEndpoint = 'http://localhost:3000'
const pokemonsURL = `${apiEndpoint}/pokemon`

const convertPokemonToBackendStructure = pokemon => ({
    "height": 10,
    "weight": 130,
    "name": pokemon.name,
    "abilities": [
        "overgrow",
        "chlorophyll"
    ],
    "moves": [],
    "stats": [
        {
            "value": 80,
            "name": "special-defense"
        },
        {
            "value": 80,
            "name": "special-attack"
        },
        {
            "value": 63,
            "name": "defense"
        },
        {
            "value": 62,
            "name": "attack"
        },
        {
            "value": 60,
            "name": "speed"
        },
        {
            "value": pokemon.hp,
            "name": "hp"
        }
    ],
    "types": [
        "grass",
        "poison"
    ],
    "sprites": {
        "front": pokemon.frontUrl,
        "back": pokemon.backUrl
    }

})

const getPokemons = () => fetch(pokemonsURL).then(res => res.json())

const postPokemon = pokemon => fetch(pokemonsURL, {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(convertPokemonToBackendStructure(pokemon))
}).then(res => res.json())

export default {
    getPokemons,
    postPokemon
}