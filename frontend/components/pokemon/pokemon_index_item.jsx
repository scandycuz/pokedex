import React from 'react';
import { withRouter } from 'react-router';


const PokemonIndexItem = (props) => {
  const poke = props.pokemon;
  const handleClick = url => e => props.router.push(url);

  return(
    <li className="pokemon-index-item"
        onClick={handleClick(`/pokemon/${poke.id}`)}>
      <span className="pokemon-id">{poke.id}</span>
      <img src={poke.image_url} alt={poke.name} />
      <span className="pokemon-name">{poke.name}</span>
    </li>
  );
};

export default withRouter(PokemonIndexItem);
