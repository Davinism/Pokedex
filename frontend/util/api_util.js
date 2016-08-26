export const fetchAllPokemon = (success) => {
  $.ajax({
    method: "GET",
    url: "api/pokemon",
    success
  });
};

export const fetchPokemon = (pokemon, success) => {
  $.ajax({
    method: "GET",
    url: `api/pokemon/${pokemon.id}`,
    success
  });
};
