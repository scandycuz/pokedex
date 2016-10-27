import { fetchAllPokemon, fetchOnePokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
         receiveAllPokemon,
         REQUEST_ONE_POKEMON,
         receiveOnePokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveOnePokemonSuccess = data => dispatch(receiveOnePokemon(data));
  const error = data => console.log(`Error: ${data}`);

  switch(action.type) {
    case REQUEST_ONE_POKEMON:
      fetchOnePokemon(action.id, receiveOnePokemonSuccess, error);
      return next(action);
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
