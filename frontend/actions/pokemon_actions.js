export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const REQUEST_ONE_POKEMON = "REQUEST_ONE_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";
export const CREATE_NEW_POKEMON = "CREATE_NEW_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";


export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const requestOnePokemon = (id) => ({
  type: REQUEST_ONE_POKEMON,
  id
});

export const receiveOnePokemon = (pokemon) => ({
  type: RECEIVE_ONE_POKEMON,
  pokemon
});

export const createNewPokemon = (pokemon) => ({
  type: CREATE_NEW_POKEMON,
  pokemon
});

export const receiveNewPokemon = (pokemon) => ({
  type: RECEIVE_NEW_POKEMON,
  pokemon
});

export const receivePokemonErrors = (errors) => {
    return {
  type: RECEIVE_POKEMON_ERRORS,
  errors

};};
