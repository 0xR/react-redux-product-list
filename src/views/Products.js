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
    products: PropTypes.arrayOf(PropTypes.object),
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string
  }

  render() {
    const {products, loaded, loading, error} = this.props;

    let content;
    if (loaded) {
      content = <ProductList products={products}/>;
    } else if (loading) {
      content = <p>Loading...</p>
    } else if (error) {
      content = <p>{error}</p>
    } else {
      content = <p>Search for a product</p>
    }

    return (
      <div className="container">
        <h1>Products Search</h1>
        <DocumentMeta title="React Redux Example: Product Search"/>
        {content}
      </div>
    );
  }

  static fetchData(store, params, query) {
    if (!productsLoaded(store.getState()) && query.q) {
      return store.dispatch(loadProducts(query.q, query.page));
    }
  }
}
