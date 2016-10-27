import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
// import merge from 'lodash/merge';

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      newState = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
