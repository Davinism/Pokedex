import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(ACTIONS.requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
