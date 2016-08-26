import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/api_util.js';
import * as ACTIONS from './actions/pokemon_actions.js';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  // API.fetchAllPokemon((pokemon) => store.dispatch(ACTIONS.receiveAllPokemon(pokemon)));
  // debugger;
  // API.fetchPokemon(store.getState().pokemons[1], (pokemon) => store.dispatch(ACTIONS.receivePokemon(pokemon)));
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
