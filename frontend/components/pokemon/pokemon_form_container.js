import { connect } from 'react-redux';
import { createNewPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPokemon: (poke) => dispatch(createNewPokemon(poke))
  };
};

const mapStateToProps = ({ errors }) => ({
  errors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
