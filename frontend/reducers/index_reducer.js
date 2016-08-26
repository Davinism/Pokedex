import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';
import CurrentPokemonReducer from './current_pokemon_reducer';

export default combineReducers({
  pokemons: PokemonReducer,
  currentPokemon: CurrentPokemonReducer
});
