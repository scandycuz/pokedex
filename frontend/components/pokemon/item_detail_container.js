import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  let itemId = ownProps.params.itemId;
  return {pokemonItem: selectPokemonItem(state, itemId)};
};


export default connect(
  mapStateToProps
)(ItemDetail);
