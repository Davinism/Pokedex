import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';

export default combineReducers({
  pokemons: PokemonReducer
});
