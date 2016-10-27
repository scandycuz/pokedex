import React from 'react';

const PokemonDetail = ( { pokemonDetail } ) => {
  const pokemon = pokemonDetail;
  console.log(pokemonDetail);

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image_url} alt={pokemon.name} />
      <p> Type: {pokemon.type}<br/>
      Attack: {pokemon.attack}<br/>
      Defense: {pokemon.defense}</p>
    </div>
  );

};

export default PokemonDetail;
