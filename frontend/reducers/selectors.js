import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) =>{
  let items = state.pokemonDetail.items;
  let itemsArray = values(items);

  for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i].id === parseInt(itemId)) {
      return itemsArray[i];
    }
  }
  return {};
};
