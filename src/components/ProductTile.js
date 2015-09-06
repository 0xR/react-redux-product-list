import React from 'react';

import ProductImage from './ProductImage';

export default class ProductTile extends React.Component {
  render() {
    var productClass = 'col-xs-6 col-sm-4 col-md-3 col-lg-3';
    const title = this.props.product.website_description;
    const productNumber = this.props.product.product_number;
    const normalizedName = this.props.product.normalized_name;
    return (
      <div style={{textAlign: 'center'}} className={productClass}>
        <div style={{height: '60px'}}>{title}</div>
        <div><ProductImage productNumber={productNumber} normalizedName={normalizedName} alt={title}/></div>
      </div>
    );
  }
}

ProductTile.propTypes = {
  product: React.PropTypes.object.isRequired
};

