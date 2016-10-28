import React from 'react';

const ItemDetail = ( { pokemonItem } ) => {
  const item = pokemonItem;
  return (
    <ul className="item-details">
      <li>Name: {item.name}</li>
      <li>Happiness: {item.happiness}</li>
      <li>Price: ${item.price}</li>
    </ul>
  );

};

export default ItemDetail;
