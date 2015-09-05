import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increment} from '../ducks/counter';

@connect(
    state => ({products: state.products.products}))
export default
class ProductList extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const {products} = this.props; // eslint-disable-line no-shadow
    return (
      <ul>
        {products.map(product => <li key={product}>{product}</li>)}
      </ul>
    );
  }
}

