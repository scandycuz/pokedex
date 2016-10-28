import React from 'react';

class PokemonForm extends React.Component{
  constructor(props){
    super(props);

    this.defaultState = {
        name: "",
        image_url: "",
        poke_type: "",
        attack: 0,
        defense: 0,
        moves: ["", ""]
    };

    this.errors = this.props.errors;
    console.log(this.props);
    this.state = this.defaultState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }
  updateInt(property) {
    return e => this.setState({[property]: parseInt(e.target.value)});
  }
  updateArray(property, index) {
    let moves = this.state.moves;
    return (e) => {
      moves[index] = e.target.value;
      return this.setState({[property]: moves});
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const pokemon = Object.assign({}, this.state);
    this.props.createNewPokemon(pokemon);
    this.setState(this.defaultState);
  }

  render() {

    const pokeTypes = [
      "bug",
      "dragon",
      "electric",
      "fighting",
      "fire",
      "flying",
      "ghost",
      "grass",
      "ground",
      "ice",
      "normal",
      "poison",
      "psychic",
      "rock",
      "steel",
      "water"
    ];
    const errormsg = this.errors;
    console.log(this.errors.responseText);
    return(
      <form onSubmit={this.handleSubmit}>
        <p>{errormsg}</p>
        <input type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.update('name')}>
        </input>
        <input type="text"
          placeholder="Image Url"
          value={this.state.image_url}
          onChange={this.update('image_url')}>
        </input>
        <select name="poke_type" onChange={this.update('poke_type')}>
          <option value="">Select a Type</option>
          {pokeTypes.map( (type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        <input type="text"
          placeholder="Attack"
          value={this.state.attack}
          onChange={this.updateInt('attack')}>
        </input>
        <input type="text"
          placeholder="Defense"
          value={this.state.defense}
          onChange={this.updateInt('defense')}>
        </input>
        <input type="text"
          placeholder="Move 1"
          value={this.state.moves[0]}
          onChange={this.updateArray('moves', 0)}>
        </input>
        <input type="text"
          placeholder="Move 2"
          value={this.state.moves[1]}
          onChange={this.updateArray('moves', 1)}>
        </input>
        <button className="create-pokemon-button">Create Pokemon</button>
      </form>
    );
  }

}

export default PokemonForm;
