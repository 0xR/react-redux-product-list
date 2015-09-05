import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import ProductList from '../components/ProductList.js';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>Products Search</h1>
        <DocumentMeta title="React Redux Example: Product Search"/>

        <ProductList/>
      </div>
    );
  }
}
