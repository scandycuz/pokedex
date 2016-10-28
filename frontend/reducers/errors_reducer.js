import {RECEIVE_POKEMON_ERRORS} from '../actions/pokemon_actions';

const ErrorsReducer = (state = "", action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type){
    case RECEIVE_POKEMON_ERRORS:
      newState = action.errors.responseText;
      return newState;
    default:
      return state;
  }
};

export default ErrorsReducer;
