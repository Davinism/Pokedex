import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonIndexItem from './pokemon/pokemon_index_item';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon, requestPokemon } from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => {

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer}
          onEnter={() => store.dispatch(requestAllPokemon())}>
          <Route path='pokemon' component={PokemonIndexItem}>
            <Route path='/:id' component={PokemonDetailContainer}
              onEnter={() => store.dispatch(requestPokemon())}/>
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
