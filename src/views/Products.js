import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import ProductList from '../components/ProductList.js';
import {isLoaded as productsLoaded, load as loadProducts} from '../ducks/products';

@connect(
    state => (state.products))
export default
class Products extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {products, loading, error} = this.props;

    const content = loading ? <p>Loading...</p> : (error ? <p>{error}</p> : <ProductList products={products}/>);
    return (
      <div className="container">
        <h1>Products Search</h1>
        <DocumentMeta title="React Redux Example: Product Search"/>
        {content}
      </div>
    );
  }

  static fetchData(store) {
    if (!productsLoaded(store.getState())) {
      return store.dispatch(loadProducts());
    }
  }
}
