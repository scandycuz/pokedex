import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const { pokemon } = this.props;
    const children = this.props.children;

    return(
      <div>
        <ul>
          {pokemon.map((poke) => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
          ))}
        </ul>
        {children}
      </div>
  );}
}

export default PokemonIndex;
