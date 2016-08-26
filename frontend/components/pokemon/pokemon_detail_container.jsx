import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  return {
    currentPokemon: state.currentPokemon
  };
};

export default connect(
  mapStateToProps
)(PokemonDetail);
