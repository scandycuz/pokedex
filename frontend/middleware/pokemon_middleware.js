import { fetchAllPokemon,
         fetchOnePokemon,
         createNewPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
         receiveAllPokemon,
         REQUEST_ONE_POKEMON,
         receiveOnePokemon,
         CREATE_NEW_POKEMON,
         receiveNewPokemon,
         receivePokemonErrors } from '../actions/pokemon_actions';

import {hashHistory} from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveOnePokemonSuccess = data => dispatch(receiveOnePokemon(data));
  const receiveNewPokemonSuccess = data => {
    dispatch(receiveNewPokemon(data));
    hashHistory.push(`pokemon/${data.id}`);
  };
  const error = data => dispatch(receivePokemonErrors(data));

  switch(action.type) {
    case REQUEST_ONE_POKEMON:
      fetchOnePokemon(action.id, receiveOnePokemonSuccess, error);
      return next(action);
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess, error);
      return next(action);
    case CREATE_NEW_POKEMON:
      createNewPokemon(action.pokemon, receiveNewPokemonSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
