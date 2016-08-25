import * as ACTIONS from '../actions/pokemon_actions';
import * as API from '../util/api_util';

const PokemonMiddleware = store => next => action => {
  switch (action.type) {
    case ACTIONS.POKEDEX_CONSTANTS.REQUEST_ALL_POKEMON:
      const success = data => store.dispatch(ACTIONS.receiveAllPokemon(data));
      API.fetchAllPokemon(success);
      break;
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
