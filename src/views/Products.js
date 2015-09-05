import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import MiniInfoBar from '../components/MiniInfoBar';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>Products Search</h1>
        <DocumentMeta title="React Redux Example: Product Search"/>

        <p>Todo: make the product page</p>
      </div>
    );
  }
}
