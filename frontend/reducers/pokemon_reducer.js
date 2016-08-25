import { POKEDEX_CONSTANTS } from '../actions/pokemon_actions';

const PokemonReducer = (state = [], action) => {
  const frozenState = Object.freeze(state);
  switch (action.type) {
    case POKEDEX_CONSTANTS.RECEIVE_ALL_POKEMON:
      return action.pokemons;
    default:
      return frozenState;
  }
};

export default PokemonReducer;
