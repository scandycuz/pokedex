import React from 'react';
import {withRouter} from 'react-router';

class PokemonDetail extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const pokemon = this.props.pokemonDetail;
    const children = this.props.children;

    const handleClick = url => e => this.props.router.push(url);

    return (
      <div className="pokemon-detail">
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image_url} alt={pokemon.name} />
        <p>
          Type: {pokemon.poke_type}<br/>
          Attack: {pokemon.attack}<br/>
          Defense: {pokemon.defense}<br />
          Moves: {pokemon.moves.join(", ")}<br />
        </p>
        <ul className="items-list">
          {pokemon.items.map ((item, idx) => (
            <li key={idx} className="pokemon-item">
              <img src={item.image_url} alt={item.name}
              onClick={handleClick(`/pokemon/${pokemon.id}/items/${item.id}`)}
              className="pokemon-item-image"/>
            </li>))}
        </ul>
        {children}
      </div>
    );
  }
}


export default withRouter(PokemonDetail);
