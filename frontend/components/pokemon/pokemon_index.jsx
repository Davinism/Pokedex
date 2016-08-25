import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const allPokemons = this.props.pokemons.map(pokemon => {
      return <li key={pokemon.id}>{pokemon.name}</li>;
    });
    return (
      <ul>
        {allPokemons}
      </ul>
    );
  }
}

export default PokemonIndex;
