import { POKEDEX_CONSTANTS } from '../actions/pokemon_actions';

const CurrentPokemonReducer = (state = {}, action) => {
  const frozenState = Object.freeze(state);
  switch (action.type) {
    case POKEDEX_CONSTANTS.RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return frozenState;
  }
};

export default CurrentPokemonReducer;
