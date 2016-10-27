export const fetchAllPokemon = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success,
    error
  });
};

export const fetchOnePokemon = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`,
    success,
    error
  });
};
