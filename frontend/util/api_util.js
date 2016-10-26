export const fetchAllPokemon = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success,
    error
  });
};
