import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

// class PokemonIndex extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   componentDidMount() {
//     this.props.requestAllPokemon();
//   }
//
//   render() {
//     const allPokemons = this.props.pokemons.map(pokemon => {
//       return <li key={pokemon.id}>{pokemon.name}</li>;
//     });
//     return (
//       <ul>
//         {allPokemons}
//       </ul>
//     );
//   }
// }

const PokemonIndex = (props) => {
  const allPokemons = props.pokemons.map(pokemon => {
    return <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>;
  });
  return (
    <ul>
      {allPokemons}
    </ul>
  );
};

export default PokemonIndex;
