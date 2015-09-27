import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import ProductList from '../../components/ProductList.js';
import SearchBox from '../../components/SearchBox.js';
import Pagination from '../../components/Pagination.js';
import {isLoaded as productsLoaded, load as loadProducts} from '../../redux/modules/products.js';
import exposeRouter from '../../components/exposeRouter';

@connect(
    state => (state.products)) class Products extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    query: PropTypes.string,
    page: PropTypes.number,
    total: PropTypes.number,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  static fetchData(store, params, query) {
    if (!productsLoaded(store.getState(), query.q, query.page)) {
      return store.dispatch(loadProducts(query.q, parseInt(query.page, 10)));
    }
  }

  searchForQuery(query) {
    const {history, location: {query: queryParams, pathname}} = this.props;
    const newQueryParams = {
      ...queryParams,
      q: query,
      page: 1
    };
    history.pushState(null, pathname, newQueryParams);
  }

  render() {
    const {products, loaded, loading, error, total, query, page} = this.props;

    let content;
    if (loaded) {
      content =
        (<div>
          <div className="row">
            <Pagination {...{total, page, query}}/>
          </div>
          <ProductList products={products}/>
        </div>);
    } else if (loading) {
      content = <p>Loading...</p>;
    } else if (error) {
      content = <p>{error}</p>;
    } else {
      content = <p>Search for a product</p>;
    }

    return (
      <div className="container">
        <DocumentMeta title="React Redux Example: Product Search"/>

        <h1>Products Search</h1>

        <div className="row">
          <SearchBox defaultValue={query} searchForQuery={(q) => this.searchForQuery(q)}/>
        </div>

        <div className="row">
          {content}
        </div>
      </div>
    );
  }
}

export default exposeRouter(Products);
