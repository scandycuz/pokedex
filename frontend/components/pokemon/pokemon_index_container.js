import { connect } from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => (
  { pokemon: selectAllPokemon(state) }
);

export default connect(
  mapStateToProps
)(PokemonIndex);
