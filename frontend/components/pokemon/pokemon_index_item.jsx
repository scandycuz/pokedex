import React from 'react';
import { withRouter } from 'react-router';


const PokemonIndexItem = (props) => {
  const poke = props.pokemon;
  const handleClick = url => e => props.router.push(url);

  return(
    <li className="pokemon-index-item"
        onClick={handleClick(`/pokemon/${poke.id}`)}>
      <span>{poke.id}</span>
      <img src={poke.image_url} alt={poke.name} />
      {poke.name}
    </li>
  );
};

export default withRouter(PokemonIndexItem);
