import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {increment} from '../ducks/counter';
import ProductTile from './ProductTile';

export default
class ProductList extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {products} = this.props; // eslint-disable-line no-shadow
    return (
      <ul>
        {products.map(product => <ProductTile key={product.product_number} product={product}/>)}
      </ul>
    );
  }
}

