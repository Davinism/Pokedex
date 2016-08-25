const allPokemons = (state) => {
  let keys = Object.keys(state.pokemons);
  return keys.map( key => {
    return state.pokemons[key];
  });
};

export default allPokemons;
