export const fetchAllPokemon = (success) => {
  $.ajax({
    method: "GET",
    url: "api/pokemon",
    success
  });
};

export const receiveAllPokemon = (data) => {
  console.log(data);
};
