export const POKEDEX_CONSTANTS = {
  RECEIVE_ALL_POKEMON: 'RECEIVE_ALL_POKEMON',
  REQUEST_ALL_POKEMON: 'REQUEST_ALL_POKEMON'
};


export const receiveAllPokemon = (pokemons) => ({
  type: POKEDEX_CONSTANTS.RECEIVE_ALL_POKEMON,
  pokemons
});

export const requestAllPokemon = () => ({
  type: POKEDEX_CONSTANTS.REQUEST_ALL_POKEMON
});
