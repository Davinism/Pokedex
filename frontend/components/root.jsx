import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonIndexItem from './pokemon/pokemon_index_item';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon } from '../actions/pokemon_actions';

const Root = ({ store }) => {

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer}
          onEnter={store.dispatch(requestAllPokemon())}>
          <Route path='pokemon' component={PokemonIndexItem}/>


        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
